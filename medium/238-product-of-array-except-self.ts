// https://leetcode.com/problems/product-of-array-except-self/

// Time: O(n), Space: O(1) -- output array isn't counted
function productExceptSelf(nums: number[]): number[] {
    let out = new Array<number>(nums.length);

    out[0] = 1;
    for(let i = 1; i < nums.length; ++i) {
        out[i] = nums[i - 1] * out[i - 1];
    }

    let fac = 1;
    for(let i = nums.length - 1; i >= 0; --i) {
        out[i] = out[i] * fac;
        fac = fac * nums[i];
    }

    return out;
}

// 1   2   3   4
// 24  12  8   6
// 1   2   6   24
//             

// Time: O(1) Space: O(n)
// function productExceptSelf(nums: number[]): number[] {
//     let prods = new Array<number>(nums.length);
//     for(let i = prods.length - 1; i >= 0; --i)
//         prods[i] = (i<prods.length-1 ? nums[i]*prods[i+1] : nums[i])

//     console.log(prods);

//     const list = new Array<number>(nums.length);

//     let lastProd = 1;
//     for(let i = 0; i < list.length; ++i) {
//         console.log(lastProd);

//         if(i + 1 < list.length)
//             list[i] = lastProd * prods[i + 1];
//         else
//             list[i] = lastProd;

//         lastProd *= nums[i];
//     }

//     return list;
// };

console.log(productExceptSelf([1, 2, 3, 4]));
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