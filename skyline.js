// /**
//  * @param {number[][]} buildings
//  * @return {number[][]}
//  */
// var getSkyline = function(buildings) {
//     // how far do we need to go?
//     // longest y and longest x

//     // create array of heights of skyline
//     // loop through heights, start at 1st building. At start, move until first diff in height, then record y. keep moving until next height change, then record y, and close array. Continue.
//     // record start of skyline

//     // Making array of skyline heights.
//     // initialize skyline array. 
//     // iterate through bulidings, and push heights onto skyline array, if array.length is less than left or right.
//     // if less than left, push all onto array. 

//     const skyline = [];

//     for (let [left, right, height] of buildings) {
//         while (left > skyline.length) {
//             skyline.push(0);
//         }

//         for (let i = left; i <= right; i++) {
//             if (i === right && typeof skyline[i] === 'undefined') {
//                 skyline[i] = 0;
//             } else if (i !== right) {
//                 if (typeof skyline[i] === 'undefined') {
//                     skyline.push(height)
//                 } else if (skyline[i] < height) {
//                     skyline[i] = height;
//                 }
//             }

//         }
//     }
//     // console.log(skyline, skyline.length);
//     const result = [];
//     let start = buildings[0][0];
//     for (let i = start; i < skyline.length; i++) {
//         if (i === start) {
//             result.push([start, skyline[start]]);
//             continue;
//         } else if (i === skyline.length - 1) {
//             result.push([i, 0]);
//             break;
//         }

//         if (skyline[start] !== skyline[i]) {
//             result.push([i, skyline[i]]);
//             start = i;
//         }
//     }

//     return result;
// };

// const buildings  =[[0,2147483647,2147483647]]

// console.log(getSkyline(buildings));

for (let i = 0; i < 2147483647; i++) {
    console.log(i)
}