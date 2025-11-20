import { useState, useCallback, useEffect } from 'react';
import { PointDef, EntryValue, EquipmentOption } from '../pages/siteConfig/types/schema';
import { buildInitialPointState } from '../pages/siteConfig/utils/initialState';
import {
  sendCGICommandToGateway,
  PointValue,
  buildReadPayload,
  buildWritePayload,
  buildInvokePayload,
} from '../api';
import { useEquipmentMappings } from './useEquipmentMappings';

/**
 * Custom hook for managing PointCard form state with API integration.
 *
 * This version integrates with the mock API to:
 * - Fetch initial values from the backend
 * - Execute read operations
 * - Execute write operations
 * - Execute invoke operations
 * - Validate non-primary inverter restrictions for Modbus commands
 */
export function usePointFormWithApi(point: PointDef, equipment: EquipmentOption) {
  // Get equipment mappings to look up gateway and primary status
  const { getGatewaySn, isPrimary, isLoading: mappingsLoading } = useEquipmentMappings();
  const [formState, setFormState] = useState<EntryValue>(
    buildInitialPointState(point)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastRead, setLastRead] = useState<string | null>(null);

  // Fetch initial value from API on mount
  useEffect(() => {
    const fetchInitialValue = async () => {
      // Skip for invoke-only commands (unless they explicitly show refresh button)
      const normalizedAccess = typeof point.access === 'string'
        ? point.access.trim().toLowerCase()
        : '';
      const isInvoke = normalizedAccess === 'invoke' || point.element_type === 'service';

      // Skip initial fetch for invoke commands unless showRefresh is explicitly true
      if (isInvoke && point.showRefresh !== true) return;

      try {
        setIsLoading(true);
        setError(null);

        // Look up the gateway for this equipment
        const equipmentSn = equipment.thingId.SN;
        const gatewaySn = getGatewaySn(equipmentSn) || 'GW001234567890';

        const payload = buildReadPayload(point, equipment.id);
        const response = await sendCGICommandToGateway({
          gatewaySn,
          payload,
        });

        if (response.success && response.data) {
          const pointValue = response.data as PointValue;
          if (pointValue.success) {
            setFormState(pointValue.entries);
            setLastRead(pointValue.lastRead);
          } else {
            setError(pointValue.error || 'Failed to read point');
          }
        } else {
          setError(response.error || 'Failed to read point');
        }
      } catch (err) {
        console.error('Error fetching initial value:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch initial value');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialValue();
  }, [point, equipment.id, equipment.thingId.SN, getGatewaySn]);

  /**
   * Handle field value changes
   */
  const handleFieldChange = useCallback((argName: string, nextVal: any) => {
    setFormState((prev: Record<string, any>) => ({ ...prev, [argName]: nextVal }));
  }, []);

  /**
   * Handle refresh button - read current value from device
   */
  const handleRefresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Look up the gateway for this equipment
      const equipmentSn = equipment.thingId.SN;
      const gatewaySn = getGatewaySn(equipmentSn) || 'GW001234567890';

      const payload = buildReadPayload(point, equipment.id);
      const response = await sendCGICommandToGateway({
        gatewaySn,
        payload,
      });

      if (response.success && response.data) {
        const pointValue = response.data as PointValue;
        if (pointValue.success) {
          setFormState(pointValue.entries);
          setLastRead(pointValue.lastRead);
          return { success: true, payload, gatewaySn };
        } else {
          setError(pointValue.error || 'Failed to read point');
          return { success: false, error: pointValue.error };
        }
      } else {
        setError(response.error || 'Failed to read point');
        return { success: false, error: response.error };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to refresh';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, [point, equipment.id, equipment.thingId.SN, getGatewaySn]);

  /**
   * Handle set button - write current values to device
   */
  const handleSet = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check if this is a Modbus command on a non-primary inverter
      const equipmentSn = equipment.thingId.SN;
      const isModbusCommand = point.protocol?.modbus !== undefined;
      const isNonPrimary = !isPrimary(equipmentSn);

      if (isModbusCommand && isNonPrimary) {
        const errorMessage = 'Writing to Modbus commands on non-primary inverters is not currently supported';
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }

      // Normalize enum values: convert friendly meanings back to semantic meanings
      const normalizedValues: Record<string, any> = { ...formState };

      point.entries.forEach((entry: any) => {
        if (entry.dtype !== 'enum' || !entry.meanings) {
          return;
        }

        const rawValue = normalizedValues[entry.arg];
        if (rawValue === undefined || rawValue === null || rawValue === '') {
          return;
        }

        // Find the wire value (key) that matches either the friendly or semantic meaning
        const match = Object.entries(entry.meanings).find(([wireVal, semantic]: [string, any]) => {
          const friendly = entry.friendly_meanings?.[wireVal] ?? semantic;
          return rawValue === friendly || rawValue === semantic;
        });

        // Use the semantic meaning (wire value) for the command
        if (match) {
          normalizedValues[entry.arg] = match[1];
        }
      });

      // Look up the gateway for this equipment
      const gatewaySn = getGatewaySn(equipmentSn) || 'GW001234567890';

      const payload = buildWritePayload(point, equipment.id, normalizedValues);
      const response = await sendCGICommandToGateway({
        gatewaySn,
        payload,
      });

      if (response.success) {
        // Update form with new value if provided
        if (response.data) {
          const pointValue = response.data as PointValue;
          if (pointValue.entries) {
            setFormState(pointValue.entries);
            setLastRead(pointValue.lastRead);
          }
        }
        return { success: true, payload, gatewaySn };
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
  }, [point.entries, point.protocol, equipment.id, equipment.thingId.SN, formState, isPrimary, getGatewaySn]);

  /**
   * Handle invoke button - execute a service/command
   */
  const handleInvoke = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Look up the gateway for this equipment
      const equipmentSn = equipment.thingId.SN;
      const gatewaySn = getGatewaySn(equipmentSn) || 'GW001234567890';

      // Normalize enum values: convert friendly meanings back to semantic meanings
      const normalizedParameters: Record<string, any> = { ...formState };

      point.entries.forEach((entry: any) => {
        if (entry.dtype !== 'enum' || !entry.meanings) {
          return;
        }

        const rawValue = normalizedParameters[entry.arg];
        if (rawValue === undefined || rawValue === null || rawValue === '') {
          return;
        }

        // Find the wire value (key) that matches either the friendly or semantic meaning
        const match = Object.entries(entry.meanings).find(([wireVal, semantic]: [string, any]) => {
          const friendly = entry.friendly_meanings?.[wireVal] ?? semantic;
          return rawValue === friendly || rawValue === semantic;
        });

        // Use the semantic meaning (wire value) for the command
        if (match) {
          normalizedParameters[entry.arg] = match[1];
        }
      });

      const payload = buildInvokePayload(point, equipment.id, normalizedParameters);
      const response = await sendCGICommandToGateway({
        gatewaySn,
        payload,
      });

      if (response.success) {
        return { success: true, payload, result: response.data, gatewaySn };
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
  }, [point.entries, equipment.id, equipment.thingId.SN, formState, getGatewaySn]);

  return {
    formState,
    setFormState,
    handleFieldChange,
    handleRefresh,
    handleSet,
    handleInvoke,
    isLoading: isLoading || mappingsLoading,
    error,
    lastRead,
  };
}
