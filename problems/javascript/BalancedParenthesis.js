// Given a string that contains only the characters "(" and ")", determine if the sequence of parentheses is balanced.
// Having balanced parentheses means that for each opening symbol there is a corresponding closing symbol.
// Pairs need to be properly nested, containing only matching pairs, to be valid.

// )      // invalid   (no opening parentheses)
// ()     // valid     (every opening symbol has a valid and matching closing symbol)
// ()()   // valid     (parentheses both match)
// ()(()) // valid     (parentheses are properly nested)
// )()(   // invalid   (there are unmatched parentheses)
// ((())  // invalid   (too many opening parentheses)

function isBalanced(str) {
  const opener = '(';
  let openerStack = [];
  for (let character of str){
    if (character === opener) {
      openerStack.push(character);
    } else {
      const lastOpener = openerStack.pop();
      if (Boolean(lastOpener) === false){
        return false;
      }
    }
  }
  return !Boolean(openerStack.length);
}
console.assert(isBalanced(')') === false, '1')
console.assert(isBalanced('()')=== true, '2')
console.assert(isBalanced('()()')=== true, '3')
console.assert(isBalanced('()(())')=== true, '4')
console.assert(isBalanced(')()(')=== false, '5')
console.assert(isBalanced('((())')=== false, '6');


function isSuperBalanced(str) {
  const openerSet = ['(', '[', '{'];
  const openerCloserMap = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  let openerStack = [];
  for (let character of str){
    if (openerSet.includes(character)) {
      openerStack.push(character);
    } else {
      const lastOpener = openerStack.pop();
      const correspondingCloser = openerCloserMap[lastOpener];
      if (correspondingCloser !== character){
        return false;
      }
    }
  }
  return !Boolean(openerStack.length);
}


console.log(isSuperBalanced('[()]{}'), true, '1');
console.log(isSuperBalanced('{([])}'), true, '2');
console.log(isSuperBalanced('(][)'), false, '3');
console.log(isSuperBalanced('[(])'), false, '4');
