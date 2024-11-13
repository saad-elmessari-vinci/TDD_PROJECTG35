import { Main } from "../src/berlinClock.js";

describe("SingleMinutesRow function should return the answer ", function () {
  const main = new Main();

  it("Should return 'OOOO' for 0 minute", function () {
    const result = main.singleMinutesRow(0);

    expect(result).toBe("OOOO");
  });

  it("Should return 'YOOO' for 1 minute", function () {
    const result = main.singleMinutesRow(1);

    expect(result).toBe("YOOO");
  });

  it("Should return 'YYOO' for 2 minutes", function () {
    const result = main.singleMinutesRow(2);

    expect(result).toBe("YYOO");
  });

  it("Should return 'YYYO' for 3 minutes", function () {
    const result = main.singleMinutesRow(3);

    expect(result).toBe("YYYO");
  });

  it("Should return 'YYYY' for 4 minutes", function () {
    const result = main.singleMinutesRow(4);

    expect(result).toBe("YYYY");
  });

  it("Should return 'OOOO' for 5 minutes", function () {
    const result = main.singleMinutesRow(5);

    expect(result).toBe("OOOO");
  });

  it("Should return 'YYYY' for 14 minutes", function () {
    const result = main.singleMinutesRow(14);

    expect(result).toBe("YYYY");
  });

  it("Should return 'YYOO' for 32 minutes", function () {
    const result = main.singleMinutesRow(32);

    expect(result).toBe("YYOO");
  });

  it("Should return 'OOOOOOOOOOO' for 0 minutes", function () {
    const result = main.fiveMinutesRow(0);

    expect(result).toBe("OOOOOOOOOOO");
  });

  it("Should return 'OOOOOOOOOOO' for 1 minute", function () {
    const result = main.fiveMinutesRow(1);

    expect(result).toBe("OOOOOOOOOOO");
  });

  it("Should return 'OOOOOOOOOOO' for 2 minutes", function () {
    const result = main.fiveMinutesRow(2);

    expect(result).toBe("OOOOOOOOOOO");
  });

  it("Should return 'OOOOOOOOOOO' for 3 minutes", function () {
    const result = main.fiveMinutesRow(3);

    expect(result).toBe("OOOOOOOOOOO");
  });
});
