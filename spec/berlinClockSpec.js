import { Main } from "../src/berlinClock.js";

describe("SingleMinutesRow function should return the answer ", function () {
  
  it("Should return 'OOOO' for 0 minute", function () {
    const main = new Main();
    
    const result = main.singleMinutesRow(0);

    expect(result).toBe("OOOO");
  });

});