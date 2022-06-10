// https://leetcode.com/problems/string-to-integer-atoi/

function myAtoi(s: string): number {
    let a = s.match(/[\+-]?[0-9]+/);

    // if there is no number
    if(!a) return 0;

    // if characters before number are not spaces
    if(!s.slice(0, a.index).split('').every(c => c === " ")) return 0;

    // set s to the matched string (just numbers and optional +/-)
    s = a[0];

    // convert to int
    let int = parseInt(s)

    // clamp to 32bits
    if(int < -(2**31)) int = -(2**31);
    if(int > 2**31 - 1) int = 2**31 - 1;

    return int;
};