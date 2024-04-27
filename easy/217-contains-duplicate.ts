// https://leetcode.com/problems/contains-duplicate/

// Time: O(nlogn), Space: O(logn)
function containsDuplicate(nums: number[]): boolean {
    nums.sort();
    for (let i = 0; i < nums.length; ++i) {
        const x = nums[i];
        const y = nums[i + 1];

        if (y === undefined) return false;

        if (x === y) return true;
    }
    
    return false;
};

// Time: O(n), Space: O(n):
// function containsDuplicate(nums: number[]): boolean {
//     const s = new Set<number>();

//     for(const num of nums) {
//         if(s.has(num)) return true;
//         s.add(num);
//     }

//     return false;
// };