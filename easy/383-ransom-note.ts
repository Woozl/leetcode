// https://leetcode.com/problems/ransom-note/

function canConstruct(ransomNote: string, magazine: string): boolean {
    let buckets = new Array(26).fill(0);

    for(let i = 0; i < magazine.length; ++i)
        ++buckets[magazine.charCodeAt(i) - 97];

    for(let i = 0; i < ransomNote.length; ++i)
        --buckets[ransomNote.charCodeAt(i) - 97];

    return buckets.every(v => v >= 0);
};

// let magazine = "abracadabra";
// let ransomNote = "crab";
// console.log(canConstruct(ransomNote, magazine));