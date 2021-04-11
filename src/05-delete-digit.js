/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      arr.splice(i, 1);
      break;
    } else if (arr[i - 1] < arr[i]) {
      arr.splice(i - 1, 1);
      break;
    }
  }
  return +arr.join('');
}

module.exports = deleteDigit;
