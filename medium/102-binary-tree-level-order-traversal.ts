// https://leetcode.com/problems/binary-tree-level-order-traversal/


// Definition for a binary tree node.
//@ts-ignore
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function levelOrder(root: TreeNode | null): number[][] {
    if(root === null) return [];
    
    const out: number[][] = [[]];

    const queue: Array<{node: TreeNode, height: number}> = [];

    queue.push({node: root, height: 0});

    while(queue.length > 0) {
        const popped = queue.shift()!;

        if(out.length <= popped.height) {
            out.push([]);
        }
        out[popped.height].push(popped.node.val);

        if(popped.node.left !== null) queue.push({
            node: popped.node.left,
            height: popped.height + 1
        });

        if(popped.node.right !== null) queue.push({
            node: popped.node.right,
            height: popped.height + 1
        });
    }

    return out;
};

// const root = new TreeNode(0)
// root.left = new TreeNode(1)
// root.right = new TreeNode(2);

// console.log(levelOrder(root));