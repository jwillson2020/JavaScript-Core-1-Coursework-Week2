/*
  Array setters
  -------------
  WITHOUT changing the array literal declaration,
  - assign the number 4 to the end of this array
  - change the first value in the array to the number 1
*/

var numbers = [1, 2, 3]; // Don't change this array literal declaration
numbers.push(4); // used push adds 4 to end of array
//numbers.shift(); // remove first number
numbers.unshift(0);  // adds 0 to the front of 
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4]
*/
