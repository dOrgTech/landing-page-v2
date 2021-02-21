
export function hexToRGBA(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16).toString();
  const g = parseInt(hex.slice(3, 5), 16).toString();
  const b = parseInt(hex.slice(5, 7), 16).toString();

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha.toString() + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}