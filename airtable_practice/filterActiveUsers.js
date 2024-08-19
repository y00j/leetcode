const activityLogs = [
    { userId: 3, action: 'login', timestamp: '2024-08-14T09:45:00Z' },
    { userId: 1, action: 'login', timestamp: '2024-08-14T08:30:00Z' },
    { userId: 2, action: 'logout', timestamp: '2024-08-14T09:00:00Z' },
    { userId: 1, action: 'upload', timestamp: '2024-08-14T09:30:00Z' },
];

// Filter for users who logged in and performed another action within 1 hour
// const activeUsers = [1]; Example output


function getActiveUsers(logs) {
    logs.sort(({timestamp: timeA}, {timestamp: timeB}) => new Date(timeA) - new Date(timeB));

    let userLogs = {};    
    logs.forEach(({userId, action, timestamp}) => {
        if (!(userId in userLogs)) userLogs[userId] = [];
        userLogs[userId].push({action, timestamp});
    });

    let activeUsers = []
    for (let userId in userLogs) {
        if (userLogs[userId].length > 1) {
            if (checkLoggedInThenActionIn1Hour(userLogs[userId])) activeUsers.push(userId);
        }
    }

    return activeUsers;


}

function checkLoggedInThenActionIn1Hour(logStream) {
    let loggedIn = false;
    let loggedInTime = null;
    for (let {action, timestamp} of logStream) {
        if (action === 'login') {
            loggedIn = true;
            loggedInTime = new Date(timestamp);
        } else if (action !== 'logout' && loggedInTime && (new Date(timestamp) - loggedInTime) <= (1000 * 60 *60)){
            return true
        }
    }

    return false;
}

console.log(getActiveUsers(activityLogs));