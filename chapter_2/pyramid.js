/* 

Write a function that calls itself 7 times, and console logs +1 hash for each call, so that calling it will print out something like this:

#
##
###
####

*/

function pyramid() {
  for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
  }
}

/* 

Obviously I could mix it up and put a variable in there 
to change the size of the pyramid.  

But what if I wanted a whole pyramid and not half?

The length of each line would be 2 * num (we'll just stick with 7)

Each line would have 2 * (number of the line) hashes and everything else 
would be blank spaces.

*/

function fullPyramidOld(height) {
  const lineLength = 2 * height;
  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(Math.floor((lineLength - i) / 2));
    console.log(spaces + "#".repeat(i === 1 ? i : i * 2) + spaces);
  }
}

/*

This will never really work, since I need to have an odd number of hashes 
each time.  So 1, 3, 5, 7, etc.  And the line length always has to be odd.

*/

function fullPyramid(height) {
  const lineLength = 2 * height - 1;
  let hashCount = 1;
  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(Math.floor(lineLength - hashCount) / 2);
    console.log(spaces + "#".repeat(hashCount) + spaces);
    hashCount += 2;
  }
}

// Here we go!  And just in time to get off of the train!
