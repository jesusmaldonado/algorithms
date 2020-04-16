let hash = {};
// memoization is key to dynamic programming, we just save prior results
function fib(n){
    if (hash[n]){
        console.log('grabbing from memo', n)
        return hash[n];
    }
    if (n == 0 || n === 1){
        hash[n] = n;
        return hash[n];
    }
    console.log('computing fib', n)
    const result = fib(n-1) + fib(n-2);
    hash[n] = result;
    return hash[n];
}

console.log('result fib', fib(5))