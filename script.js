var sumUn1000 = function() {
  for (var i = 0; i < 1000; i += 3);
  for (var j = 0; j < 1000; j += 5);
  return j + i;
};

alert(sumUn1000());
