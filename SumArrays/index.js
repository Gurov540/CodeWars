function sum(numbers) {
  let numberSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    numberSum += numbers[i];
  }
  return numberSum;
}

console.log(sum([1, 2.5, -1, 0, 14]));
