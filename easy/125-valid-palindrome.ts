// https://leetcode.com/problems/valid-palindrome/

//@ts-ignore
function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]*/g, '');
    console.log(s);

    for(let i = 0; i < s.length / 2; ++i) {
        if(s[i] !== s[s.length - i - 1]) return false;
    }
    
    return true;
};

// console.log(isPalindrome("A man, a plan, a canal, Panama!"));