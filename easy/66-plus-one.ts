// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
    return (BigInt(digits.join('')) + 1n).toString().split('').map(c => parseInt(c));
};