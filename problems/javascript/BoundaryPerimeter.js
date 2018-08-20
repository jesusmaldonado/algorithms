// An algorithm to calculate the permimeter of a shape

function cross(a, b, o) {
   return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
}
function convexHull(points) {
   points.sort(function(a, b) {
      return a[0] == b[0] ? a[1] - b[1] : a[0] - b[0];
   });

   var lower = [];
   for (var i = 0; i < points.length; i++) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
         lower.pop();
      }
      lower.push(points[i]);
   }

   var upper = [];
   for (var i = points.length - 1; i >= 0; i--) {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0) {
         upper.pop();
      }
      upper.push(points[i]);
   }

   upper.pop();
   lower.pop();
   return lower.concat(upper);
}

function calculateArea(p) {
  const l = p.length
  let det = 0

  if (p[0] !== p[p.length -1])
    p = p.concat([p[0]])

  for (var i = 0; i < l; i++) {
    det = det + (p[i][0] * p[i + 1][1]) - (p[i][1] * p[i + 1][0]);
    debugger;
  }
  return Math.abs(det/2);
}

var line;
let points = [];
while (line = readline()) {
    var nums = line.split(' ');
    if (nums.length === 1 && points.length === 0) {
        continue
    }
    if (nums.length === 2) {
        const point = nums.map(i => Number(i));
        points.push(point);
    }
    if (nums.length === 1 && points.length !== 0) {
        // calculate stuff here
        const boundaryPoints = convexHull(points);
        const area = calculateArea(boundaryPoints);
        // print
        print(area);
        // then clear
        points = [];
    }
}
