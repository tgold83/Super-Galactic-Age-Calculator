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
    expect(yearCalc.mercuryAge()).toEqual(32 / .24);
  });

  test('should convert the users age to years on Venus', () => {
    expect(yearCalc.venusAge()).toEqual(32 / .62);
  });

  test('should convert the users age to years on Mars', () => {
    expect(yearCalc.marsAge()).toEqual(32 / 1.88);
  });

  test('should convert the users age to years on Jupiter', () => {
    expect(yearCalc.jupiterAge()).toEqual(32 / 11.86);
  });

  test('should return life expectancy on Earth using a users inputted heightInches, hairColor, and shoeSize', () => {
    expect(yearCalc.lifeExpect()).toEqual(93);
    yearCalc = new YearCalc(32, 59, "black", 7);
    expect(yearCalc.lifeExpect()).toEqual(112);
    yearCalc = new YearCalc(32, 59, "blonde", 7);
    expect(yearCalc.lifeExpect()).toEqual(127);
    yearCalc = new YearCalc(32, 59, "red", 7);
    expect(yearCalc.lifeExpect()).toEqual(107);
    yearCalc = new YearCalc(32, 59, "grey", 7);
    expect(yearCalc.lifeExpect()).toEqual(92);
    yearCalc = new YearCalc(32, 59, "white", 7);
    expect(yearCalc.lifeExpect()).toEqual(87);
    yearCalc = new YearCalc(32, 59, "bald", 7);
    expect(yearCalc.lifeExpect()).toEqual(102);
    yearCalc = new YearCalc(32, 59, "purple", 7);
    expect(yearCalc.lifeExpect()).toEqual(0);
  });
});