// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/

const equalSets = (a: Set<number>, b: Set<number>): boolean => {
    if(a.size !== b.size) return false;
    for(let item of a) if(!b.has(item)) return false;
    return true;
}

function checkValid(matrix: number[][]): boolean {
    let checkSet = new Set<number>();
    for(let i = 0; i < matrix.length; ++i) checkSet.add(i+1);

    for(let row of matrix) {
        let rowSet = new Set(row);
        if(!equalSets(checkSet, rowSet)) return false;
    }

    for(let col = 0; col < matrix[0].length; ++col) {
        let colSet = new Set<number>();
        for(let row = 0; row < matrix.length; ++row) {
            colSet.add(matrix[row][col]);
        }
        if(!equalSets(checkSet, colSet)) return false;
    }

    return true;
};

// let board =
// [
//     [1, 2, 3],
//     [2, 3, 1],
//     [3, 1, 2]
// ]

// console.log(checkValid(board));