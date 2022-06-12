// https://leetcode.com/problems/palindrome-number/

//@ts-ignore
function isPalindrome(x: number): boolean {
    if(x < 0) return false;

    const stringified = x.toString();
    const length = stringified.length;

    for(let i = 0; i <= length/2; ++i) {
        if(stringified[i] !== stringified[length - 1 - i]) return false;
    }

    return true;
};