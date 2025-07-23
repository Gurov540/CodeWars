function solution(string) {
  return string.replace(/(.)([A-Z])/g, "$1 $2");
}

console.log(solution("camelCasing"));
