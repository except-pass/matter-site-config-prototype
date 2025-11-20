import { useState, useCallback, useEffect } from 'react';
import { PointDef, EntryValue, EquipmentOption } from '../types/schema';
import { buildInitialPointState } from '../utils/initialState';
import { readPoint, writePoint, invokeCommand } from '../api';

/**
 * Custom hook for managing PointCard form state with API integration.
 *
 * This version integrates with the mock API to:
 * - Fetch initial values from the backend
 * - Execute read operations
 * - Execute write operations
 * - Execute invoke operations
 */
export function usePointFormWithApi(point: PointDef, equipment: EquipmentOption) {
  const [formState, setFormState] = useState<EntryValue>(
    buildInitialPointState(point)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastRead, setLastRead] = useState<string | null>(null);

  // Fetch initial value from API on mount
  useEffect(() => {
    const fetchInitialValue = async () => {
      // Skip for invoke-only commands
      if (point.access === 'Invoke') return;

      try {
        setIsLoading(true);
        setError(null);

        const response = await readPoint({
          pointId: point.command_id,
          equipmentId: equipment.id,
        });

        if (response.value.success) {
          setFormState(response.value.entries);
          setLastRead(response.value.lastRead);
        } else {
          setError(response.value.error || 'Failed to read point');
        }
      } catch (err) {
        console.error('Error fetching initial value:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch initial value');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialValue();
  }, [point.command_id, equipment.id, point.access]);

  /**
   * Handle field value changes
   */
  const handleFieldChange = useCallback((argName: string, nextVal: any) => {
    setFormState((prev) => ({ ...prev, [argName]: nextVal }));
  }, []);

  /**
   * Handle refresh button - read current value from device
   */
  const handleRefresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await readPoint({
        pointId: point.command_id,
        equipmentId: equipment.id,
      });

      if (response.value.success) {
        setFormState(response.value.entries);
        setLastRead(response.value.lastRead);
        return { success: true, payload: response.payload };
      } else {
        setError(response.value.error || 'Failed to read point');
        return { success: false, error: response.value.error };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to refresh';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, [point.command_id, equipment.id]);

  /**
   * Handle set button - write current values to device
   */
  const handleSet = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await writePoint({
        pointId: point.command_id,
        equipmentId: equipment.id,
        values: formState,
      });

      if (response.success) {
        // Update form with new value if provided
        if (response.newValue) {
          setFormState(response.newValue.entries);
          setLastRead(response.newValue.lastRead);
        }
        return { success: true, payload: response.payload };
      } else {
        setError(response.error || 'Failed to write point');
        return { success: false, error: response.error };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to write';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, [point.command_id, equipment.id, formState]);

  /**
   * Handle invoke button - execute a service/command
   */
  const handleInvoke = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await invokeCommand({
        pointId: point.command_id,
        equipmentId: equipment.id,
        parameters: formState,
      });

      if (response.success) {
        return { success: true, payload: response.payload, result: response.result };
      } else {
        setError(response.error || 'Failed to invoke command');
        return { success: false, error: response.error };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to invoke';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, [point.command_id, equipment.id, formState]);

  return {
    formState,
    setFormState,
    handleFieldChange,
    handleRefresh,
    handleSet,
    handleInvoke,
    isLoading,
    error,
    lastRead,
  };
}
