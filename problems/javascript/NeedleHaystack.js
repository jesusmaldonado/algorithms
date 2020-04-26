console.log('hello world');

const a = ['a', 'b', 'c'];
const b = ['b', 'c', 'd'];

function interSection(arrA, arrB){
    return arrA.filter((a) => arrB.includes(a));
}
function interSectionMap(arrA, arrB){
  const map = new WeakMap();
  let common = [];
  for (let elem of arrA){
    map.set(elem, true);
  }
  for (let elemB of arrB){
    if (map.has(elemB)){
      common.push(elemB);
    }
  }

  return common
}

function commonSubstring(haystack, needle){
  let lastIndexFound = null;
  for (let char of needle){
    if (haystack.indexOf(char) !== -1) {
      lastIndexFound = haystack.indexOf(char);
      haystack = haystack.slice(lastIndexFound);
    } else {
      return false;
    }
  }
  return true;
}

function commonSubstringEfficient(haystack, needle){
  let lastIndexFound = null;
  for (let char of needle){
    if (haystack.indexOf(char) !== -1) {
      lastIndexFound = haystack.indexOf(char);
      haystack = haystack.slice(lastIndexFound);
    } else {
      return false;
    }
  }
  return true;
}




// console.log(interSectionMap(a, b), 'b, c')
console.log(commonSubstring('aepple', 'ale'), true)
console.log(commonSubstring('apple', 'ale'), true)
console.log(commonSubstring('apple', 'ael'), false)
