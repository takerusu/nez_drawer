window.onload = () ->
  # SVGDrawer = require('./SVGDrawer.coffee')
  input = "Number = { '-'? INT (FRAC EXP? #Float / '' #Integer) } S*"
  inputn = "A = aaa"
  inputc = "A = AAAAAA / AB / ABCD"
  parser = new Parser()
  o = parser.parse inputc

  drawer = new NEZDrawer($('.svg2'))
  drawer.getCharSize()
  drawer.show(o)

  # drawer.drawNonterminal([100, 200], [500, 200])
  # drawer.drawPath([100, 100], [500, 300])
  # drawer.drawPath([500, 0], [100, 200])
