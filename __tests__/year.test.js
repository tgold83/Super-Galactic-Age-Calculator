import YearCalc from '../src/year.js';

describe('YearCalc', () => {

  test('should take in a user's age, heightInches, hair color, and shoe size', () => {
    new yearCalc = YearCalc(32, 71, "brown", 12)
    expect(yearCalc).toEqual(32, 71, "brown", 12);
  }); 
});