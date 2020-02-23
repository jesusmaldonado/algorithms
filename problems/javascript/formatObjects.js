const str = `photo.jpg, Warsaw, 2013-09-05 14:08:15
john.png, London, 2015-06-20 15:13:22
myFriends.png, Warsaw, 2013-09-05 14:07:13
Eiffel.jpg, Paris, 2015-07-23 08:03:02
pisatower.jpg, Paris, 2015-07-22 23:59:59
BOB.jpg, London, 2015-08-05 00:02:03
notredame.png, Paris, 2015-09-01 12:00:00
me.jpg, Warsaw, 2013-09-06 15:40:22
a.png, Warsaw, 2016-02-13 13:33:50
b.jpg, Warsaw, 2016-01-02 15:12:22
c.jpg, Warsaw, 2016-01-02 14:34:30
d.jpg, Warsaw, 2016-01-02 15:15:01
e.png, Warsaw, 2016-01-02 09:49:09
f.png, Warsaw, 2016-01-02 10:55:32
g.jpg, Warsaw, 2016-02-29 22:13:11`

function solution(str) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arrPhotos = str.split("\n");
    let cityMap = {};
    arrPhotos.forEach((str, idx) => {
      let [oName, city, timestamp] = str.split(", ");
      let obj = {
        oName,
        city,
        oIdx: idx,
        timestamp,
        unix: new Date(timestamp).getTime()/1000
      }
      cityMap[city] = cityMap[city] ? cityMap[city].concat(obj) : [obj];
    })
    for (let [city, v] of Object.entries(cityMap)){
      const sortedCity = v.sort((a, b) => compare(a.unix, b.unix));
      const maxLength = cityMap[city].length;
      const maxDigits = numDigits(maxLength);
      cityMap[city] = cityMap[city].map((o, i) => {
        const { oName } = o;
        const extension = oName.split(".")[1];
        return {
          ...o,
          newName: `${city}${pad(i+1, maxDigits)}.${extension}`
        }
      })
    }
    let combinedStr = Object.values(cityMap)
      .reduce((acc, val) => acc.concat(val), [])
      .sort((a, b) => compare(a.oIdx, b.oIdx))
      .map(o => o.newName)
      .join("\n");
      return combinedStr;
}
function compare(fieldA, fieldB){
  if (fieldA < fieldB) {
    return -1;
  } else if (fieldA > fieldB) {
    return 1;
  } else {
    return 0
  }
}
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function numDigits(x) {
  return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}
console.log(solution(str));
