class Knight {
  constructor(props){
    const { place } = props;
    this.hp = 100;
    this.place = place;
  }

  receiveDamage(dmg){
    this.hp = this.hp - dmg;
  }
}

class Game {
  constructor(){
    this.game = [0,1,2,3,4,5].map(a => new Knight({ place: a + 1}));
    this.knightHittingIdx = 0;
    console.log(this.game);
  }
  checkWin(){
    if (this.game.length === 1){
      const winningPlace = this.game[0].place;
      console.log(`Knight ${winningPlace} Wins`);
    }
  }

  round(){
    const places = [-1, 1];
    const tupleIdx = Math.round(Math.random());
    let kHIdx  = places[tupleIdx];
    let knightHit = this.knightHittingIdx + kHIdx;

    if (!this.game[knightHit] && this.knightHittingIdx === 0){
      kHIdx = this.game.length - 1;
      knightHit = this.knightHittingIdx + kHIdx;
    }

    if (!this.game[knightHit] && this.knightHittingIdx === this.game.length -1){
      kHIdx = 0;
      knightHit = this.knightHittingIdx + kHIdx;
    }

    const injuredKnight = this.game[knightHit];
    const damage = Math.round(Math.random() * 6);
    injuredKnight.receiveDamage(damage);
    this.outputStatement(this.game[this.knightHittingIdx].place, injuredKnight.place, damage);
    if (injuredKnight.hp <= 0){
      this.handleDeath(injuredKnight);
    }

    if (this.knightHittingIdx < this.game.length - 1) {
      this.knightHittingIdx += 1;
    } else {
      this.knightHittingIdx = 0;
    }
    this.checkWin();
  }
  handleDeath(knight){
    if(knight.hp <= 0) {
      this.game = this.game.filter(k => k.place !== knight.place);
      console.log(`Knight ${knight.place} dies`);
    }
  }
  outputStatement(hitter, hit, dmg){
    console.log(`Knight${hitter} hits Knight${hit} for ${dmg} Points`);
  }
}

const game = new Game();

while (game.game.length !== 1){
  game.round();
}
