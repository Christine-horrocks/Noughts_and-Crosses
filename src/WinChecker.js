function WinChecker(){

}

WinChecker.prototype.rowChecker = function(gArr) {
  if (gArr[0]=== gArr[1] && gArr[1] === gArr[2]) { return "Congratulations! " + gArr[0] + " wins" ;}
  if (gArr[3] === gArr[4] && gArr[4] === gArr[5]) { return "Congratulations! " + gArr[3] + " wins" ;}
  if (gArr[6] === gArr[7] && gArr[7] === gArr[8]) { return "Congratulations! " + gArr[6] + " wins" ;}
};

WinChecker.prototype.columnChecker = function(gArr) {
  if (gArr[0] === gArr[3] && gArr[3] === gArr[6]) { return "Congratulations! " + gArr[0] + " wins" ;}
  if (gArr[1] === gArr[4] && gArr[4] === gArr[7]) { return "Congratulations! " + gArr[1] + " wins" ;}
  if (gArr[2] === gArr[5] && gArr[5] === gArr[8]) { return "Congratulations! " + gArr[2] + " wins" ;}
};

WinChecker.prototype.diagonalChecker = function(gArr) {
  if (gArr[0] === gArr[4] && gArr[4] === gArr[8]) { return "Congratulations! " + gArr[0] + " wins" ;}
  if (gArr[6] === gArr[4] && gArr[4] === gArr[2]) { return "Congratulations! " + gArr[6] + " wins" ;}
};
