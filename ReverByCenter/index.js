function reverseByCenter(word) {
  const wordLength = word.length;
  const mid = Math.floor(wordLength / 2);

  if (wordLength % 2 === 0) {
    return word.slice(mid) + word.slice(0, mid);
  } else {
    return word.slice(mid + 1) + word[mid] + word.slice(0, mid);
  }
}

console.log(reverseByCenter("111222"));
console.log(reverseByCenter("111534222"));
