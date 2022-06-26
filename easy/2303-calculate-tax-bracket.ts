// https://leetcode.com/problems/calculate-amount-paid-in-taxes/

function calculateTax(brackets: number[][], income: number): number {
    let tax = 0;

    let prevCap = 0;
    for(const bracket of brackets) {
        const cap = bracket[0], percent = bracket[1] / 100;
        const bracketTax = income < (cap-prevCap) ? income : (cap-prevCap);
        income -= bracketTax;
        
        tax += bracketTax * percent;
        prevCap = cap;
    }
    
    return tax;
};

// console.log(calculateTax([[3,50],[7,10],[12,25]], 10)) // 2.65

// tax = 1.5
// inc = 7
// cap = 3, perc = .5
// 10 - 3 = 7
