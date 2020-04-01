function promisify(fn){
  return (...rest) => {
    const executor = (res, rej) => {
      const customCallback = (result) => {
        res(Promise.resolve(result));
      };
      fn.call(this, ...rest.concat(customCallback));
    }

    return new Promise(executor);
  }
}


function multiply(num){
  return num * 4;
}
function add(x, y, cb){
  const res = x+y;
  cb(res);
}

addPromise = promisify(add);

addPromise(1,2).then(res => { console.log(res) }).then().then();
