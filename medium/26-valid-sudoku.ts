// https://leetcode.com/problems/valid-sudoku/

const validRegion = (m: string[][], r1: number, c1: number, r2: number, c2: number): boolean => {
    let set = new Set();
    for(let row = r1; row <= r2; ++row) {
        for(let col = c1; col <= c2; ++col) {
            if(m[row][col] === ".") continue;
            if(set.has(m[row][col]))
                return false;
            else
                set.add(m[row][col]);
        }
    }
    return true;
}

function isValidSudoku(board: string[][]): boolean {
    // blocks
    for(let row = 0; row < 9; row += 3) {
        for(let col = 0; col < 9; col += 3) {
            if(!validRegion(board, row, col, row+2, col+2)) return false;
        }
    }

    // rows
    for(let row = 0; row < 9; ++row) {
        if(!validRegion(board, row, 0, row, 8)) return false;
    }

    // columns
    for(let col = 0; col < 9; ++col) {
        if(!validRegion(board, 0, col, 8, col)) return false;
    }

    return true;
};

// let sudoku =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

// console.log(isValidSudoku(sudoku));