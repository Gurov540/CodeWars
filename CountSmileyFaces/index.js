function countSmileys(arr) {
  const regex = /^[:;][-~]?[)D]$/;
  return arr.filter((face) => regex.test(face)).length;
}

console.log(countSmileys([":D", ":~)", ";~D", ":ц)"]));
