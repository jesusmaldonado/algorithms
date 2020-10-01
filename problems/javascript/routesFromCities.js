function findRoutes(routes) {
  const reversedRouteMap = routes.reduce((acc, el) => {
    const [des1, des2] = el;
    acc[des2] = des1;
    return acc;
  }, {});
  const routeMap = new Map(routes);
  const initialCities = routes.map((iten) => {
    const [des1, des2] = iten;
    return des1;
  });
  let from = initialCities.find((c) => !reversedRouteMap[c]);
  let output = [];
  while (routeMap.size !== 0) {
    output.push(from);
    const destination = routeMap.get(from);
    routeMap.delete(from);
    from = destination;
  }
  output.push(from);
  return output.join(", ");
}

// let assert = require('chai').assert;
// describe("Follow That Spy", function() {
//     it('Should return the correct route', function() {
//         assert.deepEqual(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]), "MNL, TAG, CEB, TAC, BOR");
//         assert.deepEqual(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]), "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle");
//     });
//     assert.deepEqual(findRoutes([["USA","BRA"],["JPN","PHL"],["BRA","UAE"],["UAE","JPN"]]), "USA, BRA, UAE, JPN, PHL");
// });
