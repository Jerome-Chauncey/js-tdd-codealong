import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => { // describe
  it("returns the age of a person based on the year of birth", () => { //it && test
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(38);
  });
});
