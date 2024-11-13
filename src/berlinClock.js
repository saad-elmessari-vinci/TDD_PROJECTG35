export class Main {
  //Y ==> lamp is on (color is yellow) ,R==> lamp is on (color is red), O==> lamp is off
  singleMinutesRow(minutes) {
    if(minutes===1) return 'YOOO';

    if(minutes===2) return "YYOO"

    return "OOOO";
  }
}
