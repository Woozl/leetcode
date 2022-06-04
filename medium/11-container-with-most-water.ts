// https://leetcode.com/problems/container-with-most-water/

function maxArea(height: number[]): number {
    let left = {
        x: 0,
        y: height[0]
    }
    let right = {
        x: height.length - 1,
        y: height[height.length-1]
    }
    let maxArea = 0;

    while(right.x !== left.x) {
        let area = (right.x - left.x) * (left.y<right.y ? left.y : right.y);
        if(area > maxArea) maxArea = area;
        if(left.y > right.y)
            right.y = height[--right.x];
        else
            left.y = height[++left.x];
    }

    return maxArea;
};