//1. Min and Max Numbers

'use strict';

function max(numbers) {
    if (numbers.length === 0) {
        return undefined
    }
    else { 
    let i=0;
    let highNum = 0;
    while (i < numbers.length) {
       
    if (numbers[i] > highNum) {
       highNum = numbers[i];  
    } i++;
    }
    return highNum} 
  }
  
  function min(numbers) {
    if (numbers.length === 0) {
        return undefined
    }
    else { 
    let i=0;
    let lowNum = 0;
    while (i < numbers.length) {
       
    if (numbers[i] < lowNum) {
       lowNum = numbers[i];  
    } i++;
    }
    return lowNum}
  }
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  // tests
  
  function testFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
      console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
      return true;
    } else {
      console.log(
        'FAILURE: `' +
          fn.name +
          '([' +
          input +
          '])` should be ' +
          expected +
          ' but was ' +
          fn(input)
      );
      return false;
    }
  }
  
  function testEmpty(fn) {
    if (fn([]) === null || fn([]) == undefined) {
      console.log(`SUCCESS: ${fn.name} works on empty arrays`);
      return true;
    } else {
      console.log(
        `FAILURE: ${fn.name} should return undefined or null for empty arrays`
      );
      return false;
    }
  }
  
  (function runTests() {
    // we'll use the variables in our test cases
    const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
    const realMin1 = numList1[3];
    const realMax1 = numList1[6];
    const numList2 = [0, 1, 2, 3, 4];
    const realMin2 = numList2[0];
    const realMax2 = numList2[4];
  
    const testResults = [
      testFunctionWorks(max, numList1, realMax1),
      testFunctionWorks(max, numList2, realMax2),
      testFunctionWorks(min, numList1, realMin1),
      testFunctionWorks(min, numList2, realMin2),
      testEmpty(max),
      testEmpty(min),
    ];
  
    const numPassing = testResults.filter(function(result) {
      return result;
    }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
  })();

  








//2. Compute the Average

function average(numbers) {
    // for each -> add each to the previous
    let numSum = 0;
    numbers.forEach(function(element) {
        numSum = element + numSum;
    });
    // divide this by numbers.length
    return numSum/numbers.length;
  }
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  // tests
  
  function testFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
      console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
      return true;
    } else {
      console.log(
        'FAILURE: `' +
          fn.name +
          '([' +
          input +
          '])` should be ' +
          expected +
          ' but was ' +
          fn(input)
      );
      return false;
    }
  }
  
  (function runTests() {
    const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const correctAns1 = 5.5;
    const numList2 = [0, -1, 1];
    const correctAns2 = 0;
  
    const testResults = [
      testFunctionWorks(average, numList1, correctAns1),
      testFunctionWorks(average, numList2, correctAns2),
    ];
    const numPassing = testResults.filter(function(result) {
      return result;
    }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
  })();
  
  // 3. FizzBuzz
  function fizzBuzz(countTo) {
    let result = [];
    for(i=1; i <= countTo; i++) {
      if(i % 15 === 0) {
        result.push('fizzbuzz');
      }
      else if(i%5 === 0) {
        result.push('buzz');
      }
      else if(i%3 === 0) {
        result.push('fizz');
      }
      else {
        result.push(i);
      }
    }
  return result;
  }
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  // tests
  (function testFizzBuzz() {
    // we'll use the variables in our test cases
    const countTo = 16;
    const expected = [
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz',
      16,
    ];
  
    const actual = fizzBuzz(countTo) || [];
  
    if (
      expected.length === actual.length &&
      expected.every(function(item, index) {
        return actual[index] === item;
      })
    ) {
      console.log('SUCCESS: fizzBuzz is working');
    } else {
      console.log('FAILURE: fizzBuzz is not working');
    }
  })();
  