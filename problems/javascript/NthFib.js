let memo = {
    '0': 0,
    '1': 1
};

function fib(n){
    if (n === 0 || n === 1){
        return memo[n];
    }
    if (memo[n]) {
        return memo[n];
    }  

    return fib(n -1) + fib(n - 2);
}
//recursive space O(N) runtime O(2^n) 
function findNthFib(n){
    let val = fib(n-1);
    return val
}
//constant space, //linear runtime;
function constantSpaceFindFib(n){
    let first = 0;
    let second = 1;
    let current;
    if (n === 1){
        return first;
    }
    if (n === 2){
        return second;
    }
    for (let i = 2; i < n; i++){
        current = second + first;
        first = second;
        second = current;
    }
    return current;
}


console.log(constantSpaceFindFib(8));