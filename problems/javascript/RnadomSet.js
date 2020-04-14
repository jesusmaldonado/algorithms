
class RandomizedSet {
    constructor(){
        this.map = new Map();
        this.items = [];
    }
    /**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
    insert(val){
        if (this.map.has(val)){
            return false
        }
        this.items.push(val);
        this.map.set(val, this.items.length - 1);
        return true;
    }
    /**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
    remove(val){
        if (this.map.has(val)) {
            const [last, index] = [this.items[this.items.length - 1], this.map.get(val)];
            this.items[index] = last;
            this.map.set(last, index);
            this.items.pop();
            this.map.delete(val);
            return true;
        }
        return false;
    }
    
    getRandom(){
        let idx = Math.floor(Math.random()*this.map.size);
        return this.items[idx];
    }
}
let a = ["RandomizedSet","insert","insert","remove","insert","remove","getRandom"]
let b = [[],[0],[1],[0],[2],[1],[]]
let r = new RandomizedSet();
for (let i = 1; i< b.length; i++){
    let arg = b[i][0];
    let action = a[i];
    console.log('result', r[action](arg));
    console.log('args', arg)
    console.log('action', action)
    console.log('this.items', r.items)
    console.log('map', r.map)
    console.log('count', r.count)
    console.log('result', r[action](arg));
    console.log('\n');
}