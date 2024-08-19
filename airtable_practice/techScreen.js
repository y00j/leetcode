/*
make a class with a dependency array

file build system

make startBuild --> output which 

make complete() --> output which

rules: {
    fileA: [fileB, fileC],
    fileB: [fileD, fileF],
    fileC: [fileE, fileF]
}

startbuild(FileA) --> find files with zero dependencies (so file D, E, F) [fileD, fileE, fileF]

completed(fileD) --> returns if list of files that can be built given this dependency has been fulfilled so []
completed(fileF) --> [B]
completed(fileE) --> [C]
*/

const dependencies = {
    'bin': ['fileA', 'fileB'],
    'fileA': ['fileC', 'fileD'],
    'fileB': ['fileD', 'fileE'],
    'fileC': [],
    'fileD': [],
    'fileE': [],
    'fileF': ['fileE'],
}

class Builder {
    constructor() {
        this.dependencies = dependencies;
        this.ancestors = {};
        this.finishedFiles = new Set();
    }

    getFinalDependencies(target) {
        // dfs on dependency graph, return leaf nodes.
        let visited = new Set();
        let stack = [target];
        let finalDependencies = [];
        while (stack.length > 0) {
            let curr = stack.pop();
            visited.add(curr);
            let children = this.dependencies[curr];
            if (children.length === 0) {
                finalDependencies.push(curr);
            } else {
                children.forEach((child) => {
                    if (!visited.has(child)) stack.push(child)
                    
                    // add to ancestors graph
                    if (!(child in this.ancestors)) this.ancestors[child] = []
                    this.ancestors[child].push(curr);
                })
            }

            
        }
        return finalDependencies;
    }

    complete(file) {
        this.finishedFiles.add(file);

        let parents = this.ancestors[file] || [];

        let canBuild = [];
        for (let parent of parents) {
            if (this.checkDepndenciesComplete(parent)) canBuild.push(parent)
        }
        
        return canBuild;
    }

    checkDepndenciesComplete(parent) {

        for (let child of dependencies[parent]) {
            if (!this.finishedFiles.has(child)) return false;
        }
        
        return true;
    }
}

function runBuild() {
    let newBuild = new Builder();

    let deps = newBuild.getFinalDependencies('bin');
    let buildFiles = [];
    while (deps.length > 0) {
        let curr = deps.shift();
        buildFiles.push(curr);

        let nextFiles = newBuild.complete(curr);
        deps = [...deps, ...nextFiles]
    }
    return buildFiles;
}

let finalBuild = runBuild()

console.log(finalBuild)