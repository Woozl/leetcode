// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

function minimumSum(num: number): number {
    const digits = [
        Math.floor(num / 1000),
        Math.floor(num / 100) % 10,
        Math.floor(num / 10) % 10,
        num % 10
    ];
    
    digits.sort((a, b) => a - b);

    return digits[0]*10 + digits[2] + digits[1]*10 + digits[3]
};

// console.log(minimumSum(3004));