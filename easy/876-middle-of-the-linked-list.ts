// https://leetcode.com/problems/middle-of-the-linked-list/

// Definition for singly-linked list.
//@ts-ignore
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function middleNode(head: ListNode | null): ListNode | null {
    if(head === null) return null;

    let fast: ListNode | null = head;
    let slow: ListNode = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    return slow;
};

// 1  2  3  4  5
// SF
//    S  F
//       S     F
let oddL = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(middleNode(oddL)?.val);



// 1  2  3  4  5  6
// SF
//    S  F
//       S     F
//          S        F
let evenL = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
console.log(middleNode(evenL)?.val);



// 1  2
// SF
//    S  F
let smallL = new ListNode(1, new ListNode(2, new ListNode));
console.log(middleNode(smallL)?.val);