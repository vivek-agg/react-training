/*1. Write a function that returns all elements of array except first element*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function skipFirst([first, ...rest]) {
  console.log(rest);
}

skipFirst(arr);
