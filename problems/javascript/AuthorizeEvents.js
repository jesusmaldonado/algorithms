// 1. User-Friendly Password System

// A website is programming an authentication system that will accept a password either if it's the correct password or if it's the correct password with a single character appended to it. In this challenge, your task is to implement such a system, specifically using a hashing function. Given a list of events in which either a password is set or authorization is attempted, determine if each authorization attempt will be successful or not.

 

// The hashing function that will be used in this problem is as follows. Let f(x) be a function that takes a character and returns its decimal character code in the ASCII table. For instance f('a') = 97, f('B') = 66, and f('9') = 57. (You can find all ASCII character codes here: ASCII table.) Then, let h(s) be the hashing function that takes a string and hashes it in the following way, where p = 131 and M = 109+7 :

 

// h(s) := (s[0]*P(n-1) + s[1]*P(n-2) + s[2]*P(n-3) + ... + s[n-2]*P + s[n-1]) mod M

 

// For instance, if s = "cAr1", then the formula would be as follows:

 

// h(s) = (f('c')*1313 + f('A')*1312 + f('r')*131 + f('1')) mod 109+7 = 223691457

 

// Your system will be tested on q event types, each of which will be one of the following:

// setPassword(s) := sets the password to s

// authorize(x) := tries to sign in with integer x. This event must return 1 if x  is either the hash of the current password or the hash of the current password with a single character appended to it. Otherwise, this event must return 0.

 

// Consider the following example. There are 6 events to be handled:

// setPassword("cAr1")

// authorize(223691457)

// authorize(303580761)

// authorize(100)

// setPassword("d")

// authorize(100)

 

// As we know from the above example, h("cAr1") = 223691457, so the second event will return 1. The third event will also return 1 because 303580761 is the hash value of the string "cAr1a", which is equal to the current password with the character 'a' appended to it. The fourth event will return 0 because 100 is not a hash of the current password or of the current password with a single character appended to it. In the fifth event, the current password is set to "d", and the sixth event will return 1 because h("d") = 100. Therefore, the array you would return is [1, 1 0, 1], corresponding to the success or failure of the authorization events.

 

// Function Description

// Complete the function authEvents in the editor below.

 

// authEvents has the following parameter(s):

//     string events[q][2]: a 2-dimensional array of strings denoting the event types and event parameters

// Returns:

//     int[number of authorize events]: an array of integers, either 1 or 0, corresponding to the success (1) or failure (0) of each authorization attempt

 

// Constraints

// 2 ≤ q ≤ 105

// 1 ≤ length of s ≤ 9, where s is a parameter of the setPassword event

// 0 ≤ x < 109+7, where x is the integer value of the parameter of the authorize event

// The first event will always be a setPassword event.

// There will be at least one authorize event.

// s contains only lowercase and uppercase English letters and digits.

 

// Input Format Format for Custom Testing
// Sample Case 0
// Sample Case 1"

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
let additionalChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function authEvents(events){
    let possibleChars = {}
    let output = [];
    for (let i=0; i < events.length; i++){
        const val = events[i];
        const eventName = val[0];
        let value = val[1];
        if (eventName === 'setPassword'){
            possibleChars = {};
            value = String(value);
            possibleChars[hash(value)] = true;
            additionalChars.forEach((char)   => {
                possibleChars[hash(value + char)] = true;
            });
        } else {
            possibleChars[String(value)] !== undefined ? output.push(1) : output.push(0);
        }
    }
    return output;
}
//RIGHT w/ array, w/ object
// let events = [['setPassword', 1],
// ['setPassword', 2],
// ['setPassword', 3],
// ['authorize', 49],
// ['authorize', 50]];
// let expectedResults = [0, 0];
// console.log(authEvents(events));
// console.log('expectedResults', expectedResults);

// RIGHT w/ array
// let events = [
//     ['setPassword', "000A"],
//     ['authorize', 108738450],
//     ['authorize', 108738449],
//     ["authorize", 244736787]
// ];
// let expectedResults = [0, 1, 1];
// console.log(authEvents(events));
// console.log('expectedResults', expectedResults);

//right w/ object, array approach
// let events = [['setPassword', "cAr1"],

// ['authorize', 223691457],

// ['authorize', 303580761],

// ['authorize', 100],

// ['setPassword', "d"],

// ['authorize', 100]];
// let expectedResults =  [1, 1, 0, 1];
// console.log(authEvents(events));
// console.log('expectedResults', expectedResults);

//right with array
// let events = [ [ 'setPassword', 'Ghnu' ],
// [ 'authorize', '161413732' ],
// [ 'authorize', '145198797' ],
// [ 'setPassword', 'Pni' ],
// [ 'authorize', '147286786' ],
// [ 'setPassword', 'v1pl' ],
// [ 'setPassword', 'rp5B' ],
// [ 'authorize', '657214324' ],
// [ 'setPassword', '79IS' ],
// [ 'setPassword', '8JH' ],
// [ 'authorize', '127172517' ],
// [ 'authorize', '970782' ],
// [ 'setPassword', 'Poh3pK' ],
// [ 'authorize', '116609716' ],
// [ 'authorize', '283332900' ],
// [ 'setPassword', 'stUeC99' ],
// [ 'setPassword', 'q5' ],
// [ 'authorize', '76' ],
// [ 'setPassword', 'SmNqE4' ],
// [ 'authorize', '375409166' ],
// [ 'setPassword', 'NqTIAae' ],
// [ 'authorize', '886788' ],
// [ 'setPassword', 'gW2' ],
// [ 'setPassword', 'j518Y2' ],
// [ 'setPassword', 'u5X1YqW' ],
// [ 'setPassword', '1nYCsXob' ],
// [ 'setPassword', '17r' ],
// [ 'authorize', '111115304' ],
// [ 'authorize', '848208' ],
// [ 'authorize', '848208' ],
// [ 'authorize', '111115324' ],
// [ 'setPassword', 'pRa5HS' ],
// [ 'authorize', '664397365' ],
// [ 'authorize', '115' ],
// [ 'setPassword', 'XkfFNuYUP' ],
// [ 'setPassword', 'bp' ],
// [ 'setPassword', 'ezNmREpO' ],
// [ 'setPassword', 'VgAk7Gd' ],
// [ 'setPassword', 'CXP9K63L' ],
// [ 'authorize', '68' ],
// [ 'authorize', '25616617' ],
// [ 'setPassword', 'Hio' ],
// [ 'authorize', '118198598' ],
// [ 'setPassword', 'v' ],
// [ 'authorize', '122' ],
// [ 'setPassword', 'zkChMby' ],
// [ 'authorize', '371280391' ],
// [ 'setPassword', 'x' ],
// [ 'setPassword', 'VxU' ],
// [ 'authorize', '1491651' ],
// [ 'authorize', '79' ],
// [ 'authorize', '1380206' ],
// [ 'setPassword', 'MgV0Lh8' ],
// [ 'authorize', '433011130' ],
// [ 'authorize', '724457686' ],
// [ 'setPassword', 'NZRBT7qYH' ],
// [ 'setPassword', 'Tq0Z' ],
// [ 'setPassword', 'pCLxb0ln' ],
// [ 'authorize', '794837582' ],
// [ 'setPassword', '6' ],
// [ 'setPassword', 'EVQOEXf' ],
// [ 'setPassword', 'sKDGAUu' ],
// [ 'authorize', '655963155' ],
// [ 'setPassword', 'HV' ],
// [ 'setPassword', 'ES' ],
// [ 'authorize', '103' ],
// [ 'authorize', '86789623' ],
// [ 'setPassword', 'N' ],
// [ 'setPassword', 'Is' ],
// [ 'authorize', '1267904' ],
// [ 'authorize', '9678' ],
// [ 'setPassword', '9sMLT6mn' ],
// [ 'authorize', '384164058' ],
// [ 'setPassword', 'KsoRR' ],
// [ 'setPassword', '5WMO5AH' ],
// [ 'authorize', '85' ],
// [ 'setPassword', 'A' ],
// [ 'setPassword', 'f7Z' ],
// [ 'authorize', '85' ],
// [ 'setPassword', 'uP1u' ],
// [ 'authorize', '637194069' ],
// [ 'authorize', '264406063' ],
// [ 'authorize', '637194085' ],
// [ 'authorize', '77' ],
// [ 'setPassword', 'II' ],
// [ 'setPassword', '4ChZESFqZ' ],
// [ 'authorize', '801050047' ],
// [ 'authorize', '122' ],
// [ 'authorize', '1506061' ],
// [ 'authorize', '937555509' ],
// [ 'authorize', '937555528' ],
// [ 'authorize', '83' ],
// [ 'authorize', '885729486' ],
// [ 'setPassword', 'N' ],
// [ 'authorize', '10300' ],
// [ 'setPassword', 'sxjGJXke' ],
// [ 'authorize', '1676196' ],
// [ 'setPassword', 'vKNA' ],
// [ 'setPassword', 'mxDoJJ9s' ],
// [ 'authorize', '100' ]]
// let expectedResults = [1,
// 1,
// 0,
// 0,
// 1,
// 1,
// 1,
// 1,
// 0,
// 1,
// 0,
// 1,
// 1,
// 1,
// 1,
// 0,
// 0,
// 0,
// 0,
// 0,
// 0,
// 1,
// 1,
// 0,
// 0,
// 1,
// 0,
// 0,
// 1,
// 0,
// 0,
// 1,
// 1,
// 0,
// 0,
// 0,
// 1,
// 1,
// 1,
// 0,
// 0,
// 0,
// 0,
// 0,
// 0,
// 0,
// 0,
// 1,
// 0,
// 0];
// console.log(authEvents(events));
// console.log('expectedResults', expectedResults);
