import { useCallback, useEffect, useState } from 'react';
import { getGatewayStatus } from '../api';

interface GatewayStatusState {
  isOnline: boolean | null;
  statusTimestamp: string | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: GatewayStatusState = {
  isOnline: null,
  statusTimestamp: null,
  error: null,
  isLoading: false,
};

/**
 * Fetch and track the online/offline state for a gateway serial number.
 */
export function useGatewayStatus(gatewaySn?: string) {
  const [{ isOnline, statusTimestamp, error, isLoading }, setState] = useState<GatewayStatusState>(initialState);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const refresh = useCallback(() => {
    setRefreshIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (!gatewaySn) {
      setState(initialState);
      return;
    }

    let cancelled = false;

    const fetchStatus = async () => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const response = await getGatewayStatus({ gatewaySn });
        if (cancelled) return;

        setState({
          isOnline: response.isOnline,
          statusTimestamp: response.timestamp,
          error: null,
          isLoading: false,
        });
      } catch (err) {
        if (cancelled) return;
        setState({
          isOnline: null,
          statusTimestamp: null,
          error: err instanceof Error ? err.message : 'Failed to fetch gateway status',
          isLoading: false,
        });
      }
    };

    fetchStatus();

    return () => {
      cancelled = true;
    };
  }, [gatewaySn, refreshIndex]);

  return {
    isOnline,
    statusTimestamp,
    error,
    isLoading,
    refresh,
  };
}
