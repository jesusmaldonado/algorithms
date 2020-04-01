//implements debounce, which cancels all previous calls

function debounce(fn, t){
  let id;
  return (...rest) => {
    if (id){
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn.call(this, ...rest);
      id = null;
    }, t);
  }
}

function test(arg1, arg2){
  console.log(arg1, arg2);
}
class Cow {
  constructor(){
    this.moocall = 'lol';
  }
  moo(arg1, arg2){
    console.log(this.moocall, arg1, arg2);
  }
}
const r = new Cow();
debouncedTest = debounce(r.moo.bind(r), 10);
debouncedTest('de','bounce1');
debouncedTest('de','bounce2');
debouncedTest('de','bounce3');
debouncedTest('de','bounce4');
debouncedTest('de','bounce5');
debouncedTest('de','bounce6');
let i = 1;
setInterval(() => {
  i++;
  debouncedTest(i, 'interval');
}, 1000)
