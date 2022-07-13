// https://leetcode.com/problems/spiral-matrix/

function spiralOrder(matrix: number[][]): number[] {
    const out: number[] = [];

    const cols = matrix[0].length
    const rows = matrix.length
    
    let colBoundStart = 0, colBoundStop = cols;
    let rowBoundStart = 0, rowBoundStop = rows;
    let c = 0, r = 0;

    while(rowBoundStart < rowBoundStop || colBoundStart < colBoundStop) {
        // right
        while(c < colBoundStop)
            out.push(matrix[r][c++]);
        --c; ++rowBoundStart;
    
        // down
        ++r;
        if(r >= rowBoundStop) return out;
        while(r < rowBoundStop)
            out.push(matrix[r++][c]);
        --r; --colBoundStop;
    
        // left
        --c;
        if(c < colBoundStart) return out;
        while(c >= colBoundStart)
            out.push(matrix[r][c--]);
        ++c; --rowBoundStop;
    
        // up
        --r;
        if(r < rowBoundStart) return out;
        while(r >= rowBoundStart)
            out.push(matrix[r--][c]);
        ++r; ++colBoundStart;
    
        ++c;
        if(c >= colBoundStop) return out;
    }

    return out;
};

// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ];

// const matrix = [
//     [1, 2, 3],
//     [6, 5, 4],
// ];

// const matrix = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// const matrix = [
//     [1],
//     [2],
//     [3],
// ];

// const matrix = [
//     [1, 2, 3]
// ];

// const matrix = [
//     [1,  2,  3,  4,  5,  6],
//     [14, 15, 16, 17, 18, 7],
//     [13, 12, 11, 10, 9,  8],
// ];

// console.log(spiralOrder(matrix));