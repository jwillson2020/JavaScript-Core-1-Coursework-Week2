/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
return (arr[0]); // complete this statement
}

function last(arr) {
  
  //return (arr.length -1); // not right
  return (arr.slice(-1));  // works but with brackets [] ????
  // tried index0f -1, 
}


// tried index0f -1,  
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
