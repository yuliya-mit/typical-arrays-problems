
exports.min = function min (array) {
  if (arguments.length===0 || Array.isArray(array) ==='false' || array.length===0) {return 0}
  else {
  let arr=[];
  for (item of array) {

    if (typeof item !=='number' ) {
     return 0 
    }
    else 
    {
      arr.push(item)}
  }
    arr.sort( (a, b) => a-b );
    return arr[0];
}
}

exports.max = function max (array) {
  if (arguments.length===0 || Array.isArray(array) ==='false' || array.length===0) {return 0}
  else {
  let arr=[];
  for (item of array) {

    if (typeof item !=='number' ) {
     return 0 
    }
    else 
    {
      arr.push(item)}
  }
    arr.sort( (a, b) => a-b );
    return arr[arr.length-1];
}
}

exports.avg = function avg (array) {
  if (arguments.length===0 || Array.isArray(array) ==='false' || array.length===0) {return 0}
  else {
  let arr=[];
  for (item of array) {

    if (typeof item !=='number' ) {
     return 0 
    } else 
    {
      arr.push(item)}
   
  }
    let sum=arr.reduce((sum, current) => sum + current, 0);
    console.log(sum);
    return sum/(arr.length);
}
}