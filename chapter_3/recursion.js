/*
Part 1:
A way to define whether a positive whole number is even or odd:

1. Zero is even
2. One is odd
3. For any other number N, its evenness is the same as N - 2

Define a recursive function isEven() corresponding to this description.  The function should accept a single parameter (a positive integer) and return a boolean

*/

function isEven(num) {
  if (num === 0 || num === 1) {
    return num === 0;
  } else return isEven(num - 2);
}

/* 

Part 2:

How could you make this work with negative numbers?


My answer:
I could either set num === Math.abs(num) or include a check that if num < 0, I return isEven(num + 2)

So either

function isEven(num) {
  num = Math.abs(num);
  if (num === 0 || num === 1) {
    return num === 0;
  } else return isEven(num - 2);
}

function isEven(num) {
  if (num === 0 || num === 1) {
    return num === 0;
  } else return num < 0 ? isEven(num + 2) : isEven(num - 2);
}
*/
