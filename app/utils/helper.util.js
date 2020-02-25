import { viewportHeight } from './device.util';
// eslint-disable-next-line import/prefer-default-export
export function RFValue(fontSize, standardScreenHeight = 680) {
  const heightPercent = (fontSize * viewportHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}
