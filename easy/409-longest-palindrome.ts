// https://leetcode.com/problems/longest-palindrome/

function longestPalindrome(s: string): number {
    let max = 0;

    let b: {[letter: string]: number} = {};

    for(const c of s) {
        if(!b[c]) b[c] = 0;

        b[c] += 1;     
    }

    for(const i in b) {
        if(b[i] % 2 === 0)
            max += b[i];
        else
            max += b[i] - 1;
        
        if(max % 2 === 0 && b[i] % 2 === 1) max += 1;
    }

    return max;
};

// console.log(longestPalindrome("ccc"));

// abccccdd
// a = 1
// b = 1
// c = 4
// d = 2

// a b c c c c d d
// 1 1 1 3 3 5 5 7