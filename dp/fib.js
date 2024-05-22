const fibTab = (n) => {
    const res = new Array(n + 1).fill(0);
    res[1] = 1;

    for (let i = 0; i < n + 1; i++) {

        if (typeof res[i + 1] !== 'undefined') res[i + 1] += res[i];
        if (typeof res[i + 2] !== 'undefined') res[i + 2] += res[i];
    }

    return res[n];
}

const fibTabConstantSpace = (n) => {
    if (n === 0) return 0;
    const res = new Array(2).fill(0);

    res[1] = 1;

    for (let i = 1; i < n; i++) {
        let next = res[0] + res[1];

        res[0] = res[1]
        res[1] = next;
    }

    return res[1];
}

console.log(fibTab(1));
console.log(fibTabConstantSpace(1));


console.log(fibTab(100));
console.log(fibTabConstantSpace(100));