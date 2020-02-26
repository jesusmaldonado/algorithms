class EventEmitter {
  constructor(){
    this.events = new Map();
  }

  add(evtName, fn){
    this.events.set(evtName, fn);
  }

  remove(evtName){
    this.events.delete(evtName);
  }

  dispatch(evtName, ...rest){
    try {
      const fn = this.events.get(evtName);
      fn.apply(null, rest);
    } catch (err) {
      console.error(err);
    }
  }
}

const fn = ({cool, bob}) => {
  console.log(`${cool}${bob}`)
}

const eventEmitter = new EventEmitter();
eventEmitter.add('click', fn);
eventEmitter.dispatch('click', {cool: 'cool', bob: 'bob'});
eventEmitter.remove('click');
eventEmitter.dispatch('click');
