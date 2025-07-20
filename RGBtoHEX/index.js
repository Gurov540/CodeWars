function rgb(r, g, b) {
  return `${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`.toUpperCase();
}

function rgbToHex(k) {
  return (k = Math.max(0, Math.min(255, Math.round(k)))
    .toString(16)
    .padStart(2, "0"));
}

console.log(rgb(300, 255, 255));
