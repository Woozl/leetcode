// https://leetcode.com/problems/3sum/

function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    const list: number[][] = [];

    for(let i = 0; i < nums.length - 2; ++i) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        console.log(i);

        const search = -nums[i];
        
        let low = i + 1;
        let high = nums.length - 1;

        while(low < high) {
            let twoSum = nums[low] + nums[high];
            
            if(twoSum === search) {
                list.push([nums[i], nums[low], nums[high]]);
                
                while(low < high && nums[low] === nums[low+1]) ++low;
                ++low;
                while(low < high && nums[high] === nums[high-1]) --high;
                --high;
            }
            else if(twoSum < search)
                ++low;
            else if(twoSum > search)
                --high;
        }
    }
    return list;
};

// const nums = [-1,0,1,2,-1,-4];
// console.log(threeSum(nums));