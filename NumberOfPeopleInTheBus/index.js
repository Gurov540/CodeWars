var number = function (busStops) {
  let result = 0;

  for (let i = 0; i < busStops.length; i++) {
    result = result + busStops[i][0];
    result = result - busStops[i][1];
  }
  return result;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
