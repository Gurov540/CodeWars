function topThreeWords(text) {
  console.log("Входной текст   => ", text);

  text = text.toLowerCase();
  console.log("Нижний регистр  => ", text);

  text = text.replace(/[^a-z']/g, " ");
  console.log("Удаление знаков => ", text);

  let words = text.split(/\s+/);
  console.log("Строка на слова => ", words);

  words = words.filter((w) => w && w.replace(/'/g, ""));
  console.log(words);

  if (words.length === 0) return [];

  const counts = new Map();
  for (let w of words) {
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }
  console.log("Map => ", counts);

  const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, 3).map(([word]) => word);
}

console.log(
  topThreeWords(
    "In a village of La Mancha, the name of which I have no desire to call to"
  )
);
