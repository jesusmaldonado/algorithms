



var findMedianSortedArrays = function(x, y) {
    if (x.length > y.length) {
      return findMedianSortedArrays(y,x);
    }
    const xLength = x.length;
    const yLength = y.length;
    let [lo, hi] = [0, xLength];
    let i = 1;
    const top = xLength + yLength + 1;
    while (lo <= hi){
      const partitionX = Math.floor((lo+hi)/2);
      const partitionY = Math.floor((top)/2 - partitionX);

      const maxLeftX = partitionX === 0 ? -Infinity : x[partitionX - 1];
      const minRightX = partitionX === xLength ? Infinity : x[partitionX];

      const maxLeftY = partitionY === 0 ? -Infinity : y[partitionY - 1];
      const minRightY = partitionY === yLength ? Infinity : y[partitionY];
      if (maxLeftX <= minRightY && maxLeftY <= minRightX){
        // we have our answer
        const isEven = (xLength + yLength) % 2 === 0;
        const valuesMax = [maxLeftX, maxLeftY].filter(v => v !== -Infinity);
        if (!isEven){
          return Math.max(...valuesMax);
        } else {
          const valuesMin = [minRightX, minRightY].filter(v => v!== Infinity);
          const sum = (Math.max(...valuesMax) + Math.min(...valuesMin));
          return (sum/2);
        }
      } else if (maxLeftX > minRightY){
        //we need to move left
        hi = partitionX - 1;
      } else {
        //we need to move right
        lo = partitionX + 1;
      }
      i++

    }
};
const x = [1,2];
const y = [3];

console.log(findMedianSortedArrays(y,x), 2)
console.log(findMedianSortedArrays([23,26,31,35],[3,5,7,9,11,16]), 13.5)
console.log(findMedianSortedArrays([2,2],[2,2]), 2)
console.log(findMedianSortedArrays([2,2],[3,3]), 2.5)
console.log(findMedianSortedArrays([1,3,8,9,15],[7,11,18,19,21,25]), 11)
