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
});

describe("FiveMinutesRow function should return the answer", function () {
  const main = new Main();

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

  it("Should return 'OOOOOOOOOOO' for 4 minutes", function () {
    const result = main.fiveMinutesRow(4);

    expect(result).toBe("OOOOOOOOOOO");
  });

  it("Should return 'YOOOOOOOOOO' for 5 minutes", function () {
    const result = main.fiveMinutesRow(5);

    expect(result).toBe("YOOOOOOOOOO");
  });

  it("Should retun 'YOOOOOOOOOO' for 6 minutes", function () {
    const result = main.fiveMinutesRow(6);

    expect(result).toBe("YOOOOOOOOOO");
  });

  it("Should return 'YOOOOOOOOOO' for 7 minutes", function () {
    const result = main.fiveMinutesRow(7);

    expect(result).toBe("YOOOOOOOOOO");
  });

  it("Should return 'YOOOOOOOOOO' for 8 minutes", function () {
    const result = main.fiveMinutesRow(8);

    expect(result).toBe("YOOOOOOOOOO");
  });

  it("Should return 'YOOOOOOOOOO' for 9 minutes", function () {
    const result = main.fiveMinutesRow(9);

    expect(result).toBe("YOOOOOOOOOO");
  });

  it("Should return 'YYOOOOOOOOO' for 10 minutes", function () {
    const result = main.fiveMinutesRow(10);

    expect(result).toBe("YYOOOOOOOOO");
  });

  it("Should return 'YYOOOOOOOOO' for 11 minutes", function () {
    const result = main.fiveMinutesRow(11);

    expect(result).toBe("YYOOOOOOOOO");
  });

  it("Should return 'YYOOOOOOOOO' for 12 minutes", function () {
    const result = main.fiveMinutesRow(12);

    expect(result).toBe("YYOOOOOOOOO");
  });

  it("Should return 'YYROOOOOOOO' for 15 minutes", function () {
    const result = main.fiveMinutesRow(15);

    expect(result).toBe("YYROOOOOOOO");
  });

  it("Should return 'YYROOOOOOOO' for 16 minutes", function () {
    const result = main.fiveMinutesRow(16);

    expect(result).toBe("YYROOOOOOOO");
  });

  it("Should return 'YYRYOOOOOOO' for 20 minutes", function () {
    const result = main.fiveMinutesRow(20);

    expect(result).toBe("YYRYOOOOOOO");
  });

  it("Should return 'YYRYYRYYOOO' for 40 minutes", function () {
    const result = main.fiveMinutesRow(40);

    expect(result).toBe("YYRYYRYYOOO");
  });
});

describe("SingleHoursRow function should return the answer", function () {
  const main = new Main();

  it("Should return 'OOOO' for 0 hours", function () {
    const result = main.singleHoursRow(0);

    expect(result).toBe("OOOO");
  });

  it("Should return 'ROOO' for 1 hour", function () {
    const result = main.singleHoursRow(1);

    expect(result).toBe("ROOO");
  });

  it("Should return 'RROO' for 2 hours", function () {
    const result = main.singleHoursRow(2);

    expect(result).toBe("RROO");
  });

  it("Should return 'RRRO' for 3 hours", function () {
    const result = main.singleHoursRow(3);

    expect(result).toBe("RRRO");
  });

  it("Should return 'RRRR' for 4 hours", function () {
    const result = main.singleHoursRow(4);

    expect(result).toBe("RRRR");
  });

  it("Should return 'OOOO' for 5 hours", function () {
    const result = main.singleHoursRow(5);

    expect(result).toBe("OOOO");
  });

  it("Should return 'ROOO' for 6 hours", function () {
    const result = main.singleHoursRow(6);

    expect(result).toBe("ROOO");
  });

  it("Should return 'RRRO' for 8 hours", function () {
    const result = main.singleHoursRow(8);

    expect(result).toBe("RRRO");
  });

  it("Should return 'OOOO' for 10 hours", function () {
    const result = main.singleHoursRow(10);

    expect(result).toBe("OOOO");
  });

  it("Should return 'RRRR' for 14 hours", function () {
    const result = main.singleHoursRow(14);

    expect(result).toBe("RRRR");
  });
});

describe("FiveHoursRow function should return the answer", function () {
  const main = new Main();

  it("Should return 'OOOO' for O hours", function () {
    const result = main.fiveHoursRow(0);

    expect(result).toBe("OOOO");
  });

  it("Should return 'OOOO' for 1 hours", function () {
    const result = main.fiveHoursRow(1);

    expect(result).toBe("OOOO");
  });

  it("Should return 'OOOO' for 2 hours", function () {
    const result = main.fiveHoursRow(2);

    expect(result).toBe("OOOO");
  });

  it("Should return 'OOOO' for 3 hours", function () {
    const result = main.fiveHoursRow(3);

    expect(result).toBe("OOOO");
  });

  it("Should return 'OOOO' for 4 hours", function () {
    const result = main.fiveHoursRow(4);

    expect(result).toBe("OOOO");
  });

  it("Should return 'ROOO' for 5 hours", function () {
    const result = main.fiveHoursRow(5);

    expect(result).toBe("ROOO");
  });

  it("Should return 'ROOO' for 6 hours", function () {
    const result = main.fiveHoursRow(6);

    expect(result).toBe("ROOO");
  });

  it("Should return 'ROOO' for 7 hours", function () {
    const result = main.fiveHoursRow(7);

    expect(result).toBe("ROOO");
  });

  it("Should return 'ROOO' for 8 hours", function () {
    const result = main.fiveHoursRow(8);

    expect(result).toBe("ROOO");
  });

  it("Should return 'ROOO' for 9 hours", function () {
    const result = main.fiveHoursRow(9);

    expect(result).toBe("ROOO");
  });

  it("Should return 'RROO' for 10 hours", function () {
    const result = main.fiveHoursRow(10);

    expect(result).toBe("RROO");
  });

  it("Should return 'RRRO' for 16 hours", function () {
    const result = main.fiveHoursRow(16);

    expect(result).toBe("RRRO");
  });

  it("Should return 'RRRR' for 21 hours", function () {
    const result = main.fiveHoursRow(21);

    expect(result).toBe("RRRR");
  });
});

describe("SecondsLight function should return the answer", function () {
  const main = new Main();
  it("Should return 'R' for 0 seconds", function () {
    const result = main.secondsLight(0);

    expect(result).toBe("R");
  });

  it("Should return 'O' for 1 second", function () {
    const result = main.secondsLight(1);

    expect(result).toBe("O");
  });

  it("Should return 'R' for 2 seconds", function () {
    const result = main.secondsLight(2);

    expect(result).toBe("R");
  });

  it("Should return 'O' for 3 seconds", function () {
    const result = main.secondsLight(3);

    expect(result).toBe("O");
  });

  it("Should return 'R' for 4 seconds", function () {
    const result = main.secondsLight(4);

    expect(result).toBe("R");
  });

  it("Should return 'O' for 5 seconds", function () {
    const result = main.secondsLight(5);

    expect(result).toBe("O");
  });

  it("Should return 'R' for 26 seconds", function () {
    const result = main.secondsLight(26);

    expect(result).toBe("R");
  });

  it("Should return 'O' for 59 seconds", function () {
    const result = main.secondsLight(59);

    expect(result).toBe("O");
  });
});

describe("GetBerlinClock function should return the answer", function () {
  const main = new Main();

  it("Should return 'RRRRORROOYYOOOOOOOOOYYYY' for Wed Nov 13 2024 17:14:44 GMT+0100 ", function () {
    const timestamp = 1731514484 * 1000;

    const result = main.getBerlinClokDisplay(timestamp);

    expect(result).toBe("RRRRORROOYYOOOOOOOOOYYYY");
  });

  it("Should return 'ROOOORROOOOOOOOOOOOOYOOO' for Mon Dec 29 2008 02:01:24 GMT+0100 ", function () {
    const timestamp = 1230512484* 1000;

    const result = main.getBerlinClokDisplay(timestamp);

    expect(result).toBe("ROOOORROOOOOOOOOOOOOYOOO");
  });
});
