var a = 1;
var b = 1;

var sumFun = function() {
	var c = 0;
  var eFib = 0;

	while (c < 3524578) {
  	c = a + b;
    a = b;
    b = c;
    if ((c % 2) == 0) eFib += c;
  };
  return eFib;
};

alert(sumFun());
