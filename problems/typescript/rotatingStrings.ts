function isStringEqual(first: string, second: string): boolean {
  return first === second;
}

function findRotations(first: string, secondStringArr: string[]) {
  let rotations = 0;
  while (rotations < secondStringArr.length) {
    rotations++;
    const removedChar = secondStringArr.shift()!;
    secondStringArr.push(removedChar);
    const secondString = secondStringArr.join("");
    console.log(secondStringArr);
    if (isStringEqual(first, secondString)) {
      return rotations;
    }
  }
  return -1;
}

export const shiftedDiff = (first: string, second: string): number => {
  //immediately equal
  if (isStringEqual(first, second)) {
    return 0;
  }
  let secondStringArr = second.split("");
  // quick character check if impossible
  for (let char of secondStringArr) {
    if (first.indexOf(char) === -1) {
      return -1;
    }
  }
  return findRotations(first, second.split(""));
};

//
// import chai, {assert} from "chai";
// import {shiftedDiff} from "./solution";
// chai.config.truncateThreshold = 0;
// const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
// const loremIpsumReversed = loremIpsum.split('').reverse().join('');
// const a = `
// m
// u
// l
// t
// i
// l
// i
// n
// e`

// const b = `
// u
// l
// t
// i
// l
// i
// n
// e
// m`
// describe("shiftedDiff", () => {
// 	it("should work on basic tests", () => {
// 		assert.equal(shiftedDiff("eecoff", "coffee"), 4);
// 		assert.equal(shiftedDiff("Moose", "moose"), -1);
// 		assert.equal(shiftedDiff("isn't", "'tisn"), 2);
// 		assert.equal(shiftedDiff("Esham", "Esham"), 0);
// 		assert.equal(shiftedDiff("coffee", "eecoff"), 2);
// 		assert.equal(shiftedDiff(" ", " "), 0);
// 		assert.equal(shiftedDiff("hoop", "pooh"), -1);
// 		assert.equal(shiftedDiff("  ", " "), -1);
// 		assert.equal(shiftedDiff("coffee", "eecoff"),2);
// 		assert.equal(shiftedDiff("eecoff", "coffee"),4);
// 		assert.equal(shiftedDiff("moose", "Moose"),-1);
// 		assert.equal(shiftedDiff("isn't", "'tisn"),2);
// 		assert.equal(shiftedDiff("Esham", "Esham"),0);
// 		assert.equal(shiftedDiff("dog", "god"),-1);
// 	});
//     it('should give different numbers for different rotationss', () => {
//         assert.equal(shiftedDiff("fatigue", "efatigu"), 1);
//         assert.equal(shiftedDiff("fatigue", "iguefat"), 4);
//     });
// 	it('should handle non-compatible multi-line reversions', () => {
// 		assert.equal(shiftedDiff(loremIpsum, loremIpsumReversed), -1);
// 	});
// 	it('should handle multiline chars', () => {
// 		assert.equal(shiftedDiff(a, b), 17);
// 	})
// });
