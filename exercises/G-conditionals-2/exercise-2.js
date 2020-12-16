/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the grade is less than 50 then return "failed"
  - if 50 or higher then return "passed"

*/

function studentPassed(grade) {

if (grade < 50){
return "failed";
}
if (grade >= 50 && grade <= 100){
  return "passed";
  }
if (grade < 0) { 
return "error numbers between 0-100";
}
else {
return "sometime went wrong";
}
}

/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var grade1 = 49;
var grade2 = 50;
var grade3 = 100;


console.log("'" + grade1 + "': " + studentPassed(grade1));
console.log("'" + grade2 + "': " + studentPassed(grade2));
console.log("'" + grade3 + "': " + studentPassed(grade3));

/* 
EXPECTED RESULT
---------------
'49': failed
'50': passed
'100': passed
*/
