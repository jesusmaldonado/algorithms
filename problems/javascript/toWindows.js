function solution(inputArr) {
    // write your code in JavaScript (Node.js 8.9.4)

    //first we generate smaller and smaller windows
    //this contains the smallest and smallest result
    for (let i=0; i< inputArr.length; i++) {
        let windows = toWindows(inputArr, inputArr.length - i);
        for (let w of windows) {
          if (checkTwo(w)){
            return w.length;
          }
        }
    }
    // after this loop runs, means we have no strings length, just return 1.
    return 1;
}

function toWindows(inputArray, size) {
    return Array.from (
        {length: inputArray.length - (size - 1)}, //get the appropriate length
        (_, index) => inputArray.slice(index, index+size)
  )
}



function checkTwo(arr){
  const set = new Set(arr);
  if (set.size > 0 && set.size <= 2) {
    return true;
  }
  return false
}
console.log(solution([4, 2, 2, 4, 2]))
console.log(solution([1, 2, 3, 2]))
console.log(solution([0, 5, 4, 4, 5, 12]))
console.log(solution([4,4]));
console.log(solution([4]));
