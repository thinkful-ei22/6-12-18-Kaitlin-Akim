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

// const hazardWarningCreator = function(typeOfWarning) {
//     let warningCounter = 0;
//     return function(location) {
//         warningCounter++;
//         console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
//         console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"`);
//     }
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const heavyRain = hazardWarningCreator('Heavy rain on the highway')
// const realHot = hazardWarningCreator('2 hot, 2 hot');

// rocksWarning('Main St and Pacific Ave');
// rocksWarning('Times Square');
// heavyRain('New Orleans');
// heavyRain('Portland');
// realHot('Atlanta');
// realHot('Miami')


//4. Turtles

// const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// let positiveSteps = turtleSteps.filter(num => num[0] > -1 && num[1] > -1);
// console.log(positiveSteps);
// let addedSteps = positiveSteps.map(num => num[0] + num[1]);
// console.log(addedSteps);
// let sepSteps = addedSteps.forEach(num => console.log(num));

//5. Decoding

let words = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let wordsArr = words.split(" ");

const decoded = function(arr) {
    let word = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 3) {
            word.push(' ');
        } else {
            word.push(arr[i].charAt(arr[i].length-1).toUpperCase());

        }
    }  console.log(word.reduce((a, b) => a + b));
    
    // word.reduce(function(letter) {
    //     console.log(letter + '');
    //     return letter + '';
    // });
};

decoded(wordsArr);