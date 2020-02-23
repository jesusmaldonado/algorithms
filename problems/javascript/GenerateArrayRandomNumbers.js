//Generate an Array of Random numbers between 1-2

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
     return [...new Array(N)]
        .map(() => Math.round(Math.random() * 1 + 1));
}

console.log(solution(500));
