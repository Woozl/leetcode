// https://leetcode.com/problems/longest-palindromic-substring/

function isPalindrome(s: string): boolean {
    for(let i = 0; i < Math.floor(s.length / 2); ++i)
        if(s[i] !== s[s.length - 1 - i]) return false;
    
    return true;
}

function longestPalindrome(s: string): string {
    let longest: string = "";
    for(let l = 0; l < s.length; ++l) {
        for(let h = l; h < s.length; ++h) {
            const current = s.slice(l, h + 1);
            if(isPalindrome(current) && current.length > longest.length)
                longest = current;
        }
    }

    return longest;
};

// const str = "abracecarxyz";
// console.log(longestPalindrome(str));