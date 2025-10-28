function spiralize(n) {
  let spiral = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    spiral[0][i] = 1;
  }

  let x = 0;
  let y = n - 1;

  let dx = 1;
  let dy = 0;

  let step = n - 1;
  let count = 0;

  while (step > 0) {
    for (let i = 0; i < step; i++) {
      x += dx;
      y += dy;
      spiral[x][y] = 1;
    }

    [dx, dy] = [dy, -dx];

    count++;

    if (count % 2 === 0) {
      step -= 2;
    }
  }

  return spiral;
}
console.log(spiralize(5));
