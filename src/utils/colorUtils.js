export function getContrastColor(hex) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.62 ? "#161616" : "#F8F6F2";
}

export function getPillBg(hex) {
  return getContrastColor(hex) === "#161616"
    ? "rgba(22,22,22,0.08)"
    : "rgba(248,246,242,0.14)";
}
