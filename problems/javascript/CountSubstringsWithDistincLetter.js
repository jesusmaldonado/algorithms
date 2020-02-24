```
Given a string S, return the number of substrings that have only one distinct letter.



Example 1:

Input: S = "aaaba"
Output: 8
Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
"aaa" occurs 1 time.
"aa" occurs 2 times.
"a" occurs 4 times.
"b" occurs 1 time.
So the answer is 1 + 2 + 4 + 1 = 8.
Example 2:

Input: S = "aaaaaaaaaa"
Output: 55


Constraints:

1 <= S.length <= 1000
S[i] consists of only lowercase English letters.
```
/**
 * @param {string} S
 * @return {number}
 */
const countLetters = function(S) {
    let currentNumberOfRepeatedElements,
        count = 0;
    for(let i = S.length - 1; i >= 0 ; i -= 1) {
        if(S[i + 1] !== S[i]) {
            currentNumberOfRepeatedElements = 0;
        }
        currentNumberOfRepeatedElements += 1;
        count += currentNumberOfRepeatedElements;
    }
    return count;
};
