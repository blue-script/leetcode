// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Input: head = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// ✅ SOLUTION
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return head
  }

  let prev = null
  let cur = head

  while (cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
};
