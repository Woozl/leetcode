// https://leetcode.com/problems/range-sum-query-2d-immutable/

class NumMatrix {
    private readonly matrix: number[][];

    constructor(matrix: number[][]) {
        this.matrix = matrix.map(r => r.slice());
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let sum = 0;

        for(let r = row1; r <= row2; ++r) {
            for(let c = col1; c <= col2; ++c) {
                sum += this.matrix[r][c];
            }
        }

        return sum;
    }

}