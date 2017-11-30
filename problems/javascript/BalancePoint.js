/*
1. Array balance point.
Find, if possible, an index in the array such that
the sum of all integers to left of the index
is equal to the sum of all the integers right of the index. e.g.

balancePoint([5, 4, 0, 19, 3, 4, 2, 0]) = 3
balancePoint([5, 4, 2, 1]) = -1
*/
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

console.log(balancePoint([5, 4, 0, 19, 3, 4, 2, 0]));
console.log(balancePoint([5, 4, 2, 1]));
console.log(balancePoint([7, 10, 1, 1, 1, 1, 1, 1, 1]))
console.log(balancePoint([2, 3, 4, 7, 4, 3, 2]))
