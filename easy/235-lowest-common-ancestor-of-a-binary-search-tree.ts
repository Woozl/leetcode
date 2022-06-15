// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/


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


function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(root === null || p === null || q === null) return null;

    let currentNode: TreeNode | null = root;
    while(currentNode) {
        if(p === currentNode || q === currentNode) return currentNode;
        if(p.val < currentNode.val && q.val > currentNode.val) return currentNode;
        if(p.val > currentNode.val && q.val < currentNode.val) return currentNode;
        
        if(p.val < currentNode.val && q.val < currentNode.val) currentNode = currentNode.left;
        else currentNode = currentNode.right;
    }

    return null;
};