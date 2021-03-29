export default class Alpaca {
  constructor(name, species, legs, color, fleeceType) {
    this.name = name;
    this.species = species;
    this.legs = legs;
    this.color = color;
    this.fleeceType = fleeceType;
  }

  explainYourself() {
    return console.log(`My name is ${this.name} and I am a ${this.species} ${this.constructor.name} and I stand on ${this.legs} legs!`)
  }
}

