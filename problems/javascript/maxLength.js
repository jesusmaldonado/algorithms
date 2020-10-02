// 1. Longest Subarray

// A subarray of array a is defined as a contiguous block of a's elements having a length that is less than or equal to the length of the array. For example, the subarrays of array a = [1, 2, 3] are [1], [2], [3], [1, 2], [2, 3], and [1, 2, 3]. Given an integer, k = 3, the subarrays having elements that sum to a number ≤ k are [1], [2], and [1, 2]. The longest of these subarrays is [1, 2], which has a length of 2. Given an array, a, determine its longest subarray that sums to less than or equal to a given value k.

// Function Description

// Complete the function maxLength in the editor below. The function must return an integer that represents the length of the longest subarray of a that sums to a number ≤ k.

// maxLength has the following parameter(s):

//     a[a[0],...a[n-1]]:  an array of integers

//     k: an integer

// Constraints

// 1 ≤ n ≤ 105
// 1 ≤ a[i] ≤ 103
// 1 ≤ k ≤ 109

// Input Format For Custom Testing
// Sample Case 0

// Sample Input For Custom Testing

// Sample Input 0

// 3
// 1
// 2
// 3
// 4

// Sample Output 0

// 2

// Explanation 0

// The subarrays of [1, 2, 3] having elements that sum to a number ≤ (k = 4) are [1], [2], [3], and [1, 2]. The longest of these is [1, 2], which has a length of 2. Return 2 as the answer.

// Sample Case 1

// Sample Input For Custom Testing

// Sample Input 1

// 4
// 3
// 1
// 2
// 1
// 4

// Sample Output 1

// 3

// Explanation 1

// The subarrays of [3, 1, 2, 1] having elements that sum to a number ≤ (k = 4) are [3], [1], [2], [1], [3, 1], [1, 2], [2, 1], and [1, 2, 1]. The longest of these is [1, 2, 1], which has a length of 3. Return 3 as the answer.

//unoptimal answer
//

/*
 * Complete the 'maxLength' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 */

function sumArray(el) {
  return el.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function maxLength(a, k) {
  let output = [];
  function generateSubArrays(a, start, end) {
    console.log("being run");
    if (end === a.length) {
      return;
    } else if (start > end) {
      generateSubArrays(a, 0, end + 1);
    } else {
      output.push(a.slice(start, end + 1));
      generateSubArrays(a, start + 1, end);
    }
  }
  generateSubArrays(a, 0, 0);
  console.log(output);
  let longestLength = null;
  output.forEach((el, index) => {
    const arraySum = sumArray(el);
    if (arraySum <= k) {
      const elLength = el.length;
      if (longestLength === null) {
        longestLength = elLength;
      } else {
        longestLength = elLength > longestLength ? elLength : longestLength;
      }
    }
  });
  return longestLength;
}

// optimal answer

("use strict");

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'maxLength' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 */

function maxLength(a, k) {
  let maxLen = -1;
  let sum = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    end = i;
    while (sum > k) {
      sum -= a[start];
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}
