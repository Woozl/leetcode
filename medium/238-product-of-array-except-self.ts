// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
    let prods = new Array<number>(nums.length);
    for(let i = prods.length - 1; i >= 0; --i)
        prods[i] = (i<prods.length-1 ? nums[i]*prods[i+1] : nums[i])

    console.log(prods);

    const list = new Array<number>(nums.length);

    let lastProd = 1;
    for(let i = 0; i < list.length; ++i) {
        console.log(lastProd);

        if(i + 1 < list.length)
            list[i] = lastProd * prods[i + 1];
        else
            list[i] = lastProd;

        lastProd *= nums[i];
    }

    return list;
};

// console.log(productExceptSelf([2, 3]));
// solution: 120 60 40 30 24

// 120 120 60 20 5      R->L product (precalc)
// 1   2   6  24 120    L->R product

// 120
//     120

// 120 60
//         60
// 1

// 120 60 40
//           20
//     2

// 120 60 40 30
//              5
//        6

// 120 60 40 30 24
//                
//           24