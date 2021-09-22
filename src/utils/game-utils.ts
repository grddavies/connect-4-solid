import { SquareVal } from "../components/Square";

export function checkwinner(grid: SquareVal[][], player: SquareVal) {
  const height = grid[0].length,
    width = grid.length;
  // horizontalCheck
  for (let j = 0; j < height - 3; j++) {
    for (let i = 0; i < width; i++) {
      if (
        grid[i][j] === player &&
        grid[i][j + 1] === player &&
        grid[i][j + 2] === player &&
        grid[i][j + 3] === player
      ) {
        return true;
      }
    }
  }
  // verticalCheck
  for (let i = 0; i < width - 3; i++) {
    for (let j = 0; j < height; j++) {
      if (
        grid[i][j] == player &&
        grid[i + 1][j] == player &&
        grid[i + 2][j] == player &&
        grid[i + 3][j] == player
      ) {
        return true;
      }
    }
  }
  // ascendingDiagonalCheck
  for (let i = 3; i < width; i++) {
    for (let j = 0; j < height - 3; j++) {
      if (
        grid[i][j] == player &&
        grid[i - 1][j + 1] == player &&
        grid[i - 2][j + 2] == player &&
        grid[i - 3][j + 3] == player
      )
        return true;
    }
  }
  // descendingDiagonalCheck
  for (let i = 3; i < width; i++) {
    for (let j = 3; j < height; j++) {
      if (
        grid[i][j] == player &&
        grid[i - 1][j - 1] == player &&
        grid[i - 2][j - 2] == player &&
        grid[i - 3][j - 3] == player
      )
        return true;
    }
  }
  return false;
}

export function calculateWinner(lgrid: SquareVal[], nrow: number) {
  const grid = splitArray(lgrid, nrow);
  if (checkwinner(grid, 1)) return 1;
  if (checkwinner(grid, -1)) return -1;
  else return null;
}

function splitArray(array: Array<any>, part: number) {
  var tmp = [];
  for (var i = 0; i < array.length; i += part) {
    tmp.push(array.slice(i, i + part));
  }
  return tmp;
}
