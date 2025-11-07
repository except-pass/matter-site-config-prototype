import { useState, useCallback } from 'react';
import { PointDef, EntryValue, EquipmentOption } from '../types/schema';
import { buildInitialPointState } from '../utils/initialState';
import { buildReadPayload, buildWritePayload } from '../utils/payloadBuilders';

/**
 * Custom hook for managing PointCard form state and event handlers.
 */
export function usePointForm(point: PointDef, equipment: EquipmentOption) {
  const [formState, setFormState] = useState<EntryValue>(
    buildInitialPointState(point)
  );

  const handleFieldChange = useCallback((argName: string, nextVal: any) => {
    setFormState((prev) => ({ ...prev, [argName]: nextVal }));
  }, []);

  const handleRefresh = useCallback(() => {
    return buildReadPayload(point, equipment);
  }, [point, equipment]);

  const handleSet = useCallback(() => {
    return buildWritePayload(point, formState, equipment);
  }, [point, formState, equipment]);

  return {
    formState,
    setFormState,
    handleFieldChange,
    handleRefresh,
    handleSet
  };
}
