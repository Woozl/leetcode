// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// O(n) algorithm
function maxProfit(prices: number[]): number {
    if(prices.length < 2) return 0;
    
    let l = 0;
    let r = 1;
    let profit = 0;

    while(r < prices.length) {
        if(prices[r] < prices[l]) l = r;
        else if(prices[r] - prices[l] > profit) profit = prices[r] - prices[l];
        ++r;
    }

    return profit;
};

// let prices = [2,1,2,1,0,1,2];
// console.log(maxProfit(prices));

// brute force O(n)
// function maxProfit(prices: number[]): number {
//     let profit = 0;

//     for(let buy = 0; buy < prices.length; ++buy) {
//         for(let sell = buy + 1; sell < prices.length; ++sell) {
//             if(prices[sell] - prices[buy] > profit) profit = prices[sell] - prices[buy];
//         }
//     }
//     return profit;
// };