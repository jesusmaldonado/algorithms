// Given an inputString, generate the *shortest* possible continuous
// That contains both a lowercase char and an upperCaseChar

function solution(inputString) {
    let inputArr = inputString.split("");
    // write your code in JavaScript (Node.js 8.9.4)

    //first we generate smaller and smaller windows
    //this contains the smallest and smallest result
    const result = [];
    for (let i=0; i< inputArr.length; i++) {
        let windows = toWindows(inputArr, inputArr.length - i);
        for (let w of windows) {
            let isStringBalanced = checkBalanced(w);
            if (isStringBalanced) {
                result.push(w.join(""));
            }
        }
    }
    // after this loops runs, we select the non empty string
    if (result.length === 0) {
      return -1;
    }
    let string = result.reduce((a, b) => a.length <= b.length ? a : b);
    return string ? (string.length) : -1
}

function toWindows(inputArray, size) {
    return Array.from (
        {length: inputArray.length - (size - 1)}, //get the appropriate length
        (_, index) => inputArray.slice(index, index+size)
  )
}

function checkBalanced(str){
    const lowerCaseChar = new Set();
    const upperCaseChar = new Set();
    for (let char of str) {
        if (char.toUpperCase() === char){
           upperCaseChar.add(char);
        } else {
            lowerCaseChar.add(char);
        }
    }
    let ucA = Array.from(upperCaseChar);
    let lcA = Array.from(lowerCaseChar);
    let ucS = ucA.sort().map(a => a.toLowerCase()).join("");
    let lcS = lcA.sort().join("");
    if (ucS === lcS){
      return true;
    }
    return false;
}
