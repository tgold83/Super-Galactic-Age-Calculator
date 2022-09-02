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

  //  lifeExpect() {
  //   let lifeExpectancy = 100
    
  //   if (heightInches <= 60) {
  //     lifeExpectancy += 7;
  //   } else {
  //     lifeExpectancy -= 7;
  //   }
    
  //   if (shoeSize <= 8) {
  //     lifeExpectancy += 10;
  //   } else {
  //     lifeExpectancy -= 5;
  //   }

  //   switch(hairColor) {
  //     case "brown":
  //       lifeExpectancy += 5;
  //       break;
  //     case "black":
  //       lifeExpectancy -= 5;
  //       break;
  //     case "blonde":
  //       lifeExpectancy += 10;
  //       break;
  //     case "red":
  //       lifeExpectancy -= 10;
  //       break;
  //     case "grey":
  //       lifeExpectancy -= 25;
  //       break;
  //     case "white":
  //       lifeExpectancy -= 30;
  //       break;
  //     case "bald":
  //       lifeExpectancy -= 15;
  //       break;
  //     default:
  //       lifeExpectancy = 0;
  //       break;
  //   }
  //   return lifeExpectancy;
  //  }
}
