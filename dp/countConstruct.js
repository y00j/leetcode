const countConstruct = (target, wordBank) => {
    if (target === '') return 1;
    let count = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            count += countConstruct(target.slice(word.length), wordBank);
        }
    }

    return count;
}

const memoize = {}
const countConstructMemo = (target, wordBank, memo={}) => {
    if (target in memo) {
        return memo[target];
    }

    if (target === '') {
        return 1;
    }

    let count = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            count += countConstructMemo(suffix, wordBank, memo);
        }
    }

    memo[target] = count;
    return memo[target];
}

const countConstructTab = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);

    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] > 0) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i];
                }
            }
        }
    }
    return table[target.length];
}

// let start = Date.now();
console.log('countConstrucMemo', countConstructMemo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa']))
// console.log(Date.now() - start);

console.log('countConstrucMemo', countConstructMemo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', ['a', 'b', 'c', 'd', 'e', 'ab', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa']))
// start = Date.now()
// console.log('countConstruct', countConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa']))
// console.log(Date.now() - start);
console.log('countConstructTab', countConstructTab('aaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa']))
console.log('countConstructTab', countConstructTab('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', ['a', 'b', 'c', 'd', 'e', 'ab', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa']))
