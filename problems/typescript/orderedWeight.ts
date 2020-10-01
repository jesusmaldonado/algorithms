interface WeightMap {
  [number: string]: number;
}

function constructWeightMap(stringArr: string[]): WeightMap {
  const weightMap: WeightMap = {};
  for (let s of stringArr) {
    if (!weightMap[s]) {
      let digitsArrStr = s.split("");
      for (let digitStr of digitsArrStr) {
        let num = Number(digitStr);
        weightMap[s] = (weightMap[s] || 0) + num;
      }
    }
  }
  return weightMap;
}
function sortStringsArray(stringArr: string[], weightMap: WeightMap) {
  return stringArr.sort((sA, sB) => {
    const diff = weightMap[sA] - weightMap[sB];

    if (diff !== 0) {
      return diff;
    } else {
      return sA.localeCompare(sB);
    }
  });
}
function orderWeight(str: string) {
  const stringArr = str.split(" ");
  const weightMap = constructWeightMap(stringArr);
  const sortedStringArray = sortStringsArray(stringArr, weightMap);
  return sortedStringArray.join(" ");
}

export class Challenge {
  static orderWeight(str: string): string {
    const stringArr = str.split(" ");
    const weightMap = constructWeightMap(stringArr);
    const sortedStringArray = sortStringsArray(stringArr, weightMap);
    return sortedStringArray.join(" ");
  }
}

// /// <reference path="/runner/typings/main/ambient/mocha/index.d.ts" />
// /// <reference path="/runner/typings/main/ambient/chai/index.d.ts" />
// import {Challenge} from "./solution";
// import {assert} from "chai";

// describe("solution", function(){
//   it("should handle basic tests", function() {
//     assert.strictEqual(Challenge.orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
// 	assert.equal(Challenge.orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
//     assert.equal(Challenge.orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999");
// 	assert.equal(Challenge.orderWeight("2000 11 11"), '11 11 2000');
// 	assert.equal(Challenge.orderWeight("56 65 74 100 99 68 86 180 90"), "100 180 90 56 65 74 68 86 99");
// 	assert.equal(Challenge.orderWeight("14 500 5000 500000000000"), '14 500 5000 500000000000');

//   });
// });
