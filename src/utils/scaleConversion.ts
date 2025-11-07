/**
 * Converts a display value to a wire value using a scale factor.
 * For example, if scale_factor is 10, then 12.5 becomes 125.
 */
export function displayToWire(displayValue: number, scaleFactor?: number): number {
  if (scaleFactor === undefined) {
    return displayValue;
  }
  return Math.round(displayValue * scaleFactor);
}

/**
 * Converts a wire value to a display value using a scale factor.
 * For example, if scale_factor is 10, then 125 becomes 12.5.
 */
export function wireToDisplay(wireValue: number, scaleFactor?: number): number {
  if (scaleFactor === undefined) {
    return wireValue;
  }
  return wireValue / scaleFactor;
}
