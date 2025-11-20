import { useEffect, useState } from 'react';
import { PageDef, PageRegistryEntry } from '../pages/siteConfig/types/schema';
import { fetchSiteConfig } from '../api';

interface UseSiteConfigLoaderResult {
  pageRegistry: PageRegistryEntry[];
  pageLookup: Record<string, PageDef>;
  isLoading: boolean;
  loadError: string | null;
  configVersion: string | null;
  lastModified: string | null;
}

/**
 * Custom hook to load site configuration from the API
 *
 * This replaces the direct file loading approach with API-based loading.
 * In production, this would fetch configuration from a backend service.
 */
export function useSiteConfigLoader(
  equipmentId?: string
): UseSiteConfigLoaderResult {
  const [pageRegistry, setPageRegistry] = useState<PageRegistryEntry[]>([]);
  const [pageLookup, setPageLookup] = useState<Record<string, PageDef>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [configVersion, setConfigVersion] = useState<string | null>(null);
  const [lastModified, setLastModified] = useState<string | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);

        // Fetch site configuration from API
        const response = await fetchSiteConfig({ equipmentId });

        // Build page registry from response
        const registry: PageRegistryEntry[] = response.pages.map((page, index) => {
          // Generate ID from page name
          const id = page.pageName
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');

          return {
            id,
            label: page.pageName,
            filename: `page-${index}.json`, // Not used anymore, but kept for compatibility
            data: page,
          };
        });

        // Build page lookup
        const lookup: Record<string, PageDef> = registry.reduce(
          (acc, entry) => {
            acc[entry.id] = entry.data;
            return acc;
          },
          {} as Record<string, PageDef>
        );

        // Update state
        setPageRegistry(registry);
        setPageLookup(lookup);
        setConfigVersion(response.version);
        setLastModified(response.lastModified);
      } catch (error) {
        console.error('Error loading site configuration:', error);
        setLoadError(
          error instanceof Error
            ? error.message
            : 'Failed to load site configuration'
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadConfig();
  }, [equipmentId]);

  return {
    pageRegistry,
    pageLookup,
    isLoading,
    loadError,
    configVersion,
    lastModified,
  };
}
