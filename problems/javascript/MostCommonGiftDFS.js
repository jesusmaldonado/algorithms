// customer = {
//     friends: [
//         {
//             friends: [{ wishlist: [], friends: []}]
//             wishlist: ['dhasjkd', 'dasdjk']

//         },...etc
//     ],
//     wishlist: ["xBox", "PSP", "Stadia"]
// };
// find the most mostCommonGift ina list of friends;

function findMax(entries){
    let maxItem = null;
    let maxItemCount = null;
    for (let [k, v] of entries){
        if (maxItem === null && maxItemCount === null) {
            maxItem = k;
            maxItemCount = v;
            continue;
        }
        if (v > maxItemCount){
            maxItem = k;
            maxItemCount = v;
        }
    }
    return maxItem;
}

function findMostCommonGift(customer){
    const giftStore = {};
    let friends = [customer];
    let friendIds = {};
    while (friends.length !== 0){
        const givenFriend = friends.pop();
        friendIds[givenFriend.id] = true;
        const { wishlist } = givenFriend;
        // add gifts to store
        for (let item of wishlist){
            giftStore[item] = giftStore[item] ? giftStore[item] + 1 : 1;
        }
        // add anymore friends to the queue
        // |firends| = 1 000 000
        // |givenFriend.friends| = 1
        // friends = friends.concat(givenFriends.friends); O(branches * connections)
        for (let friend of givenFriend.friends){
            if (!friendIds[friend.id]){
                friends.push(friend);
            }
        }
    }
    // select the giftStore item with the most count
    // O(N) where N is number of unique gifts
    // this can be optimized as well
    let mostCommonGift = findMax(Object.entries(giftStore));
    return mostCommonGift;
}


let customerA = {
  id: 1,
  friends: [],
  wishlist: ['abc', 'a']
}
let customerB = {
  id: 2,
  friends: [customerA],
  wishlist: ['abc', 'a']
}
let customerC= {
  id: 3,
  friends: [customerB, customerA],
  wishlist: ['b', 'a', 'c']
};
customerA.friends = [customerB];
customerB.friends = [customerC, customerA];

console.log(findMostCommonGift(customerA));

// a <-> b
