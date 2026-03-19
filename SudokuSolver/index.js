var puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

function sudoku(puzzle) {
  function solve() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (puzzle[r][c] === 0) {
          for (let n = 1; n <= 9; n++) {
            if (isValid(r, c, n)) {
              puzzle[r][c] = n;
              if (solve()) return true;
              puzzle[r][c] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  function isValid(r, c, n) {
    for (let i = 0; i < 9; i++) {
      if (
        puzzle[r][i] === n ||
        puzzle[i][c] === n ||
        puzzle[3 * Math.floor(r / 3) + Math.floor(i / 3)][
          3 * Math.floor(c / 3) + (i % 3)
        ] === n
      )
        return false;
    }
    return true;
  }

  solve();
  return puzzle;
}

console.log(sudoku(puzzle));
