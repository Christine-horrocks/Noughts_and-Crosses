describe("winChecker", function() {
  var winChecker;

  beforeEach(function(){
    winChecker = new WinChecker();
  });

  it('indicates if there is a win in 1st row', function() {
    var gArr = ['o', 'o', 'o', 'x', 'x', 'o', 'o', 'x', 'x'];
    expect(winChecker.rowChecker(gArr)).toEqual("Congratulations! o wins");
  });

  it('indicates if there is a win in 2nd row', function() {
    var gArr = ['o', 'o', 'x', 'x', 'x', 'x', 'o', 'x', 'o'];
    expect(winChecker.rowChecker(gArr)).toEqual("Congratulations! x wins");
  });

  it('indicates if there is a win in 3rd row', function() {
    var gArr = ['o', 'o', 'x', 'x', 'o', 'x', 'o', 'o', 'o'];
    expect(winChecker.rowChecker(gArr)).toEqual("Congratulations! o wins");
  });

  it('indicates if there is a win in 1st column', function() {
    var gArr = ['o', 'o', 'x', 'o', 'o', 'x', 'o', 'x', 'o'];
    expect(winChecker.columnChecker(gArr)).toEqual("Congratulations! o wins");
  });

  it('indicates if there is a win in 2nd column', function() {
    var gArr = ['o', 'o', 'x', 'x', 'o', 'x', 'x', 'o', 'o'];
    expect(winChecker.columnChecker(gArr)).toEqual("Congratulations! o wins");
  });

  it('indicates if there is a win in 3rd column', function() {
    var gArr = ['o', 'x', 'o', 'x', 'o', 'o', 'o', 'x', 'o'];
    expect(winChecker.columnChecker(gArr)).toEqual("Congratulations! o wins");
  });

  it('indicates if there is a downwards diagonal win', function() {
    var gArr = ['o', 'x', 'x', 'x', 'o', 'o', 'o', 'x', 'o'];
    expect(winChecker.diagonalChecker(gArr)).toEqual("Congratulations! o wins");
  });

  it('indicates if there is an upwards diagonal win', function() {
    var gArr = ['o', 'o', 'x', 'x', 'x', 'o', 'x', 'x', 'o'];
    expect(winChecker.diagonalChecker(gArr)).toEqual("Congratulations! x wins");
  });
});
