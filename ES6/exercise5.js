/*Create an mapper function using arrow symantics that returns an object having following
attribute when operating on array */

//console.log([1,2,3].map(mapperFns)

const numbers = [1, 2, 3];

const numObj = numbers.map(number => ({
  isEven: number % 2 == 0,
  number,
  squared: number * number
}));

console.log(numObj);
