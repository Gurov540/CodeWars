function humanReadable(seconds) {
  return [
    Math.floor(seconds / 3600),
    Math.floor(seconds / 60) % 60,
    seconds % 60,
  ]
    .map((time) => String(time).padStart(2, "0"))
    .join(":");
}

console.log(humanReadable(345));
