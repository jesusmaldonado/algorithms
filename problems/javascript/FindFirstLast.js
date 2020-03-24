var searchRange = function(nums, target){
  return [find(nums, target), find(nums, target, false)];
}
function find(nums, target, left = true){
  let [l, r] = [0, nums.length - 1];
  while (l <= r){
    let mi = Math.floor((l + r)/2);
    if (nums[mi] < target){
      l = mi + 1;
    } else if (nums[mi] > target){
      r = mi - 1;
    } else {
      //we have an equality
      // we would normally return mi here, but we have additional work to do
      if (left){
        if (nums[mi - 1] === target){
          // this means that there are further candidates on the left and we
          // shift the right bound to search the left side
          r = mi -1;
        } else {
          // if we have hit this point, we have hit the left-most.
          return mi;
        }
      } else {
        if (nums[mi + 1] === target){
          //if this condition is true, we shift the left bounds
          // to search the right-side right of the array
          l = mi + 1;
        } else {
          //this means that we have reached the right-most;
          return mi;
        }
      }
    }
  }
  // if we reach this point, we have no alternatives.
  return -1;
}




console.log(searchRange(nums, target));
