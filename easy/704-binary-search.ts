// https://leetcode.com/problems/binary-search/

function search(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;

    while(l <= r) {
        let m = Math.floor(l + (r - l) / 2);

        if(nums[m] === target) return m;

        if(target < nums[m]) r = m - 1;

        if(target > nums[m]) l = m + 1;
    }

    return -1;
};

// console.log(search([-1,0,3,5,9,12], 9));