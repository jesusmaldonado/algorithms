// returns the number of pairs seen in order from least to greatest.
// linear runtime, linear space.

function countPairs(arr){
  const dict = new Map();
  for (let i = 0; i < arr.length; i++){
    let value = arr[i];
    let mVal = dict.get(value);
    if (mVal === undefined){
      dict.set(value, [i])
    } else {
      dict.set(value, mVal.concat([i]));
    }
  }
  let ans = 0;
  for (let [k, v] of dict.entries()){
    if (v.length > 1){
      let count = v.length;
      // this is a combinatorial trick, the number of ways to grab 2 distinct things from n
      // where n is the number of entries.
      let seen = Math.floor((count * count - 1)/2);
      ans += seen;
    }
  }
  return ans;
}

console.log(countPairs([3,3,4,5,2,5,3]));
