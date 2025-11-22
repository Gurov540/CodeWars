function permutations(string) {
  let result = new Set();

  function backtrack(prefix, remaining) {
    if (remaining.length === 0) {
      result.add(prefix);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const next = prefix + remaining[i];
      const rest = remaining.slice(0, i) + remaining.slice(i + 1);
      backtrack(next, rest);
    }
  }

  backtrack("", string);
  return Array.from(result);
}

console.log(permutations("abc"));
console.log(permutations("abbc"));
console.log(permutations("abcd"));
