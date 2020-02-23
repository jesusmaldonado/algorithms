// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = (shape, values) => {
  const allowedShapes = ['circle', 'rectangle', 'triangle', 'square'];
  const pi = 3.14;
  return new Promise((res, rej) => {
    if (!allowedShapes.includes(shape)) {
      reject(-1);
    }
    let result;
    if (shape === 'circle') {
      result = pi * Math.pow(values[0], 2)
    }
    if (shape === 'rectangle') {
      result = values[0] * values[1];
    }
    if (shape === 'triangle') {
      result = 0.5 * values[0] * values[1];
    }
    if (shape === 'square'){
      result = Math.pow(values[0], 2);
    }
    result = Number(result.toFixed(2));
    res(result);
  });
}

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = (shapes, values_arr) => {
    let promises = shapes.map((shape, i)) => calculateArea(shape, values_arr[i])
    return Promise.all(promises);
}

let callCalculateArea = async (shapes, values) => await calculateArea(shapes[0], values[0]).catch(error => error) instanceof Promise;
