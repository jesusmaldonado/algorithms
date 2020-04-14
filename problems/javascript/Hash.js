// let events = ['setPassword', '000A'],
// [authorize, 108738450]
// [authorize, 108738449]
// [authorize, 244736787]

function hash(str){
    let n = str.length - 1;
    const p = 131
    let result = null
    for (let i=0; i < str.length; i++){
        let char =str[i];
        let val = char.charCodeAt(0)*Math.pow(p, n);
        if (result === null){
            result = val
        } else {
            result = result + val;
        }
        n--
    }
    return result % (Math.pow(10, 9) + 7);
}
console.log()
let additionalChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function authEvents(events){
    let possibleChars = []
    let output = [];
    for (let i=0; i < events.length; i++){
        const val = events[i];
        const eventName = val[0];
        const value = val[1];
        if (eventName === 'setPassword'){
            possibleChars = [];
            possibleChars.push(hash(value));
            additionalChars.forEach((char) => {
                possibleChars.push(hash(value + char));
            });
        } else {
            possibleChars.includes(parseInt(value)) ? output.push(1) : output.push(0);
        }
    }
    console.log(possibleChars)
    return output;
}

// let events = [
//     ['setPassword', "000A"],
//     ['authorize', 108738450],
//     ['authorize', 108738449],
//     ["authorize", 244736787]
// ]
let events = [ [ 'setPassword', 'Ghnu' ],
[ 'authorize', '161413732' ],
[ 'authorize', '145198797' ],
[ 'setPassword', 'Pni' ],
[ 'authorize', '147286786' ],
[ 'setPassword', 'v1pl' ],
[ 'setPassword', 'rp5B' ],
[ 'authorize', '657214324' ],
[ 'setPassword', '79IS' ],
[ 'setPassword', '8JH' ],
[ 'authorize', '127172517' ],
[ 'authorize', '970782' ],
[ 'setPassword', 'Poh3pK' ],
[ 'authorize', '116609716' ],
[ 'authorize', '283332900' ],
[ 'setPassword', 'stUeC99' ],
[ 'setPassword', 'q5' ],
[ 'authorize', '76' ],
[ 'setPassword', 'SmNqE4' ],
[ 'authorize', '375409166' ],
[ 'setPassword', 'NqTIAae' ],
[ 'authorize', '886788' ],
[ 'setPassword', 'gW2' ],
[ 'setPassword', 'j518Y2' ],
[ 'setPassword', 'u5X1YqW' ],
[ 'setPassword', '1nYCsXob' ],
[ 'setPassword', '17r' ],
[ 'authorize', '111115304' ],
[ 'authorize', '848208' ],
[ 'authorize', '848208' ],
[ 'authorize', '111115324' ],
[ 'setPassword', 'pRa5HS' ],
[ 'authorize', '664397365' ],
[ 'authorize', '115' ],
[ 'setPassword', 'XkfFNuYUP' ],
[ 'setPassword', 'bp' ],
[ 'setPassword', 'ezNmREpO' ],
[ 'setPassword', 'VgAk7Gd' ],
[ 'setPassword', 'CXP9K63L' ],
[ 'authorize', '68' ],
[ 'authorize', '25616617' ],
[ 'setPassword', 'Hio' ],
[ 'authorize', '118198598' ],
[ 'setPassword', 'v' ],
[ 'authorize', '122' ],
[ 'setPassword', 'zkChMby' ],
[ 'authorize', '371280391' ],
[ 'setPassword', 'x' ],
[ 'setPassword', 'VxU' ],
[ 'authorize', '1491651' ],
[ 'authorize', '79' ],
[ 'authorize', '1380206' ],
[ 'setPassword', 'MgV0Lh8' ],
[ 'authorize', '433011130' ],
[ 'authorize', '724457686' ],
[ 'setPassword', 'NZRBT7qYH' ],
[ 'setPassword', 'Tq0Z' ],
[ 'setPassword', 'pCLxb0ln' ],
[ 'authorize', '794837582' ],
[ 'setPassword', '6' ],
[ 'setPassword', 'EVQOEXf' ],
[ 'setPassword', 'sKDGAUu' ],
[ 'authorize', '655963155' ],
[ 'setPassword', 'HV' ],
[ 'setPassword', 'ES' ],
[ 'authorize', '103' ],
[ 'authorize', '86789623' ],
[ 'setPassword', 'N' ],
[ 'setPassword', 'Is' ],
[ 'authorize', '1267904' ],
[ 'authorize', '9678' ],
[ 'setPassword', '9sMLT6mn' ],
[ 'authorize', '384164058' ],
[ 'setPassword', 'KsoRR' ],
[ 'setPassword', '5WMO5AH' ],
[ 'authorize', '85' ],
[ 'setPassword', 'A' ],
[ 'setPassword', 'f7Z' ],
[ 'authorize', '85' ],
[ 'setPassword', 'uP1u' ],
[ 'authorize', '637194069' ],
[ 'authorize', '264406063' ],
[ 'authorize', '637194085' ],
[ 'authorize', '77' ],
[ 'setPassword', 'II' ],
[ 'setPassword', '4ChZESFqZ' ],
[ 'authorize', '801050047' ],
[ 'authorize', '122' ],
[ 'authorize', '1506061' ],
[ 'authorize', '937555509' ],
[ 'authorize', '937555528' ],
[ 'authorize', '83' ],
[ 'authorize', '885729486' ],
[ 'setPassword', 'N' ],
[ 'authorize', '10300' ],
[ 'setPassword', 'sxjGJXke' ],
[ 'authorize', '1676196' ],
[ 'setPassword', 'vKNA' ],
[ 'setPassword', 'mxDoJJ9s' ],
[ 'authorize', '100' ]]
let answers = [1,
1,
0,
0,
1,
1,
1,
1,
0,
1,
0,
1,
1,
1,
1,
0,
0,
0,
0,
0,
0,
1,
1,
0,
0,
1,
0,
0,
1,
0,
0,
1,
1,
0,
0,
0,
1,
1,
1,
0,
0,
0,
0,
0,
0,
0,
0,
1,
0,
0]
console.log(authEvents(events));
console.log(answers);