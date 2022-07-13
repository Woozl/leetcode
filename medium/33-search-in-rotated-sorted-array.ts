// https://leetcode.com/problems/search-in-rotated-sorted-array/

function search(nums: number[], target: number): number {
    let l = 0, h = nums.length - 1;

    while(l <= h) {
        const m = Math.floor((h - l) / 2 + l);

        if(nums[m] === target) return m;

        // left sorted portion
        else if(nums[l] <= nums[m]) {
            if(target > nums[m] || target < nums[l])
                l = m + 1;
            else
                h = m - 1;
        }
        
        // right sorted portion
        else {
            if(target < nums[m] || target > nums[h])
                h = m - 1;
            else
                l = m + 1;
        }
    }

    return -1;
};

const arr = [4, 5, 6, 7, 0, 1, 2];

console.log(search(arr, 4))