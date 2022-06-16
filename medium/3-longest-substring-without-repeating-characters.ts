// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
    let left = 0, right = 0, max = 0;
    let hash: {[index: string]: number} = {};
    while(right < s.length) {
        if(hash.hasOwnProperty(s[right]))
            left = hash[s[right]] + 1 < left ? left : hash[s[right]] + 1;
        hash[s[right]] = right;
        
        console.log(`L: ${left} R: ${right} Diff: ${right - left}`);
        if(right - left + 1 > max) max = right - left + 1;

        ++right;
    }

    return max;
};


// const string = "pwwkew";
// console.log(lengthOfLongestSubstring(string));

// L = 2
// R = 3
// hash = { a: 0, b: 2, }
// 0 1 2 3
// a b b a
//LR 
// L R
//    LR
//   L   R


// hash = {p: 0, w: 5, k: 3, e: 4}
// p w w k e w
// 0 1 2 3 4 5
//LR
// L R
// L   R
//     L R
//     L   R
//       L   R

// 0 1 2 3 4 5 6 7
// a b c a b c b b
//LR
// L R
// L   R
// L     R
//   L     R
//     L     R
//       L     R
//           L   R