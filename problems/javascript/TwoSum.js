// [1] Given an array of integers, determine whether or not there exist two elements in the array (at different positions) whose sum is equal to some target value. Examples: [5, 4, 2, 4], 8 --> true [5, 1, 2, 4], 8 --> false

function twoSum (array, targetSum) {
	// { 5: true, 4: true, 2: true} -> return true;
	// { 5: true, 1: true, 2: true, 4: true } -> return false
    let seen = { };
	for (let integer of array) {
        const otherNum = targetSum - integer;
        if (seen[otherNum]) {
        	return true;
        } else {
        	seen[integer] = true;
        }
    }
    return false;
    //O(n)time, O(n) memory
}

function twoSumNaive(array, targetSum) {
	for (let [integer, firstIndex] of array.entries()) {
        const otherIdx = array.findIndex(targetSum - integer);
	    if (otherIdx && otherIdx !== firstIndex) {
	              return true;
        }
    }
    return false;
    //O(n^2 time) O(1) memory
}
