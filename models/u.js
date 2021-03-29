export default class UmbrellaBird {
  constructor(name, species, legs, color) {
    this.name = name;
    this.species = species;
    this.legs = legs;
    this.color = color;
  }
  explainYourself() {
    return console.log(`My name is ${this.name} and I am a ${this.species} ${this.constructor.name} and I stand on ${this.legs} legs!`)
  }
}