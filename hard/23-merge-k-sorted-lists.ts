// https://leetcode.com/problems/merge-k-sorted-lists

// const printLL = (ll: ListNode | null) => {
//     if(ll === null) return;
//     let printArray = [];
//     while(true) {
//         printArray.push(ll.val);
//         if(ll.next !== null)
//             ll = ll.next;
//         else
//             break;
//     }
//     console.log(`[${printArray.toString()}]`)
// };

const linkedListFromArray = (array: Array<number>): ListNode | null => {
    if(!array.length) return null;

    let startNode = new ListNode();
    let prevNode = new ListNode();
    let curNode = new ListNode();
    for(let i = 0; i < array.length; ++i) {
        curNode = new ListNode(array[i]);
        if(i === 0) startNode = curNode; // keep track of first node to reference the list in return
        
        prevNode.next = curNode;
        prevNode = curNode;
    }
    
    return startNode;
};

// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    };
};

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if(!lists.length) return null;

    const copy: number[][] = [];
    for(let [i, list] of lists.entries()) {
        copy.push([]);
        if(!list) continue;

        while(true) {
            copy[i].push(list.val);
            if(list.next)
                list = list.next;
            else
                break;
        }
    }

    const merged = copy.reduce((prev, curr) => prev.concat(curr))

    return linkedListFromArray(merged.sort((a, b) => a - b));
};