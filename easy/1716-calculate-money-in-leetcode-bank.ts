// https://leetcode.com/problems/calculate-money-in-leetcode-bank/

function totalMoney(n: number): number {
    let week = Math.floor(n / 7);
    let day = n % 7;

    // sum of arithmetic sequence
    // https://byjus.com/sum-of-arithmetic-sequence-formula/
    // starting value a = 28, increase by d = 7 weekly
    // S_n = (2/n)*(2a + (n - 1)*d)

    // 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28   0   28
    // 2 + 3 + 4 + 5 + 6 + 7 + 8 = 35   1   28 + 7
    // 3 + 4 + 5 + 6 + 7 + 8 + 9 = 42   2   28 + 7 + 7

    return (week/2)*(2*28 + (week-1)*7) + (day/2)*(2*(week+1) + (day-1));
};