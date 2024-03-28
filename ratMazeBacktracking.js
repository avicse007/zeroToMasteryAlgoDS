function ratMaze(arr) {
  let solutions = new Set();
  let n = arr.length;
  let visited = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  let path = "";

  solve(arr, 0, 0, n, path, visited, solutions);

  return solutions;
}

function solve(maze, row, col, n, path, visited, sol) {
  //check if first cell itself is [0][0] =0
  if (maze[0][0] == 0) {
    return sol;
  }

  //check if we reached destination
  if (row == n - 1 && col == n - 1) {
    sol.add(path);
    return;
  }
  visited[row][col] = true;
  /*
  We can remove 4 ifs with single loop using following construct 

    Direction : D  L  R  U
   changeInRow: +1 +0 +0 -1
   changeInCol: +0 -1 +1 +0
  */

  let direction = ["D", "L", "R", "U"];
  let changeInRow = [1, 0, 0, -1];
  let changeInCol = [0, -1, 1, 0];
  for (let i = 0; i < 4; i++) {
    let nextRow = row + changeInRow[i];
    let nextCol = col + changeInCol[i];
    if (isSafe(nextRow, nextCol, n, visited, maze)) {
      solve(maze, nextRow, nextCol, n, path + direction[i], visited, sol);
    }
  }

  //   // go Down if possible
  //   if (isSafe(row + 1, col, n, visited, maze)) {
  //     solve(maze, row + 1, col, n, path + "D", visited, sol);
  //   }
  //   // go Left if possible
  //   if (isSafe(row, col - 1, n, visited, maze)) {
  //     solve(maze, row, col - 1, n, path + "L", visited, sol);
  //   }
  //   // go Right if possible
  //   if (isSafe(row, col + 1, n, visited, maze)) {
  //     solve(maze, row, col + 1, n, path + "R", visited, sol);
  //   }
  //   // go Up if possible
  //   if (isSafe(row - 1, col, n, visited, maze)) {
  //     solve(maze, row - 1, col, n, path + "U", visited, sol);
  //   }
  visited[row][col] = false;
}

function isSafe(row, col, n, visited, maze) {
  if (
    row < n &&
    row >= 0 &&
    col < n &&
    col >= 0 &&
    maze[row][col] != 0 &&
    !visited[row][col]
  ) {
    return true;
  } else {
    return false;
  }
}

const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
console.log(`Solution is `, ratMaze(maze));
