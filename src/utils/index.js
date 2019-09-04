export const getFontSize = () => {
  const fontSizePx = getComputedStyle(document.documentElement).fontSize
  const fontSize = Number(fontSizePx.substring(0, fontSizePx.length - 2))
  return [fontSize, fontSizePx]
}
