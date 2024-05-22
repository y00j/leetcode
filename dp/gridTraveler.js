const gridTravelerTabulation = (row, col) => {
    if (row === 0 || col === 0) return 0;
    const grid = Array(row + 1).fill().map((row) => new Array(col + 1).fill(0));
    grid[1][1] = 1;

    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (j + 1 <= col) grid[i][j + 1] += grid[i][j];
            if (i + 1 <= row) grid[i + 1][j] += grid[i][j];
        }
    }
    return grid[row][col];
}

console.log(gridTravelerTabulation(3,3));
console.log(gridTravelerTabulation(18, 18));