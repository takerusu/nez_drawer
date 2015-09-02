window.onload = function() {
  var drawer, input, inputc, inputn, o, parser;
  input = "Number = { '-'? INT (FRAC EXP? #Float / '' #Integer) } S*";
  inputn = "A = aaa";
  inputc = "A = AAAAAA / AB / ABCD";
  parser = new Parser();
  o = parser.parse(inputc);
  drawer = new NEZDrawer($('.svg2'));
  drawer.getCharSize();
  return drawer.show(o);
};
