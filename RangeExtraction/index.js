function solution(list) {
  let result = [];
  let start = list[0];

  for (let i = 1; i <= list.length; i++) {
    let current = list[i];
    let previous = list[i - 1];

    if (current !== previous + 1) {
      let end = previous;

      if (end - start >= 2) {
        result.push(`${start}-${end}`);
      } else if (end - start === 1) {
        result.push(start, end);
      } else {
        result.push(start);
      }

      if (current !== undefined) {
        start = current;
      }
    }
  }

  return result.join(",");
}

console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
