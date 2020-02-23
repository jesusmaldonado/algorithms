const {people, limit } = require('./boats.js');

const numRescueBoats = function(people, limit) {
    let numBoats = 0;
    people.sort();
    while (people.length){
        let firstPerson = people.pop();
        let isAnyoneLeft = people.length;
        if (isAnyoneLeft){
            let limitLeft = limit - firstPerson;
            let peopleLeft = people.filter(p => p <= limitLeft);
            if (peopleLeft.length) {
                const removeIdx = people.indexOf(peopleLeft.slice(-1)[0]);
                people.splice(removeIdx, 1);
            }
        }
        numBoats++
    }
    return numBoats;
};

numRescueBoats(people, limit);
