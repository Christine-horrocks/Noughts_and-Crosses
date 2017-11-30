function WinChecker(){

}

WinChecker.prototype.rowChecker = function(gArr) {
  if (gArr[0]=== gArr[1] && gArr[1] === gArr[2]) { return "Congratulations! " + gArr[0] + " wins" ;}
  if (gArr[3] === gArr[4] && gArr[4] === gArr[5]) { return "Congratulations! " + gArr[3] + " wins" ;}
  if (gArr[6] === gArr[7] && gArr[7] === gArr[8]) { return "Congratulations! " + gArr[6] + " wins" ;}
};
