let str = `If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.`
function outputUnique(str, limit=50){
  let hash = {};

  for (let char of str){
    if (hash[char]){
      hash[char] = hash[char] + 1;
    } else {
      hash[char] = 1;
    }
  }
  const orderedKeys = Object.keys(hash).sort((key1, key2) => {
    return hash[key1] - (hash[key2]);
  });
  let currLength = str.length;
  let res = [];
  for (let key of orderedKeys){
    let value = hash[key];
    if ((currLength - value) >= limit){
      res.push(key);
      currLength = currLength - value;
    }
  }
  return res;
}
