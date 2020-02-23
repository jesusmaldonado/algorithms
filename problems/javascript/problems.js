function kTh(arr, k){
  let upperBound = Infinity;
  if (k > arr.length - 1) {
    throw new Error('k cannot be larger than array length')
  }
  let currMax;
  while (k > -1) {
    currMax = arr[0];
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];
      if (elem < upperBound && elem > currMax) {
        currMax = elem;
      }
    }
    upperBound = currMax;
    k--;
  }
  return currMax;
}
// runtime O(k*n), k is constant so this is technically linear but for
// large numebrs of n this cna present a problem
// console.log(kTh([1,2,3,4,5],0), 5)
console.log(kTh([1,3,25,100,93,10000,5,27,50],5))
