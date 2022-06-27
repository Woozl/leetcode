// https://leetcode.com/problems/largest-3-same-digit-number-in-string/

function largestGoodInteger(num: string): string {
    let max = -1;

    for(let i = 0; i < num.length - 2; ++i)
        if(num[i] === num[i+1] && num[i] === num[i+2])
            max = Math.max(parseInt(num[i]), max)

    return max === -1 ? '' : max.toString().repeat(3);
};

// console.log(largestGoodInteger("12399954832944484"));