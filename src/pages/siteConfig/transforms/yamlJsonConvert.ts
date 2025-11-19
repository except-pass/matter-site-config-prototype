import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');
const defaultInput = path.resolve(repoRoot, 'src/definitions/telemetry/ss40k_inverter.yaml');

const [inputArg, outputArg] = process.argv.slice(2);
const inputPath = path.resolve(process.cwd(), inputArg ?? defaultInput);

const outputPath = path.resolve(
  process.cwd(),
  outputArg ?? deriveDefaultOutput(inputPath)
);

function deriveDefaultOutput(input: string): string {
  if (/\.ya?ml$/i.test(input)) {
    return input.replace(/\.ya?ml$/i, '.json');
  }
  if (/\.json$/i.test(input)) {
    return input.replace(/\.json$/i, '.yaml');
  }
  throw new Error('Input file must be .yaml/.yml or .json');
}

async function convert(): Promise<void> {
  const raw = await readFile(inputPath, 'utf8');

  if (/\.ya?ml$/i.test(inputPath)) {
    const parsed = YAML.parse(raw);
    const jsonOutput = `${JSON.stringify(parsed, null, 2)}\n`;
    await writeFile(outputPath, jsonOutput, 'utf8');
    console.log('Converted YAML → JSON');
  } else if (/\.json$/i.test(inputPath)) {
    const parsed = JSON.parse(raw);
    const yamlOutput = YAML.stringify(parsed);
    await writeFile(outputPath, yamlOutput, 'utf8');
    console.log('Converted JSON → YAML');
  } else {
    throw new Error('Input file must have a .yaml/.yml or .json extension');
  }

  console.log(`  input : ${inputPath}`);
  console.log(`  output: ${outputPath}`);
}

convert().catch((error) => {
  console.error('Failed to convert file');
  console.error(error);
  process.exitCode = 1;
});
