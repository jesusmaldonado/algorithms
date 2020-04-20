function possibleChange(amount, denominations){
    return denominations.filter((denom) => (amount - denom) >= 0)
}

function makeChange(amount, denominations){
    if (amount < 0){
        return false;
    }
    if (amount === 0){
        return [];
    }
    let combinations = [];
    for (let i = 0; i < denominations.length; i++){
        let denom = denominations[i];
        const newAmount = amount - denom;
        let filtered = possibleChange(newAmount, denominations);
        let coins = makeChange(newAmount, filtered);
        if (coins){
            coins.push(denom);
        }
        if (newAmount === 0)
        combinations.push(coins);
    }
}
console.log(makeChange(4,[1,2,3]))