// Q1...
// time complexity:     =>  N*A
// space complexity: counts * 5-6 counts


function buildStore(store, numCount, query){
  while (query.length) {
    store[query] = store[query] ?
        (store[query] + numCount) :
        numCount;
    //1 member debug?
    let unjoinedArray = query.split(".");
    unjoinedArray.shift();
    query = unjoinedArray.join(".");
  }
  return store;
}


function createCounts(counts) {
  let store = {}
  for (let count of counts) {
    let [numCount, query]  = count.split(",");
    store = buildStore(store, Number(numCount), query);
  }

  printStore(store);
}

function printStore(store) {
  console.log(store);
}

createCounts(counts);
