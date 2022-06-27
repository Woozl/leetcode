// https://leetcode.com/problems/clone-graph/

// Definition for Node.
//@ts-nocheck
class Node {
    val: number
    neighbors: Node[]
    constructor(val?: number, neighbors?: Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

function cloneGraph(node: Node | null): Node | null {
    if(node === null) return null;
    const copyList: Node[] = Array<Node>(100);

    const seen = new Set<Node>();
    const stack: Node[] = [];
    let current = node;
    stack.push(current);

    while(stack.length) {
        const popped = stack.pop()!; // pop for DFS, shift for BFS

        seen.add(popped);
        if(copyList[popped.val] === undefined)
            copyList[popped.val] = new Node(popped.val);

        for(const neighbor of popped.neighbors) {
            if(!seen.has(neighbor))
                stack.push(neighbor);

            if(copyList[neighbor.val] === undefined) {
                const n = new Node(neighbor.val);
                copyList[neighbor.val] = n;
                copyList[popped.val].neighbors.push(n);
            }
            else
                if(!copyList[popped.val].neighbors.includes(copyList[neighbor.val]))
                    copyList[popped.val].neighbors.push(copyList[neighbor.val]);
        }
    }

    return copyList[node.val];
};

// 1 -- 2
// |    |
// 4 -- 3

// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);

// node1.neighbors = [node2, node4];
// node2.neighbors = [node1, node3];
// node3.neighbors = [node2, node4];
// node4.neighbors = [node1, node3];

// const graph = node1;

// cloneGraph(graph);


const node0 = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node0.neighbors = [node3, node2, node1];
node1.neighbors = [node0, node2];
node2.neighbors = [node4, node1, node0];
node3.neighbors = [node0];
node4.neighbors = [node2];

console.log(cloneGraph(node0))