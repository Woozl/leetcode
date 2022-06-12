// https://leetcode.com/problems/valid-anagram/

function isAnagram(s: string, t: string): boolean {
    let buckets = new Array(26).fill(0);

    for(let i = 0; i < s.length; ++i)
        ++buckets[s.charCodeAt(i) - 97];

    for(let i = 0; i < t.length; ++i)
        --buckets[t.charCodeAt(i) - 97];

    return buckets.every(v => v === 0);
}

// let s = "anagram";
// let t = "nagaram";
// console.log(isAnagram(s, t));

// function isAnagram(s: string, t: string): boolean {
//     if(s.length !== t.length) return false;
    
//     let sa = s.split('').sort();
//     let ta = t.split('').sort();

//     for(let i = 0; i < s.length; ++i)
//         if(sa[i] !== ta[i]) return false;

//     return true;
// };
