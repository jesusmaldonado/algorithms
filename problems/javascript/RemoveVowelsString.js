```
Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.



Example 1:

Input: "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: "aeiou"
Output: ""


Note:

S consists of lowercase English letters only.
1 <= S.length <= 1000
```

/**
 * @param {string} S
 * @return {string}
 */
 var removeVowels = function(str) {
     let stringWithoutVowels = str.split("").filter(s => !s.match(/[a,e,i,o,u]/));
     return stringWithoutVowels.join("");
 };
