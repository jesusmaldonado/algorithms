function flatten(arr){
  return arr.reduce((a, b) => {
    if (Array.isArray(b)) {
      a.push(...flatten(b));
    } else {
      a.push(b);
    }
    return a;
  }, []);
}

function simpleFlat(arr){
  return arr.reduce((a, b) => a.concat(b), []);
}

function flattenStack(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    const isArray = Array.isArray(val);
    while ( isArray && val.some(v => Array.isArray(v)) ) {
      val = simpleFlat(val);
    }
    isArray ? newArr.push(...val) : newArr.push(val);
  }
  return newArr;
}
let arr1 = [[1,1,[1,2]],1,[3,[4]]];
// bind(1,2,3)
// console.log('rec', flatten(arr1));
// console.log('flattenStack', flattenStack(arr1));
