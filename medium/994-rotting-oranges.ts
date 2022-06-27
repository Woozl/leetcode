// https://leetcode.com/problems/rotting-oranges/

type Point = [number, number];

function orangesRotting(grid: number[][]): number {
    const queue: Point[] = [];

    let hasRotten = false;

    // find the initial rotten oranges
    for(let x = 0; x < grid[0].length; ++x)
        for(let y = 0; y < grid.length; ++y)
            if(grid[y][x] === 2)
                queue.push([x, y]);

    if(queue.length) hasRotten = true;
    
    // DFS keeping track of levels
    let time = -1;
    while(queue.length) {
        const breadthLevel = queue.length;
        
        for(let i = 0; i < breadthLevel; ++i) {
            const [x, y] = queue.shift()!;
            
            if(x - 1 >= 0 && grid[y][x-1] === 1) queue.push([x - 1, y]) // West
            if(y - 1 >= 0 && grid[y-1][x] === 1) queue.push([x, y - 1]) // North
            if(x + 1 < grid[0].length && grid[y][x+1] === 1) queue.push([x + 1, y]) // East
            if(y + 1 < grid.length && grid[y+1][x] === 1) queue.push([x, y + 1]) // South

            queue.forEach(([x, y]) => grid[y][x] = 2);
        }
        
        ++time;
    }

    let hasFresh = false;
    for(let x = grid[0].length - 1; x >= 0; --x)
        for(let y = grid.length - 1; y >= 0; --y)
            if(grid[y][x] === 1) hasFresh = true;

    if(!hasRotten && !hasFresh) return 0;
    if(hasFresh) return -1;

    return time;
};

let m = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];

// m = [
//     [2, 1],
//     [1, 1]
// ]

// m = [
//     [2, 1, 1, 1, 0, 0, 1],
//     [1, 1, 1, 0, 0, 1, 1],
//     [1, 1, 1, 0, 0, 1, 1],
//     [1, 1, 0, 0, 1, 2, 1],
//     [1, 1, 0, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1, 1, 1],
// ]

console.log(orangesRotting(m));
m.forEach(y => console.log(y));

// let s = new PointSet();
// s.add([0, 0]);
// s.add([0, 1]);
// s.add([0, 2]);
// s.add([1, 0]);
// s.add([2, 2]);
// s.add([2, 1]);
// console.log(s.toArray());
// s.delete([2,1]);
// console.log(s.toArray());
// console.log(s.has([0,1]));
// console.log(s.has([2,1]));

// I made this class to check visited nodes but it's not even necessary
class PointSet {
    private hash: Map<number, number[]>;

    constructor() {
        this.hash = new Map<number, number[]>();
    }

    add(point: Point) {
        const [x, y] = point;

        if(this.hash.has(x)) {
            if(this.hash.get(x)!.includes(y)) return;
            else this.hash.get(x)!.push(y);
        }
        else {
            this.hash.set(x, [y]);
        }
    }

    has(point: Point): boolean {
        const [x, y] = point;

        if(!this.hash.has(x)) return false;
        if(!this.hash.get(x)!.includes(y)) return false;

        return true;
    }

    delete(point: Point) {
        const [x, y] = point;

        if(!this.hash.has(x)) return;

        const yIndex = this.hash.get(x)!.indexOf(y);

        if(yIndex === -1) return;

        this.hash.get(x)!.splice(yIndex, 1);
    }

    toArray() {
        const a: number[][] = []
        this.hash.forEach((ys, x) => {
            ys.forEach(y => {
                a.push([x, y]);
            });
        });
        return a;
    }
}