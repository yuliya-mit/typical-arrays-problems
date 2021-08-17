
exports.min = function min (array) {
  let arr=[];
  for (item of arguments) {

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

exports.max = function max (array) {
  let arr=[];
  for (item of arguments) {

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

exports.avg = function avg (array) {
  let arr=[];
  for (item of arguments) {

    if (typeof item !=='number' ) {
     return 0 
    } else 
    {
      arr.push(item)}
   
  }
    let sum=arr.reduce((sum, current) => sum + current, 0);
    console.log(sum);
    return sum/(arr.length-1);
}
