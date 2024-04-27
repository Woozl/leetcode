// https://leetcode.com/problems/two-sum/

// 1 pass hashmap
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (const [i, num] of nums.entries()) {
        const diff = target - num;
        const diffIdx = map.get(diff);
        if (diffIdx !== undefined) {
            return [diffIdx, i]
        }
        map.set(num, i);
    }

    return []
}

// function twoSum(nums: number[], target: number): number[] {
//     const map = new Map([...nums.entries()].map(([index, value]) => [value, index]));
   
//     for (const [i, num] of nums.entries()) {
//         const diff = target - num;
//         const addendIdx = map.get(diff);
//         if (addendIdx && addendIdx !== i) {
//             return [addendIdx, i];
//         }
//     }

//     return [] // no solution
// };

//@ts-ignore
// function twoSum(nums: number[], target: number): number[] {
//     let vals: any = {};
//     let out: number[] = []
//     nums.forEach((v, i) => {
//         let eq = target - v;
//         if(vals[eq] !== undefined){
//             out = [vals[eq], i];
//             return;
//         }
//         else
//             vals[v] = i;
//     });
//     return out;
// }

// function twoSum(nums: number[], target: number): number[] {
//     for(let i = 0; i < nums.length; ++i) {
//         let firstNum = nums[i];
//         for(let j = i + 1; j < nums.length; ++j) {
//             if(firstNum + nums[j] === target) return [i, j];
//         }
//     }
// };


console.log(twoSum([2,7,11,15],9));