// https://leetcode.com/problems/climbing-stairs/

function climbStairs(n: number): number {
    let oneStep = 1;
    let twoStep = 1;
    let val = oneStep + twoStep;

    if(n < 2) return 1;

    for(let i = n - 2; i >= 0; --i) {
        val = oneStep + twoStep;
        twoStep = oneStep;
        oneStep = val;
    }

    return val;
};

// console.log(climbStairs(2));

// n = 5 (i 5 and 4 shown but not actually in loop)
// Iteration    5 4 3 2 1 0
// val          1 1 2 3 5 8
// oneStep      1 1 2 3 5 8
// twoStep      1 1 1 2 3 5