// https://leetcode.com/problems/spiral-matrix-ii/

function generateMatrix(n: number): number[][] {
    const out = new Array(n).fill(undefined).map(() => new Array(n).fill(0));

    let rowBoundStart = 0, rowBoundStop = n;
    let colBoundStart = 0, colBoundStop = n;
    let label = 1, r = 0, c = 0;

    while(rowBoundStart < rowBoundStop || colBoundStart < colBoundStop) {
        // right
        while(c < colBoundStop)
            out[r][c++] = label++;
        --c; ++rowBoundStart;

        // down
        ++r;
        if(r >= rowBoundStop) return out;
        while(r < rowBoundStop)
            out[r++][c] = label++;
        --r; --colBoundStop;

        // left
        --c;
        if(c < colBoundStart) return out;
        while(c >= colBoundStart)
            out[r][c--] = label++;
        ++c; --rowBoundStop;

        // up
        --r;
        if(r < rowBoundStart) return out;
        while(r >= rowBoundStart)
            out[r--][c] = label++;
        ++r; ++colBoundStart;

        // put coords in starting position for next loop
        ++c;
        if(c >= colBoundStop) return out;
    }
    
    return out;
};

// console.log(generateMatrix(6));

// 1, 2, 3
// 8, 9, 4
// 7, 6, 5