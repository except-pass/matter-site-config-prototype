# Historical Data Workspace API

This directory contains the API layer for workspace management in the Historical Data feature.

## 📁 Architecture Overview

```
api/
├── README.md                      ← You are here
├── workspaceApi.interface.ts      ← API contract (DO NOT MODIFY)
├── workspaceApi.mock.ts          ← Mock implementation (PROTOTYPE ONLY)
├── workspaceApi.ts               ← Service layer (SWITCH IMPLEMENTATION HERE)
└── workspaceApi.rest.ts          ← (TO BE CREATED) Real REST API implementation
```

## 🎯 Design Philosophy

This API layer uses the **Strategy Pattern** to separate the API contract from its implementation:

- **Interface** (`workspaceApi.interface.ts`): Defines what operations are available
- **Implementation** (`workspaceApi.mock.ts`, `workspaceApi.rest.ts`): Defines how operations work
- **Service Layer** (`workspaceApi.ts`): Exports the active implementation

This allows you to **swap implementations without changing any application code**.

---

## 🚀 Converting from Prototype to Production

### Current State (Prototype)

```typescript
// workspaceApi.ts
import { mockWorkspaceApi } from './workspaceApi.mock';
export const workspaceApi = mockWorkspaceApi;
```

The mock implementation:
- ✅ Works immediately (no backend needed)
- ✅ Persists data to localStorage
- ❌ Not suitable for production (no auth, no server validation, client-side IDs)
- ❌ Data is local to each browser

### Step-by-Step Migration Guide

#### Step 1: Understand the API Contract

Review `workspaceApi.interface.ts` to see all available operations:

```typescript
interface IWorkspaceApi {
  getWorkspaces(request: GetWorkspacesRequest): Promise<GetWorkspacesResponse>;
  getWorkspace(request: GetWorkspaceRequest): Promise<GetWorkspaceResponse>;
  createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse>;
  updateWorkspace(request: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse>;
  deleteWorkspace(request: DeleteWorkspaceRequest): Promise<DeleteWorkspaceResponse>;
  setDefaultWorkspace(request: SetDefaultWorkspaceRequest): Promise<SetDefaultWorkspaceResponse>;
  getDefaultWorkspace(): Promise<GetDefaultWorkspaceResponse>;
}
```

**Important**: The interface includes extensive comments about production considerations for each method.

#### Step 2: Create Your Backend API

Your backend needs to implement these endpoints. Here's a suggested REST API structure:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/v1/workspaces` | List all workspaces for current user |
| GET | `/api/v1/workspaces/:id` | Get a specific workspace |
| POST | `/api/v1/workspaces` | Create a new workspace |
| PUT | `/api/v1/workspaces/:id` | Update a workspace |
| DELETE | `/api/v1/workspaces/:id` | Delete a workspace |
| PUT | `/api/v1/workspaces/:id/default` | Set as default workspace |
| GET | `/api/v1/workspaces/default` | Get default workspace |

**Database Schema Example** (PostgreSQL):

```sql
CREATE TABLE workspaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(20) NOT NULL CHECK (type IN ('user', 'builtin')),
  is_default BOOLEAN DEFAULT FALSE,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

  -- Ensure only one default per user
  CONSTRAINT one_default_per_user UNIQUE (user_id, is_default)
    WHERE is_default = TRUE
);

-- Index for fast lookups
CREATE INDEX idx_workspaces_user_id ON workspaces(user_id);
CREATE INDEX idx_workspaces_default ON workspaces(user_id, is_default)
  WHERE is_default = TRUE;
```

#### Step 3: Create REST API Implementation

Create `workspaceApi.rest.ts`:

```typescript
import type {
  IWorkspaceApi,
  GetWorkspacesRequest,
  GetWorkspacesResponse,
  GetWorkspaceRequest,
  GetWorkspaceResponse,
  CreateWorkspaceRequest,
  CreateWorkspaceResponse,
  UpdateWorkspaceRequest,
  UpdateWorkspaceResponse,
  DeleteWorkspaceRequest,
  DeleteWorkspaceResponse,
  SetDefaultWorkspaceRequest,
  SetDefaultWorkspaceResponse,
  GetDefaultWorkspaceResponse,
  WorkspaceApiError,
  WorkspaceErrorCode,
} from './workspaceApi.interface';

/**
 * REST API implementation for workspace operations
 */
class RestWorkspaceApi implements IWorkspaceApi {
  private baseUrl: string;

  constructor(baseUrl: string = '/api/v1/workspaces') {
    this.baseUrl = baseUrl;
  }

  /**
   * Helper to make authenticated requests
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include', // Include cookies for auth
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new WorkspaceApiError(
        errorData.message || 'Request failed',
        this.mapHttpStatusToErrorCode(response.status),
        errorData
      );
    }

    return await response.json();
  }

  /**
   * Map HTTP status codes to error codes
   */
  private mapHttpStatusToErrorCode(status: number): WorkspaceErrorCode {
    switch (status) {
      case 404:
        return WorkspaceErrorCode.NOT_FOUND;
      case 401:
      case 403:
        return WorkspaceErrorCode.UNAUTHORIZED;
      case 400:
      case 422:
        return WorkspaceErrorCode.VALIDATION_ERROR;
      case 409:
        return WorkspaceErrorCode.CONFLICT;
      default:
        return WorkspaceErrorCode.SERVER_ERROR;
    }
  }

  async getWorkspaces(request: GetWorkspacesRequest): Promise<GetWorkspacesResponse> {
    const params = new URLSearchParams();
    if (request.limit) params.append('limit', request.limit.toString());
    // Add other query params as needed

    const query = params.toString() ? `?${params.toString()}` : '';
    return this.request<GetWorkspacesResponse>(`${query}`, {
      method: 'GET',
    });
  }

  async getWorkspace(request: GetWorkspaceRequest): Promise<GetWorkspaceResponse> {
    return this.request<GetWorkspaceResponse>(`/${request.id}`, {
      method: 'GET',
    });
  }

  async createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
    return this.request<CreateWorkspaceResponse>('', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  async updateWorkspace(request: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
    const { id, ...updateData } = request;
    return this.request<UpdateWorkspaceResponse>(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updateData),
    });
  }

  async deleteWorkspace(request: DeleteWorkspaceRequest): Promise<DeleteWorkspaceResponse> {
    return this.request<DeleteWorkspaceResponse>(`/${request.id}`, {
      method: 'DELETE',
    });
  }

  async setDefaultWorkspace(
    request: SetDefaultWorkspaceRequest
  ): Promise<SetDefaultWorkspaceResponse> {
    return this.request<SetDefaultWorkspaceResponse>(`/${request.id}/default`, {
      method: 'PUT',
    });
  }

  async getDefaultWorkspace(): Promise<GetDefaultWorkspaceResponse> {
    return this.request<GetDefaultWorkspaceResponse>('/default', {
      method: 'GET',
    });
  }
}

export const restWorkspaceApi = new RestWorkspaceApi();
```

#### Step 4: Switch to Production Implementation

Update `workspaceApi.ts`:

```typescript
// OLD (prototype):
// import { mockWorkspaceApi } from './workspaceApi.mock';
// export const workspaceApi = mockWorkspaceApi;

// NEW (production):
import { restWorkspaceApi } from './workspaceApi.rest';
export const workspaceApi = restWorkspaceApi;
```

That's it! **No other code changes needed.** All components using `workspaceApi` will now use the real backend.

#### Step 5: Testing the Migration

Create a feature flag for gradual rollout:

```typescript
// workspaceApi.ts
import { mockWorkspaceApi } from './workspaceApi.mock';
import { restWorkspaceApi } from './workspaceApi.rest';

const USE_REAL_API = process.env.REACT_APP_USE_REAL_API === 'true';

export const workspaceApi = USE_REAL_API ? restWorkspaceApi : mockWorkspaceApi;
```

Then test with:
```bash
# Use mock API (prototype)
npm start

# Use real API (production)
REACT_APP_USE_REAL_API=true npm start
```

---

## 🔍 Key Production Considerations

### 1. Authentication & Authorization

The mock implementation has **no authentication**. Your production implementation must:

- ✅ Include authentication tokens (JWT, session cookies, etc.)
- ✅ Filter workspaces by current user
- ✅ Verify permissions before create/update/delete
- ✅ Handle 401/403 errors gracefully

Example:
```typescript
private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken(); // Your auth mechanism

  const response = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  // ... rest of implementation
}
```

### 2. Server-Side ID Generation

Mock implementation uses client-side counter (`ws-0`, `ws-1`). Production must:

- ✅ Generate IDs on the server (UUID, auto-increment, etc.)
- ✅ Never trust client-provided IDs for new resources
- ✅ Validate ID format in update/delete requests

### 3. Data Validation

Mock implementation has minimal validation. Production must:

- ✅ Validate workspace data structure
- ✅ Sanitize user input
- ✅ Check data size limits
- ✅ Validate chart configurations
- ✅ Prevent XSS and injection attacks

### 4. Concurrency Control

Mock implementation has no concurrency protection. Production should:

- ✅ Implement optimistic locking (version numbers or timestamps)
- ✅ Handle "lost update" scenarios
- ✅ Return appropriate errors for conflicts

Example:
```typescript
// Include version in update requests
interface UpdateWorkspaceRequest {
  id: string;
  version: number;  // Current version client has
  name?: string;
  data?: SerializableWorkspaceData;
}

// Backend checks: if (workspace.version !== request.version) throw ConflictError;
```

### 5. Built-in Workspaces

Mock implementation creates built-in workspace on first load. Production should:

- ✅ Create built-in workspaces when user account is created
- ✅ Store in database (not generated client-side)
- ✅ Use database constraints to prevent modification
- ✅ Consider using a separate `workspace_templates` table

### 6. Error Handling

Production implementation should handle:

- Network errors (timeout, offline, DNS failure)
- Server errors (500, 502, 503)
- Rate limiting (429)
- Validation errors (400, 422)
- Not found (404)
- Unauthorized (401, 403)
- Conflicts (409)

Example:
```typescript
try {
  return await workspaceApi.getWorkspaces({});
} catch (error) {
  if (error instanceof WorkspaceApiError) {
    switch (error.code) {
      case WorkspaceErrorCode.NETWORK_ERROR:
        showToast('Network error. Please check your connection.');
        break;
      case WorkspaceErrorCode.UNAUTHORIZED:
        redirectToLogin();
        break;
      case WorkspaceErrorCode.SERVER_ERROR:
        showToast('Server error. Please try again later.');
        break;
      // ... handle other cases
    }
  }
}
```

### 7. Performance Optimization

Consider:

- ✅ Implement pagination for large workspace lists
- ✅ Cache frequently accessed data (default workspace)
- ✅ Use ETags for conditional requests
- ✅ Compress large workspace data
- ✅ Implement debouncing for auto-save

### 8. Analytics & Logging

Production should track:

- Workspace creation/deletion events
- Error rates and types
- API response times
- Usage patterns

---

## 📚 Additional Resources

### GraphQL Implementation

Prefer GraphQL? Create `workspaceApi.graphql.ts`:

```typescript
class GraphQLWorkspaceApi implements IWorkspaceApi {
  private client: GraphQLClient;

  async getWorkspaces(request: GetWorkspacesRequest): Promise<GetWorkspacesResponse> {
    const query = gql`
      query GetWorkspaces($limit: Int) {
        workspaces(limit: $limit) {
          id
          name
          type
          isDefault
          createdAt
          updatedAt
          chartCount
        }
      }
    `;

    const data = await this.client.request(query, { limit: request.limit });
    return { workspaces: data.workspaces };
  }

  // ... implement other methods
}
```

### Testing

The interface makes testing easy:

```typescript
// Create a test double
class MockWorkspaceApiForTesting implements IWorkspaceApi {
  async getWorkspaces(): Promise<GetWorkspacesResponse> {
    return {
      workspaces: [
        { id: 'ws-1', name: 'Test Workspace', ... }
      ]
    };
  }
  // ... implement other methods with test data
}

// Use in tests
import { workspaceApi } from './api/workspaceApi';
jest.mock('./api/workspaceApi', () => ({
  workspaceApi: new MockWorkspaceApiForTesting(),
}));
```

---

## 🤝 Questions?

If you have questions about:
- The API contract → See `workspaceApi.interface.ts` comments
- Mock behavior → See `workspaceApi.mock.ts` comments
- How to switch implementations → See `workspaceApi.ts` comments
- Production considerations → See this README

---

## 📝 Migration Checklist

Use this checklist when converting to production:

- [ ] Backend API endpoints implemented
- [ ] Database schema created with proper indexes
- [ ] Authentication/authorization implemented
- [ ] Server-side validation added
- [ ] Error handling for all failure modes
- [ ] Built-in workspaces created on user signup
- [ ] Concurrency control implemented (optimistic locking)
- [ ] Created `workspaceApi.rest.ts` (or `.graphql.ts`)
- [ ] Updated export in `workspaceApi.ts`
- [ ] Tested all operations (create, read, update, delete)
- [ ] Tested error scenarios (network failure, unauthorized, etc.)
- [ ] Verified existing UI components still work
- [ ] Performance tested with realistic data volumes
- [ ] Analytics/logging added
- [ ] Documented API endpoints for backend team
- [ ] Removed or archived `workspaceApi.mock.ts`
- [ ] Updated environment variables/config
- [ ] Deployed to staging environment
- [ ] End-to-end testing passed
- [ ] Deployed to production
- [ ] Monitored for errors

---

**Last Updated**: 2025-11-21
**Status**: Prototype (Mock Implementation)
**Target**: Production REST API
