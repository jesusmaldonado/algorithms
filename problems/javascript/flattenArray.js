const flattenRecursion = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flattenRecursion(b) : b), []
);

const flattenArrayNoRecursion = list => {
  let transform = list;
  while (transform.some(a => Array.isArray(a))){
    transform = normalFlatten(transform);
  }
  return transform
}

const normalFlatten = list => {
  return list.reduce((a, b) => {
    return a.concat(b);
  }, []);
};


//test helper
const assertArray = function(fn, argument, expectation, message) {
    const result = fn(argument);
    const condition = JSON.stringify(result) === JSON.stringify(expectation);
    console.log(`\n${message}`)
    if (!condition) {
      throw Error(`Assertion failed for ${fn.name} called with ${JSON.stringify(argument)}:\n
        result: ${JSON.stringify(result)}\n
        expected: ${JSON.stringify(expectation)}\n
      `);
    }
    console.log(`Assertion passed for ${fn.name} called with ${JSON.stringify(argument)}: \n
        result: ${JSON.stringify(result)}
        expected: ${JSON.stringify(expectation)}
    `)
};
// let's assume we have arrays
const crazyArray = [[[[3,[[[[[[[3,[[[[3,[3,[3,[3]]]]]]]]]]]]]]]]]];

let fnsToBeTested = [flattenRecursion, flattenArrayNoRecursion];
for (let fn of fnsToBeTested){
  const tests = [
    {
      message: "it can handle empty",
      argument: [],
      result: []
    },
    {
      message: "it can handle no strings",
      argument: ['ajasbchjasbhdjbashjd'],
      result: ['ajasbchjasbhdjbashjd']
    },
    {
      message: "it can handle nested inside with multiple data types",
      argument: [ 3, "SDSdkjahfkjcansfkjsands",[[[[[[[[[[[[]]]]]]]]]]]], 3, 3, 3, 3 ],
      result: [3,"SDSdkjahfkjcansfkjsands",3,3,3,3]
    },
    {
      message: "it can crazy nested",
      argument: crazyArray,
      result: [ 3, 3, 3, 3, 3, 3 ]
    },
    {
      message: "it can handle objects with array",
      argument: [{}, {'a': '1'}, {'b': ['yay']}],
      result: [{}, {'a': '1'}, {'b': ['yay']}],
    }
  ]

  for (let {argument, result, message} of tests) {
    assertArray(fn, argument, result, message)
  }
}
