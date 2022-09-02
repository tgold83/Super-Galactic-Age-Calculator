export default class YearCalc {
  constructor(age, heightInches, hairColor, shoeSize) {
    this.age = age;
    this.heightInches = heightInches;
    this.hairColor = hairColor;
    this.shoeSize = shoeSize;
  }

  mercuryAge(earthYears) {
    return earthYears / .24;
  }

  venusAge(earthYears) {
    return earthYears / .62;
  }

  marsAge(earthYears) {
    return earthYears / 1.88
  }

  jupiterAge(earthYears) {
    return earthYears / 11.86
  }

   lifeExpect() {
    let earthLifeExpect = 100
    
    if (this.heightInches <= 60) {
      earthLifeExpect += 7;
    } else {
      earthLifeExpect -= 7;
    }
    
    if (this.shoeSize <= 8) {
      earthLifeExpect += 10;
    } else {
      earthLifeExpect -= 5;
    }

    switch(this.hairColor) {
      case "brown":
        earthLifeExpect += 5;
        break;
      case "black":
        earthLifeExpect -= 5;
        break;
      case "blonde":
        earthLifeExpect += 10;
        break;
      case "red":
        earthLifeExpect -= 10;
        break;
      case "grey":
        earthLifeExpect -= 25;
        break;
      case "white":
        earthLifeExpect -= 30;
        break;
      case "bald":
        earthLifeExpect -= 15;
        break;
      default:
        earthLifeExpect = 0;
        break;
    }
    
      const lifeExpectancy = {
      earth: earthLifeExpect
      // mercury: this.mercuryAge(earthLifeExpect),
      // venus: this.venusAge(earthLifeExpect),
      // mars: this.marsAge(earthLifeExpect),
      // jupiter: this.jupiterAge(earthLifeExpect)
    };

    return lifeExpectancy;
   }
}
