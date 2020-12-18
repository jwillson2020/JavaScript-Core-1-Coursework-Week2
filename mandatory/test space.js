

function formatPercentage(arr) {

  //let twoPlaces = Math.round(arr* (10 ^ 2)); // (x * 100) / 100)
  for(let h = 0 ; h < arr.length ; h++ ){
  let round = Math.round(arr[h]);
  let twoPlaces = (round * 100) /100 ;
  let util = twoPlaces + "%"; // .toString()
  //const map = util.map;
  //let fixed = arr[h].toFixed(2);
  //return arr.map.Math.round(arr.length);
  return (util);

}
 
  }
 
  formatPercentage([23, 18.103, 187.2, 0.372]);