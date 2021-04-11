/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const resultArr = [];
  const arr = str.split('');
  let repeat = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) { // сравнение с предыдущим элементом, если есть совпадения
      repeat++;
      if (i === arr.length - 1) { resultArr.push(`${repeat}${arr[i]}`); } // если элемент последний то сразу его и пушим, иначе продолжаем суммировать повторы
    } else if (repeat === 1) {
      // если элемент не равен предыдущему и у предыдущего также не было совпадений
      resultArr.push(arr[i - 1]); // пушим предыдущий
      if (i === arr.length - 1) { resultArr.push(arr[i]); }
      // если элемент последний то сразу его и пушим
    } else { // если на текущей итерации нет совпадений, но у предыдущего элемента они были
      resultArr.push(`${repeat}${arr[i - 1]}`); // пушим предыдущий с количсетвом повторений
      repeat = 1; // сбрасывает повторы, чтобы работать со следующими итерациями
      if (i === arr.length - 1) { resultArr.push(arr[i]); }
      // если элемент последний то сразу его и пушим
    }
  }
  return resultArr.join('');
}

module.exports = encodeLine;
