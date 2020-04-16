//recursion approach
//javasript does allow tail optimized recursion tho;

// function product1ToN(n) {
//     // We assume n >= 1
//     return (n > 1) ? (n * product1ToN(n-1)) : 1;
// }
  
//bottom-up approach

function product1ToN(n){
    let res = 1;
    for (let i = 1; i <= n; i++){
        res *= i;
    }

    return res;
}

console.log(product1ToN(30))