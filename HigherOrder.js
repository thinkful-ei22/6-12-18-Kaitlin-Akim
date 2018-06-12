// //1. Functions as arguments(1)

// // const repeat = function(fn, n) {
// //     for (i = 0; i <= n; i++) {
// //         fn();
// //     }
// // }

// // const hello = function() {
// //     console.log('Hello world');
// // }

// // const goodbye = function() {
// //     console.log('Goodbye world');
// // }

// // repeat(hello,5);
// // repeat(goodbye,5);


// // 2. Functions as arguments


// // DO NOT EDIT BETWEEN THESE LINES ----->
// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr , fn) {
//     let newArray = [];
//     for (i = 0; i < arr.length; i++) {
//        if (fn(arr[i])) {
//         newArray.push(arr[i]);
//        }
//     }
//     return newArray;
// }

// console.log(filter(myNames, filter))

// 3. Functions as Return values

const hazardWarningCreator = function(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter++;
        console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
        console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const heavyRain = hazardWarningCreator('Heavy rain on the highway')
const realHot = hazardWarningCreator('2 hot, 2 hot');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Times Square');
heavyRain('New Orleans');
heavyRain('Portland');
realHot('Atlanta');
realHot('Miami')
