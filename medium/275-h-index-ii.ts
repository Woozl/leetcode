// https://leetcode.com/problems/h-index-ii/

function hIndexII(citations: number[]): number {
    const sorted = citations.reverse();
    let h = 0;
    sorted.forEach((v, i) => {
        if(v>=i+1) h = i+1;
    })
    return h;
};