function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}
console.log(toCamelCase("The_Stealth-Warrior"));
