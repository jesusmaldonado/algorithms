/**
852. Peak Index in a Mountain Array
Easy

480

996

Add to List

Share
Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].
 */

/**
 * @param {number[]} A
 * @return {number}
 */

 //O(n), works for multi-peaks [0,1,2,3,4,2,6000,0]

var peakIndexInMountainArray = function(arr) {
    let maxI = null;
    let rightMost = null;
    for (let i=0; i < arr.length; i++){
        const left = arr[i-1];
        const currentElement = arr[i];
        const right = arr[i+1];
        if (left === undefined || right === undefined){
            continue;
        }
        if (currentElement > right && currentElement > left){
            maxI = i;
            rightMost = right;
            continue;
        }
        if (maxI){
            //we know for sure there is a right element
            if (rightMost > right){
                rightMost = right;
            } else {
                // this is not a local top
                maxI = null;
                rightMost = null;
            }
        }
    }
    return maxI;
};
//O(n) time, but only works for one peak mountains i.e. not
// [0,1,2,3,4,2,6000,0]
const peakIndexInMountainArray = function(arr){
  let maxI = null;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > arr[i+1]){
      maxI = i;
    }

    if(maxI){

    }
  }
  return maxI;
}
//O(log(n)) (binarysearch) (must be a unipeak mountain)
const peakIndexInMountainArray = function(arr){
  const [lo, hi] = [0, arr.length - 1];
  while (lo < hi){
    mi = Math.floor((lo+hi)/2);
    if (arr[mi] < a[mi + 1]) {
      lo = mi + 1;
    } else {
      hi = mi;
    }
  }
  return lo;
}
peakIndexInMountainArray([0,2,1,0])
