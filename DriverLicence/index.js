function driver(data) {
  const surname = data[2].toUpperCase().slice(0, 5);
  const part1 = surname.padEnd(5, "9");

  const [dayStr, monthStr, year] = data[3].split("-");
  const day = dayStr.padStart(2, "0");
  const decade = year[year.length - 2];
  const yearDigit = year[year.length - 1];

  const months = {
    JAN: "01",
    FEB: "02",
    MAR: "03",
    APR: "04",
    MAY: "05",
    JUN: "06",
    JUL: "07",
    AUG: "08",
    SEP: "09",
    OCT: "10",
    NOV: "11",
    DEC: "12",
  };
  const monthKey = monthStr.toUpperCase().slice(0, 3);
  let month = months[monthKey];

  if (data[4] === "F") {
    month = (parseInt(month) + 50).toString();
  }

  const firstInitial = data[0][0].toUpperCase();
  const middleInitial = data[1] ? data[1][0].toUpperCase() : "9";

  return (
    part1 +
    decade +
    month +
    day +
    yearDigit +
    firstInitial +
    middleInitial +
    "9AA"
  );
}

console.log(driver(["John", "James", "Smith", "01-Jan-2000", "M"]));
