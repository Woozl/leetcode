// https://leetcode.com/problems/happy-number/

// floyd's algorithm
const isCyclic = (seq: number[]): boolean => {
    let slow = 0;
    let fast = 1;

    while(slow<seq.length && fast<seq.length) {
        slow += 1;
        fast += 2;
        if(seq[slow] === seq[fast]) return true;
    }

    return false;
}

function isHappy(n: number): boolean {
    let currentNum = n;
    let sum = 0;
    let pastVals = []

    while(sum !== 1) {
        const digits = [];

        while(currentNum >= 1) {
            digits.unshift(currentNum % 10);
            currentNum = Math.floor(currentNum / 10);
        }
    
        sum = digits.reduce((prev, curr) => prev + curr**2, 0)
        currentNum = sum;
        pastVals.push(sum);
        if(isCyclic(pastVals)) return false;
    }
    
    return true;
};

isHappy(123718724812741);