// https://leetcode.com/problems/search-insert-position/

function searchInsert(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        const mid = Math.floor(low + (high - low) / 2);

        if(nums[mid] === target) return mid;

        if (target < nums[mid]) high = mid - 1;

        else low = mid + 1;
    }

    return low;
};

// console.log(searchInsert([0, 1, 4, 5, 8, 9], -1));
// console.log(searchInsert([0, 1, 4, 5, 8, 9], 0));
// console.log(searchInsert([0, 1, 4, 5, 8, 9], 1));
// console.log(searchInsert([0, 1, 4, 5, 8, 9], 3));
// console.log(searchInsert([0, 1, 4, 5, 8, 9], 5));
// console.log(searchInsert([0, 1, 4, 5, 8, 9], 7));
// console.log(searchInsert([0, 1, 4, 5, 8, 9], 9));
// console.log(searchInsert([0, 1, 4, 5, 8, 9], 10));
// console.log(searchInsert([1], 1));


// 0 1 4 5 8 9
// L   M     H
// L H
//       LH

// 1 3 5  6  target 5
// L M    H
//     LM H