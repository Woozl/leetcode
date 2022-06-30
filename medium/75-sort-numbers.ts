// https://leetcode.com/problems/sort-colors/

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const numColors: [number, number, number] = [0, 0, 0];

    for(const c of nums)
        ++numColors[c];

    console.log(numColors)

    let currentColor = 0;
    for(let i = 0; i < nums.length; ++i) {
        while(numColors[currentColor] <= 0) {
            ++currentColor;
        }

        nums[i] = currentColor;
        --numColors[currentColor];
    }
};

// const nums = [2];
// sortColors(nums);
// console.log(nums);