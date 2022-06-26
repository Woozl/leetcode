// https://leetcode.com/problems/reverse-linked-list/

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

function reverseList(head: ListNode | null): ListNode | null {
    if(head === null) return null;

    let prev = head, cur = head, seq: ListNode | null = head;
    
    seq = cur.next;
    prev.next = null;

    while(seq) {
        cur = seq;
        seq = seq.next;
        cur.next = prev;
        prev = cur;
    }

    return cur;
};