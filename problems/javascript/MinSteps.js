
    // function minSteps(arr){
    //   const n = arr.length;
    //   let dp = [];
    //   dp[0] = 0;
    //   for (let i=1; i < n; i++){
    //     dp[i] = Infinity;
    //     for (let j=1; j <= i; j++){
    //       if (arr[i-j] >= j){
    //         dp[i] = Math.min(dp[i], dp[i-j] + 1);
    //       }
    //     }
    //   }
    //   return dp[n -1]
    // }
    function minSteps(arr){
        const goal = arr.length;
        let steps = 0;
        if (arr.length === 0 || arr.length === 1){
            return steps;
        }
        let jumps = 1;
        let ladder = arr[0];
        let stairs = arr[0];
        for (let i = 0; i < goal; i++){
            if (i + arr[i] > ladder) {
                ladder = i + arr[i];
                stairs--;
            }
            if (stairs + i >= goal - 1){
                return jumps;
            }
            if (stairs == 0){
                jumps++;
                stairs = ladder - i;
            }
        }
        return jumps;
    }
    {
      "USD": {
        "EUR": 0.9272137228,
        "GBP": 0.8145572554
      },
      "EUR": {
        "GBP": 0.8785,
        "USD": 1.0785
      },
      "GBP": {
        "EUR": 1.1383039271,
        "USD": 1.2276607854
      }
    }

    // do currency exchange problem
    console.log(minSteps([1, 3, 5]));
    console.log(minSteps([2, 3, 1, 1, 4]));
