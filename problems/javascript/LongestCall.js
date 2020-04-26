// n % 2 === 0  n/ 2
// odd 3n + 1

function longestCall(limit){
  let numberCalls = 0;
  let greatestNumber;
  for(let i = 1; i < limit; i++) {
    let numberChecking = i;
    let localCalls = 0;
    while (numberChecking !== 1) {
      if (numberChecking % 2 === 0) {
        const numberOfDivisions = numberChecking / 2;
        localCalls += 1 + numberOfDivisions
        if (numberCalls > localCalls) {
          numberCalls = localCalls;
        }
        break;
      } else {
        numberChecking = 3 * numberChecking + 1;
        localCalls += 1
      }
    }
    if (localCalls > numberCalls) {
      numberCalls = localCalls;
      greatestNumber = i;
    }
  }
  return [
    greatestNumber,
    numberCalls
  ];
}
