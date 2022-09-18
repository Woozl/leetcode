// https://leetcode.com/problems/longest-palindromic-substring/

function isPalindrome(s: string): boolean {
    for(let i = 0; i < Math.floor(s.length / 2); ++i)
        if(s[i] !== s[s.length - 1 - i]) return false;
    
    return true;
}

function longestPalindrome(s: string): string {
    let longest: string = s[0];
    const map = new Map<string, number[]>();
    for(let i = 0; i < s.length; ++i) {
        // letter already in map?
        if(map.has(s[i])) {
            for(const lowIndex of map.get(s[i])!) {
                const testString = s.slice(lowIndex, i + 1);
                if(isPalindrome(testString) && testString.length >= longest.length)
                    longest = testString;
            }

            map.get(s[i])!.push(i);
        }
        else {
            map.set(s[i], [i]);
        }
    }

    return longest;
};

const str = "abracecarxyz";
console.log(longestPalindrome(str));