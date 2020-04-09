function findThreeSum(list, x) {
    for (let i = 0; i < list.length; i++){
        const val = list[i];
        const remainder = x - val;
        const isPair = findTwoSum(list.slice(i+1), remainder);
        if (isPair){
            return true;
        }
    }
    return false;
}


function findTwoSum(list, x){
    let seen = new Set();
    for (let i = 0; i < list.length; i++){
        const num = list[i];
        const otherValue = x - num;
        if (seen.has(otherValue)){
            return true;
        }
        seen.add(num);
    }
    return false;
}
function assert(result, expected, msg){
    console.log(result, expected, msg);
}
assert(findThreeSum([1,2,2], 5), true, 'Should be true 1,2,3');
assert(findThreeSum([1,1,1], 4), false, 'Should be false, no nums');
assert(findThreeSum([1,2,4,4,8], 10), true, 'Should be true 2,4,4');
assert(findThreeSum([1,2,4,4,8], 14), true, 'Should be true 2,4,8');
assert(findThreeSum([1,2,4,4,8], 17), false, 'Should be false');
assert(findThreeSum([1,2,10,15,4], 7), true, '4,2,1')
assert(findThreeSum([1,1,1], 2), false, 'Should be false')