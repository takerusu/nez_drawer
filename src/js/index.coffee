window.onload = () ->
  # SVGDrawer = require('./SVGDrawer.coffee')
  input = "Number = { '-'? INT (FRAC EXP? #Float / '' #Integer) } S*"
  input0 = "A = aaa"
  input1 = "A = AAAAAA / AB / AC"
  input2 = "A = AAAAAA AB AC A"
  input3 = "A = AAAAAA (AB AC) A"
  input4 = "A = A?"
  input5 = "A = A* / B+"
  input6 = "A = 'char'"
  input7 = 'A = "str"'
  input8 = "A = [abcd-z0-9.!]"
  inputall = "A = AA (A / AB)? BB / B"
  parser = new Parser()
  o = parser.parse input7

  drawer = new NEZDrawer($('.svg2'))
  drawer.getCharSize()
  drawer.show(o)

  # drawer.drawNonterminal([100, 200], [500, 200])
  # drawer.drawPath([100, 100], [500, 300])
  # drawer.drawPath([500, 0], [100, 200])
