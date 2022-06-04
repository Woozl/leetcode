// https://leetcode.com/problems/richest-customer-wealth/

function maximumWealth(accounts: number[][]): number {
    return Math.max(...accounts.map(customer => customer.reduce((prev, curr) => prev + curr)))
};