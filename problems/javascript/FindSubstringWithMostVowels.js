function isVowel(char){
  const hash = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  }
  return Boolean(hash[char]);
}


function findSubstring(str, k) {
    // Write your code here
    if (str.length < k){
      return 'Not Found!'
    }
    let start = 0;
    let maxVowels = 0;
    let count = 0;
    for (let i = 0; i <= str.length - k; i++){
      let char = str[i];
      if (count < k) {
        count++;
        maxVowels = isVowel(char) ? maxVowels + 1 : maxVowels;
      } else {
        let lastChar = str[k - 1 + i];
        if (isVowel(lastChar) && !isVowel(char)){
          //then I know i increased the count;
          maxVowels++;
          start = i;
        }
      }

      if (maxVowels === k){
        return str.substring(start, start+k);
      }
    }
    if (maxVowels !== 0){
      return str.substring(start, start+k);
    }
    return 'Not found!'
}

console.log(findSubstring('aeeddwdoooiou', 5))
console.log(findSubstring('zzzzzzzz', 5))
