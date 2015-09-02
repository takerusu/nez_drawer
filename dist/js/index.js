window.onload = function() {
  var drawer, input, inputc, inputcs, inputn, inputs, o, parser;
  input = "Number = { '-'? INT (FRAC EXP? #Float / '' #Integer) } S*";
  inputn = "A = aaa";
  inputc = "A = AAAAAA / AB / AC";
  inputs = "A = AAAAAA AB AC A";
  inputcs = "A = AAAAAA AB AC / A / AAA BB";
  parser = new Parser();
  o = parser.parse(inputcs);
  drawer = new NEZDrawer($('.svg2'));
  drawer.getCharSize();
  return drawer.show(o);
};
