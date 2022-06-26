// https://leetcode.com/problems/coin-change/

function coinChange(coins: number[], amount: number): number {
    const cache: number[] = new Array(amount + 1).fill(Infinity);
    cache[0] = 0;

    for(let partial = 1; partial <= amount; ++partial)
        for(const coin of coins)
            if(partial - coin >= 0)
                cache[partial] = Math.min(cache[partial], cache[partial - coin] + 1)

    return cache[amount] !== Infinity ? cache[amount] : -1;
};

// console.log(coinChange([1, 3, 4, 5], 7));