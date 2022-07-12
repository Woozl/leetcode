// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
    const s = new Set<number>();

    for(const num of nums) {
        if(s.has(num)) return true;
        s.add(num);
    }

    return false;
};