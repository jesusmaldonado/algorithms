/**
 * @param {string[]} sentences
 * @param {number[]} times
 */

function constructSentences(sentences, times){
  let s = new Map();
  for (const [idx, val] of sentences.entries()){
    s.set(val, times[idx]);
  }
  return s;
}
class AutocompleteSystem {
  constructor(sentences, times){
    this.sentences = constructSentences(sentences, times);
    this.userInput = '';
    this.cache = [];
  }
  filterResults(){
    const re = new RegExp(`^${this.userInput}`);
    if (this.userInput === '') {
        //we have finished a sentence
        return []
    } else {
      if (this.userInput.length === 1){
        this.cache = filterCache(constructCache(this.sentences),re)
      } else {
        this.cache = filterCache(this.cache, re);
      }
      return searchResults(this.cache);
    }
  }
  input(c){
    if (c === '#'){
        const val = this.sentences.get(this.userInput);
        if (val === undefined){
            this.sentences.set(this.userInput, 1);
        } else {
            this.sentences.set(this.userInput, val + 1);
        }
        this.userInput = '';
        this.cache = [];
    } else {
        this.userInput = this.userInput + c;
    }
    return this.filterResults();
  }
}
function findFirstDifference(k1, k2){
  if (k1.length > k2.length){
    return findFirstDifference(k2, k1);
  }

  for (let i = 0; i < k1.length; i++){
    const k1Code = k1.charCodeAt(i);
    const k2Code = k2.charCodeAt(i);
    if (k1Code > k2Code){
      return k2;
    } else if (k1Code < k2Code){
      return k1;
    }
  }
  return k1;
}
function filterCache(cache, re){
  return cache.filter((a) => {
    const [k, v] = a;
      return k.match(re);
  });
}
function constructCache(sentences){
  return [...sentences.entries()];
}
function searchResults(cache){
      return cache.sort(([k1, v1], [k2, v2]) => {
          const diff = v2 - v1;
          if (diff === 0){
            const val = findFirstDifference(k1, k2);
            return val === k1 ? -1 : 1;
          } else {
              return diff;
          }
      })
      .slice(0, 3)
      .map(([k,v]) => k);
}
