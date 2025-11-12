import { useState, useCallback } from 'react';
import { PointDef } from '../types/schema';

interface SearchResult {
  matches: boolean;
  helpTextMatch: boolean;
}

/**
 * Custom hook for search functionality.
 */
export function useSearch() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const pointMatchesSearch = useCallback((point: PointDef, query: string): SearchResult => {
    if (!query.trim()) {
      return { matches: true, helpTextMatch: false };
    }

    const lowerQuery = query.toLowerCase();

    // Check title
    if (point.title?.toLowerCase().includes(lowerQuery)) {
      return { matches: true, helpTextMatch: false };
    }

    // Check help text
    if (point.help?.toLowerCase().includes(lowerQuery)) {
      return { matches: true, helpTextMatch: true };
    }

    // Check entries - names and friendly meanings
    for (const entry of point.entries) {
      if (entry.name?.toLowerCase().includes(lowerQuery)) {
        return { matches: true, helpTextMatch: false };
      }

      // Check friendly meanings
      if (entry.friendly_meanings) {
        for (const meaning of Object.values(entry.friendly_meanings)) {
          if (meaning.toLowerCase().includes(lowerQuery)) {
            return { matches: true, helpTextMatch: false };
          }
        }
      }

      // Check description
      if (entry.description?.toLowerCase().includes(lowerQuery)) {
        return { matches: true, helpTextMatch: false };
      }
    }

    return { matches: false, helpTextMatch: false };
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    pointMatchesSearch
  };
}
