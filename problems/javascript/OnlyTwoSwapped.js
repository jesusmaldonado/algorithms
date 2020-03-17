//Similar strings ("face", "eacf") returns true if only 2 positions in the strings are swapped. Here 'f' and 'e' are swapped in the example.

//O(n), constant memory
// function onlyTwoSwapped(strA, strB){
//   if (strA.length !== strB.length){
//     return false;
//   }
//   let diffCount = 0;
//   // assuming they all contain the same characters...
//   for (let i = 0; i < strA.length; i++) {
//     if (strA[i] !== strB[i]){
//       diffCount++;
//     }
//   }
//   return diffCount === 2 ? true : false;
// }

//O(n), constantmemory, checks for different characters
function onlyTwoSwapped(strA, strB){
  if (strA.length !== strB.length){
    return false;
  }
  let diffCount = 0;
  let strASum = 0;
  let strBSum = 0;
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]){
      diffCount++;
      strASum += strA[i].charCodeAt(0);
      strBSum += strB[i].charCodeAt(0);
    }
  }
  //if they have different characters, they will have different sums
  return diffCount === 2 && strBSum === strASum ? true : false;
}

console.log(onlyTwoSwapped('face', 'eacf'));
//we expectfalse
console.log(onlyTwoSwapped('face', 'eacF'));
console.log(onlyTwoSwapped('face', '8acf'));
console.log(onlyTwoSwapped('duh', 'hue'));
