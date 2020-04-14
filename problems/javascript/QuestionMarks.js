// Questions Marks
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
// Examples
// Input: "aa6?9"
// Output: false
// Input: "acc?7??sss?3rr1??????5"
// Output: true
// let str = "acc?7??sss?3rr1??????5"
// function QuestionsMarks(str){
//   let qNumArr = str.replace(/[a-z]/ig, '').split("").map((c) => {
//     if (c.match(/\d/)) {
//         return parseInt(c);
//     }
//     return c;
//   });
//   let hash = {};
//   let questionMarks = 0;
//   let output = false;
//   for (let i = 0; i < qNumArr.length; i++){
//      const val = qNumArr[i];
//      if (Number.isInteger(val)){
//         // check if ten pair exists
//         const pair = 10 - val;
//         const isTen = hash[pair];
//         if (isTen && questionMarks !== 3){
//             return false;
//         } else if (isTen && questionMarks === 3){
//             output = true;
//             hash = {};
//         }
//         hash[val] = i;
//         questionMarks = 0;
//     } else {
//          questionMarks++
//      }
//   }
//   return output;
// }

// function QuestionsMarks(str){
//     let numPlace = [];
//     let output = false;
//     for (let i = 0; i < str.length; i++){
//         const v = str[i];
//         if (v.match(/\d/)){
//             numPlace.push(i);
//         }
//     }

//     for (let i = 0; i < numPlace.length - 1; i++){
//         const firstIdx = numArr[i];
//         const firstNum = parseInt(str[firstIdx]);
//         const secondIdx = numArr[i+1];
//         const secondNum = parseInt(str[secondIdx]);
//         const isTen = firstNum + secondNum === 10;
//         if (isTen) {
//             const isMatch = str.substring(firstIdx, secondIdx).match(/^???$/);
//             if (isMatch){
//                 output = true;
//             } else {
//                 return false;
//             }
//         }
//     }
//     return output;
// }


function QuestionsMarks(str){
    let output = false;
    let numArr = [];
    for (let i = 0; i < str.length; i++){
        const char = str[i];
        if (char.match(/\d/)){
            numArr.push(i);
        }
    }

    for (let i = 0; i < (numArr.length - 1); i++){
        const fIdx = numArr[i];
        const sIdx = numArr[i+1];
        const firstNum = parseInt(str[fIdx]);
        const secondNum = parseInt(str[sIdx]);
        const isTen = firstNum + secondNum === 10;
        if (isTen){
            // check what is in between
            const qMark = str.slice(fIdx,sIdx).replace(/[^\?]/g, '')
            if (qMark === '???'){
                output = true;
            } else {
                return false;
            }
        }
    }
    return output;
}



const expectations = [["arrb6???4xxbl5???eee5" , true],
["acc?7??sss?3rr1??????5",true],
["9???1???9???1???9",true],
["5??aaaaaaaaaaaaaaaaaaa?5?a??5",true]
]
for (let [str, exp] of expectations){
    console.log(QuestionsMarks(str), 'expe', exp);
}

//   let numberQuestionMarks = 0;
//   let firstNum = null;
//   let output = [];
//   qNumArr.forEach((v, i) => {
//     if (Number.isInteger(v)){
//       const isTen = v + firstNum === 10;
//               if (firstNum === 5){
//           console.log(v);
//           console.log(numberQuestionMarks);
//         }
//       if (isTen && numberQuestionMarks !== 3){
//         return false;
//       } else if (isTen && numberQuestionMarks === 3){
//         firstNum = v;
//         numberQuestionMarks = 0;
//         output.push(true);
//       }
//     } else {
//       numberQuestionMarks++;
//     }
//   });
//   return output.length === 0 ? false : true;
// }