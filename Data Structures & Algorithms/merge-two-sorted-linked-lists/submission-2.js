/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr1 = list1, curr2 = list2;
        if(!list1 && !list2) return list1
        let curr
        let head;
        while(curr1 || curr2) {
            let newV;
            if(!curr2 || curr1?.val < curr2?.val) {
                newV = curr1
                curr1 = curr1.next
            } else if(!curr1 || curr1?.val >= curr2?.val) {
                newV = curr2
                curr2 = curr2.next
            }

            newV.next = null
            if(!curr) head = newV
            if (curr) curr.next = newV
            curr = newV
        }
        return head

    }
}
