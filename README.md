# Matter Site Config Prototype

A configuration UI for managing Matter and Modbus device points through a hierarchical, theme-based interface.

## Architecture Overview

This project uses a **three-file approach** to separate protocol data from UI presentation concerns:

1. **`matter.csv`** - Protocol-level point definitions (Matter protocol)
2. **`hierarchy.yaml`** - UI structure, ordering, and presentation settings
3. **`envy_specific.yaml`** - Envy-specific points (Modbus/CGI protocol) that don't use Matter protocol

These files are combined by `rebuildFromHierarchy.ts` to generate `demo_rebuilt.json`, which the frontend consumes.

---

## Source Files

### `matter.csv` - Protocol Data (Matter Points)

**Purpose**: Defines the raw protocol-level data for Matter points. This is the single source of truth for what each point does at the firmware/protocol level.

**Format**: One row per entry, with point-level fields (`command_id`, `title`, `help`, etc.) only populated in the first row for each point.

**Key Columns**:
- `command_id` - Unique identifier (e.g., `Basic.SystemTime`)
- `title` - Display name
- `help` - Description text
- `element_type` - `attribute`, `service`, or `custom`
- `access` - `R`, `RW`, or `INVOKE`
- `MEP`, `Cluster`, `Element` - Matter protocol identifiers
- **Entry-level fields** (see below): `arg`, `name`, `dtype`, `unit`, `range_min/max`, `meanings`, `friendly_meanings`, etc.

**Entry-Level Fields**:

Each row in `matter.csv` represents one entry within a point. These fields define the data structure and behavior of individual entries:

- **`arg`** - Argument name used in protocol payloads (e.g., `Year`, `Mon`, `SOC`). Must be unique within a point. Used as the key when sending/receiving data.

- **`name`** - Display label shown in the UI (e.g., "Year", "Month", "State of Charge"). Human-readable name for the entry field.

- **`dtype`** - Data type. Values:
  - `Number` - Numeric value (integer or decimal)
  - `Enum` - Enumeration (discrete set of values)
  - `String` - Text value

- **`description`** - Short description/tooltip shown in the UI. Brief explanation of what this entry represents.

- **`longdescription`** - Extended description shown in help modals or detailed views. More comprehensive explanation than `description`.

- **`unit`** - Unit of measurement displayed after the value (e.g., `V`, `kW`, `%`, `°C`). Shown in the UI but not sent in protocol payloads.

- **`range_min`** - Minimum allowed value (for `Number` dtype). Used to:
  - Set HTML input `min` attribute
  - Render slider controls with range
  - Validate user input

- **`range_max`** - Maximum allowed value (for `Number` dtype). Used to:
  - Set HTML input `max` attribute
  - Render slider controls with range
  - Validate user input

- **`less_than`** - Constraint referencing another entry's `arg` name (e.g., `StopSOC`). Ensures this entry's value is less than the referenced entry's value. Used for dual-handle sliders and validation.

- **`greater_than`** - Constraint referencing another entry's `arg` name (e.g., `StartSOC`). Ensures this entry's value is greater than the referenced entry's value. Used for dual-handle sliders and validation.

- **`meanings`** - Enum value mappings (raw protocol values). Format: comma-separated labels (e.g., `"Off-grid,Grid-tied"`). This is what gets sent to/received from the device.

- **`friendly_meanings`** - User-friendly enum labels shown in the UI. Format: comma-separated labels (e.g., `"Off-Grid.  There is no available power grid,Grid-Tied. Grid power is available."`). These are displayed in dropdowns/radios instead of the raw `meanings` values.

**Example**:
```csv
command_id,title,help,element_type,access,MEP,Cluster,Element,arg,name,dtype,unit,range_min,range_max,meanings,friendly_meanings
Basic.SystemTime,System Time,Attribute in Basic cluster,attribute,RW,HybridInverter,Basic,SystemTime,Year,Year,Number,,0,99,,
,,,,,,,,Mon,Mon,Number,,,1,12,,
Basic.OperatingMode,Grid Interaction,Select grid mode,attribute,RW,HybridInverter,Basic,OperatingMode,Mode,Mode,enum,,,,,,"Off-grid,Grid-tied","Off-Grid.  There is no available power grid,Grid-Tied. Grid power is available."
```

**Design Philosophy**: 
- Protocol-focused: Contains only data that matters at the firmware/protocol level
- No UI concerns: Widget types, visibility, ordering, and read-only overrides are NOT here
- Easy to edit: Can be edited in Excel/Google Sheets by non-developers

---

### `hierarchy.yaml` - UI Structure & Presentation

**Purpose**: Defines how points are organized and displayed in the UI. This is where UI presentation concerns live.

**Format**: YAML structure mirroring the UI hierarchy: `themes` → `sections` → `subsections` → `points`

**Key Features**:
- **Ordering**: Controls the order of themes, sections, subsections, and points
- **UI Overrides**: Can specify `widget`, `readOnly`, `invokeButtonText`, `showInvokeButton` per point
- **Visibility**: Can mark subsections as `advanced` and `collapsedByDefault`
- **Combining Entries**: Can combine entries from multiple points into a single UI point (e.g., dual-handle sliders)
- **IDs**: Optional `theme_id`, `section_id`, `subsection_id` for referencing from `envy_specific.yaml`

**Example**:
```yaml
themes:
  - name: Inverter
    sections:
      - name: Basic Setup
        subsections:
          - points:
              - command_id: Basic.SystemTime
                widget: datetime
              - Basic.OperatingMode
              - command_id: Basic.PowerStatus
                readOnly: true
              - combine:
                  title: "Grid Charge SOC Range"
                  command_id: "ACCharge.ACChgSOCRange"
                  entries:
                    - point: ACCharge.ACChgStartSOC
                      entry: SOC
                      arg: StartSOC
                    - point: ACCharge.ACChgStopSOC
                      entry: SOC
                      arg: StopSOC
```

**Design Philosophy**:
- UI-focused: All presentation concerns live here
- Flexible: Can reorganize UI without touching protocol data
- Developer-friendly: Clean YAML syntax for version control

---

### `envy_specific.yaml` - Envy-Specific Points

**Purpose**: Defines points specific to Envy devices that use Modbus or CGI protocol instead of Matter. These are typically device-specific register mappings and custom functionality.

**Format**: YAML array of point definitions with full protocol and entry details.

**Key Features**:
- **Protocol**: Uses `modbus` or `cgi` protocol with `address`, `register_type`, `size` (for Modbus) or `MEP`, `Cluster`, `Element` (for CGI)
- **Placement**: Can reference existing sections/subsections via `section_id`/`subsection_id`, or create new ones
- **On-the-fly Creation**: Can create new themes, sections, and subsections that don't exist in `hierarchy.yaml`
- **Scale Factors**: Supports `scalefactor` for converting between display values and register values

**Example**:
```yaml
points:
  - section_id: measurement
    subsection_id: measurement-advanced
    visibility: advanced
    collapsedByDefault: true
    title: Meter Measurement Source
    command_id: Modbus.MeterType
    element_type: custom
    access: RW
    entries:
      - name: Meter Type
        arg: MeterType
        dtype: enum16
        meanings:
          "0": Meter
          "1": CTs
    protocol:
      modbus:
        address: 1
        register_type: 3
        size: 1
```

**Design Philosophy**:
- Complete definitions: Each point is fully self-contained
- Flexible placement: Can reference existing hierarchy or create new structure
- Protocol-specific: Contains Modbus/CGI register mappings that don't fit Matter protocol

---

## Build Process

### `rebuildFromHierarchy.ts` - The Build Script

This script combines all three source files into a single `demo_rebuilt.json` file:

1. **Loads `hierarchy.yaml`**: Parses the UI structure and point references
2. **Loads `matter.csv`**: Reads protocol data for Matter points
3. **Matches Points**: For each point in hierarchy, finds corresponding data in CSV
4. **Applies UI Overrides**: Applies widget types, readOnly flags, invokeButtonText from hierarchy
5. **Handles Combined Points**: Processes `combine` syntax to merge entries from multiple points
6. **Loads `envy_specific.yaml`**: Merges Envy-specific points into the structure
7. **Creates Missing Structure**: If Envy-specific points reference IDs that don't exist, creates new themes/sections/subsections
8. **Outputs `demo_rebuilt.json`**: Final JSON consumed by the frontend

**Usage**:
```bash
npx tsx src/transforms/rebuildFromHierarchy.ts
```

**Output**: `src/themes/demo_rebuilt.json`

---

## Frontend Consumption

### `App.tsx` - The React Application

The frontend loads and parses json file:

**Default Behavior**:
- Loads all JSON files from `src/themes/` directory
- Displays them in a dropdown selector
- Renders the selected theme's structure

**CLI Override**:
```bash
THEME_FILE=src/themes/demo_rebuilt.json npm run dev
```
- Loads only the specified JSON file
- Useful for testing specific configurations

**Data Flow**:
1. JSON is loaded (either via `import.meta.glob` or `fetch`)
2. Parsed into `PageDef` structure: `themes` → `sections` → `subsections` → `points`
3. Each point is rendered as a `PointCard` component
4. User interactions generate protocol-specific payloads (Matter or Modbus)

**Key Features**:
- **Protocol-Aware**: Automatically detects Matter vs Modbus and generates appropriate payloads
- **Widget Rendering**: Uses `widget` field to render specialized inputs (datetime, timerange, etc.)
- **Scale Factor Handling**: For Modbus points with `scale_factor`, converts between display values (decimals) and wire values (integers)
- **Read-Only Enforcement**: Respects protocol-level read-only (`access === "R"`) and UI overrides

---

## Data Flow Summary

```
┌─────────────────┐
│   matter.csv   │  Protocol data (Matter points)
└────────┬────────┘
         │
         │   ┌─────────────────┐
         │   │ hierarchy.yaml  │  UI structure & presentation
         │   └────────┬────────┘
         │            │
         │            │   ┌──────────────────────┐
         │            │   │ envy_specific.yaml│  Envy-specific points
         │            │   └──────────┬────────────┘
         │            │              │
         │            │              │
         ▼            ▼              ▼
    ┌─────────────────────────────────────┐
    │   rebuildFromHierarchy.ts          │
    │   (Build Script)                   │
    └────────────────┬────────────────────┘
                     │
                     ▼
         ┌──────────────────────┐
         │  demo_rebuilt.json   │
         └──────────┬───────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │     App.tsx          │
         │  (React Frontend)    │
         └──────────────────────┘
```

---

## Key UI Features

- **Theme-driven navigation**: Sticky left rail with equipment selector and scroll-linked table of contents
- **Equipment-aware routing**: Equipment presets bundle Matter thing IDs and Modbus slave IDs
- **Search with context**: Queries across titles, help text, entry labels; matching subsections auto-expand
- **Point cards as command façades**: Each card shows title, help icon, read-only badge, reload control, and Set/Invoke actions
- **Adaptive input widgets**: Bitfields → checkboxes, enums → dropdowns/radios, numbers → inputs with ranges
- **Multi-handle sliders**: For points with multiple ranged numbers, enforces constraints and provides color-coded sliders
- **Time-centric widgets**: Datetime pickers, time ranges, multi-window schedules, generator exercise scheduler
- **Protocol-aware payloads**: Generates Matter write/invoke, Modbus read/write, or CGI requests based on point protocol
- **Progressive disclosure**: Sections respect `collapsedByDefault` flags and expand on search hits

---

## Separation of Concerns

The three-file approach provides clear separation:

| Concern | File | Editable By |
|---------|------|-------------|
| **Protocol Data** | `matter.csv` | Non-developers (Excel/Sheets) |
| **UI Structure** | `hierarchy.yaml` | Developers (YAML) |
| **Envy-Specific Points** | `envy_specific.yaml` | Developers (YAML) |

**Benefits**:
- Non-developers can edit protocol data without touching UI code
- UI can be reorganized without changing protocol definitions
- Protocol changes don't require UI code changes
- Clear ownership and responsibility boundaries
