// https://leetcode.com/problems/flood-fill/

function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    let imgHeight = image.length;
    let imgWidth = image[0].length;

    let currentColor = image[sr][sc];
    
    if(currentColor === newColor) return image;

    image[sr][sc] = newColor;

    if(sr - 1 >= 0 && image[sr-1][sc] === currentColor) // N
        floodFill(image, sr - 1, sc, newColor);

    if(sr + 1 < imgHeight && image[sr+1][sc] === currentColor) // S
        floodFill(image, sr + 1, sc, newColor);

    if(sc - 1 >= 0 && image[sr][sc - 1] === currentColor) // W
        floodFill(image, sr, sc - 1, newColor);

    if(sr + 1 < imgWidth && image[sr][sc + 1] === currentColor) // E
        floodFill(image, sr, sc + 1, newColor);

    return image;
};

const printImage = (image: number[][]) => {
    image.forEach(r => {
        console.log(r.join(' '));
    });
}

let image = [[0,0,0],[0,1,1]];
printImage(image);
console.log("");
floodFill(image, 1, 1, 1);
printImage(image);
