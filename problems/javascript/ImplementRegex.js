// Implement regular expression matching with support for '.' and '*'.
//
// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
//
// The matching should cover the entire input string (not partial).
//
// The function prototype should be:
// bool isMatch(const char *s, const char *p)
//
// Some examples:
// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "a*") → true
// isMatch("aa", ".*") → true
// isMatch("ab", ".*") → true
// isMatch("aab", "c*a*b") → true

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let index = 0;
    let hasEncounteredPrecedingCheck = false;
    for (let [idx, check] of p.split("").entries()){
        const isPrecedingCheck = p[idx+1] === '*';
        if (isPrecedingCheck){
            hasEncounteredPrecedingCheck = true;
            continue;
        }
        if (hasEncounteredPrecedingCheck){
          hasEncounteredPrecedingCheck = false;
          index = (index + 1 < s.length - 1) ? (index + 1) : index;
          continue;
        }
        const currentChar = s[index];

        if (!hasEncounteredPrecedingCheck) {
            //here we know we have a specific value either .
            //there are two conditions here, we have . which is the existence of any character
            //or we have a specific value
            const proceed = (check === '.' && currentChar) || (check !== '.' && check !== '*' && currentChar == check);
            if (proceed) {
                index += 1;
            } else {
                return false;
            }
        }
    }
    return index === s.length - 1;
};
// console.log(isMatch("aa","a") === false)
// console.log(isMatch("aa","aa") === true)
// console.log(isMatch("aaa","aa") === false)
// console.log(isMatch("aa", "a*") === true)
// console.log(isMatch("aa", ".*") === true)
// console.log(isMatch("ab", ".*") === true)
console.log(isMatch("aab", "c*a*b") === true)
