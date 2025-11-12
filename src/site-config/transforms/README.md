# Theme JSON Transforms

This directory contains TypeScript scripts to apply cosmetic transformations to the generated theme JSON files.

## `rebuildFromHierarchy.ts` - The Build Script

Rebuilds `demo.json` from `hierarchy.yaml` + `points.csv`:

```bash
npx tsx src/site-config/transforms/rebuildFromHierarchy.ts
```

This generates `src/themes/demo_rebuilt.json`.  `rebuildFromHierarchy.ts` expects files in `src/site-config/definitions/commands/`:
- `hierarchy.yaml` - UI structure and presentation
- `matter.xlsx` - Protocol data (with a sheet named `matter`)
- `envy_specific.yaml` (optional) - Envy-specific points

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

## Data File Structure

The project uses a **two-file approach** for easier maintenance:

### 1. points.csv (Edited by non-developers in Excel)
One line per entry containing all point metadata:
- `point_uuid` - Unique identifier for the point
- Point metadata: `point_title`, `point_help`, `point_element_type`, `point_access`, `point_readOnly`, etc.
- `entries` - All entries as a JSON array

**No ui organization** (theme/section/subsection) stored here - that's defined in `hierarchy.yaml`

### 2. hierarchy.yaml (Edited by developers)
Defines the structure, ordering, and display properties:
```yaml
themes:
  - name: Inverter
    sections:
      - name: Basic Setup
        subsections:
          - points:
              - Basic.SystemTime
              - Basic.OperatingMode
              # ... more points in order
      - name: Power Limits
        subsections:
          - collapsedByDefault: true
            points:
              - LimitActivePower.LimitActivePowerStatus
              # ...
```

**Key Benefits:**
- **Rename themes/sections**: Only update `hierarchy.yaml`
- **Reorder**: Just rearrange items in `hierarchy.yaml`
- **Move points**: Just move the command_id in `hierarchy.yaml`
- **Non-devs edit content**: Work in Excel on `points.csv` without touching structure
- **Devs control structure**: Maintain `hierarchy.yaml` with clean YAML syntax
- **Clean separation**: Point data and hierarchy are completely independent

