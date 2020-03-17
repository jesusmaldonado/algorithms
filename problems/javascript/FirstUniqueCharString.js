/**
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
 //O(n), O(characters) memory
 const firstUniqChar = function(s) {
     const seen = new Map();
     for (let char of s){
         let occurence = seen.get(char);
         if (occurence){
             occurence === 2 ? null : seen.set(char, 2);
         } else {
             seen.set(char, 1);
         }
     }
     for (let [key, value] of seen) {
         if (value === 1) {
             return s.indexOf(key);
         }
     }
     return -1;
 };

//O(n) runtime, but constant space.
const firstUniqChar = function(s){
  const states = Array(26).fill(-1);
  const order = [];
  for (let i = 0; i < s.length; i++){
    const charCode = s.charCodeAt(i) - 97;
    //a is 97, so 'a' would be 0;
    if (states[charCode] === -1){
      // we have not seen this;
      order.push(charCode);
      states[charCode] = i;
    } else {
      states[charCode] = -2
    }
  }

  for (let i = 0; i < order.length; i++) {
      let charCode = order[i];
      let index = states[charCode];
      if (index > -1){
        return index;
      }
  }
  return -1;
}
