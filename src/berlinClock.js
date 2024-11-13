export class Main {
  //Y ==> lamp is on (color is yellow) ,R==> lamp is on (color is red), O==> lamp is off
  singleMinutesRow(minutes) {
    const numberOfYellowLamps = minutes % 5;
    return (
      "Y".repeat(numberOfYellowLamps) + "O".repeat(4 - numberOfYellowLamps)
    );
  }

  fiveMinutesRow(minutes) {
    const nbrOfLamps = Math.floor(minutes / 5);
    let result = "";

    for (let i = 1; i <= nbrOfLamps; i++) {
      result += i % 3 === 0 ? "R" : "Y";
    }
    result += "O".repeat(11 - nbrOfLamps);
    return result;
  }

  singleHoursRow(hours) {
    const nbOfRedLamps = hours % 5;

    return "R".repeat(nbOfRedLamps) + "O".repeat(4 - nbOfRedLamps);
  }

  fiveHoursRow(hours) {
    const nbrOfLamps = Math.floor(hours/ 5);
    return "R".repeat(nbrOfLamps) + "O".repeat(4 - nbrOfLamps);
  }
}
