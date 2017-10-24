// [2] Implement a set-like data structure that supports Insert, Remove, and GetRandomElement efficiently. Example: If you insert the elements 1, 3, 6, 8 and remove 6, the structure should contain [1, 3, 8]. Now, GetRandom should return one of 1, 3 or 8 with equal probability.

class Set {
    container = { };

	insert(element) {
	       this.container[element] = true;
    }

    remove(element) {
        // no returns;
	    delete this.container[element];
    }

    getRandomElement(){
	       const randomElementIndex = Math.floor(
               Math.random() * (Object.keys(this.container).length - 1)
           );
           return Object.keys(this.container)[randomElementIndex];
       }
}
// { 1: true, 3: true, 8:true }
// getRandomElement -> Math.random() * (2) 0 1 or 2

class Set{
	container = new Map();

    insert(el) {
    	return this.container.set(el, true);
    }

    remove(el) {
    	return this.container.delete(el);
    }

    getRandomElement() {
    	const randomElementIndex = Math.floor(
    		Math.random() * (this.container.keys().length - 1)
        );
        return this.container.keys()[randomElementIndex];
    }
}
