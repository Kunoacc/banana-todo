import { DARKEN_PERCENTAGE_VALUE } from "~/constants";

/**
 * Darken a color by a percentage
 * @param color - The color to darken
 * @param percent - The percentage to darken the color by
 */

export const darkenColor = (color: string, percent = DARKEN_PERCENTAGE_VALUE): string => {

  // Convert hex to RGB first
  const rgbColor = parseInt(color.replace("#", ""), 16);

  // Get the RGB values to calculate the HSP value (brightness)
  const R = (rgbColor >> 16) & 0x00ff;
  const B = ((rgbColor >> 8) & 0x00ff);
  const G = (rgbColor & 0x0000ff);

  // Darken the color by the percentage passed in using the formula described here:
  // https://www.w3.org/TR/AERT/#color-contrast
  const factor = (100 - percent) / 100;
  const darkenedR = Math.floor(factor * R)
  const darkenedB = Math.floor(factor * B)
  const darkenedG = Math.floor(factor * G)

  // Convert to hex and pad with 0s if necessary
  const darkenedHex = ((darkenedR << 16) | (darkenedG << 8) | darkenedB).toString(16);
  return "#" + darkenedHex.padStart(6, '0');
}