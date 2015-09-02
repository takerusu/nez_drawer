class Point
  constructor: (x, y) ->
    if x instanceof Point
      return x
    if x instanceof Array and x.length is 2
      @x = x[0]
      @y = x[1]
    else
      @x = x
      @y = y
  toString: ->
    @x + " " + @y
  ltor :(a) ->
    this.x < a.x
  utod :(a) ->
    this.y < a.y

class SVGDrawer
  constructor: (target) ->
    @width = 600
    @height = 400
    @rlength = 3
    @boxx = 60
    @boxy = 30
    @padding = 3

    @svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    @svg.setAttributeNS(null, 'version', '1.1')
    @svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    @svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink")
    @svg.setAttribute("width", @width + "px")
    @svg.setAttribute("height", @height + "px")
    @svg.setAttribute("viewBox", "0 0 " + @width + " " + @height)
    @svg.setAttribute("preserveAspectRatio", "xMinYMin")
    target[0].appendChild(@svg)

  setViewport: (option) ->
    x = option.x
    y = option.y - option.height / 2
    y = y - @padding
    xx = option.width
    yy = option.height + @padding * 2
    @svg.setAttribute("viewBox", "#{x} #{y} #{xx} #{yy}")

  makePathObj: (a, b, bezie) ->
    path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.style.stroke = "black"
    path.style.fill = "none"
    if bezie?
      path.setAttribute("d", "M" + a.toString() + " Q " + bezie.toString() + " " + b.toString())
    else if b?
      path.setAttribute("d", "M" + a.toString() + " " + b.toString())
    else
      path.setAttribute("d", "M" + a)
    @svg.appendChild(path)

  drawRect: ({point, width, height, r}) ->
    rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    rect.style.stroke = "black"
    rect.style.fill = "none"
    rect.setAttribute("x", point.x)
    rect.setAttribute("y", point.y)
    rect.setAttribute("width", width)
    rect.setAttribute("height", height)
    if r?
      rect.setAttribute("rx", r)
      rect.setAttribute("ry", r)
    @svg.appendChild(rect)

  drawPath: (a, b) ->
    unless b?
      option = a
      a = [option.x, option.y]
      b = [option.xx, option.yy]
    start = new Point(a)
    end = new Point(b)
    if start.x is end.x || start.y is end.y
      if start.x is end.x && start.y is end.y
        return
      @makePathObj(start, end)
    else
      xl = end.x - start.x
      yl = end.y - start.y
      rlx = @rlength
      rlx = Math.abs(xl / 2) if Math.abs(xl / 2) < @rlength
      rlx = Math.abs(yl / 2) if Math.abs(yl / 2) < @rlength
      rly = rlx
      rlx = -rlx unless start.ltor end
      rly = -rly unless start.utod end
      p1 = new Point(start.x + xl / 2 - rlx, start.y)
      p2 = new Point(start.x + xl / 2, start.y + rly)
      b1 = new Point(start.x + xl / 2, start.y)
      p3 = new Point(start.x + xl / 2, end.y - rly)
      p4 = new Point(start.x + xl / 2 + rlx, end.y)
      b2 = new Point(start.x + xl / 2, end.y)
      route = [start, "L", p1, "Q", b1, p2, "L", p3, "Q", b2, p4, "L", end].join(" ")
      @makePathObj(route)

class NEZDrawer extends SVGDrawer
  show : (json) ->
    start_line =
      shape: "path"
      width: 6
      height: 1
      x: 0
      y: 0
      xx: 6
      yy: 0
    option =
      x: start_line.x + start_line.width
      y: start_line.y
    opt = @plot(json, option)
    end_line =
      shape: "path"
      width: 6
      height: 1
      x: opt.x + opt.width
      y: opt.y
      xx: opt.x + opt.width + 6
      yy: opt.y
    plot = {}
    plot.shape = "List"
    plot.value = [start_line, opt, end_line]
    plot.x = start_line.x
    plot.y = start_line.y
    plot.width = start_line.width + opt.width + end_line.width
    plot.height = Math.max(start_line.height, opt.height, end_line.height)
    @draw(plot)
    @setViewport(plot)

  plot : (json, option) ->
    switch json.tag
      when "List"
        production = json.value[0]
        return if production.value.length < 2
        target = production.value[production.value.length - 1]
        name = production.value[production.value.length - 2]
        @name = name.value
        @plot(target, option)
      when "NonTerminal"
        @NonTerminal(json.value, option)
      when "Choice"
        choice_width = 20
        console.log json
        ret = {shape: "List", width: 0, height: -@padding}
        ret.x = option.x
        ret.y = option.y
        ret.value = []
        for v in json.value
          p = @plot(v, option)
          ret.width = p.width if ret.width < p.width
          ret.height += p.height + @padding
          ret.value.push p
        ret.width += 2 * choice_width
        y = ret.y - ret.height / 2
        path = []
        for v in ret.value
          v.x = ret.width / 2 - v.width / 2
          v.y = y + v.height / 2
          y = y + v.height + @padding
          left =
            shape: "path"
            x: ret.x
            y: ret.y
            xx: v.x
            yy: v.y
          right =
            shape: "path"
            x: v.x + v.width
            y: v.y
            xx: ret.x + ret.width
            yy: ret.y
          path.push left
          path.push right
        ret.value.push.apply(ret.value, path)
        ret

  NonTerminal : (name, option) ->
    charSize = @getCharSize()
    l = name.length
    w = charSize.width * l + @padding * 2
    h = charSize.height + @padding * 2
    return {
      shape: "NonTerminal"
      text: name
      round: true
      x: option.x
      y: option.y
      width: w
      height: h
    }

  draw : (plot) ->
    switch plot.shape
      when "List"
        option = {}
        option.value = []
        option.shape = "List"
        for p in plot.value
          opt = @draw(p)
          # option.width += opt.width
          # option.height = opt.height if option.height < opt.height
          # option.value.push opt
        option
      when "path"
        @drawPath(plot)
      when "NonTerminal"
        @drawNonterminal(plot)

  drawText : (text, option) ->
    t = document.createElementNS("http://www.w3.org/2000/svg", "text")
    t.setAttribute("x", option.x)
    t.setAttribute("y", option.y)
    t.setAttribute("fill", "#222")
    t.setAttribute("font-size", 12)
    t.setAttribute("font-family", "monospace")
    t.innerHTML = text
    @svg.appendChild(t)
    t

  drawTextPadding : (text, option) ->
    t = document.createElementNS("http://www.w3.org/2000/svg", "text")
    t.setAttribute("x", option.x + @padding)
    t.setAttribute("y", option.y + @padding)
    t.setAttribute("fill", "#222")
    t.setAttribute("font-size", 12)
    t.setAttribute("font-family", "monospace")
    t.innerHTML = text
    @svg.appendChild(t)
    t

  getCharSize : () ->
    if @charSize?
      @charSize
    else
      text = @drawText("XgfTlM|.q", {x: -1000, y: -1000})
      box = text.getBBox()
      @charSize = {}
      @charSize.height = box.height
      @charSize.width = box.width / (text.innerHTML.length - 1)
      @charSize

  drawNonterminal : (option) ->
    point = new Point(option.x, option.y - option.height / 2)
    @drawTextPadding(option.text, option)
    @drawRect(point: point, width: option.width, height: option.height, r:@rlength)

  drawChoice : () ->
