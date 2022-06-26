// https://leetcode.com/problems/count-asterisks/

function countAsterisks(s: string): number {
    let ignore = false;
    let asterisks = 0;

    for(const c of s) {
        if(c === '|') ignore = !ignore;
        if(c === '*' && !ignore) ++asterisks;
    }

    return asterisks;
};