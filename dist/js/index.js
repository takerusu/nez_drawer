window.onload = function() {
  var drawer, input, input0, input1, input2, input3, input4, input5, inputall, o, parser;
  input = "Number = { '-'? INT (FRAC EXP? #Float / '' #Integer) } S*";
  input0 = "A = aaa";
  input1 = "A = AAAAAA / AB / AC";
  input2 = "A = AAAAAA AB AC A";
  input3 = "A = AAAAAA (AB AC) A";
  input4 = "A = A?";
  input5 = "A = A* / B+";
  inputall = "A = AA (A / AB)? BB / B";
  parser = new Parser();
  o = parser.parse(input5);
  drawer = new NEZDrawer($('.svg2'));
  drawer.getCharSize();
  return drawer.show(o);
};
