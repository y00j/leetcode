const canSumTabulation = (target, nums) => {
    const table = new Array(target + 1).fill(false);

    table[0] = true;
    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (let num of nums) {
                table[i + num] = true;
            }
        }
    }
    // console.log(table);
    return table[target];
}


console.log(canSumTabulation(8, [2,3,4]));
console.log(canSumTabulation(1, [2,3,4]));