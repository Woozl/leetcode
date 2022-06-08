// https://leetcode.com/problems/permutations/

const swap = (a: number[], i: number, j: number) => {
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}

const perm = (a: number[], l: number, r: number, list: number[][]) => {
    for(let i = l; i <= r; ++i) {
        if(l === r) {
            list.push(a.slice())
            return;
        }
        swap(a, l, i);
        perm(a, l+1, r, list);
        swap(a, l, i);
    }
}

function permute(nums: number[]): number[][] {
    let list: number[][] = []
    if(nums.length === 1) return [nums];
    perm(nums, 0, nums.length-1, list);
    return list;
};

console.log(permute([0,1, 2, 3]));

// [1, 2, 3]

// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]