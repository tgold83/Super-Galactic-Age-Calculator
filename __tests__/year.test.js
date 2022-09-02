import YearCalc from '../src/year.js';

describe('YearCalc', () => {
  let yearCalc;

  beforeEach(() => {
    yearCalc = new YearCalc(32, 71, "brown", 12);
  });

  test('should take in a users age, heightInches, hair color, and shoe size', () => {
    expect(yearCalc.age).toEqual(32);
    expect(yearCalc.heightInches).toEqual(71);
    expect(yearCalc.hairColor).toEqual("brown");
    expect(yearCalc.shoeSize).toEqual(12);
  }); 

  test('should convert the users age to years on Mercury', () => {
    expect(yearCalc.mercuryAge(yearCalc.age)).toEqual(32 / .24);
  });

  test('should convert the users age to years on Venus', () => {
    expect(yearCalc.venusAge(yearCalc.age)).toEqual(32 / .62);
  });

  test('should convert the users age to years on Mars', () => {
    expect(yearCalc.marsAge(yearCalc.age)).toEqual(32 / 1.88);
  });

  test('should convert the users age to years on Jupiter', () => {
    expect(yearCalc.jupiterAge(yearCalc.age)).toEqual(32 / 11.86);
  });

  test('should return life expectancy on Earth using a users inputted heightInches, hairColor, and shoeSize', () => {
    expect(yearCalc.lifeExpect().earth).toEqual(93);
    yearCalc = new YearCalc(32, 59, "black", 7);
    expect(yearCalc.lifeExpect().earth).toEqual(112);
    yearCalc = new YearCalc(32, 59, "blonde", 7);
    expect(yearCalc.lifeExpect().earth).toEqual(127);
    yearCalc = new YearCalc(32, 59, "red", 7);
    expect(yearCalc.lifeExpect().earth).toEqual(107);
    yearCalc = new YearCalc(32, 59, "grey", 7);
    expect(yearCalc.lifeExpect().earth).toEqual(92);
    yearCalc = new YearCalc(32, 59, "white", 7);
    expect(yearCalc.lifeExpect().earth).toEqual(87);
    yearCalc = new YearCalc(32, 59, "bald", 7);
    expect(yearCalc.lifeExpect().earth).toEqual(102);
    yearCalc = new YearCalc(32, 59, "purple", 7);
    expect(yearCalc.lifeExpect().earth).toEqual(0);
  });

  test('should return life expectancy on Earth, Mercury, Venus, Mars, and Jupiter using a users inputted heightInches, hairColor, and shoeSize', () => {
    expect(yearCalc.lifeExpect()).toEqual({
      earth: 93,
      mercury: 93 / .24,
      venus: 93 / .62,
      mars: 93 / 1.88,
      jupiter: 93 / 11.86});
  });

  test('should take age on each planet and store in a variable', () => {
    expect(earthLife).toEqual(this.age)
  })
});