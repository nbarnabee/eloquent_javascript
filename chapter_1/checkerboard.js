/*

This time the problem is to create a "checkerboard" pattern using 
spaces and hashes.  I remember the first time I went through this book, and 
how I trudged through a completely laborious process.  Now I have some better ideas.

The function takes an integer and spits out a multi-line string of alternating 
hashes and spaces.

What I'm going to do this time is store the required pattern and write a helper 
function that will generate the lines.  Concatenate them in the main function and 
return.

*/

const pattern = {
  evenRow: " #",
  oddRow: "# ",
  evenRowEnd: " \n",
  oddRowEnd: "#\n",
};

function drawBoard(dimension) {
  let board = "";
  for (let i = 1; i <= dimension; i++) {
    board += drawLine(dimension, i);
  }
  console.log(board);
}

function drawLine(length, i) {
  let order = i % 2 ? pattern.oddRow : pattern.evenRow;
  let end =
    i === length
      ? ""
      : length % 2 === 0
      ? "\n"
      : i % 2
      ? pattern.oddRowEnd
      : pattern.evenRowEnd;
  return order.repeat(Math.floor(length / 2)) + end;
}

/*  

I am proud of that string of ternary operators but I can't deny 
that it is rather difficult to read.

Basically, if it's the last line I don't want to have the extra 
line break.  Then, if the dimensions are even, it doesn't matter what 
line it is: it will always end with a line break.  But if the dimensions 
are odd (e.g., it's a 7x7 table), I'll need an extra character, and the 
character will depend on which line it is.

I'm rather proud to look at this now; I probably have my old solution kicking 
around somewhere and might try to dig it up.  This is about a million times 
cleaner and more concise.

*/
