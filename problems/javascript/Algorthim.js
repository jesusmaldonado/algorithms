// Given a string of text (let's call it haystack), and an array of other strings (let's call them needles), find all the needles in the haystack.
//The output of the function should be the input string but have each occurrence wrapped in HTML tags (eg: <b>). The output must be valid HTML.

// function highlight(haystack: string, needles: Array<string>): string {}

// highlight("abcdefgabxyz", ["ab", "ga", "bcd"]); // "<b>abcd</b>ef<b>gab</b>xyz"
//abcd ==> ab + bcd
// e not matched
// gab ==> ga + bcd
// function replaceAt(str, index, value) {
//     let strArr = str.split("");
//     strArr.splice(index, 0, value);
//     return strArr.join("");
// //   return str.substring(0, index) + value, +str.substring(index + 1);
// }

// function isBetween(num, first, last){
//   return num >= first && num <= last
// }

// function highlight(haystack, needles) {
//   let highlighted = [];
//   for (let i = 0; i < needles.length; i++) {
//     let needle = needles[i];
//     let re = new RegExp(needle, "g");
//     let match = re.exec(haystack);
//     while (match) {
//       const firstIndex = match.index;
//       const length = match[0].length;
//       const lastIndex = length - 1 + firstIndex;
//       highlighted.push([firstIndex, lastIndex]);
//       match = re.exec(haystack);
//     }
//   }
//   highlighted.sort((a, b) => a[0] - b[0]);
//   const mergedHighlighted = highlighted.reduce((accum, b) => {
//     if (accum.length === 0){
//       accum.push(b);
//       return accum;
//     }
//     const a = accum[accum.length - 1];
//     const [sA, fA] = a;
//     const [sB, fB] = b;
//     if (isBetween(fA, sB, fB) || isBetween(sB, sA, fA)){
//       accum.pop()
//       accum.push([Math.min(sA, sB), Math.max(fA, fB)]);
//     } else {
//       accum.push(b);
//     }
//     return accum; 
//   }, []);
//   let haystackSplit = haystack.split("");
//   let numAdded = 0;
//   for (let i = 0; i < mergedHighlighted.length; i++) {
//     let [firstIndex, lastIndex] = mergedHighlighted[i];
//     haystackSplit.splice(firstIndex + numAdded, 0, "<b>");
//     numAdded++;
//     haystackSplit.splice(lastIndex + numAdded + 1, 0, "</b>");
//     numAdded++;
//   }
//   return haystackSplit.join("");
// }
// Given a string of text (let's call it haystack), and an array of other strings (let's call them needles), find all the needles in the haystack. 
//The output of the function should be the input string but have each occurrence wrapped in HTML tags (eg: <b>). The output must be valid HTML.

// function highlight(haystack: string, needles: Array<string>): string {}

// highlight("abcdefgabxyz", ["ab", "ga", "bcd"]); // "<b>abcd</b>ef<b>gab</b>xyz"
//abcd ==> ab + bcd
// e not matched
// gab ==> ga + bcd


