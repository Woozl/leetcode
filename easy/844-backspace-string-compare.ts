// https://leetcode.com/problems/backspace-string-compare/

function backspaceCompare(s: string, t: string): boolean {
    let outS = '', outT = '';

    for(const c of s) {
        if(c === '#')
            outS = outS.length > 0 ? outS.slice(0, outS.length - 1) : '';
        else
            outS += c;
    }

    for(const c of t) {
        if(c === '#')
            outT = outT.length > 0 ? outT.slice(0, outT.length - 1) : '';
        else
            outT += c;
    }

    return outS === outT;
};

// const s = 'ab#c', t = 'ad#c';
// console.log(backspaceCompare(s, t))