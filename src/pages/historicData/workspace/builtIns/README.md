# Built-in Workspaces

This directory contains built-in workspace definitions that are loaded automatically when the application starts.

## Purpose

Built-in workspaces provide:
- Pre-configured chart layouts for common use cases
- Templates that users can reference and customize
- Consistent starting points across different sites

## File Format

Each built-in workspace is defined in a JSON file with the following structure:

```json
{
  "version": "1.0",
  "id": "ws-builtin-unique-id",
  "name": "Display Name",
  "type": "builtin",
  "data": {
    "charts": [
      {
        "id": "chart-0",
        "row": 0,
        "col": 0,
        "selectedPoints": {
          "40101:pPvTotal": ["first"],
          "40101:pGridImpTot": ["first"]
        }
      }
    ],
    "rowHeights": { "0": 520 },
    "columnWidths": { "0": 780 },
    "nextChartId": 1,
    "activeChartId": "chart-0"
  }
}
```

## Inverter Selection Keywords

The `selectedPoints` field uses **keywords** instead of specific serial numbers to make workspaces portable across different sites. Valid keywords are:

- **`"first"`** - Shows the first inverter in the list
- **`"primary"`** - Shows the inverter marked with `isPrimary: true`
- **`"all"`** - Shows all available inverters

### Example:

```json
"selectedPoints": {
  "40101:pPvTotal": ["first"],
  "40101:pGridImpTot": ["all"],
  "40101:socBat": ["primary"]
}
```

This configuration will:
- Show PV Total for the first inverter only
- Show Grid Import for all inverters
- Show Battery SOC for the primary inverter only

## Creating New Built-in Workspaces

### Option 1: Design in UI and Export

1. Create and configure a workspace in the application
2. Ensure all selectedPoints use valid keywords (first/primary/all)
3. Export the workspace using the File menu
4. Copy the exported JSON file to this directory
5. Update the `id` to start with `ws-builtin-`
6. Update the `type` to `"builtin"`
7. Remove any site-specific data

### Option 2: Write JSON Directly

1. Create a new `.json` file in this directory
2. Follow the format shown above
3. Ensure all `selectedPoints` use keywords, not serial numbers
4. Use a unique ID starting with `ws-builtin-`

## Validation

When saving or exporting a workspace, the system validates that:
- All `selectedPoints` use valid keywords (first/primary/all)
- If you've selected an arbitrary combination of inverters that doesn't map to these keywords, you'll receive an error message

This ensures that exported workspaces can be used as built-ins.

## Loading Built-ins

Built-in workspaces are automatically loaded by the mock API on initialization. In production, these should be:
1. Stored in the database
2. Associated with each user account on creation
3. Marked as read-only (users can duplicate but not modify)

## User Settings

Note that the `isDefault` flag is NOT stored in workspace files - it's a per-user setting stored separately in user preferences. This allows different users to have different default workspaces.
