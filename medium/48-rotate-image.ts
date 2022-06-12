// https://leetcode.com/problems/rotate-image/

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const l = matrix.length;
    const m = matrix;
    for(let r = 0; r < l / 2; ++r) {
        for(let c = r; c < l - r - 1; ++c) {
            let tmp = m[r][c];
            m[r][c] = m[l-c-1][r];
            m[l-c-1][r] = m[l-r-1][l-c-1];
            m[l-r-1][l-c-1] = m[c][l-r-1];
            m[c][l-r-1] = tmp;
        }
    }
};

// m[r][c]
// m[0][0] m[0][1] m[0][2]
// m[1][0] m[1][1] m[1][2]
// m[2][0] m[2][1] m[2][2]

// let m = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// rotate(m);

// console.log(m);
