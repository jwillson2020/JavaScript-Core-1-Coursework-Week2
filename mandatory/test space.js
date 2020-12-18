

function remove(arr, index) {
  let a = arr.slice(0,index);
  let b = arr.slice(index+1);

  return a.concat(b);   // complete this statement
  }


  remove([10, 293, 292, 176, 29], 3), 
  
  //[10,293,292,29,];

  //console.log(a);
  //console.log(b);
  console.log(remove());