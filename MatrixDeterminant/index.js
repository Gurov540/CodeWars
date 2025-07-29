function determinant(matrix) {
  const n = matrix.length;

  if (n === 1) {
    return matrix[0][0];
  }

  if (n === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  let det = 0;
  for (let j = 0; j < n; j++) {
    const minor = getMinor(matrix, 0, j);
    const sign = j % 2 === 0 ? 1 : -1;

    det += sign * matrix[0][j] * determinant(minor);
  }

  return det;
}

function getMinor(matrix, row, col) {
  return matrix
    .filter((_, i) => i !== row)
    .map((row) => row.filter((_, j) => j !== col));
}

const matrix2x2 = [
  [2, 5],
  [3, 7],
];
console.log(determinant(matrix2x2)); // 2*7 - 5*3 = -1

const matrix3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(determinant(matrix3x3)); // 0 (матрица вырожденная)
