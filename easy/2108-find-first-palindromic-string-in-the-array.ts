// find-first-palindromic-string-in-the-array

const isPal = (s: string) => {
    for(let i = 0; i < s.length; ++i) {
        if(s[i] !== s[s.length - 1 - i])
            return false;
    }
    return true;
}

function firstPalindrome(words: string[]): string {
    for(const w of words) {
        if(isPal(w)) return w;
    }
    return '';
};

console.log(isPal(''));