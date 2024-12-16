/*
[ 1->2->3 ]
 prev = next = null;
 curr = head;
 Following will be in a while loop until current is not null
 while(curr != null){
    next = curr.next; -- Assign to next variable first.
    curr.next = prev; -- Assign next of curr to prev to change the direction.
    prev = curr; -- Move prev node to curr node.
    curr = next; -- Move curr node to next variable. After this step the pointers are completely reversed
}
*/


 /* Definition for singly-linked list */
export class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export function reverseList(head) {
    // Initialize pointers
    //head = new ListNode(0,head);
    let prev = null; // Previous node starts as null
    let curr = head[0]; // Current node starts at the head

    // Traverse the list
    while (curr !== null) {
        let next = curr.next; // Save the next node
        
        curr.next = prev; // Reverse the link
        
        // Move pointers forward
        prev = curr; // Move prev to the current node
        curr = next; // Move curr to the next node
    }

    // prev is now the new head of the reversed list
    return prev;
}