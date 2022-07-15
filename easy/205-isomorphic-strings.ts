// https://leetcode.com/problems/isomorphic-strings/

function isIsomorphic(s: string, t: string): boolean {
    const sToT: {[s: string]: string} = {};    
    const tToS: {[s: string]: string} = {};    
    
    if(s.length !== t.length) return false;

    for(let i = 0; i < s.length; ++i) {
        const sChar = s[i], tChar = t[i];
        if(sChar in sToT && sToT[sChar] !== tChar) return false; 
        if(tChar in tToS && tToS[tChar] !== sChar) return false; 

        sToT[sChar] = tChar;
        tToS[tChar] = sChar;
    }
    
    return true;
};

// console.log(isIsomorphic('egg', 'add')); // true
// console.log(isIsomorphic('foo', 'bar')); // false
// console.log(isIsomorphic('paper', 'title')); // true
// console.log(isIsomorphic('badc', 'baba')); // false