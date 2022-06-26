// https://leetcode.com/problems/validate-binary-search-tree/


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

function isValidBST(root: TreeNode | null): boolean {
    if(root === null) return true;

    let lastNum = -Infinity;

    const stack: TreeNode[] = [];
    let cur: TreeNode | null = root;

    while(stack.length || cur) {
        while(cur) {
            stack.push(cur);
            cur = cur.left;
        }
        
        const p = stack.pop()!;
        if(p.val <= lastNum) return false;
        lastNum = p.val;
        cur = p.right;
    }

    return true;
};

// const root = new TreeNode(3);
// root.left = new TreeNode(1);
// root.left.left = new TreeNode(0);
// root.left.right = new TreeNode(2);
// root.right = new TreeNode(5);
// root.right.left = new TreeNode(4);
// root.right.right = new TreeNode(6);

// console.log(isValidBST(root));

//     3
//   1   5
// 0  2 4  6