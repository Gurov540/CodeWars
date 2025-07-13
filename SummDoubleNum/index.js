function sumTwoSmallestNumbers(numbers) {
  const positiveIntegers = numbers.filter((n) => Number.isInteger(n) && n > 0);
  if (positiveIntegers.length < 2) {
    console.log("Недостаточно положительных целых чисел");
  } else {
    const [min1, min2] = positiveIntegers.sort((a, b) => a - b);

    return min1 + min2;
  }
}
console.log(sumTwoSmallestNumbers([77]));
