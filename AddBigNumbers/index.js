function add(a, b) {
  let result = "";
  let carry = 0;
  let maxLength = Math.max(a.length, b.length);

  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  for (let i = maxLength - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + carry;
    let digit = sum % 10;
    carry = Math.floor(sum / 10);
    result = digit + result;
  }

  if (carry > 0) {
    result = carry + result;
  }

  return result;
}

console.log(add("1", "9999"));
