`
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
`
// WAY 1, requires O(n reshifting);
class MinStack {
  constructor(){
    this.stack = [];
    this.minIndex = -1;
  }
  push(x){
    this.stack.push(x);
    if (this.minIndex !== -1){
      //we have items
      let currentMin = this.stack[this.minIndex];
      if (x < currentMin){
        this.minIndex = this.stack.length - 1;
      }
    } else {
      //this is a new min
      this.minIndex = 0;
    }

  }
  pop(){
    this.stack.pop();
    if (this.stack.length === 0){
      this.minIndex = -1;
    }
    if (this.stack[this.minIndex] === undefined && this.stack.length){
      this.minIndex = 0;
      const currentMin = this.stack[this.minIndex];
      for (let i = 0; i < this.stack.length; i++){
        const val = this.stack[i];
        if (val < currentMin){
          currentMin = val;
          this.minIndex = i;
        }
      }
    }
  }
  top(){
    return this.stack[this.stack.length - 1];
  }
  getMin(){
    return this.stack[this.minIndex];
  }
}
const minStack = new MinStack;
minStack.push(-2);
// console.log(minStack.stack)  //-3

minStack.push(0);
// console.log(minStack.stack)  //-3

minStack.push(-3);
console.log(minStack.getMin(), -3)  //-3
console.log(minStack.pop())
console.log(minStack.top(), 0);      //0
console.log(minStack.getMin(), -2)  //-3
// console.log(minStack.pop());
// console.log(minStack.getMin());   //-2

class MinStack {
  constructor(){
    this.stack = [];
  }
  push(x){
    let min = this.stack.length ? this.stack[this.stack.length - 1].min : x;
    // this is smart, so we always know the size of the last minimum;
    stack.push({val: x, min: Math.min(min, x)});
  }
  pop(){
    this.stack.pop();
  }
  top(){
    if (this.stack.length){
      return this.stack[this.stack.length -1].val;
    }
  }
  getMin(){
    if (this.stack.length){
      return this.stack[this.stack.length - 1].min;
    }
  }
}
