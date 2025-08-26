class RomanNumerals {
  static toRoman(num) {
    const map = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" },
    ];

    let result = "";

    for (const { value, symbol } of map) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }

    return result;
  }

  static fromRoman(str) {
    const map = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    };

    let i = 0;
    let result = 0;

    while (i < str.length) {
      const curr = map[str[i]];
      const next = map[str[i + 1]];

      if (next && curr < next) {
        result += next - curr;
        i += 2;
      } else {
        result += curr;
        i += 1;
      }
    }
    return result;
  }
}

// --- Тесты ---
console.log(RomanNumerals.toRoman(2000)); // MM
console.log(RomanNumerals.toRoman(1666)); // MDCLXVI
console.log(RomanNumerals.toRoman(86)); // LXXXVI
console.log(RomanNumerals.toRoman(1)); // I

console.log(RomanNumerals.fromRoman("MM")); // 2000
console.log(RomanNumerals.fromRoman("MDCLXVI")); // 1666
console.log(RomanNumerals.fromRoman("LXXXVI")); // 86
console.log(RomanNumerals.fromRoman("I")); // 1
