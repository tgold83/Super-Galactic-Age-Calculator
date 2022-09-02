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
    expect(yearCalc.mercuryAge).toEqual(32 / .24);
  });
});