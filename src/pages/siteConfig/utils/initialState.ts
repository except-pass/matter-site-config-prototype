import { PointDef, EntryValue } from '../types/schema';

// -----------------------------------------------------------------------------
// Helper: build initial editable state for a point
// -----------------------------------------------------------------------------
export function buildInitialPointState(point: PointDef): EntryValue {
  const obj: EntryValue = {};

  // Special handling for generator-exercise widget - start with empty values
  if (point.widget === "generator-exercise") {
    point.entries.forEach((entry) => {
      if (entry.dtype === 'enum') {
        obj[entry.arg] = '';
      } else {
        obj[entry.arg] = '';
      }
    });
    return obj;
  }

  // Detect if this point has multiple Number entries with ranges (dual slider case)
  const rangedNumberEntries = point.entries.filter(
    (e) => e.dtype === 'Number' && e.range !== undefined
  );
  const isDualSlider = rangedNumberEntries.length >= 2;

  point.entries.forEach((entry, idx) => {
    if (entry.value !== undefined) {
      obj[entry.arg] = entry.dtype === 'Number' && entry.value !== ''
        ? Number(entry.value)
        : entry.value;
      return;
    }

    if (entry.dtype === 'Number') {
      const range = entry.range;
      if (!range) {
        obj[entry.arg] = 0;
        return;
      }

      // For dual sliders, spread initial values to avoid overlap
      if (isDualSlider) {
        const rangeSpan = range.max - range.min;
        const position = idx / Math.max(rangedNumberEntries.length - 1, 1);

        // Use constraints if present, otherwise distribute evenly
        if (entry.less_than) {
          // This is a "low" value (like StartSOC) - default to 30% of range
          obj[entry.arg] = Math.round(range.min + rangeSpan * 0.3);
        } else if (entry.greater_than) {
          // This is a "high" value (like StopSOC) - default to 70% of range
          obj[entry.arg] = Math.round(range.min + rangeSpan * 0.7);
        } else {
          // No constraints, distribute evenly
          obj[entry.arg] = Math.round(range.min + rangeSpan * position);
        }
      } else {
        // Single value, use min
        obj[entry.arg] = range.min;
      }
      return;
    }

    if (entry.dtype === 'enum') {
      // Use the first friendly string value, not the wire value
      const firstWireVal = Object.keys(entry.meanings ?? {})[0];
      if (firstWireVal) {
        // Prefer friendly_meanings, fall back to meanings
        const firstFriendlyVal = entry.friendly_meanings?.[firstWireVal] ?? entry.meanings?.[firstWireVal] ?? '';
        obj[entry.arg] = firstFriendlyVal;
      } else {
        obj[entry.arg] = '';
      }
      return;
    }

    // Handle bitfield types (bitfield16, bitfield32)
    if (entry.dtype && entry.dtype.startsWith('bitfield')) {
      // Initialize as an object mapping bit positions to boolean states
      // Start with all bits unchecked
      const bitStates: Record<string, boolean> = {};
      if (entry.meanings) {
        Object.keys(entry.meanings).forEach(bitPos => {
          bitStates[bitPos] = false;
        });
      }
      obj[entry.arg] = bitStates;
      return;
    }

    obj[entry.arg] = '';
  });
  return obj;
}
