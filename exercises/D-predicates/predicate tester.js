function isNumber(value) {
    return typeof value === "number";
  }
  
  isNumber(10); // returns true

  console.log(isNumber(10));
  isNumber("hello"); // returns false

  console.log(isNumber());