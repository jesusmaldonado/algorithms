function permutations(str){
    if (str.length === 1){
        return [str];
    }
    let perms = [];
    let hash = {}
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        let initial = str.slice(0, i);
        let remaining = str.slice(i+1);
        let strArr = permutations(initial + remaining);
        const uniqueChars = strArr.reduce((arr, el) => {
            let perm = char.concat(el);
            if (!hash[perm]){
                hash[perm] = true;
                arr.push(perm)
            }
            return arr;
        }, []);
        perms = perms.concat(uniqueChars);
    }
    return perms;
}

console.log(permutations('abb'))
console.log(permutations('5432'))