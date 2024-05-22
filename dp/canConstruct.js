const canConstruct = (target, strs) => { 
    if (target === '') return true;

    for (let str of strs) {
        if (target.indexOf(str) === 0) {
            if (canConstruct(target.slice(str.length), strs)) return true;
        }
    }

    return false;
}

// console.log('canConstruct: ', canConstruct('abc', ['a', 'b', 'c']));

const canConstructMemo = (target, strs, memo={}) => { 
    if (target in memo) {
        return memo[target];
    }
    if (target === '') return true;

    for (let str of strs) {
        if (target.indexOf(str) === 0) {
            if (canConstructMemo(target.slice(str.length), strs, memo) === true) {
                memo[target] = true;
                // console.log(memo);
                return true;
            }
        }
    }
    
    memo[target] = false;
    return false;
}


const canConstructTab = (target, wordBank) => {
    // t: O(wt^2), s: O(t^2)
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i]) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length];
}

// start = Date.now();
// console.log('canConstruct: ', canConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaz', ['a','aa', 'aaa', 'aaaa', 'aaaaa']));
// console.log(Date.now() - start);
start = Date.now()
console.log('canConstructMemo: ', canConstructMemo('aaaaaaaaaaaaaaaaaaaaaaaaaz', ['a','aa', 'aaa', 'aaaa', 'aaaaa']));
console.log(Date.now() - start);
start = Date.now()
console.log('canConstructTab: ', canConstructTab('aaaaaaaaaaaaaaaaaaaaaaaaaz', ['a','aa', 'aaa', 'aaaa', 'aaaaa']));
console.log('canConstructTab: ', canConstructTab('aaaaaa', ['a','aa', 'aaa', 'aaaa', 'aaaaa']));
console.log(Date.now() - start);