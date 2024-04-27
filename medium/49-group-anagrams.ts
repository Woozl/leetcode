// https://leetcode.com/problems/group-anagrams/description/

// N - number of anagrams
// M - length of words (average)

// Time: O(N*Mlog(M)), Space: O(N*M)

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>(); // { sorted => original }

    for (const str of strs) {
        const anagramKey = str.split('').sort().join('');
        const anagramList = map.get(anagramKey);
        if (anagramList) anagramList.push(str)
        else map.set(anagramKey, [str]);
    }

    return [...map.values()]
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// console.log(groupAnagrams([""]))
// console.log(groupAnagrams(["a"]))