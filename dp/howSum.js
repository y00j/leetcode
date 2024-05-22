const howSum = (target, nums, memo = {}) => {
    // return array of nums to get to target;
    if (target in memo) return memo[target];
    if (target === 0) return [];   
    if (target < 0) return null;

    for (let n of nums) {
        const subResult = howSum(target - n, nums, memo);
        // console.log(subResult, target,'n is: ' + n, target - n, Array.isArray(subResult));
        if (Array.isArray(subResult)) {
            subResult.push(n);
            memo[target] = subResult;
            return memo[target];
        }
    }
    memo[target] = null;
    console.log(memo);
    return null;
}

console.log(howSum(0, [1,2]))
console.log(howSum(1, [1,2]))
console.log(howSum(4, [7,4]))
console.log(howSum(5, [3,2]))
// console.log(howSum(300, [7,14]))
//3 [1,2] => 1 [1, 2] , 2 [1 , 2]
// 

const howSumTabulation = (target, nums) => {
    const table = Array(target + 1).fill(null);
    
    table[0] = [];
    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (let num of nums) {
                table[i + num] = [num, ...table[i]];
                if (i + num === target) break;
            }
        }
    }

    return table[target];
}
console.log('howsumtab', howSumTabulation(0, [1,2]))
console.log('howsumtab', howSumTabulation(1, [1,2]))
console.log('howsumtab', howSumTabulation(4, [7,4]))
console.log('howsumtab', howSumTabulation(5, [3,2]))
console.log('howsumtab', howSumTabulation(30000, [7,14]))


