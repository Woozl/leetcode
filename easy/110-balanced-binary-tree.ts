// https://leetcode.com/problems/balanced-binary-tree/


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


function isBalanced(root: TreeNode | null): boolean {
    if(root === null) return true;

    const depth = (node: TreeNode | null): number => {
        if(node === null) return 0;
        return Math.max(depth(node.left), depth(node.right)) + 1;
    }

    return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

let tree = new TreeNode(3, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(5, new TreeNode(4), new TreeNode(6)));
console.log(isBalanced(tree));