// let tempArr = [5, -2, 3, 8, 6]
tempArr = [-5, -5, -5, -42, 6, 12]
//return the shortest length of winter, where winter is defined as the point at which temperatures all are decreasing.
function solution(tempArr){
  let winterHigh = tempArr[0];
  let overHigh = tempArr[0];
  let winterLength = 0;
  for (let temp of tempArr) {
    //this means we have a new low, so we are still in winter. we record the current highest temperature.
    if (temp <= winterHigh) {
      // when this is true, we have a new low, therefore
      // we know we are still in winter
      // and must record the new winter high
      winterHigh = overHigh;
    } else if (temp > overHigh) {
      //this will always keep of the current highest temperature. this means
      overHigh=temp;
    }
  }

  for (let temp of tempArr){
    //now since we have the winterhigh we can just count the number of temperatures
    //less than or equal to the winter high.
    if (temp <= winterHigh){
      winterLength++;
    }
  }
  return winterLength;
}
