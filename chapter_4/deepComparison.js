/*  

Write a function, deepEqual, that takes two values and 
returns true if they are the same value (e.g., primitives), 
or are objects with the same properties, where the values of 
the properties are equal when compared with a recursive call 
to deepEqual.

The author suggests using typeof() to see what sort of 
comparison is appropriate, and Object.keys() for when I need 
to go over the properties of an object. 

Presumably I don't need to include checks for all possible 
object types.  But I guess I could write it so that it 
could handle arrays.

This is another case where I think of Python, and how all 
arrays in Python are really associative arrays, which would 
make it easier to handle.

But wait... my god.. Object.keys() works on arrays!  
Glorious!  

*/

// function deepEqual(x, y) {
//   if (x == undefined || y == undefined) return false;
//   else if (x == null && y == null) return true;
//   else if (typeof x != "object" && typeof y != "object") {
//     return x === y;
//   } else {
//     Object.keys(x).forEach((a) => deepEqual(x[a], y[a]));
//   }
// }

/* I'm pretty sure this first attempt isn't going to work.
I have too many returns going on.  Really it should cycle 
through, fail if it's going to fail, and return true if 
it makes it through the whole cycle without failing.

And so far it's fine when it doesn't have to do recursion, but fails if both values are null.

And actually the undefined check doesn't need to be there.

*/

// function deepEqual(x, y) {
//   if (typeof x != typeof y) return false;
//   if (x == null && y == null) return true;
//   else if (typeof x != "object" && typeof y != "object") {
//     return x === y;
//   } else {
//     Object.keys(x).forEach((a) => deepEqual(x[a], y[a]));
//   }
// }

// But weirdly enough, it's returning "true" for (null, undefined)

function deepEqual(x, y) {
  if (typeof x != typeof y) return false;
  if (x == null && y == null) return true;
  else if (typeof x != "object" && typeof y != "object") {
    return x === y;
  } else {
    for (let key of Object.keys(x)) {
      if (deepEqual(x[key], y[key]) === false) {
        return false;
      }
    }
  }
  return true;
}

// It works!  My god, it really works!
