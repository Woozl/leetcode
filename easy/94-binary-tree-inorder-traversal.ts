// https://leetcode.com/problems/binary-tree-inorder-traversal/

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
 
function inorderTraversal(root: TreeNode | null): number[] {
    if(root === null) return [];

    const list: number[] = [];
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;

    while(stack.length > 0 || current !== null) {
        while(current !== null) {
            stack.push(current);

            current = current.left;
        }

        const popped = stack.pop()!;
        list.push(popped.val);
        
        current = popped.right;
    }

    return list;
};

//      3
//    1   5
//  0  2 4  6
