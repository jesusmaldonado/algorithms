// [1] Given an array of integers, determine whether or not there exist two elements in the array (at different positions) whose sum is equal to some target value. Examples: [5, 4, 2, 4], 8 --> true [5, 1, 2, 4], 8 --> false
//
// function twoSum (array, targetSum) {
// 	// { 5: true, 4: true, 2: true} -> return true;
// 	// { 5: true, 1: true, 2: true, 4: true } -> return false
//     let seen = { };
// 	for (let integer of array) {
//         const otherNum = targetSum - integer;
//         if (seen[otherNum]) {
//         	return true;
//         } else {
//         	seen[integer] = true;
//         }
//     }
//     return false;
//     //O(n)time, O(n) memory
// }
//
// function twoSumNaive(array, targetSum) {
// 	for (let [integer, firstIndex] of array.entries()) {
//         const otherIdx = array.findIndex(targetSum - integer);
// 	    if (otherIdx && otherIdx !== firstIndex) {
// 	              return true;
//         }
//     }
//     return false;
//     //O(n^2 time) O(1) memory
// }

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 return array indices
 */
 //O(n) O(n)
 var twoSum = function(nums, target) {
     let nHash = {};
     nums.forEach((num, i) => {
        nHash[num] = nHash[num] ? nHash[num].concat(i) : [i];
     });
     for (let num of nums){
         const otherPair = target - num;
         const idxArrOtherPair = nHash[otherPair];
         if (idxArrOtherPair){
             for (let index of nHash[num]){
                 const otherIndex = idxArrOtherPair.find(i => i !== index);
                 if (otherIndex !== undefined){
                     //we have found a unique pair
                     return [index, otherIndex];
                 }
             }

         }
     }
 };

 //O(n) O(n) but one pass;
 var twoSum = function(nums, target) {
     let nHash = new Map();
     for (let i=0; i < nums.length; i++){
       const num = nums[i];
       const complement = target - num;
       const otherIdx = nHash.get(complement);
       if (otherIdx !== undefined && otherIdx !== i){
         return [otherIdx, i];
       }
       nHash.set(num, i);
     }
 };

console.log(twoSum([2,7,11,15], 9));
