describe("winChecker", function() {
  var winChecker;

  beforeEach(function(){
    winChecker = new WinChecker();
  });

  it('indicates if there is a win in 1st row', function() {
    var gArr = ['o', 'o', 'o', 'x', 'x', 'o', 'o', 'x', 'x'];
    expect(winChecker.rowChecker(gArr)).toEqual("Congratulations! o wins");
  });

  it('indicates if there is a win in 2st row', function() {
    var gArr = ['o', 'o', 'x', 'x', 'x', 'x', 'o', 'x', 'o'];
    expect(winChecker.rowChecker(gArr)).toEqual("Congratulations! x wins");
  });

  it('indicates if there is a win in 2st row', function() {
    var gArr = ['o', 'o', 'x', 'x', 'o', 'x', 'o', 'o', 'o'];
    expect(winChecker.rowChecker(gArr)).toEqual("Congratulations! o wins");
  });

});
