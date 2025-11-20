# Site Config API Refactor

## Overview

This document describes the refactoring of the site configuration page to separate data that would come from an API into mock API endpoints. The refactor pulls out:

1. **Site configuration definitions** - The schema defining commands, their structure, protocols, etc.
2. **Point values** - Current values of configuration points when the page loads or refreshes

All API functions have clearly defined request/response formats and are implemented as functions for this prototype, but are designed to be easily replaced with actual HTTP calls in production.

## Architecture Changes

### Before

```
JSON Files (themes/*.json)
  ↓
Direct File Import (Vite import.meta.glob)
  ↓
useThemeLoader Hook
  ↓
SiteConfigApp Component
  ↓
buildInitialPointState (generates default values)
  ↓
PointCard Component
```

### After

```
Mock API Layer (src/api/)
  ↓
useSiteConfigLoader Hook (loads config definitions)
  ↓
SiteConfigApp Component
  ↓
usePointFormWithApi Hook (loads point values)
  ↓
PointCard Component
```

## New File Structure

```
src/
├── api/
│   ├── index.ts              # Central export point for all API functionality
│   ├── types.ts              # API request/response type definitions
│   └── mockApi.ts            # Mock API implementation
├── hooks/
│   ├── useSiteConfigLoader.ts       # Hook to load site config from API
│   └── usePointFormWithApi.ts       # Enhanced hook with API integration
└── [existing files...]
```

## API Types and Contracts

### 1. Site Configuration API

#### `fetchSiteConfig(request: FetchSiteConfigRequest): Promise<FetchSiteConfigResponse>`

Fetches the site configuration definitions (commands, their structure, protocols, etc.).

**Request:**
```typescript
interface FetchSiteConfigRequest {
  pageId?: string;        // Optional: fetch specific page
  equipmentId?: string;   // Optional: filter for specific equipment
}
```

**Response:**
```typescript
interface FetchSiteConfigResponse {
  pages: PageDef[];           // List of available pages
  lastModified: string;       // ISO timestamp
  version: string;            // Configuration version
}
```

**Example:**
```typescript
const config = await fetchSiteConfig({ equipmentId: 'inverter-1' });
console.log(config.pages[0].themes); // Access themes
```

---

### 2. Point Values API

#### `fetchPointValues(request: FetchPointValuesRequest): Promise<FetchPointValuesResponse>`

Fetches current values for multiple points at once (bulk read).

**Request:**
```typescript
interface FetchPointValuesRequest {
  pointIds?: string[];     // Optional: specific points to fetch
  equipmentId: string;     // Required: which device to read from
  pageId?: string;         // Optional: limit scope to specific page
}
```

**Response:**
```typescript
interface FetchPointValuesResponse {
  values: Record<string, PointValue>;  // Map of pointId -> value
  timestamp: string;                   // ISO timestamp of read
}

interface PointValue {
  pointId: string;
  entries: Record<string, EntryValue>;  // Map of arg -> value
  lastRead: string;                     // ISO timestamp
  success: boolean;
  error?: string;
}
```

**Example:**
```typescript
const values = await fetchPointValues({
  equipmentId: 'inverter-1',
  pointIds: ['system-time', 'power-limit']
});
```

---

### 3. Read Point API

#### `readPoint(request: ReadPointRequest): Promise<ReadPointResponse>`

Reads a specific point's current value from the device.

**Request:**
```typescript
interface ReadPointRequest {
  pointId: string;         // Required: point to read
  equipmentId: string;     // Required: device to read from
  entryArgs?: string[];    // Optional: specific entries to read
}
```

**Response:**
```typescript
interface ReadPointResponse {
  value: PointValue;       // Current value
  payload?: any;           // Protocol payload (for debugging)
}
```

**Example:**
```typescript
const result = await readPoint({
  pointId: 'system-time',
  equipmentId: 'inverter-1'
});
console.log(result.value.entries); // { Year: 25, Mon: 11, Day: 20, ... }
```

---

### 4. Write Point API

#### `writePoint(request: WritePointRequest): Promise<WritePointResponse>`

Writes values to a specific point on the device.

**Request:**
```typescript
interface WritePointRequest {
  pointId: string;                      // Required: point to write
  equipmentId: string;                  // Required: device to write to
  values: Record<string, EntryValue>;   // Map of arg -> value to write
}
```

**Response:**
```typescript
interface WritePointResponse {
  success: boolean;
  error?: string;
  payload?: any;           // Protocol payload (for debugging)
  timestamp: string;       // ISO timestamp of write
  newValue?: PointValue;   // New value after write (if read-back supported)
}
```

**Example:**
```typescript
const result = await writePoint({
  pointId: 'system-time',
  equipmentId: 'inverter-1',
  values: {
    Year: 25,
    Mon: 11,
    Day: 20,
    Hour: 14,
    Min: 30,
    Sec: 0
  }
});
console.log(result.success); // true
```

---

### 5. Invoke Command API

#### `invokeCommand(request: InvokeCommandRequest): Promise<InvokeCommandResponse>`

Invokes a service/command on the device (for service-type points).

**Request:**
```typescript
interface InvokeCommandRequest {
  pointId: string;                          // Required: command to invoke
  equipmentId: string;                      // Required: device to invoke on
  parameters?: Record<string, EntryValue>;  // Optional: command parameters
}
```

**Response:**
```typescript
interface InvokeCommandResponse {
  success: boolean;
  error?: string;
  payload?: any;           // Protocol payload (for debugging)
  timestamp: string;       // ISO timestamp of invocation
  result?: any;            // Optional: result returned by command
}
```

**Example:**
```typescript
const result = await invokeCommand({
  pointId: 'reboot-system',
  equipmentId: 'inverter-1',
  parameters: { delay: 5 }
});
```

---

### 6. Batch Operations

#### `batchRead(request: BatchReadRequest): Promise<BatchReadResponse>`

Reads multiple points in a single operation.

**Request:**
```typescript
interface BatchReadRequest {
  pointIds: string[];      // Required: list of points to read
  equipmentId: string;     // Required: device to read from
}
```

**Response:**
```typescript
interface BatchReadResponse {
  values: Record<string, PointValue>;
  success: boolean;        // Overall success (true if all succeeded)
  successCount: number;
  failureCount: number;
}
```

---

#### `batchWrite(request: BatchWriteRequest): Promise<BatchWriteResponse>`

Writes to multiple points in a single operation.

**Request:**
```typescript
interface BatchWriteRequest {
  writes: Array<{
    pointId: string;
    values: Record<string, EntryValue>;
  }>;
  equipmentId: string;
}
```

**Response:**
```typescript
interface BatchWriteResponse {
  results: Record<string, WritePointResponse>;
  success: boolean;        // Overall success (true if all succeeded)
  successCount: number;
  failureCount: number;
}
```

---

## Usage Examples

### Loading Site Configuration

```typescript
import { useSiteConfigLoader } from './hooks/useSiteConfigLoader';

function MyComponent() {
  const {
    pageRegistry,
    pageLookup,
    isLoading,
    loadError,
    configVersion,
    lastModified
  } = useSiteConfigLoader('inverter-1');

  if (isLoading) return <div>Loading...</div>;
  if (loadError) return <div>Error: {loadError}</div>;

  return <div>Loaded {pageRegistry.length} pages</div>;
}
```

### Using Point Form with API

```typescript
import { usePointFormWithApi } from './hooks/usePointFormWithApi';

function PointCard({ point, equipment }) {
  const {
    formState,
    handleFieldChange,
    handleRefresh,
    handleSet,
    handleInvoke,
    isLoading,
    error,
    lastRead
  } = usePointFormWithApi(point, equipment);

  const onRefresh = async () => {
    const result = await handleRefresh();
    if (result.success) {
      console.log('Refreshed successfully');
    }
  };

  const onSet = async () => {
    const result = await handleSet();
    if (result.success) {
      console.log('Set successfully');
    }
  };

  return (
    <div>
      {isLoading && <Spinner />}
      {error && <div>Error: {error}</div>}
      {/* Render form fields */}
    </div>
  );
}
```

### Direct API Calls

```typescript
import { readPoint, writePoint, fetchSiteConfig } from './api';

// Load configuration
const config = await fetchSiteConfig({ equipmentId: 'inv-1' });

// Read a point
const current = await readPoint({
  pointId: 'power-limit',
  equipmentId: 'inv-1'
});

// Write a point
await writePoint({
  pointId: 'power-limit',
  equipmentId: 'inv-1',
  values: { Limit: 5000 }
});
```

## Mock API Implementation Details

### Data Storage

The mock API uses an in-memory `Map` to store point values:

```typescript
const mockPointValues: Map<string, PointValue> = new Map();
```

### Value Generation

Initial values are generated intelligently based on entry types:

- **Number entries**: Uses range information and constraints
  - For time fields (Year, Mon, Day, etc.): Uses current date/time
  - For constrained fields: Uses 30% or 70% of range based on constraints
  - For unconstrained fields: Uses middle of range

- **Enum entries**: Uses first friendly meaning value

- **Bitfield entries**: Initializes with random values for demo

- **String entries**: Uses sensible defaults (e.g., "Inverter 1" for name fields)

### Simulated Network Delay

All API functions include a simulated 100ms delay to mimic real network behavior:

```typescript
const NETWORK_DELAY = 100;
await delay(NETWORK_DELAY);
```

This can be adjusted for testing different scenarios.

## Migration from Static Data

### Old Approach
```typescript
// Loaded theme files directly
const pageModules = import.meta.glob("./themes/*.json", {
  eager: true,
  import: "default"
});

// Generated default values locally
const formState = buildInitialPointState(point);
```

### New Approach
```typescript
// Load configuration from API
const config = await fetchSiteConfig({ equipmentId });

// Fetch actual values from device
const values = await fetchPointValues({
  pointIds: ['system-time'],
  equipmentId
});
```

## Converting Mock API to Production

To convert the mock API to production:

1. **Replace mock functions with HTTP calls:**

```typescript
// Mock version
export async function fetchSiteConfig(request: FetchSiteConfigRequest) {
  await delay(NETWORK_DELAY);
  // ... return mock data
}

// Production version
export async function fetchSiteConfig(request: FetchSiteConfigRequest) {
  const response = await fetch('/api/site-config', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request)
  });
  return await response.json();
}
```

2. **Implement backend endpoints:**

```typescript
// Backend endpoint (Express example)
app.post('/api/site-config', async (req, res) => {
  const { pageId, equipmentId } = req.body;

  // Load configuration from database or device
  const config = await loadConfigFromDatabase(pageId, equipmentId);

  res.json({
    pages: config.pages,
    lastModified: new Date().toISOString(),
    version: config.version
  });
});
```

3. **Add error handling and retry logic:**

```typescript
async function fetchWithRetry(url: string, options: RequestInit, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetch(url, options);
    } catch (error) {
      if (i === retries - 1) throw error;
      await delay(1000 * Math.pow(2, i)); // Exponential backoff
    }
  }
}
```

## Benefits of This Refactor

1. **Clear API Boundaries**: All data fetching is centralized in the API layer
2. **Type Safety**: Every API call has well-defined request/response types
3. **Testability**: Mock API can be easily swapped with different implementations
4. **Maintainability**: Changes to data fetching logic are isolated
5. **Production Ready**: Easy to replace mock functions with real HTTP calls
6. **Loading States**: Built-in support for loading and error states
7. **Caching**: Mock API maintains state, simulating device memory

## Testing

To test the refactored implementation:

```bash
npm install
npm run dev
```

The application should:
1. Load site configuration from the mock API
2. Display initial point values fetched from the API
3. Allow refreshing point values (reads from mock storage)
4. Allow setting point values (writes to mock storage)
5. Show loading states during API operations
6. Display errors if operations fail

## Files Modified

### New Files
- `src/api/types.ts` - API type definitions
- `src/api/mockApi.ts` - Mock API implementation
- `src/api/index.ts` - API exports
- `src/hooks/useSiteConfigLoader.ts` - Config loading hook
- `src/hooks/usePointFormWithApi.ts` - Enhanced point form hook

### Modified Files
- `src/SiteConfigApp.tsx` - Uses new `useSiteConfigLoader` hook
- `src/components/point/PointCard/index.tsx` - Uses `usePointFormWithApi` hook

### Unchanged Files
- All component files (layout, widgets, forms, etc.)
- Type definitions in `src/types/schema.ts`
- Utility functions (validation, payload builders, etc.)
- Theme data files in `src/themes/`

## Future Enhancements

1. **Response Caching**: Implement a caching layer to reduce API calls
2. **Optimistic Updates**: Update UI immediately, then sync with API
3. **WebSocket Support**: Real-time updates for point values
4. **Batch Operations UI**: Expose batch read/write in the UI
5. **Error Recovery**: Automatic retry with exponential backoff
6. **Offline Support**: Cache data for offline operation
7. **API Middleware**: Add logging, metrics, and error tracking
