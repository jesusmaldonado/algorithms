let rates = {
  'USD': {
    'JPY': 108.43,
  },
  'AUD': {
    'USD': 0.60
  },
  'JPY': {
    'GBP': .0075
  },
  'KRU': {
    'GBP': 0.00066
  }
}

function findPath(iCurr, tCurr, rates){
  let paths = [[iCurr]];
  let path = paths.pop();
  while (!path.includes(tCurr)){
    let lastCurrency = path[path.length - 1];
    if (rates[lastCurrency] && rates[lastCurrency][tCurr]){
      return path.concat(tCurr);
    }
    let entries = Object.entries(rates).filter(([k, v]) => {
      return !path.includes(k)
    });
    for (let [key, value] of entries){
        paths.unshift(path.concat(key));
    }
    paths.pop();
  }
}

function findRate(path, rates){
  let r = []
  let curr = path.shift();
  while (path.length !== 0){
    let pair = path.shift()
    let el;
    if (rates[curr] && rates[curr][pair]){
        el = rates[curr][pair]
    } else {
        el = 1/rates[pair][curr];
    }
    curr = pair;
    r.push(el);
  }
  return r;
}

function findCurrency(amount = 5, iCurr, tCurr, obj){
  let rate;
  if (obj[iCurr] && obj[iCurr][tCurr]){
    rate = obj[iCurr][tCurr];
    return amount * rate;
  }
  if (obj[tCurr] && obj[tCurr][iCurr]){
    rate = 1/obj[tCurr][iCurr];
    return amount * rate;
  }
  const path = findPath(iCurr, tCurr, obj);
  const consecutiveRates = findRate(path, rates);
  return consecutiveRates.reduce((a, b) =>(a * b), amount);
}
console.log(findCurrency(undefined, 'JPY', 'KRU', rates))
