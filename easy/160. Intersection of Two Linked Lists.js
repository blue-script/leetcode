// Given the heads of two singly linked - lists headA and headB, return the node at which the two lists intersect.If the two linked lists have no intersection at all, return null.
// For example, the following two linked lists begin to intersect at node c1:

// ✅ SOLUTION
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// first solution

var getIntersectionNode = function (headA, headB) {
  let a = headA

  while (a !== null) {
    let b = headB

    while (b !== null) {
      if (a === b) {
        return a
      }
      b = b.next
    }
    a = a.next
  }

  return null
};

// second solution

var getIntersectionNode = function (headA, headB) {
  let curA = headA
  let curB = headB

  while (curA !== curB) {
    if (!curA) curA = headB
    else curA = curA.next
    if (!curB) curB = headA
    else curB = curB.next
  }

  return curA
}