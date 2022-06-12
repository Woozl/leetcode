// https://leetcode.com/problems/merge-two-sorted-lists/


// @ts-ignore
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let out: ListNode | null = new ListNode();
    let start = out;

    while(list1!==null && list2!==null) {
        out.next = new ListNode();
        out = out.next;
        if(list1.val < list2.val) {
            out.val = list1.val;
            list1 = list1.next;
        } else {
            out.val = list2.val;
            list2 = list2.next;
        }
    }

    if(list1 !== null) {
        while(list1) {
            out.next = new ListNode();
            out = out?.next;
            out.val = list1.val;
            list1 = list1.next;
        }
    }
    if(list2 !== null) {
        while(list2) {
            out.next = new ListNode();
            out = out?.next;
            out.val = list2.val;
            list2 = list2.next;
        }
    }

    out = null;

    return start.next;
};

// let a = new ListNode(3, new ListNode(5, new ListNode(7))); // 3 5 7
// let b = new ListNode(2, new ListNode(4, new ListNode(6))); // 2 4 6 8

// let merged = mergeTwoLists(a, b);

// while(merged) {
//     console.log(merged.val);
//     merged = merged.next;
// }