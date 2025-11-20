import { useEffect, useState } from 'react';
import { PageDef, PageRegistryEntry } from '../types/schema';

// Declare global variable injected by Vite
declare const __THEME_FILE__: string | undefined;

// Check if a specific theme file is specified via CLI
const THEME_FILE = typeof __THEME_FILE__ !== 'undefined' ? __THEME_FILE__ : undefined;

interface UseThemeLoaderResult {
  pageRegistry: PageRegistryEntry[];
  pageLookup: Record<string, PageDef>;
  isLoading: boolean;
  loadError: string | null;
  themeFile: string | undefined;
}

/**
 * Custom hook to load theme files from static imports or dynamic fetch.
 */
export function useThemeLoader(
  staticPageRegistry: PageRegistryEntry[],
  staticPageLookup: Record<string, PageDef>
): UseThemeLoaderResult {
  const [pageRegistry, setPageRegistry] = useState<PageRegistryEntry[]>(staticPageRegistry);
  const [pageLookup, setPageLookup] = useState<Record<string, PageDef>>(staticPageLookup);
  const [isLoading, setIsLoading] = useState<boolean>(!!THEME_FILE);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Load theme file dynamically if specified via CLI
  useEffect(() => {
    if (!THEME_FILE) return;

    const loadThemeFile = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);

        // Normalize the file path for fetch
        // Account for Vite's base path
        const basePath = '/matter-site-config-prototype';
        let fetchPath = THEME_FILE;

        // Remove base path if user included it
        if (fetchPath.startsWith(basePath)) {
          fetchPath = fetchPath.substring(basePath.length);
        }

        // Handle relative paths
        if (fetchPath.startsWith('./') || fetchPath.startsWith('../')) {
          // Relative path - convert to absolute URL path
          // Remove leading ./ or ../ and ensure it starts with /
          fetchPath = fetchPath.replace(/^\.\.?\//, '/');
          if (!fetchPath.startsWith('/')) {
            fetchPath = '/' + fetchPath;
          }
        } else if (!fetchPath.startsWith('/') && !fetchPath.startsWith('http://') && !fetchPath.startsWith('https://')) {
          // Assume it's a relative path without ./ prefix
          fetchPath = '/' + fetchPath;
        }

        // Prepend base path for fetch
        fetchPath = basePath + fetchPath;

        console.log('Fetching theme file from:', fetchPath);

        // Fetch the JSON file
        const response = await fetch(fetchPath);
        if (!response.ok) {
          const text = await response.text();
          console.error('Failed to fetch theme file. Response:', text.substring(0, 200));
          throw new Error(`Failed to load theme file: ${response.statusText} (${response.status})`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Response is not JSON. Content-Type:', contentType);
          console.error('Response body (first 200 chars):', text.substring(0, 200));
          throw new Error(`Expected JSON but got ${contentType || 'unknown content type'}`);
        }

        const data: PageDef = await response.json();

        // Extract filename from path
        const filename = THEME_FILE.split("/").pop() ?? THEME_FILE.split("\\").pop() ?? "theme";
        const id = filename.replace(/\.json$/i, "");
        const label = data.pageName?.trim() || id;

        // Create registry entry
        const entry: PageRegistryEntry = {
          id,
          label,
          filename,
          data
        };

        // Update state
        setPageRegistry([entry]);
        setPageLookup({ [id]: data });
      } catch (error) {
        console.error('Error loading theme file:', error);
        setLoadError(error instanceof Error ? error.message : 'Failed to load theme file');
      } finally {
        setIsLoading(false);
      }
    };

    loadThemeFile();
  }, []);

  return {
    pageRegistry,
    pageLookup,
    isLoading,
    loadError,
    themeFile: THEME_FILE
  };
}
