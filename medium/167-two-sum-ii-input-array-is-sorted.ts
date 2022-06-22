// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

//@ts-ignore
function twoSum(numbers: number[], target: number): number[] {
    let low = 0, high = numbers.length - 1;

    while(low <= high) {
        if(numbers[low] + numbers[high] === target)
            return [low + 1, high + 1];
        else if(numbers[low] + numbers[high] > target)
            --high;
        else
            ++low;
    }
    return [];
};

const numbers = [2,7,11,15];
const target = 9;
console.log(twoSum(numbers, target));

// 2 7 11 15 target = 9
// L      H  sum = 17
// L   H     sum = 13
// L H       sum = 9

// 2 7 11 15 target = 22
// L      H  sum = 17
//   L    H  sum = 22