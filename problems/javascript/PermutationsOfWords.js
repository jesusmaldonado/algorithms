// Given a function isWord() which returns whether a string is a isWord
// Write a function that returns the list of words a 1-9 T9 String can return
// isWord() => True/False

// 323 => DAD, FAD
const map = {
    // '''
// 2 -> ["a", "b", "c"]
// 3 -> d, e, f
// 4 -> g, h, i
// 5 -> j, k, l
// 6 -> m, n, o
// 7 -> p, q, r, s
// 8 -> t, u, v
// 9 -> w, x, y, z
// '''
}

function isWord(word) {
    return true;
}

// 3234
// [a b c] n=4
// 3
// 3 * 3
// 3 * 3 * 3
// 3 * 3 * 3 * 3 === 3 ^ 4
// 3 or 4
// 3^n

function makeWords(num){
    const stringChars = String(num).split("");
    let permArray = [];
    // (P) = possible chars
    // n = length of input
    // P ^ N
    for (let [idx, char] of stringChars.entries()){
        const possibleChars = map[char];
        if (permArray.length === 0){
            permArray = possibleChars;
            continue;
        }

        // map
        // [['ad', 'ae', 'af'], ['bd', 'be', 'bf']]
        // result
        // ['ad', 'ae', 'af', 'bd', 'be', 'bf']
        permArray = permArray.map((item) => {
            // ['ad', 'ae', 'af']
            return possibleChars.map((char) => {
                //this would return an error
                if (idx === stringChars.length - 1) {
                    const returnVal = isWord(item + char) ? (item + char) : '';
                    return returnVal;
                }
                return item + char;

            });
        }).reduce((sum, iterator) => {
            return sum.filter(i => i.length).concat(iterator);
        }, []);

    }
    return permArray;
}
