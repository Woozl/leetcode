// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

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

//@ts-ignore
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(root === null || p === null || q === null) return null;

    let path1: TreeNode[] | null = null;
    let path2: TreeNode[] | null = null;

    let stack: TreeNode[] = [];
    let current = root;
    stack.push(current)

    if(current === p || current === q) {
        path1 = stack.slice();
        if(current === p && current === q)
            return current;
    }

    loop:
    while(stack.length) {
        while(current.left) {
            current = current.left;
            stack.push(current);
            if(current === p || current === q) {
                if(path1 === null) {
                    path1 = stack.slice();
                }
                else {
                    path2 = stack.slice();
                    break loop;
                }
            }
        }

        let lastPopped: TreeNode | null = null;
        while(stack.length && (!stack.at(stack.length - 1)!.right || stack.at(stack.length - 1)!.right === lastPopped)) {
            lastPopped = stack.pop()!;
        }

        current = stack.at(stack.length - 1)!.right!;
        stack.push(current);
        if(current === p || current === q) {
            if(path1 === null) {
                path1 = stack.slice();
            }
            else {
                path2 = stack.slice();
                break loop;
            }
        }
    }

    if(path1!.length !== path2!.length) {
        if(path1!.length > path2!.length)
            while(path1!.length !== path2!.length) path1!.pop()
        if(path1!.length < path2!.length)
            while(path1!.length !== path2!.length) path2!.pop()
    }
    
    while(path1!.length) {
        const popPath1 = path1!.pop()!;
        const popPath2 = path2!.pop()!;
        
        if(popPath1 === popPath2)
        return popPath1;
    }

    console.log(path1!.map(n => n.val));
    console.log(path2!.map(n => n.val));

    return null;
};

//         5
//       /   \
//     4       6
//   /  \    /  \
//  2    1  3*   7*
//      /
//     0

// const t = new TreeNode(5);
// t.left = new TreeNode(4);
// t.left.left = new TreeNode(2);
// t.left.right = new TreeNode(1);
// t.left.right.left = new TreeNode(0);
// t.right = new TreeNode(6);
// t.right.left = new TreeNode(3);
// t.right.right = new TreeNode(7);

// const p = t.right.left; // 3
// const q = t.right.right; // 7

// console.log(lowestCommonAncestor(t, p, q)); // 6