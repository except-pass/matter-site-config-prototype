# Theme JSON Transforms

This directory contains TypeScript scripts to apply cosmetic transformations to the generated theme JSON files.

## Scripts

### `applyTransforms.ts`

Applies comprehensive transformations to points in the theme JSON. Can modify:
- Point titles
- Point help text
- Entry names
- Entry descriptions

**Usage:**
```bash
# Transform a file (overwrites by default)
npx tsx src/transforms/applyTransforms.ts src/themes/demo.json

# Transform and save to a different file
npx tsx src/transforms/applyTransforms.ts src/themes/demo.json src/themes/demo-transformed.json
```

**Adding New Transformations:**

Edit `pointTransforms.ts` and add entries to the `pointTransforms` array:

```typescript
export const pointTransforms: PointTransform[] = [
  {
    uuid: "BatteryBase.ChaDisChaCtrlType",  // Target point by UUID
    title: "Battery Control Type",           // Change the point title
    help: "Detailed help text here...",      // Add/modify help text
    entries: {                               // Modify individual entries
      ChargeCtrlType: {
        name: "Charge Control",              // Change entry name
        description: "How charging is controlled",
      },
      DisChargeCtrlType: {
        name: "Discharge Control",
      },
    },
  },
];
```

## Workflow

### Option 1: All-in-one (Recommended)

Use the combined script to generate and transform in one step:

```bash
npx tsx src/transforms/generateAndTransform.ts Envy_48V_Matter_V2.1.6_Doc.xlsx src/themes/demo.json
```

Then build and run:
```bash
npm run dev
```

### Option 2: Step-by-step

1. Generate the base theme JSON:
   ```bash
   npx tsx generatePointTheme.ts Envy_48V_Matter_V2.1.6_Doc.xlsx > src/themes/demo.json
   ```

2. Apply transformations:
   ```bash
   npx tsx src/transforms/applyTransforms.ts src/themes/demo.json
   ```

3. Build and run the frontend:
   ```bash
   npm run dev
   ```

## Creating New Transforms

To add a new type of transformation:

1. Create a new file like `yourTransform.ts`
2. Export transformation functions
3. Use node-jq for complex JSON queries if needed
4. Follow the pattern from `applyTitleTransforms.ts`

Example structure:
```typescript
import jq from "node-jq";

export async function yourTransform(data: any): Promise<any> {
  // Use jq for complex queries
  const result = await jq.run('.themes[] | select(.themeName == "Battery")', data);

  // Apply your transformations
  // ...

  return transformedData;
}
```
