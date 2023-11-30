/*  

This is a problem that tripped me up the first time I 
tried to get through Eloquent Javascript, and the 
second time as well. (Yes, this is my third time trying 
to get through the book.  It's amazing the difference a 
year makes.)  I have a somewhat better understanding of 
linked lists now... or do I?

Part 1:
Write a function, arrayToList that takes an array of 
values and builds a linked list, with each item having 
the properties "value" (taken from the array) and "rest" 
(the next item in the list).

*/

function arrayToList(arr) {
  // as with all recursive functions,
  // start by returning the "end" case
  if (arr.length === 0) return null;
  else {
    let item = {
      value: arr.shift(),
      rest: arrayToList(arr),
    };
    return item;
  }
}

// And that seems to produce the desired results!  Huzzah!
// Hooray for recursion!

/*

Part 2:
Write a function, listToArray, that produces an array 
from a list.  (There's a lack of information here, but I 
assume it's asking for an "array of values" -- so 
essentially I could nest the two functions and end up 
with an array with the same values as the one passed to 
arrayToList.)

*/

function listToArray(list, result = []) {
  result.push(list.value);
  if (list.rest == null) {
    return result;
  } else {
    return listToArray(list.rest, result);
  }
}

// Works.  Nice.

/*  

Part 3:
Write a helper function, prepend, that takes an element 
and a list and creates a new list that adds the element 
to the front of the input list.

This is another case where the instructions are unclear.
What is meant by "element"?  A single value, or an object 
with the "value" and "rest" properties?  

The author seems to use the term "element" to refer to 
the object, so I'll assume that an element here is 
something with a value and a rest equal to "null".

Actually, I can write a function that will work either way.

*/

function prepend(element, list) {
  if (typeof element === "object") {
    element.rest = list;
    return element;
  } else {
    return {
      value: element,
      rest: list,
    };
  }
}

// Works like a charm.  Feeling confident.

/*  

Part 4:
Write a function, nth, which takes a list and a number 
and returns the element at the given position in the list 
(with 0 referring to the first element), or undefined when 
there is no such element.

Do this recursively.

So if I'm returning the particular "element" then, again, 
allegedly I'm returning the object, including all values 
from "rest".  So what I'm doing here is really counting down 
to zero.

*/

function nth(num, list) {
  if (num === 0) return list;
  else {
    if (list.rest == null) {
      return undefined;
    } else return nth(num - 1, list.rest);
  }
}

/* If I'm wrong and I should be returning the value, it's 
an easy fix: change line 105 to return list.value 

But, really, it's amazing how much easier this is than the 
first (and even the second) time around.

*/
