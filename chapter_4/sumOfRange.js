/*  
Write a function that takes two arguments, start and end, and returns an array containing all the numbers from start to end, inclusive.

Then write a sum function that takes an array of numbers and returns the sum of those numbers.

Then modify the range function to take an option third argument, a "step".  Make sure it also works with negative step values.

*/

function range(start, end) {
  const result = [];
  for (i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

const sum = (arr) => arr.reduce((accum, curr) => accum + curr);

function rangeRedux(start, end, step = 1) {
  const result = [];
  if (start <= end) {
    for (i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

// This feels very repetitive, but my head's not in it tonight.

// A couple of days later, I had the idea to try to make the condition (i <= end) a variable, but that failed utterly.
// Frustrating.  I feel like there must be a better way but I don't know what it is.
