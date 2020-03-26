//return the optimal number of items
//O(n(log n)) runtime
//O(n) space
function productList(cartAmount, products, limit){
  return products.sort((a, b) => {
    const goal = Math.abs(cartAmount - limit);
    const diffB = Math.abs(goal - b);
    const diffA = Math.abs(goal - a);

    if (diffB > diffA){
      return -1;
    } else if (diffA > diffB){
      return 1;
    } else {
      return b - a;
    }
  });
}
let cartAmount= 20
let limit = 25
let products = [1000,6,6,4,10,1]
//[10,6,4,1,1000]

console.log(productList(cartAmount, products, limit));
