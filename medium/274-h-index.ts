// https://leetcode.com/problems/h-index/

function hIndex(citations: number[]): number {
    const sorted = citations.sort((a,b) => a-b).reverse();
    // const sorted = Uint16Array.from(citations).sort().reverse();
    let h = 0;
    sorted.forEach((v, i) => {
        if(v>=i+1) h=i+1;
    });
    return h;
};