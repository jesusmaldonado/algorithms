//Implement a function to check if a linked list is a palindrome.

//reverse approach
//O(1) memory ; O(n)
function isPalindromeList(node) {
	let runner = node;
	let prevNode = null;
	while (runner) {
  	const nextReference = runner.next;
  	runner.next = prevNode;
  	prevNode = runner;
  	runner = nextReference;
  }
	let runner1 = node;
	let runner2 = prevNode;
	while (runner1) {
		if (runner1.value !== runner2.value) {
			return false;
    }
    runner1 = runner1.next;
    runner2 = runner2.next;
  }

  return true;
}

//fast stack approach
//O(n) memory ; O(n) time
function isPalindromeListStack(node){
  let fast = node;
  let slow = node;
  let stack = [];
  while (fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    // this means we have an odd number of letters
    slow = slow.next;
  }
  
  while (slow){
    const letter = stack.pop();
    if (letter !== slow.value) {
      return false;
    }
    slow = slow.next;
  }

  return true;
}
