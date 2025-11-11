import fs from 'fs';
import * as yaml from 'yaml';
import XLSX from 'xlsx';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface ProtocolEntry {
  model?: string | number;
  block?: string;
  point?: string;
}

interface ValidationResult {
  isValid: boolean;
  missingModels: Set<string>;
  missingBlocks: Set<string>;
  missingPoints: Set<string>;
  invalidCombinations: Array<{ model: string; block: string; point: string; row: number }>;
}

function validateTelemetryReferences(): ValidationResult {
  // Load YAML file
  console.log('Loading ss40k_inverter.yaml...');
  const yamlPath = path.resolve(__dirname, 'src/definitions/telemetry/ss40k_inverter.yaml');
  const yamlContent = fs.readFileSync(yamlPath, 'utf8');
  const yamlData = yaml.parse(yamlContent);
  
  if (!yamlData.protocols || !Array.isArray(yamlData.protocols)) {
    throw new Error('YAML file must have a "protocols" array');
  }

  // Extract all valid models, blocks, and points from YAML
  const validModels = new Set<string>();
  const validBlocks = new Set<string>();
  const validPoints = new Set<string>();
  const validCombinations = new Set<string>(); // "model|block|point"

  for (const protocol of yamlData.protocols as ProtocolEntry[]) {
    const model = protocol.model ? String(protocol.model) : null;
    const block = protocol.block ? String(protocol.block) : null;
    const point = protocol.point ? String(protocol.point) : null;

    if (model) {
      validModels.add(model);
    }
    if (block) {
      validBlocks.add(block);
    }
    if (point) {
      validPoints.add(point);
    }
    
    // Store valid combinations
    if (model && block && point) {
      validCombinations.add(`${model}|${block}|${point}`);
    }
  }

  console.log(`Found ${validModels.size} unique models, ${validBlocks.size} unique blocks, ${validPoints.size} unique points`);
  console.log(`Found ${validCombinations.size} valid model|block|point combinations\n`);

  // Load Excel file
  console.log('Loading matter.xlsx...');
  const matterPath = path.resolve(__dirname, 'src/definitions/commands/matter.xlsx');
  const workbook = XLSX.readFile(matterPath);
  const matterSheet = workbook.Sheets['matter'];

  if (!matterSheet) {
    throw new Error('Sheet "matter" not found in matter.xlsx');
  }

  // Convert Excel sheet to JSON array
  const rows: any[] = XLSX.utils.sheet_to_json(matterSheet, {
    defval: '',
    raw: false,
  });

  console.log(`Found ${rows.length} rows in Excel file\n`);

  // Find telemetry columns
  const telemetryModelCol = 'telemetry_model';
  const telemetryBlockCol = 'telemetry_block';
  const telemetryPointCol = 'telemetry_point';

  // Validate references
  const missingModels = new Set<string>();
  const missingBlocks = new Set<string>();
  const missingPoints = new Set<string>();
  const invalidCombinations: Array<{ model: string; block: string; point: string; row: number }> = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowNum = i + 2; // +2 because Excel rows start at 1 and header is row 1

    const model = row[telemetryModelCol] ? String(row[telemetryModelCol]).trim() : '';
    const block = row[telemetryBlockCol] ? String(row[telemetryBlockCol]).trim() : '';
    const point = row[telemetryPointCol] ? String(row[telemetryPointCol]).trim() : '';

    // Skip rows where all telemetry fields are empty
    if (!model && !block && !point) {
      continue;
    }

    // Check individual fields
    if (model && !validModels.has(model)) {
      missingModels.add(model);
    }
    if (block && !validBlocks.has(block)) {
      missingBlocks.add(block);
    }
    if (point && !validPoints.has(point)) {
      missingPoints.add(point);
    }

    // Check if the combination exists (all three must be present)
    if (model && block && point) {
      const combination = `${model}|${block}|${point}`;
      if (!validCombinations.has(combination)) {
        invalidCombinations.push({ model, block, point, row: rowNum });
      }
    }
  }

  const isValid = missingModels.size === 0 && missingBlocks.size === 0 && 
                  missingPoints.size === 0 && invalidCombinations.length === 0;

  return {
    isValid,
    missingModels,
    missingBlocks,
    missingPoints,
    invalidCombinations,
  };
}

// Run validation
console.log('=== Telemetry Reference Validation ===\n');
try {
  const result = validateTelemetryReferences();

  console.log('\n=== Validation Results ===\n');

  if (result.isValid) {
    console.log('✅ All telemetry references are valid!');
    console.log('   - All models exist in YAML');
    console.log('   - All blocks exist in YAML');
    console.log('   - All points exist in YAML');
    console.log('   - All model|block|point combinations exist in YAML');
  } else {
    console.log('❌ Validation found issues:\n');

    if (result.missingModels.size > 0) {
      console.log(`Missing Models (${result.missingModels.size}):`);
      Array.from(result.missingModels).sort().forEach(model => {
        console.log(`   - "${model}"`);
      });
      console.log();
    }

    if (result.missingBlocks.size > 0) {
      console.log(`Missing Blocks (${result.missingBlocks.size}):`);
      Array.from(result.missingBlocks).sort().forEach(block => {
        console.log(`   - "${block}"`);
      });
      console.log();
    }

    if (result.missingPoints.size > 0) {
      console.log(`Missing Points (${result.missingPoints.size}):`);
      Array.from(result.missingPoints).sort().forEach(point => {
        console.log(`   - "${point}"`);
      });
      console.log();
    }

    if (result.invalidCombinations.length > 0) {
      console.log(`Invalid Combinations (${result.invalidCombinations.length}):`);
      console.log('   (These combinations of model|block|point do not exist in YAML)');
      result.invalidCombinations.forEach(({ model, block, point, row }) => {
        console.log(`   - Row ${row}: model="${model}", block="${block}", point="${point}"`);
      });
      console.log();
    }
  }

  process.exit(result.isValid ? 0 : 1);
} catch (error) {
  console.error('Error during validation:', error);
  process.exit(1);
}

