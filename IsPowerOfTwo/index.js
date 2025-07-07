function isPowerOfTwo(n) {
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      console.log(`число[${i}]: `, true);
    } else {
      console.log(`число[${i}]: `, false);
    }
  }
}

isPowerOfTwo(10);
