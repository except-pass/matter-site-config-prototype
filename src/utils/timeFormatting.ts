/**
 * Formats time in HH:MM format (24-hour).
 * Ensures single digits are zero-padded.
 */
export function formatTime(hours: number, minutes: number): string {
  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  return `${hh}:${mm}`;
}

/**
 * Parses a time string in HH:MM format.
 * Returns { hours, minutes } or { hours: 0, minutes: 0 } on error.
 */
export function parseTime(timeStr: string): { hours: number; minutes: number } {
  const parts = timeStr.split(':');
  if (parts.length !== 2) {
    return { hours: 0, minutes: 0 };
  }
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  if (isNaN(hours) || isNaN(minutes)) {
    return { hours: 0, minutes: 0 };
  }
  return { hours, minutes };
}

/**
 * Default zero time constant.
 */
export const ZERO_TIME = '00:00';

/**
 * Formats a date to ISO date string (YYYY-MM-DD).
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Formats a date to ISO datetime string (YYYY-MM-DDTHH:MM).
 */
export function formatDateTime(date: Date): string {
  const dateStr = formatDate(date);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${dateStr}T${hours}:${minutes}`;
}
