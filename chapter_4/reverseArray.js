/*

Write two functions:  reverseArray and reverseArrayInPlace.  They should do what the name suggests, but the first should produce a new array while the second should do what .reverse() does:  modify the inputted array.

obviously I shouldn't use .reverse() for this

*/

function reverseArray(arr) {
  const reversedArray = [];
  arr.forEach((a) => reversedArray.unshift(a));
  return reversedArray;
}

/* For the reverseInPlace function, I'm thinking a variation on the Fisher-Yates shuffle.
 */

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - (1 + i)]] = [arr[arr.length - (1 + i)], arr[i]];
  }
  return arr;
}

// First tryyyyyy!
