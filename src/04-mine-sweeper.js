/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const resultMatrix = [];
  const matrixLength = matrix.length;
  const strLength = matrix[0].length;

  for (let i = 0; i < matrixLength; i++) {
    const arrStr = [];
    for (let j = 0; j < strLength; j++) {
      let numberTrue = 0;
      if (i !== 0 && j !== 0) {
        if (matrix[i - 1][j - 1]) numberTrue += 1;
      }
      if (i !== 0) {
        if (matrix[i - 1][j]) numberTrue += 1;
      }
      if (j !== 0) {
        if (matrix[i][j - 1]) numberTrue += 1;
      }
      if (i !== matrixLength - 1) {
        if (matrix[i + 1][j]) numberTrue += 1;
      }
      if (j !== strLength - 1) {
        if (matrix[i][j + 1]) numberTrue += 1;
      }
      if ((i !== matrixLength - 1) && (j !== strLength - 1)) {
        if (matrix[i + 1][j + 1]) numberTrue += 1;
      }
      if ((i !== matrixLength - 1) && j !== 0) {
        if (matrix[i + 1][j - 1]) numberTrue += 1;
      }
      if ((j !== strLength - 1) && i !== 0) {
        if (matrix[i - 1][j + 1]) numberTrue += 1;
      }
      arrStr.push(numberTrue);
    }
    resultMatrix.push(arrStr);
  }
  return resultMatrix;
}

module.exports = minesweeper;
