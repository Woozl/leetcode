// https://leetcode.com/problems/top-k-frequent-elements/description/

function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();
    for (const num of nums) {
        const currentFreq = freqMap.get(num);
        freqMap.set(num, (currentFreq ?? 0) + 1);
    }
    
    const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

    return sorted.slice(0, k).map(([num]) => num);
};

// console.log(topKFrequent([1, 2, 3, 4, 5, 2, 2, 2, 3, 3], 2)); // 2, 3
