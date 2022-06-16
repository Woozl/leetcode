// https://leetcode.com/problems/insert-interval/

function insert(intervals: number[][], newInterval: number[]): number[][] {
    // Binary search for index to start merge
    let low = 0;
    let high = intervals.length;
    while(low < high) {
        const mid = Math.floor(low + (high - low) / 2);

        if(intervals[mid][0] > newInterval[0]) 
            high = mid
        else
            low = mid + 1
    }
    let mergeStart = low;

    // Binary search for index to end merge
    low = 0;
    high = intervals.length;
    while(low < high) {
        const mid = Math.floor(low + (high - low) / 2);

        if(intervals[mid][1] > newInterval[1])
            high = mid
        else
            low = mid + 1
    }
    let mergeEnd = low;

    // if there is a pair to the left of mergeStart, check to see if it needs to be merged with newInterval
    let mergeLeft = false;
    if(mergeStart >= 1) {
        if(intervals[mergeStart - 1][1] >= newInterval[0]) {
            mergeLeft = true;
        }
    }

    // if there is a pair to the right, check to see if it needs to be merged with newInterval
    let mergeRight = false
    if(mergeEnd < intervals.length) {
        if(intervals[mergeEnd][0] <= newInterval[1]) {
            mergeRight = true;
        }
    }

    // add the newInterval and merge it with surrounding pairs 
    if(mergeLeft && mergeRight){
        intervals.splice(mergeStart - 1, 1 + mergeEnd - mergeStart + 1, [intervals[mergeStart - 1][0], intervals[mergeEnd][1]]);
    }
    else if(mergeLeft) {
        intervals.splice(mergeStart - 1, 1 + mergeEnd - mergeStart, [intervals[mergeStart - 1][0], newInterval[1]]);
    }
    else if(mergeRight) {
        intervals.splice(mergeStart, mergeEnd - mergeStart + 1, [newInterval[0], intervals[mergeEnd][1]]);
    }
    else {
        intervals.splice(mergeStart, mergeEnd - mergeStart, newInterval);
    }

    return intervals;
};

// const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
// const newInterval = [7, 8];
// const out = insert(intervals, newInterval);
// console.log(out);