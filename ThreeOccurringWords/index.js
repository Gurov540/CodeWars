function topThreeWords(text) {
  // 1. к нижнему регистру
  let words = text
    .toLowerCase()
    .replace(/[^a-z']/g, " ")
    .split(/\s+/)
    .filter((w) => w && w.replace(/'/g, ""));

  if (words.length === 0) return [];

  // 5. считаем частоту
  const counts = {};
  for (let w of words) {
    counts[w] = (counts[w] || 0) + 1;
  }

  // 6. сортировка
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  // 7. первые 3
  return sorted.slice(0, 3).map((entry) => entry[0]);
}

console.log(
  topThreeWords(
    "In a village of La Mancha, the name of which I have no desire to call to"
  )
);
