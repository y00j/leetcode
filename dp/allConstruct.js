function allConstruct(target, wordBank) {
    if (target === '') return [[]];

    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixConstructs = allConstruct(suffix, wordBank);
            suffixConstructs.forEach((construct) => {
                result.push([word, ...construct]);
            });
        }
    }

    return result;

}

function allConstructMemo(target, wordBank, memo={}) {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixConstructs = allConstructMemo(suffix, wordBank, memo);
            suffixConstructs.forEach((construct) => {
                result.push([word, ...construct]);
            });
        }
    }

    memo[target] = result;
    return memo[target];

}

function allConstructTab(target, wordBank) {
    const table = Array(target.length + 1).fill().map((_) => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        if (table[i].length > 0) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i].forEach((combo) => {
                        table[i + word.length].push([...combo, word]);
                    })
                }
            }
        }
    }

    return table[target.length];
}

now = Date.now();
console.log('allConstructMemo', allConstructMemo('a', ['a', 'b']));
console.log('allConstructMemo', allConstructMemo('z', ['a', 'b']));
console.log('allConstructMemo', allConstructMemo('aab', ['a', 'b', 'ab', 'abc']));
// console.log('allConstructMemo', allConstructMemo('aaaaaaaaaaaaaaaaaaaaaa', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa']));
console.log(Date.now() - now);

// now = Date.now();
// console.log('allConstruct', allConstruct('a', ['a', 'b']));
// console.log('allConstruct', allConstruct('z', ['a', 'b']));
// console.log('allConstruct', allConstruct('aaaaaaaaaaaaaaaaaaaaaa', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa']));
// console.log(Date.now() - now);

now = Date.now();
console.log('allConstructTabTest', allConstructTab('a', ['a', 'b']));
console.log('allConstructTabTest', allConstructTab('z', ['a', 'b']));
console.log('allConstructTabTest', allConstructTab('aab', ['a', 'b', 'ab', 'abc']));
console.log('allConstructTabTest', allConstructTab('aaaaaaaaaaaaaaaaaaaaa', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa']));
console.log(Date.now() - now);