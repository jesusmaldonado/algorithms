/*
1. Array balance point.
Find, if possible, an index in the array such that
the sum of all integers to left of the index
is equal to the sum of all the integers right of the index. e.g.

balancePoint([5, 4, 0, 19, 3, 4, 2, 0]) = 3
balancePoint([5, 4, 2, 1]) = -1
*/

// const sum = () => {
// 	return arr.reduce((prev, next) => {
// 		prev + next
// 	}, 0);
// };
//
// const findDuplicates = (arr) => {
// 	let dupMap = {};
// 	return arr.find((elem) => {
// 		if (dupMap[elem]){
// 			return true;
// 		}
// 		dupMap[elem] = true;
// 		return false;
// 	});
// };
// function balancePoint(arr){
// 	let sumMap = {};
// 	let forwardSum = null;
// 	let backwardSum = null;
// 	for (let fInt=1; fInt < arr.length; fInt++) {
// 		let bInt = arr.length - 1 - fInt;
// 		let forwardVal = arr[fInt - 1];
// 		let rightVal = arr[bInt + 1];
// 		if (Number.isInteger(forwardVal)) {
// 			forwardSum = forwardSum ? (forwardVal + forwardSum) : forwardVal;
// 			sumMap[forwardSum] = sumMap[forwardSum] ? sumMap[forwardSum].concat(fInt) : [fInt];
// 		}
// 		if (Number.isInteger(rightVal)) {
// 			backwardSum = backwardSum ? (rightVal + backwardSum) : rightVal;
// 			sumMap[backwardSum] = sumMap[backwardSum] ? sumMap[backwardSum].concat(bInt) : [bInt];
// 		}
// 	}
//
// 	for (let [sum, indices] of Object.entries(sumMap)) {
// 		const firstDupe = findDuplicates(indices);
// 		if (firstDupe){
// 			return firstDupe
// 		}
// 	}
// 	return -1;
// }

function balancePoint(arr) {
	const store1 = {};
	const store2 = {};
	let sum1 = 0;
	let sum2 = 0;
	for (let i = 0; i < arr.length - 1; i++) {
  	const elem = arr[i];
  	const rightIdx = arr.length - 1 - i;
  	const secondElem = arr[rightIdx];
  	sum1 += elem;
  	sum2 += secondElem
  	store1[i] = sum1;
  	store2[rightIdx] = sum2;
  }

  return findCommonSums(store1, store2);
}

function findCommonSums(store1, store2) {
	for (let [rightIdx, rightVal] of Object.entries(store2)) {
		// O(N)
		const leftVal = store1[rightIdx - 2];
		if (leftVal === rightVal) {
	     //we have a balance point
	   return rightIdx - 1;
    }
  }
  return -1;
}

console.log(balancePoint([5, 4, 0, 19, 3, 4, 2, 0]), 3);
console.log(balancePoint([5, 4, 2, 1]), -1);
console.log(balancePoint([7, 10, 1, 1, 1, 1, 1, 1, 1]), 1)
console.log(balancePoint([2, 3, 4, 7, 4, 3, 2]), 3)
