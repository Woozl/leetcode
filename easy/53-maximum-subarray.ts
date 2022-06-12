// https://leetcode.com/problems/maximum-subarray/

// application of Kadane's algorithm

function maxSubArray(nums: number[]): number {
    let localMax = nums[0];
    let globalMax = nums[0];

    for(let i = 1; i < nums.length; ++i) {
        if(nums[i] > nums[i] + localMax) {
            localMax = nums[i];
        } else {
            localMax = nums[i] + localMax;
        }
        if(localMax > globalMax) globalMax = localMax;
    }

    return globalMax;
};

// let nums = [-2,1,-3,4,-1,2,1,-5,4];
// console.log(maxSubArray(nums));
