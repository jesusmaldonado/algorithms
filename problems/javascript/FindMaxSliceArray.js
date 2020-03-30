//O(n) space, O(n) runtime;
// function findMaxSlice(array){
//   if (array.length === 0){
//     return [];
//   }
//   let slices = {};
//   let currentElem = array[0];
//   let idx = 0;
//   for (let i = 0; i < array.length; i++){
//     let elem = array[i];
//     if (elem < currentElem){
//       slices[idx] = i - idx;
//       idx = i;
//     } else {
//       //we are at the end and we need the last guy potentially
//     }
//     currentElem = elem;
//   }
//   if (!Boolean(slices[idx])){
//     slices[idx] = array.length - idx;
//   }
//   const maxSlice = Math.max(...Object.values(slices));
//   return Object.keys(slices).filter(k => slices[k] === maxSlice).map(k => Number(k));
// }

//proprotional to number of slices, n but can also be made constant easily;
function findMaxSlice(array){
  if (array.length === 0){
    return -1;
  }
  let maxSize = 0;
  let maxIdx = 0
  let priorElem = array[0];
  let idx = 0;
  let results = [];
  for (let i = 0; i < array.length; i++){
    let elem = array[i];
    let diff = (i - idx);
    if (elem < priorElem){
      // we are not ascending
      if (diff > maxSize){
        maxSize = diff;
        results = [];
        results.push(idx);
      } else if (diff === maxSize){
        results.push(idx);
        if (i === array.length -1){
          results.push(i);
        }
      }
      // we could be ascending
      idx = i;
    } else {
      if (i === (array.length - 1) && diff > maxSize){
        results = [];
        results.push(idx);
      } else if (i === array.length - 1 && diff === maxSize){
        results.push(idx);
      }
    }
    priorElem = elem;
  }
  return results;
}



console.log(findMaxSlice([10,20,30]), [0]);
console.log(findMaxSlice([30,20,10]), [0,1,2]);
console.log(findMaxSlice([-10, 20, 10,20,30,60,70,100,9000,80000,10,20,30,40,60]), [2]);
console.log(findMaxSlice([10,20,30,10,20,30,40,60]), [3]);
console.log(findMaxSlice([1]), [0])
