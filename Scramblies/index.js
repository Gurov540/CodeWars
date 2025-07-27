function scramble(str1, str2) {
  const charMap = new Map();
  for (const char of str1) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (const char of str2) {
    if (!charMap.has(char) || charMap.get(char) === 0) {
      return false;
    }
    charMap.set(char, charMap.get(char) - 1);
  }

  return true;
}

console.log(scramble("cucumber", "cum"));
