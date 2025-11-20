# Matter Site Config Prototype

A dual-purpose web application for managing energy storage systems that combines **device configuration** and **telemetry visualization** into a unified interface.

## What This Application Does

This prototype provides two integrated views:

1. **Site Configuration** - A theme-based UI for reading and writing device settings (Matter/Modbus protocols)
2. **Historical Data** - A flexible charting interface for visualizing time-series telemetry data

Both views share common infrastructure including equipment mapping, gateway status tracking, and a mock API layer designed for easy migration to production.

---

## Quick Start

```bash
# Install dependencies
npm install

# Rebuild configuration from source files
npm run rebuild:config

# Start development server
npm run dev
```

The application will open at `http://localhost:5173` with two navigation options:
- ⚙️ **Site Config** - Configure device settings
- 📊 **Historical Data** - View telemetry charts

---

## Architecture Overview

### Application Structure

```
App.tsx (Main Router)
├── Site Config View
│   └── SiteConfigApp.tsx
│       ├── Equipment selector
│       ├── Theme navigation
│       └── Point cards (read/write)
└── Historical Data View
    └── HistoricalDataApp.tsx
        ├── Chart grid
        ├── Label filtering
        └── Time-series visualization
```

### Core Infrastructure

Both pages share these foundational services:

- **Mock API Layer** (`src/api/mockApi.ts`) - Protocol-aware endpoints for site config, point values, and gateway status
- **Equipment Mapping** (`useEquipmentMappings`) - Links equipment serial numbers to their gateways
- **Gateway Status** (`useGatewayStatus`) - Tracks device online/offline state
- **Theme Management** - Hierarchical organization of configuration points

---

## Page 1: Site Configuration

### Overview

The Site Configuration page provides a theme-driven interface for managing device settings. Configuration points are organized hierarchically into **themes** → **sections** → **subsections** → **points**, mirroring how users think about equipment setup.

### Key Features

#### 1. Theme-Based Navigation
- **Sticky sidebar** with equipment selector and section navigation
- **Scroll-linked table of contents** highlights active section as you scroll
- **Collapsible subsections** with progressive disclosure (advanced settings hidden by default)

#### 2. Equipment Management
- **Equipment selector dropdown** switches between different devices
- Each equipment preset bundles:
  - Matter Thing ID (Type, Mn, Md, SN)
  - Modbus Slave ID
  - Gateway mapping information
- **Gateway status indicator** shows online/offline state in header

#### 3. Search with Context
- **Full-text search** across point titles, help text, and entry labels
- **Auto-expand matching subsections** to reveal search results
- **Context highlighting** shows why a point matched

#### 4. Point Cards (Command Façade Pattern)

Each configuration point is rendered as a card with:

- **Title & Help Icon** - Click for detailed modal with descriptions
- **Read-only Badge** - Protocol-level or UI-override read-only enforcement
- **Reload Control** - Fetch latest value from device
- **Form Inputs** - Adaptive widgets based on data type:
  - **Enums** → Dropdowns or radio buttons
  - **Numbers** → Text inputs with range validation
  - **Bitfields** → Checkbox groups
  - **Dates/Times** → DateTime pickers
  - **Ranges** → Dual-handle sliders with constraints
- **Set/Invoke Buttons** - Send command to device (with preview modal)

#### 5. Advanced Widgets

- **DateTimeWidget** - Date and time picker for system time
- **TimeRangeWidget** - Start/end time selector with visual timeline
- **MultiTimeRangeWidget** - Multiple time windows (e.g., peak shaving schedules)
- **DualHandleSlider** - Two-handle slider enforcing `less_than`/`greater_than` constraints (e.g., SOC ranges)
- **GeneratorExerciseWidget** - Generator scheduling with day-of-month and time-of-day
- **ULComplianceReportWidget** - Specialized compliance reporting

#### 6. Protocol-Aware Payloads

The application automatically generates the correct protocol payload based on point type:

- **Matter Write** - For Matter attributes (`access: "RW"`)
- **Matter Invoke** - For Matter services (`element_type: "service"`)
- **Modbus Read/Write** - For points with Modbus protocol config
- **CGI Requests** - For CGI-based custom commands

Scale factors are automatically applied for Modbus points to convert between display values (decimals) and wire values (integers).

#### 7. Telemetry Integration

- **Pre-population from telemetry** - Most points have a corresponding telemetry point (typically in the "04" model, e.g., 40104 for inverters)
- **Telemetry History Modal** - View historical values from database
- **Last Updated Timestamp** - Shows when values were last fetched

### Layout Components

**Sidebar** (`Sidebar.tsx`):
- Equipment selector dropdown
- Theme/section navigation tree
- Scroll-linked highlighting

**Header** (`Header.tsx`):
- Search box
- Last updated timestamp
- Refresh button (reloads all values)
- Gateway status indicator

**MainContent** (`MainContent.tsx`):
- Renders themes with sections and subsections
- Applies visibility rules (advanced/collapsed)
- Handles search filtering

### Data Flow

```
User selects equipment
        ↓
fetchSiteConfig(equipment)
        ↓
Returns PageDef[] (themes structure)
        ↓
fetchPointValues(equipment, pointIds)
        ↓
Returns Record<pointId, PointValue>
        ↓
Render PointCards with current values
        ↓
User edits and clicks "Set"
        ↓
sendCGICommandToGateway(payload)
        ↓
Success/Error response
```

---

## Page 2: Historical Data

### Overview

The Historical Data page provides a flexible charting interface for visualizing time-series telemetry data from inverters. Users can create custom chart layouts, apply multi-dimensional filters, and explore data at different detail levels.

### Key Features

#### 1. Dynamic Chart Grid

- **Resizable grid layout** - Drag corner/edge handles to resize chart cells
- **Row/column dividers** - Split charts horizontally or vertically
- **Add/remove charts** - Click `+` buttons on dividers to add new charts
- **Default preconfigured charts** - Starts with sensible defaults
- **Drag-and-drop** - Future support for reordering charts

#### 2. Advanced Label Filtering

Data is organized using **label families** (hierarchical dimensions):

**Label Families**:
- **Equipment** - Specific inverter serial number
- **Component** - Battery, Inverter, PV, Grid, Load, etc.
- **Type of Data** - Voltage, Current, Power, Energy, SOC, Temperature, etc.
- **Unit** - kW, V, A, %, °C, etc.
- **Measurement Type** - Phase (A/B/C/N), Port (1/2/3), direction, etc.
- **Detail Level** - Standard, Extended, Complete

**Filter Modes**:
1. **Sequential Mode** - Filters unlock step-by-step as you make selections (guided workflow)
2. **Freeform Mode** - Select any filters in any order (power users)

**Hierarchy Configuration**:
- **Customize grouping order** - Choose which label families to use and in what order
- **Examples**:
  - `Equipment → Component → Type of Data → Unit`
  - `Component → Type of Data → Equipment → Unit`
  - `Type of Data → Component → Equipment`

#### 3. Detail Level Control

Slider control filters telemetry points by detail level:

- **Standard** - Core metrics (power, SOC, voltage, current)
- **Extended** - Additional operational data (temperatures, frequencies)
- **Complete** - All available telemetry including diagnostic data

#### 4. Chart Visualization

**LineChartPreview** - SVG-based line charts with:
- Smooth time-series rendering
- Color-coded series (consistent with label colors)
- Legend with visibility toggles
- Crosshair tracking on hover
- Automatic Y-axis scaling

**CategoricalChart** - For non-numeric data:
- State changes over time
- Discrete value visualization

**Chart Controls**:
- **Title editing** - Click to rename charts
- **Legend toggles** - Show/hide individual series
- **Remove button** - Delete chart from grid

#### 5. Inverter Selection

- **Multi-select dropdown** - Choose which inverters to display
- **Equipment filtering** - Filter data to specific equipment
- Predefined equipment list: `envy-04237218B0`, `envy-04237219C3`

#### 6. Search Functionality

- **Full-text search** across telemetry point titles, descriptions, and help text
- **Context-aware matching** - Searches within current filter selection
- **Auto-expand groups** - Matching label groups expand automatically

### UI Components

**ChartGrid** (`ChartGrid.tsx`):
- Grid layout management
- Row/column/corner divider handles
- Add chart functionality

**FakeChart** (`FakeChart.tsx`):
- Individual chart rendering
- Title editing
- Legend management
- Chart type selection (line/categorical)

**LabelFilter** (`LabelFilter.tsx`):
- Multi-level label filtering
- Sequential vs. freeform mode toggle
- Label family grouping

**PreferencesModal** (`PreferencesModal.tsx`):
- Hierarchy configuration
- Filter structure customization
- Sort order preferences

**HelpModals**:
- **ChartTutorialModal** - Overview of chart features
- **FilterHelpModal** - Explains filter modes
- **LabelHelpModal** - Describes label families
- **GroupByHelpModal** - How hierarchy configuration works

### Data Sources

Historical data is loaded from YAML files:

- **`ss40k_inverter.yaml`** - Inverter telemetry points (40104 model)
- **`lifecycle_events.yaml`** - Lifecycle events
- **`label_help.yaml`** - Help text for label families

Each telemetry point includes:
```yaml
title: "Battery Voltage"
help: "Current battery voltage in volts"
labels:
  component: Battery
  type: Voltage
  unit: V
  detail_level: Standard
```

### Data Flow

```
Load telemetry YAML files
        ↓
Parse into TelemetryPoint[]
        ↓
Apply label filters (Equipment, Component, Type of Data, etc.)
        ↓
Apply detail level filter (Standard/Extended/Complete)
        ↓
Apply search filter
        ↓
Render filtered points in charts
        ↓
User toggles series visibility
        ↓
Re-render charts with updated visibility
```

---

## Data Sources & Configuration Files

### The Three-File Approach (Site Config)

Configuration for the Site Config page is built from three source files:

#### 1. `matter.csv` - Protocol Data (Matter Points)

**Purpose**: Single source of truth for Matter protocol definitions.

**Format**: CSV with one row per entry, point-level fields only in first row.

**Key Columns**:
- **Point-level**: `command_id`, `title`, `help`, `element_type`, `access`, `MEP`, `Cluster`, `Element`
- **Entry-level**: `arg`, `name`, `dtype`, `unit`, `range_min`, `range_max`, `meanings`, `friendly_meanings`

**Entry-Level Field Definitions**:

- **`arg`** - Argument name in protocol payloads (e.g., `Year`, `SOC`, `Mode`). Used as the key when sending/receiving data. Must be unique within a point.

- **`name`** - Display label shown in UI (e.g., "Year", "State of Charge", "Operating Mode"). Human-readable field name.

- **`dtype`** - Data type:
  - `Number` - Numeric value (integer or decimal)
  - `Enum` - Enumeration (discrete set of values)
  - `String` - Text value

- **`unit`** - Unit of measurement (e.g., `V`, `kW`, `%`, `°C`). Displayed in UI but not sent in protocol.

- **`range_min` / `range_max`** - Minimum/maximum allowed values for `Number` dtype. Used for:
  - HTML input validation
  - Slider rendering
  - User input constraints

- **`less_than` / `greater_than`** - Constraint references to other entries' `arg` names. Enforces relational constraints (e.g., "Stop SOC must be greater than Start SOC"). Used for dual-handle sliders.

- **`meanings`** - Raw protocol enum values (e.g., `"Off-grid,Grid-tied"`). What actually gets sent to the device.

- **`friendly_meanings`** - User-friendly enum labels (e.g., `"Off-Grid. There is no available power grid,Grid-Tied. Grid power is available."`). Displayed in dropdowns instead of raw values.

**Telemetry Mapping**:
Almost every Matter point has a corresponding telemetry point (typically in the "04" model, e.g., 40104 for inverters). This linkage is documented in `matter.xlsx`. The UI reads telemetry to pre-populate values, reducing load time.

**Example**:
```csv
command_id,title,help,element_type,access,MEP,Cluster,Element,arg,name,dtype,unit,range_min,range_max
Basic.SystemTime,System Time,Set device date and time,attribute,RW,HybridInverter,Basic,SystemTime,Year,Year,Number,,0,99
,,,,,,,,Mon,Month,Number,,1,12
ACCharge.ACChgStartSOC,Grid Charge Start SOC,SOC at which grid charging starts,attribute,RW,HybridInverter,ACCharge,ACChgStartSOC,SOC,SOC,Number,%,0,100
```

#### 2. `hierarchy.yaml` - UI Structure & Presentation

**Purpose**: Defines how points are organized and displayed in the UI. All UI presentation concerns live here.

**Format**: YAML hierarchy: `themes` → `sections` → `subsections` → `points`

**Key Features**:
- **Ordering** - Controls display order at all levels
- **UI Overrides** - Per-point `widget`, `readOnly`, `invokeButtonText`, `showInvokeButton`
- **Visibility** - Mark subsections as `advanced` and `collapsedByDefault`
- **Combining Entries** - Merge entries from multiple points into one UI point (e.g., dual-handle sliders)
- **IDs** - Optional `theme_id`, `section_id`, `subsection_id` for cross-referencing

**Example**:
```yaml
themes:
  - name: Inverter
    theme_id: inverter
    sections:
      - name: Battery Management
        section_id: battery
        subsections:
          - name: Charging
            subsection_id: charging
            points:
              - command_id: Basic.SystemTime
                widget: datetime

              # Combine two points into one dual-handle slider
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

          - name: Advanced Settings
            advanced: true
            collapsedByDefault: true
            points:
              - ACCharge.ACChgPower
```

#### 3. `envy_specific.yaml` - Envy-Specific Points (Modbus/CGI)

**Purpose**: Defines points specific to Envy devices that use Modbus or CGI protocol instead of Matter.

**Format**: YAML array of complete point definitions.

**Key Features**:
- **Full point definitions** - Each point is self-contained
- **Modbus protocol** - Includes `address`, `register_type`, `size`, `scalefactor`
- **CGI protocol** - Uses `MEP`, `Cluster`, `Element` for CGI commands
- **Flexible placement** - Can reference existing hierarchy via IDs or create new structure
- **On-the-fly creation** - Can create new themes/sections/subsections

**Example**:
```yaml
points:
  - section_id: battery
    subsection_id: charging
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
        friendly_meanings:
          "0": "Smart meter connected via RS485"
          "1": "Current transformers on AC input"
    protocol:
      modbus:
        address: 1
        register_type: 3
        size: 1
```

### Build Process

#### `rebuildFromHierarchy.ts` - Configuration Builder

Combines all three source files into `demo_rebuilt.json`:

**Steps**:
1. Load `hierarchy.yaml` (UI structure)
2. Load `matter.csv` (protocol data)
3. Match points: For each point in hierarchy, find data in CSV
4. Apply UI overrides (widget types, readOnly flags)
5. Handle combined points (merge entries from multiple points)
6. Load `envy_specific.yaml` (Modbus/CGI points)
7. Create missing structure (if Envy points reference non-existent IDs)
8. Output `demo_rebuilt.json`

**Usage**:
```bash
npm run rebuild:config
# Runs: npx tsx src/transforms/rebuildFromHierarchy.ts
```

**Output**: `src/themes/demo_rebuilt.json`

**Data Flow**:
```
┌─────────────────┐
│   matter.csv    │  Protocol data (Matter)
└────────┬────────┘
         │
         │   ┌─────────────────┐
         │   │ hierarchy.yaml  │  UI structure
         │   └────────┬────────┘
         │            │
         │            │   ┌──────────────────────┐
         │            │   │ envy_specific.yaml   │  Envy points (Modbus/CGI)
         │            │   └──────────┬───────────┘
         │            │              │
         ▼            ▼              ▼
    ┌────────────────────────────────────┐
    │   rebuildFromHierarchy.ts          │
    │   (Merge & transform)              │
    └────────────────┬───────────────────┘
                     │
                     ▼
         ┌──────────────────────┐
         │  demo_rebuilt.json   │
         └──────────┬───────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │   mockApi.ts         │
         │   (API Layer)        │
         └──────────┬───────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │  SiteConfigApp.tsx   │
         │  (React Frontend)    │
         └──────────────────────┘
```

---

## API Layer

### Mock API Architecture

The application uses a **mock API layer** (`src/api/mockApi.ts`) designed to be easily replaced with real HTTP calls in production.

### API Endpoints

#### 1. `fetchSiteConfig(request: FetchSiteConfigRequest)`

Fetches configuration definitions (themes, sections, subsections, points).

**Request**:
```typescript
{
  thingId: { Type, Mn, Md, SN },
  modbusId?: number
}
```

**Response**:
```typescript
{
  pageDefs: PageDef[],
  lastModified: string,
  version: string
}
```

#### 2. `fetchPointValues(request: FetchPointValuesRequest)`

Bulk fetch of current point values.

**Request**:
```typescript
{
  thingId: { Type, Mn, Md, SN },
  modbusId?: number,
  pointIds: string[]
}
```

**Response**:
```typescript
Record<pointId, {
  entries: Record<arg, any>,
  status: "success" | "error",
  timestamp: string
}>
```

#### 3. `getGatewayStatus(request: GetGatewayStatusRequest)`

Checks if a gateway is online.

**Request**:
```typescript
{
  gatewaySn: string
}
```

**Response**:
```typescript
{
  isOnline: boolean,
  timestamp: string
}
```

#### 4. `getEquipmentsAtSite(request: GetEquipmentsAtSiteRequest)`

Maps equipment to their gateways.

**Request**:
```typescript
{
  siteId: number
}
```

**Response**:
```typescript
EquipmentMapEntry[] {
  gateway_sn: string,
  equipments: Equipment[]
}
```

#### 5. `sendCGICommandToGateway(request: SendCGICommandRequest)`

Sends commands to device (Matter write/invoke, Modbus read/write).

**Request**:
```typescript
{
  gatewaySn: string,
  payload: {
    protocol: "matter" | "modbus" | "cgi",
    action: "write" | "invoke" | "read",
    thingId?: { Type, Mn, Md, SN },
    modbusId?: number,
    data: { /* protocol-specific */ }
  }
}
```

**Response**:
```typescript
{
  success: boolean,
  message: string,
  data?: any
}
```

#### 6. `getPointThemes(request: GetPointThemesRequest)`

Fetches theme configuration for site.

**Request**:
```typescript
{
  siteId: number
}
```

**Response**:
```typescript
{
  themes: ThemeConfig[]
}
```

#### 7. `getPointValuesByPsn(request: GetPointValuesByPsnRequest)`

Gets point values by product serial number (queries telemetry).

**Request**:
```typescript
{
  psn: string,
  pointIds: string[]
}
```

**Response**:
```typescript
Record<pointId, PointValue>
```

### Theme Data Merging

The API merges two theme files:
- **`envy_themes.json`** - Envy-specific configuration
- **`matter_themes.json`** - Matter protocol configuration

This allows protocol-agnostic and protocol-specific configurations to coexist.

---

## Equipment Mapping

### Purpose

Links equipment (inverters, batteries) to their gateways for proper command routing and status queries.

### Implementation (`useEquipmentMappings` hook)

**Data Structure**:
```typescript
Equipment {
  id: string
  sn: string              // Serial number (e.g., "04237218B0")
  md: string              // Model code (e.g., "04")
  md_name: string         // Model name (e.g., "Hybrid Inverter")
  site_id: number
  is_primary: boolean
  product_type: string
  software_version: string
}

EquipmentMapEntry {
  gateway_sn: string
  equipments: Equipment[]
}
```

**Mapping Functions**:
- `getMapping(equipmentSn)` - Returns full equipment + gateway info
- `getGatewaySn(equipmentSn)` - Returns gateway serial number
- `isPrimary(equipmentSn)` - Checks if equipment is primary

**Data Flow**:
```
Equipment serial number
        ↓
getEquipmentsAtSite(siteId)
        ↓
Find gateway_sn for equipment
        ↓
getGatewayStatus(gateway_sn)
        ↓
Display online/offline status
```

### Gateway Status Integration

The `useGatewayStatus` hook:
- Tracks gateway online/offline state
- Auto-fetches when equipment changes
- Displays in header with timestamp
- Provides refresh capability

**Status Display**:
- 🟢 **Online** - Gateway is reachable
- 🔴 **Offline** - Gateway is not reachable
- **Last checked**: Timestamp of last status query

---

## Separation of Concerns

The architecture provides clear separation:

| Concern | File/Module | Editable By | Purpose |
|---------|-------------|-------------|---------|
| **Protocol Data** | `matter.csv` | Non-developers | Matter protocol definitions (Excel/Sheets) |
| **UI Structure** | `hierarchy.yaml` | Developers | UI organization and presentation (YAML) |
| **Envy-Specific** | `envy_specific.yaml` | Developers | Modbus/CGI points (YAML) |
| **Telemetry Schema** | `ss40k_inverter.yaml` | Developers | Telemetry point definitions (YAML) |
| **API Layer** | `mockApi.ts` | Developers | Data fetching and command sending (TypeScript) |
| **UI Components** | `src/pages/` | Developers | React components (TSX) |

**Benefits**:
- Non-developers can edit protocol data without touching code
- UI can be reorganized without changing protocol definitions
- Protocol changes don't require UI code changes
- Clear ownership and responsibility boundaries
- Easy to migrate from mock API to production API

---

## Development

### Project Structure

```
src/
├── api/
│   ├── mockApi.ts              # Mock API layer
│   └── types.ts                # API type definitions
├── pages/
│   ├── siteConfig/             # Site Configuration page
│   │   ├── SiteConfigApp.tsx
│   │   ├── components/
│   │   │   ├── layout/         # Sidebar, Header, MainContent
│   │   │   ├── blocks/         # ThemeBlock, SectionBlock, SubsectionBlock
│   │   │   ├── points/         # PointCard
│   │   │   ├── widgets/        # EntryField, DateTimeWidget, DualHandleSlider
│   │   │   └── modals/         # HelpModal, CommandPreviewModal, TelemetryHistoryModal
│   │   └── hooks/
│   └── historicData/           # Historical Data page
│       ├── HistoricalDataApp.tsx
│       ├── components/
│       │   ├── charts/         # ChartGrid, FakeChart, LineChartPreview
│       │   ├── filters/        # LabelFilter, DetailLevelSlider, HistorySearch
│       │   ├── ui/             # InverterSelector, HelpToggle, GridDividers
│       │   └── modals/         # ChartTutorialModal, PreferencesModal
│       └── utils/
├── hooks/
│   ├── useSiteConfigLoader.ts  # Load configuration
│   ├── useEquipmentMappings.ts # Equipment-to-gateway mapping
│   ├── useGatewayStatus.ts     # Gateway status tracking
│   └── usePointFormWithApi.ts  # Point value management
├── transforms/
│   └── rebuildFromHierarchy.ts # Build script
├── themes/
│   ├── demo_rebuilt.json       # Generated configuration
│   ├── envy_themes.json        # Envy-specific themes
│   └── matter_themes.json      # Matter themes
├── telemetry/
│   ├── ss40k_inverter.yaml     # Inverter telemetry schema
│   ├── lifecycle_events.yaml   # Event definitions
│   └── label_help.yaml         # Label help text
└── App.tsx                     # Main router
```

### Build Scripts

```bash
# Rebuild configuration from CSV/YAML
npm run rebuild:config

# Split theme files
npm run split:themes

# Convert telemetry formats
npm run convert:telemetry

# Development server
npm run dev

# Production build
npm run build
```

### Environment Variables

```bash
# Load specific theme file only (bypasses dropdown)
THEME_FILE=src/themes/demo_rebuilt.json npm run dev
```

### Key Technologies

- **React 18** - UI framework with hooks
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **YAML** - Configuration files (hierarchy, telemetry, envy-specific)
- **CSV** - Protocol data (matter.csv)
- **SVG** - Custom charts (line, categorical)

### Adding a New Configuration Point

1. **Add to `matter.csv`**:
   ```csv
   Basic.NewPoint,New Point,Description,attribute,RW,HybridInverter,Basic,NewPoint,Value,Value,Number,kW,0,100
   ```

2. **Add to `hierarchy.yaml`**:
   ```yaml
   - section_id: battery
     subsections:
       - points:
           - command_id: Basic.NewPoint
             widget: slider  # optional UI override
   ```

3. **Rebuild configuration**:
   ```bash
   npm run rebuild:config
   ```

4. **Refresh frontend** - The new point will appear in the UI

### Adding a New Modbus Point

1. **Add to `envy_specific.yaml`**:
   ```yaml
   - section_id: battery
     title: New Modbus Point
     command_id: Modbus.NewPoint
     element_type: custom
     access: RW
     entries:
       - name: Value
         arg: Value
         dtype: Number
         unit: kW
     protocol:
       modbus:
         address: 100
         register_type: 3
         size: 1
         scalefactor: 10  # divide by 10 when reading
   ```

2. **Rebuild configuration**:
   ```bash
   npm run rebuild:config
   ```

### Adding a New Telemetry Point

1. **Add to `ss40k_inverter.yaml`**:
   ```yaml
   - title: "New Telemetry Point"
     help: "Description of what this measures"
     labels:
       component: Battery
       type: Power
       unit: kW
       detail_level: Standard
   ```

2. **Restart dev server** - The point will appear in Historical Data filters

---

## Design Philosophy

### Three-File Approach (Site Config)
- **Protocol-focused** - `matter.csv` contains only firmware-level concerns
- **UI-focused** - `hierarchy.yaml` handles all presentation logic
- **Device-specific** - `envy_specific.yaml` for non-Matter protocols

### Mock API Layer
- **Easy migration** - Replace mock functions with real HTTP calls
- **Type safety** - Full TypeScript types for request/response
- **Protocol-aware** - Handles Matter, Modbus, and CGI protocols

### Component Architecture
- **Separation of concerns** - Layout, blocks, points, widgets are separate
- **Reusable widgets** - Shared components for common input patterns
- **Hook-based state** - Custom hooks for equipment, gateway status, search

### Label-Based Filtering (Historical Data)
- **Multi-dimensional** - Filter by equipment, component, type, unit, etc.
- **Hierarchical** - Configurable grouping order
- **Progressive disclosure** - Detail level controls complexity

---

## Future Enhancements

- **Real-time updates** - WebSocket integration for live telemetry
- **Undo/Redo** - Command history with rollback
- **Batch operations** - Apply changes to multiple points at once
- **Export/Import** - Save and restore configurations
- **User preferences** - Persist UI state (collapsed sections, chart layouts)
- **Multi-language support** - i18n for labels and help text
- **Production API** - Replace mock API with real backend
- **Authentication** - User login and role-based access control
- **Audit logging** - Track who changed what and when
