let num = 13;

function factorialItr(n) {
  let result = 1;
  if (n < 0 || n > 12) {
    throw new RangeError();
  } else if (n === 0) {
    result = 1;
  } else {
    for (let i = n; i > 0; i--) {
      result *= i;
    }
  }
  return result;
}

console.log(`factorialItr = ${factorialItr(num)}`);

function factorialRec(n) {
  if (n < 0 || n > 12) {
    throw new RangeError();
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorialRec(n - 1);
  }
}

console.log(`factorialRec = ${factorialRec(num)}`);

function factorialLoc(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n === 0
    ? 1
    : Array.from({ length: n }, (_, i) => i + 1).reduce(
        (acc, val) => acc * val,
        1,
      );
}

console.log(`factorialLoc = ${factorialLoc(num)}`);
