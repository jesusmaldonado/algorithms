//we aim to have a list of move vectors
const moves = {
  'right': {x: 0, y: 1},
  'down': {x: 1, y: 0},
  'left': {x: 0, y: -1},
  'up': {x: -1, y: 0},
};
function isAtEndGoal(minerX, minerY, endX, endY) {
  return ((minerX === endX) && (minerY === endY));
}

function findUpdated(direction, minerCoordinate, key){
  const {[direction]: { [key]: updatedValue } } = moves;
  return minerCoordinate + updatedValue;
}

function findPossibleDirections(map, minerX, minerY, visitedCoordinates) {
  const possibleDirections = [];
  for (const direction of Object.keys(moves)) {
    const updatedX = findUpdated(direction, minerX, 'x');
    const updatedY = findUpdated(direction, minerY, 'y');

    let noNegatives = (updatedX >= 0) && (updatedY >= 0)
    let isPossiblePlace = map[updatedX] && map[updatedX][updatedY] === true;
    let isNewCoordindate = !visitedCoordinates.find(({x: priorX, y: priorY}) => {
      return (priorX === updatedX) && (priorY === updatedY);
    });

    if (isPossiblePlace && isNewCoordindate && noNegatives){
      possibleDirections.push(direction);
    }
  }
  return possibleDirections;
}

function solve(mazeMap, miner, exit, invert = true, visitedCoordinates = [], ) {
  let path = [];

  // this doesn't make sense as an array of columns, i am going to transpose it.
  // this is just the inversion logic that follows
  let transposedArray, invertedExit, invertedMiner;
  if (invert) {
    transposedArray = mazeMap[0].map((col, i) => mazeMap.map(row => row[i]));
    let {x: eX, y: eY } = exit;
    invertedExit = {x: eY, y: eX };
    let {x: mX, y: mY } = miner;
    invertedMiner = {x: mY, y: mX };
  }
  if (!invert) {
    transposedArray = mazeMap;
    invertedExit = exit;
    invertedMiner = miner;
  }

  const { x: minerX, y: minerY } = invertedMiner;
  const { x: endX, y: endY } = invertedExit;

  //
  visitedCoordinates.push(invertedMiner);
  if (isAtEndGoal(minerX, minerY, endX, endY)) {
    return path;
  }
  const possibleDirections = findPossibleDirections(transposedArray, minerX, minerY, visitedCoordinates);
  if (possibleDirections.length === 0) {
    path.push('not possible');
    return path;
  }

  if (possibleDirections.length >= 1) {
    for (let possibleDirection of possibleDirections) {
      const [
        updatedX,
        updatedY
      ] = [
        findUpdated(possibleDirection, minerX, 'x'),
        findUpdated(possibleDirection, minerY, 'y')
      ];
      path.push(possibleDirection);
      // we recurse, if there is no possible path, we continue.
      let possiblePath = solve(transposedArray, {x: updatedX, y: updatedY}, invertedExit, false, visitedCoordinates, tries);
      if (!possiblePath) {
        continue;
      }
      if (!possiblePath.includes('not possible')) {
        path = path.concat(possiblePath);
        return path;
      }
    }
  }
}
