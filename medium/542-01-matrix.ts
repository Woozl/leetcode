// https://leetcode.com/problems/01-matrix/

// dp approach
function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length;
    const n = mat[0].length;
    const max = m + n
    for(let r = 0; r < m; ++r) {
        for(let c = 0; c < n; ++c) {
            if(mat[r][c] === 0) continue;

            let north = max;
            let west = max;

            if(r - 1 >= 0) north = mat[r-1][c];
            if(c - 1 >= 0) west = mat[r][c-1];

            let cell = Math.min(north, west) + 1;
            if(cell === Infinity) continue;
            else mat[r][c] = cell;
        }
    }

    for(let r = m - 1; r >= 0; --r) {
        for(let c = n - 1; c >= 0; --c) {
            if(mat[r][c] === 0) continue;

            let south = max;
            let east = max;

            if(r + 1 < m) south = mat[r+1][c];
            if(c + 1 < n) east = mat[r][c+1];

            let cell = Math.min(mat[r][c], Math.min(south, east) + 1);
            if(cell === Infinity) continue;
            else mat[r][c] = cell;
        }
    }
    return mat;
};

// let mat = [
//     [0, 0, 1, 0],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [0, 1, 1, 1]
// ]
// mat.forEach(r => console.log(r.join(' ')));
// console.log('');
// mat = updateMatrix(mat);
// mat.forEach(r => console.log(r.join(' ')));