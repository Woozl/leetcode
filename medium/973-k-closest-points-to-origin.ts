// https://leetcode.com/problems/k-closest-points-to-origin/

function kClosest(points: number[][], k: number): number[][] {
    let dist = points.map((p, i) => [i, Math.sqrt(p[0]**2 + p[1]**2)]);
    dist.sort((a, b) => a[1] - b[1]);

    let out: number[][] = [];
    for(let i = 0; i < k; ++i)
        out.push(points[dist[i][0]].slice())

    return out;
};

let points = [[3,3],[5,-1],[-2,4]];
console.log(kClosest(points, 2));