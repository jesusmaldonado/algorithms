function race(promises) {
    return new Promise((res, rej) => {
      promises.map((p) => p.then((resp) => {
        res(resp);
      }));
    })
  }
  
  const timeout = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  };
  
  const promises = [
    timeout(0),
    timeout(500),
    timeout(1000)
  ];
  
  race(promises).then((response) => {
    // 0
    console.log(response);
  });