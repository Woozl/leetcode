// https://leetcode.com/problems/linked-list-cycle/


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

// Floyd's algorithm (tortoise and the hare)
function hasCycle(head: ListNode | null): boolean {
    if(!head) return false;
    
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    
    while(fast && fast.next && slow) {
        slow = slow.next
        fast = fast.next.next;
        if(slow === fast) return true;
    }

    return false;
};

// function hasCycle(head: ListNode | null): boolean {
//     if(!head) return false;

//     const nodeSet = new Set<ListNode>();
//     let currentNode: ListNode = head;

//     while(currentNode.next) {
//         nodeSet.add(currentNode);

//         if(nodeSet.has(currentNode.next)) return true;

//         currentNode = currentNode.next;
//     }

//     return false;
// };

// A -> B -> C -> D -> E
//           ^         |
//           |_________|

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
a.next = b
b.next = c
c.next = d
d.next = e
e.next = c;

console.log(hasCycle(a));