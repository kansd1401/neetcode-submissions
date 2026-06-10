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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        const list = []
        let curr = head
        while(curr) {
            list.push(curr)
            curr = curr.next
        }
        let l = 0, r = list.length - 1;
        const temp = {val: 0, next: null}
        curr = temp
        while(l <= r) {
      
            list[l].next = list[r]
            curr.next = list[l]
            list[r].next = null
            curr = curr.next.next
            l++
            r--
        }
        

        return temp.next
    }
}
