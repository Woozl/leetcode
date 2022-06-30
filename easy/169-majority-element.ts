// https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let current = nums[0];
    let count = 0;
    for(const n of nums) {
        if(n !== current) {
            current = n;
            count = 0;
        }

        ++count;
        if(count > Math.floor(nums.length / 2)) return current;
    }
    
    return 0;
};

// const nums = [2, 2, 1, 1, 1];
// console.log(majorityElement(nums));