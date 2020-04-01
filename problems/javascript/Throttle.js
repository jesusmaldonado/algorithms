function Cow(){};

Cow.prototype.moo = function(currentTime, ...rest){
  console.log('from fn',currentTime);
  console.log(this.mooCall, ...rest);
}
const a = new Cow();

function throttle(fn, t = 500, context){
  let i = 0;
  let id;
  return (...rest) => {
    if (i === 0) {
      fn.call(context, ...rest, );
      id = setInterval(() => {
        if (i < t){
          i++;
        } else {
          clearInterval(id);
          i = 0;
        }
      }, 1);
    }
  }
}
const throttledMoo = throttle(a.moo, undefined, {'mooCall': 'moooooo'})
throttledMoo('');
setInterval(() => {
  throttledMoo('wow', 'throttled babe');
}, 1);
