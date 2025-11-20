import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface ThemeData {
  themes: Array<{
    themeName: string;
    theme_id?: string;
    sections: Array<{
      sectionTitle: string;
      section_id?: string;
      subsections: Array<{
        title: string | null;
        visibility: 'default' | 'advanced';
        collapsedByDefault?: boolean;
        points: any[];
        subsection_id?: string;
      }>;
    }>;
  }>;
}

/**
 * Split demo_rebuilt.json into envy_themes.json and matter_themes.json
 * 
 * - envy_themes.json: Contains subsections with title: "Advanced" or visibility: "advanced"
 * - matter_themes.json: Contains all other subsections
 */
function splitThemeFile(): void {
  const inputPath = path.resolve(__dirname, '../themes/demo_rebuilt.json');
  const envyOutputPath = path.resolve(__dirname, '../themes/envy_themes.json');
  const matterOutputPath = path.resolve(__dirname, '../themes/matter_themes.json');

  console.log('Reading demo_rebuilt.json...');
  const inputData: ThemeData = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  const envyThemes: ThemeData = { themes: [] };
  const matterThemes: ThemeData = { themes: [] };

  inputData.themes.forEach((theme) => {
    const envyTheme = {
      ...theme,
      sections: [] as any[],
    };
    const matterTheme = {
      ...theme,
      sections: [] as any[],
    };

    theme.sections.forEach((section) => {
      const envySubsections: any[] = [];
      const matterSubsections: any[] = [];

      section.subsections.forEach((subsection) => {
        // Check if this is an advanced subsection
        const isAdvanced =
          subsection.title === 'Advanced' || subsection.visibility === 'advanced';

        if (isAdvanced) {
          envySubsections.push(subsection);
        } else {
          matterSubsections.push(subsection);
        }
      });

      // Only add sections that have subsections
      if (envySubsections.length > 0) {
        envyTheme.sections.push({
          ...section,
          subsections: envySubsections,
        });
      }

      if (matterSubsections.length > 0) {
        matterTheme.sections.push({
          ...section,
          subsections: matterSubsections,
        });
      }
    });

    // Only add themes that have sections
    if (envyTheme.sections.length > 0) {
      envyThemes.themes.push(envyTheme);
    }

    if (matterTheme.sections.length > 0) {
      matterThemes.themes.push(matterTheme);
    }
  });

  // Write output files
  console.log('Writing envy_themes.json...');
  fs.writeFileSync(
    envyOutputPath,
    JSON.stringify(envyThemes, null, 2),
    'utf-8'
  );

  console.log('Writing matter_themes.json...');
  fs.writeFileSync(
    matterOutputPath,
    JSON.stringify(matterThemes, null, 2),
    'utf-8'
  );

  // Print statistics
  function countSubsections(themes: ThemeData): number {
    let count = 0;
    themes.themes.forEach((theme) => {
      theme.sections.forEach((section) => {
        count += section.subsections.length;
      });
    });
    return count;
  }

  function countPoints(themes: ThemeData): number {
    let count = 0;
    themes.themes.forEach((theme) => {
      theme.sections.forEach((section) => {
        section.subsections.forEach((subsection) => {
          count += subsection.points.length;
        });
      });
    });
    return count;
  }

  const inputSubsections = countSubsections(inputData);
  const inputPoints = countPoints(inputData);
  const envySubsections = countSubsections(envyThemes);
  const envyPoints = countPoints(envyThemes);
  const matterSubsections = countSubsections(matterThemes);
  const matterPoints = countPoints(matterThemes);

  console.log('\n=== Split Statistics ===');
  console.log('Original demo_rebuilt.json:');
  console.log(`  Themes: ${inputData.themes.length}`);
  console.log(`  Subsections: ${inputSubsections}`);
  console.log(`  Points: ${inputPoints}`);
  console.log('\nenvy_themes.json (Advanced subsections):');
  console.log(`  Themes: ${envyThemes.themes.length}`);
  console.log(`  Subsections: ${envySubsections}`);
  console.log(`  Points: ${envyPoints}`);
  console.log('\nmatter_themes.json (Default subsections):');
  console.log(`  Themes: ${matterThemes.themes.length}`);
  console.log(`  Subsections: ${matterSubsections}`);
  console.log(`  Points: ${matterPoints}`);
  console.log('\nVerification:');
  console.log(
    `  Subsections match: ${
      inputSubsections === envySubsections + matterSubsections
    }`
  );
  console.log(
    `  Points match: ${inputPoints === envyPoints + matterPoints}`
  );

  if (
    inputSubsections === envySubsections + matterSubsections &&
    inputPoints === envyPoints + matterPoints
  ) {
    console.log('\n✓ Split completed successfully!');
  } else {
    console.error('\n✗ Error: Counts do not match!');
    process.exit(1);
  }
}

// Run the split
splitThemeFile();

