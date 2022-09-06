// https://leetcode.com/problems/add-digits/

function addDigits(num: number): number {
    if(num >= 0 && num <= 9) return num;
    
    return addDigits(num.toString(10).split('').map(char => parseInt(char)).reduce((acc, curr) => acc + curr, 0));
};

console.log(addDigits(12345));