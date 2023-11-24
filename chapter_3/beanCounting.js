/*

Part 1:

Write a function countBs that takes a string and returns a number that indicates how many uppercase "B" characters there are in the string.

*/

function countBs(str) {
  return str.split("").filter((char) => char === "B").length;
}

/* 

Part 2:

Write a function countChar that takes a second argument that indicates the character that is to be counted. 

*/

function countChar(str, needle) {
  return str.split("").filter((char) => char === needle).length;
}
