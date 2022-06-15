
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

// bound by recursive call stack limit, stack based iterative is probably better
// function invertTree(root: TreeNode | null): TreeNode | null {
//     const preOrder = (node: TreeNode | null) => {
//         if(node === null) return;

//         const tmp = node.right;
//         node.right = node.left;
//         node.left = tmp;

//         preOrder(node.left);
//         preOrder(node.right);
//     }

//     preOrder(root);

//     return root;
// };

// iterative solution
function invertTree(root: TreeNode | null): TreeNode | null {
    if(root === null) return null;

    let stack: TreeNode[] = [];
    let current: TreeNode | null = root;

    stack.push(current);
    while(stack.length) {
        const popped: TreeNode | null = stack.pop()!;
        const left = popped.left;
        popped.left = popped.right;
        popped.right = left;

        if(popped.left !== null) stack.push(popped.left);
        if(popped.right !== null) stack.push(popped.right);
    }

    return root;
}