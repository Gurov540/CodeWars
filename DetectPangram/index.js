function isPangram(string) {
  const cleanStr = string.toLowerCase().replace(/[^a-z]/g, "");
  return new Set(cleanStr).size === 26;
}

console.log(isPangram("qwerty zxcb / a q"));
