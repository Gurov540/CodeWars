function filter_list(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      result.push(list[i]);
    }
  }
  return result;
}

console.log(filter_list([1, 12, 2, "a", "b", "123"]));
