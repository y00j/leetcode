const bestSum = (target, nums, memo = {}) => {
    // return array of nums to get to target;
    // console.log(memo);
    if (target in memo) {
        console.log(memo)
        return memo[target];
    }
    if (target === 0) return [];   
    if (target < 0) return null;

    for (let n of nums) {
        const subResult = bestSum(target - n, nums, memo);
        if (Array.isArray(subResult)) {
            if (!memo[target]) {
                memo[target] = [...subResult, n];
            } else if (Array.isArray(memo[target]) && subResult.length < memo[target].length) {
                memo[target] = [...subResult, n];
            } 
        }
    }

    if (!memo[target]) memo[target] = null;
    return memo[target];
}
// n - target length, m - nums length
// T: O(mn^2)
// S: O(n^2)

// console.log(bestSum(0, [1,2]))
// console.log(bestSum(1, [1, 2]))
// console.log(bestSum(4, [7,4]))
// console.log(bestSum(5, [2,3,5]))
// console.log(bestSum(3000, [1,14, 233, 3000]))
// console.log(bestSum(100, [1,2,24,25]))

//3 [1,2] => 1 [1, 2] , 2 [1 , 2]

const bestSumTabulation = (target, nums) => {
    const table = Array(target + 1).fill(null);

    table[0] = [];

    // iterate through each
    // find shortest length each time.
    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (let n of nums) {
                const res = [...table[i], n];
                if (!table[i + n]) {
                    table[i + n] = res;
                } else if (table[i + n].length > res.length) {
                    table[i + n] = res;
                } else {
                    //noop
                }
                                
            }
        }
    }

    return table[target];
}

// t: O(nt^2) s: O(t^2)
console.log(bestSumTabulation(4, [7,4]))
console.log(bestSumTabulation(5, [2,3,5]))
console.log(bestSumTabulation(10, [2,3,5]))
console.log(bestSumTabulation(10, [2,3,5, 10]))
console.log(bestSumTabulation(3000, [1,14, 233]))
