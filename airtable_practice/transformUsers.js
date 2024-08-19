const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];

// Transform the data into an object with user IDs as keys
const transformedUsers = {
    1: { name: 'Alice', age: 25 },
    2: { name: 'Bob', age: 30 },
    3: { name: 'Charlie', age: 35 }
};


function transformUsers(users) {
    let result = {};
    users.forEach(({id, name, age}) => result[id] = {name, age});

    return result;
}


console.log(transformUsers(users));
