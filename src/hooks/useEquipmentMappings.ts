import { useEffect, useState } from 'react';
import { getEquipmentsAtSite, Equipment, EquipmentMapEntry } from '../api';

/**
 * Equipment mapping data with gateway lookup
 */
export interface EquipmentMapping {
  equipment: Equipment;
  gatewaySn: string;
}

/**
 * Custom hook to fetch and manage equipment-to-gateway mappings
 *
 * This hook fetches the equipment configuration from the API and provides
 * lookup functions to find which gateway an inverter belongs to.
 */
export function useEquipmentMappings(siteId: number = 1) {
  const [mappings, setMappings] = useState<Map<string, EquipmentMapping>>(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMappings = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getEquipmentsAtSite({
          site_id: siteId,
          request_id: `req-${Date.now()}`,
        });

        if (!response.success) {
          setError(response.message);
          return;
        }

        // Build a map from equipment SN to equipment + gateway
        const newMappings = new Map<string, EquipmentMapping>();

        response.items.forEach((item: EquipmentMapEntry) => {
          item.equipments.forEach((equipment: Equipment) => {
            newMappings.set(equipment.sn, {
              equipment,
              gatewaySn: item.gateway_sn,
            });
          });
        });

        setMappings(newMappings);
      } catch (err) {
        console.error('Error fetching equipment mappings:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch equipment mappings');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMappings();
  }, [siteId]);

  /**
   * Look up equipment mapping by serial number
   */
  const getMapping = (equipmentSn: string): EquipmentMapping | undefined => {
    return mappings.get(equipmentSn);
  };

  /**
   * Get gateway serial number for an equipment
   */
  const getGatewaySn = (equipmentSn: string): string | undefined => {
    return mappings.get(equipmentSn)?.gatewaySn;
  };

  /**
   * Check if equipment is primary
   */
  const isPrimary = (equipmentSn: string): boolean => {
    return mappings.get(equipmentSn)?.equipment.is_primary ?? false;
  };

  return {
    mappings,
    isLoading,
    error,
    getMapping,
    getGatewaySn,
    isPrimary,
  };
}
