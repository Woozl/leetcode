// https://leetcode.com/problems/reverse-integer/

function reverse(x: number): number {
    let stringified = x.toString();
    const isNeg = stringified[0] === '-';
    if(isNeg) stringified = stringified.slice(1);
    stringified = stringified.split('').reverse().join('');
    let result = parseInt(stringified);
    if(isNeg) result *= -1;
    if((result < (-2)**31) || (result > (2**31) - 1)) return 0;
    return result;
};

console.log(reverse(-12345678));

// -87654321