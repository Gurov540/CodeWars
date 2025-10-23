function numberOfRoutes(m, n) {
  let total = m + n - 2;
  let k = Math.min(m - 1, n - 1);
  let res = 1;

  for (let i = 1; i <= k; i++) {
    res = (res * (total - k + i)) / i;
  }

  return Math.round(res);
}

console.log(numberOfRoutes(3, 7));
console.log(numberOfRoutes(3, 3));
console.log(numberOfRoutes(2, 7));
console.log(numberOfRoutes(3, 11));
