// https://leetcode.com/problems/first-bad-version/

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    return function(n: number): number {
        let low = 0;
        let high = n;

        while(low < high) {
            let mid = Math.floor(low + (high - low) / 2);

            if(isBadVersion(mid)) high = mid;
            else low = mid + 1;
        }
        
        return low;
    };
};

// 0 1 2 3 4 5
//         ^
// l   m     h

// 0 1 2 3 4
//   ^
// l   m   h
// 
