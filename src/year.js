export default class YearCalc {
  constructor(age, heightInches, hairColor, shoeSize) {
    this.age = age;
    this.heightInches = heightInches;
    this.hairColor = hairColor;
    this.shoeSize = shoeSize;
  }

  mercuryAge() {
    return this.age / .24;
  }

  venusAge() {
    return this.age / .62;
  }

  marsAge() {
    return this.age / 1.88
  }

  jupiterAge() {
    return this.age / 11.86
  }

  // lifeExpect() {

  // }
}
