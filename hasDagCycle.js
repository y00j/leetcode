function hasDagCycle(graph) {
    const state = {};

    const UNVISITED = 0;
    const VISITING = 1;
    const VISITED = 2;

    for (let node in graph) {
        state[node] = UNVISITED;
    }

    for (let node in graph) {
        stack = [[node, graph[node][Symbol.iterator]()]];
        while (stack.length > 0) {
            let [curr, neighbors] = stack[stack.length - 1];
            let next = neighbors.next();
            
            if (next.done) {
                stack.pop()
                state[curr] = VISITED;
            } else {
                let nextNode = next.value;
                if (state[nextNode] === VISITING) {
                    return true;
                } else if (state[nextNode] === UNVISITED) {
                    state[nextNode] = VISITING;
                    stack.push([nextNode, graph[nextNode][Symbol.iterator]()]);
                } else if (state[nextNode] === VISITED) {
                    continue;
                }
            }
        }
    }
    return false;
}

const noCycleDag = {
    1: [0],
    0: [2],
    2: []
}

const cycleDag = {
    1: [0],
    0: [1]
}
console.log(hasDagCycle(noCycleDag)); // expect true
console.log(hasDagCycle(cycleDag)); // expect false