function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}

console.log(maskify("4556364607935616"));
