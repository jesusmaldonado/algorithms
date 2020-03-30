Function.prototype.bind = null;
function Cow(){
};

Cow.prototype.foo = function(arg1, arg2){
  console.log(this.bar, arg1, arg2);
}

Function.prototype.bind = function (...rest){
  return (...restArgs) => {
    const args = rest.concat(restArgs);
    return this.call(...args);
  };
}

let r = new Cow()
let foo = r.foo;
let z = foo.bind({bar: 'hello'}, 'sally');
z('you suck')
