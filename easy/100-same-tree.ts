// https://leetcode.com/problems/same-tree/

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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p === null && q === null) return true;
    if(p === null || q === null) return false;
    return p.val === q.val ? isSameTree(p.left, q.left) && isSameTree(p.right, q.right) : false;
};

// let t1 = new TreeNode(0, new TreeNode(1), new TreeNode(2));
// let t2 = new TreeNode(0, new TreeNode(1), new TreeNode(2));

// console.log(isSameTree(t1, t2));