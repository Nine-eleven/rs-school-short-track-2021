/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

 function removeKFromList(l, k) {
  let list = l;
  while (list) {
    if (list.value === k) {
      list = list.next;
    } else {
      break;
    }
  }

  let list2 = list;
  while (list2.next) {
    if (list2.next) {
      if (list2.next.value === k) {
        list2.next = list2.next.next;
      } else {
        list2 = list2.next;
      }
    } else {
      break;
    }
  }
  return list;
}


module.exports = removeKFromList;
