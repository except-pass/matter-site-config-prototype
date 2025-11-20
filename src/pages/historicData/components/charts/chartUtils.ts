import type { LegendEntry, CategoricalChartData, CategoricalSeriesRow } from "./chartTypes";
import { LINE_SERIES_LENGTH } from "./chartTypes";

// Available inverters (hardcoded for now, could come from props or API)
export const AVAILABLE_INVERTERS = ['001', '002', '003'];

// Map short SN (last 3 digits) to full 10-digit SN
// Generate deterministic 10-digit SNs based on short SN
export const getFullSerialNumber = (shortSN: string): string => {
  // Create a deterministic 10-digit number based on short SN
  // Use a simple hash-like approach: prefix with zeros and add a checksum-like suffix
  const shortNum = parseInt(shortSN, 10);
  const base = 1000000000; // Start with 1 billion
  const fullSN = base + (shortNum * 10000) + shortNum; // Creates a 10-digit number
  return fullSN.toString().padStart(10, '0');
};

export function createDeterministicRandom(seed: string) {
  let value = 0;
  for (let i = 0; i < seed.length; i += 1) {
    value = (value * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 2 ** 32;
  };
}

export function generateTimeLabels(count: number) {
  const labels: string[] = [];
  const incrementMinutes = 10;
  const startMinutes = 12 * 60; // 12:00
  for (let i = 0; i < count; i += 1) {
    const totalMinutes = startMinutes + i * incrementMinutes;
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;
    labels.push(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
  }
  return labels;
}

export function generateSmoothLineSeries(seed: string, length = LINE_SERIES_LENGTH) {
  const rand = createDeterministicRandom(`line-${seed}`);
  const values: number[] = [];
  let current = rand() * 60 + 20;
  for (let i = 0; i < length; i += 1) {
    const direction = rand() - 0.5;
    const magnitude = 4 + rand() * 8;
    const target = current + direction * magnitude;
    current = values.length ? values[values.length - 1] * 0.7 + target * 0.3 : target;
    current = Math.max(0, Math.min(140, current));
    values.push(Number(current.toFixed(2)));
  }
  return values;
}

export function buildCategoricalChartData(entry: LegendEntry): CategoricalChartData | null {
  if (!entry.meaningKeys.length) {
    return null;
  }

  const allMeaningKeys = entry.meaningKeys;
  const rand = createDeterministicRandom(entry.pointKey);
  const keysWithData = allMeaningKeys.filter((_, index) => rand() > 0.35 || index === 0);
  if (keysWithData.length === 0) {
    keysWithData.push(allMeaningKeys[0]);
  }

  const slotCount = 12;
  const timeLabels = generateTimeLabels(slotCount);
  const normalizedDtype = typeof entry.dtype === 'string' ? entry.dtype.toLowerCase() : '';
  const isBitfield = normalizedDtype.startsWith('bitfield');

  const slotSets: Array<Set<string>> = Array.from({ length: slotCount }, () => new Set<string>());

  if (isBitfield) {
    for (let slot = 0; slot < slotCount; slot += 1) {
      let activated = false;
      keysWithData.forEach((key, idx) => {
        if (rand() > 0.55) {
          slotSets[slot].add(key);
          activated = true;
        }
        // Encourage early keys to show up occasionally
        if (!activated && idx === keysWithData.length - 1 && rand() > 0.7) {
          slotSets[slot].add(key);
          activated = true;
        }
      });
    }
  } else {
    let slot = 0;
    while (slot < slotCount) {
      if (!keysWithData.length) {
        break;
      }
      const keyIndex = Math.floor(rand() * keysWithData.length);
      const selectedKey = keysWithData[keyIndex];
      const runLength = 1 + Math.floor(rand() * 3);
      if (rand() > 0.2) {
        for (let offset = 0; offset < runLength && slot + offset < slotCount; offset += 1) {
          slotSets[slot + offset].add(selectedKey);
        }
      }
      slot += runLength;
    }
  }

  const rows: CategoricalSeriesRow[] = allMeaningKeys.map((meaningKey) => {
    const labelSourceKey = String(meaningKey);
    const friendly = entry.friendlyMeanings?.[labelSourceKey];
    const meaning = entry.meanings?.[labelSourceKey];
    const label = (friendly ?? meaning ?? labelSourceKey).trim() || `Value ${labelSourceKey}`;
    const activeSlots = slotSets.map((set) => set.has(meaningKey));
    return { meaningKey, label, activeSlots };
  });

  return {
    id: entry.pointKey,
    title: entry.name,
    subtitle: `SN ${entry.shortSN}`,
    timeLabels,
    rows,
    colorIndex: entry.colorIndex,
  };
}
