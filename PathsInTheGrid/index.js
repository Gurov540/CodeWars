function numberOfRoutes(m, n) {
  let total = BigInt(m + n - 2);
  let k = BigInt(Math.min(m - 1, n - 1));
  let res = 1n;

  for (let i = 1n; i <= k; i++) {
    res = (res * (total - i + 1n)) / i;
  }

  return res;
}

console.log(numberOfRoutes(2, 2));
console.log(numberOfRoutes(3, 2));
console.log(numberOfRoutes(3, 3));
console.log(numberOfRoutes(3, 11));
