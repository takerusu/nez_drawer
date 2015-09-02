var NEZDrawer, Point, SVGDrawer,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Point = (function() {
  function Point(x, y) {
    if (x instanceof Point) {
      return x;
    }
    if (x instanceof Array && x.length === 2) {
      this.x = x[0];
      this.y = x[1];
    } else {
      this.x = x;
      this.y = y;
    }
  }

  Point.prototype.toString = function() {
    return this.x + " " + this.y;
  };

  Point.prototype.ltor = function(a) {
    return this.x < a.x;
  };

  Point.prototype.utod = function(a) {
    return this.y < a.y;
  };

  return Point;

})();

SVGDrawer = (function() {
  function SVGDrawer(target) {
    this.width = 600;
    this.height = 400;
    this.rlength = 3;
    this.boxx = 60;
    this.boxy = 30;
    this.padding = 3;
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttributeNS(null, 'version', '1.1');
    this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.svg.setAttribute("width", this.width + "px");
    this.svg.setAttribute("height", this.height + "px");
    this.svg.setAttribute("viewBox", "0 0 " + this.width + " " + this.height);
    this.svg.setAttribute("preserveAspectRatio", "xMinYMin");
    target[0].appendChild(this.svg);
  }

  SVGDrawer.prototype.setViewport = function(option) {
    var x, xx, y, yy;
    x = option.x;
    y = option.y - option.height / 2;
    y = y - this.padding;
    xx = option.width;
    yy = option.height + this.padding * 2;
    return this.svg.setAttribute("viewBox", x + " " + y + " " + xx + " " + yy);
  };

  SVGDrawer.prototype.makePathObj = function(a, b, bezie) {
    var path;
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = "none";
    if (bezie != null) {
      path.setAttribute("d", "M" + a.toString() + " Q " + bezie.toString() + " " + b.toString());
    } else if (b != null) {
      path.setAttribute("d", "M" + a.toString() + " " + b.toString());
    } else {
      path.setAttribute("d", "M" + a);
    }
    return this.svg.appendChild(path);
  };

  SVGDrawer.prototype.drawRect = function(arg) {
    var height, point, r, rect, width;
    point = arg.point, width = arg.width, height = arg.height, r = arg.r;
    rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.style.stroke = "black";
    rect.style.fill = "none";
    rect.setAttribute("x", point.x);
    rect.setAttribute("y", point.y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    if (r != null) {
      rect.setAttribute("rx", r);
      rect.setAttribute("ry", r);
    }
    return this.svg.appendChild(rect);
  };

  SVGDrawer.prototype.drawPath = function(a, b) {
    var b1, b2, end, option, p1, p2, p3, p4, rlx, rly, route, start, xl, yl;
    if (b == null) {
      option = a;
      a = [option.x, option.y];
      b = [option.xx, option.yy];
    }
    start = new Point(a);
    end = new Point(b);
    if (start.x === end.x || start.y === end.y) {
      if (start.x === end.x && start.y === end.y) {
        return;
      }
      return this.makePathObj(start, end);
    } else {
      xl = end.x - start.x;
      yl = end.y - start.y;
      rlx = this.rlength;
      if (Math.abs(xl / 2) < this.rlength) {
        rlx = Math.abs(xl / 2);
      }
      if (Math.abs(yl / 2) < this.rlength) {
        rlx = Math.abs(yl / 2);
      }
      rly = rlx;
      if (!start.ltor(end)) {
        rlx = -rlx;
      }
      if (!start.utod(end)) {
        rly = -rly;
      }
      p1 = new Point(start.x + xl / 2 - rlx, start.y);
      p2 = new Point(start.x + xl / 2, start.y + rly);
      b1 = new Point(start.x + xl / 2, start.y);
      p3 = new Point(start.x + xl / 2, end.y - rly);
      p4 = new Point(start.x + xl / 2 + rlx, end.y);
      b2 = new Point(start.x + xl / 2, end.y);
      route = [start, "L", p1, "Q", b1, p2, "L", p3, "Q", b2, p4, "L", end].join(" ");
      return this.makePathObj(route);
    }
  };

  return SVGDrawer;

})();

NEZDrawer = (function(superClass) {
  extend(NEZDrawer, superClass);

  function NEZDrawer() {
    return NEZDrawer.__super__.constructor.apply(this, arguments);
  }

  NEZDrawer.prototype.show = function(json) {
    var end_line, opt, option, plot, start_line;
    start_line = {
      shape: "path",
      width: 6,
      height: 1,
      x: 0,
      y: 0,
      xx: 6,
      yy: 0
    };
    option = {
      x: start_line.x + start_line.width,
      y: start_line.y
    };
    opt = this.plot(json, option);
    console.log(opt);
    end_line = {
      shape: "path",
      width: 6,
      height: 1,
      x: start_line.width + opt.width,
      y: start_line.y,
      xx: start_line.width + opt.width + 6,
      yy: start_line.y
    };
    plot = {};
    plot.shape = "List";
    plot.value = [start_line, opt, end_line];
    plot.x = start_line.x;
    plot.y = start_line.y;
    plot.width = start_line.width + opt.width + end_line.width;
    plot.height = Math.max(start_line.height, opt.height, end_line.height);
    this.draw(plot);
    return this.setViewport(plot);
  };

  NEZDrawer.prototype.plot = function(json, option) {
    var choice_height, choice_width, i, j, k, left, leftxx, len, len1, len2, len3, m, name, p, path, production, ref, ref1, ref2, ref3, ret, right, rightx, sequence_width, target, v, x, y;
    switch (json.tag) {
      case "List":
        production = json.value[0];
        if (production.value.length < 2) {
          return;
        }
        target = production.value[production.value.length - 1];
        name = production.value[production.value.length - 2];
        this.name = name.value;
        return this.plot(target, option);
      case "NonTerminal":
        return this.NonTerminal(json.value, option);
      case "Sequence":
        sequence_width = 6;
        ret = {
          shape: "List",
          width: -sequence_width,
          height: 0
        };
        ret.x = option.x;
        ret.y = option.y;
        ret.value = [];
        ref = json.value;
        for (i = 0, len = ref.length; i < len; i++) {
          v = ref[i];
          p = this.plot(v, option);
          ret.width += p.width + sequence_width;
          if (ret.height < p.height) {
            ret.height = p.height;
          }
          ret.value.push(p);
        }
        x = 0;
        path = [];
        ref1 = ret.value;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          v = ref1[j];
          v.x += x;
          x += v.width + sequence_width;
          path.push({
            shape: "path",
            x: v.x + v.width,
            y: ret.y,
            xx: v.x + v.width + sequence_width,
            yy: ret.y
          });
        }
        path.pop();
        ret.value.push.apply(ret.value, path);
        ret.x = 0;
        ret.y = 0;
        return ret;
      case "Choice":
        choice_width = 20;
        choice_height = 10;
        console.log(json);
        ret = {
          shape: "List",
          width: 0,
          height: -choice_height
        };
        ret.x = option.x;
        ret.y = option.y;
        ret.value = [];
        ref2 = json.value;
        for (k = 0, len2 = ref2.length; k < len2; k++) {
          v = ref2[k];
          p = this.plot(v, option);
          if (ret.width < p.width) {
            ret.width = p.width;
          }
          ret.height += p.height + choice_height;
          ret.value.push(p);
        }
        ret.width += 2 * choice_width;
        y = ret.y - ret.height / 2;
        path = [];
        ref3 = ret.value;
        for (m = 0, len3 = ref3.length; m < len3; m++) {
          v = ref3[m];
          v.x = ret.width / 2 - v.width / 2;
          v.y = y + v.height / 2;
          y = y + v.height + choice_height;
          leftxx = v.x;
          rightx = v.x + v.width;
          if (v.shape === "List") {
            leftxx += v.value[0].x;
            rightx += v.value[0].x;
          }
          left = {
            shape: "path",
            x: ret.x,
            y: ret.y,
            xx: leftxx,
            yy: v.y
          };
          right = {
            shape: "path",
            x: rightx,
            y: v.y,
            xx: ret.x + ret.width,
            yy: ret.y
          };
          path.push(left);
          path.push(right);
        }
        ret.value.push.apply(ret.value, path);
        ret.x = 0;
        ret.y = 0;
        return ret;
    }
  };

  NEZDrawer.prototype.NonTerminal = function(name, option) {
    var charSize, h, l, w;
    charSize = this.getCharSize();
    l = name.length;
    w = charSize.width * l + this.padding * 2;
    h = charSize.height + this.padding * 2;
    return {
      shape: "NonTerminal",
      text: name,
      round: true,
      x: option.x,
      y: option.y,
      width: w,
      height: h
    };
  };

  NEZDrawer.prototype.draw = function(plot) {
    var i, len, opt, option, p, ref;
    switch (plot.shape) {
      case "List":
        option = {};
        option.value = [];
        option.shape = "List";
        ref = plot.value;
        for (i = 0, len = ref.length; i < len; i++) {
          p = ref[i];
          p.x += plot.x;
          p.y += plot.y;
          if (p.xx != null) {
            p.xx += plot.x;
          }
          if (p.yy != null) {
            p.yy += plot.y;
          }
          opt = this.draw(p);
        }
        return option;
      case "path":
        return this.drawPath(plot);
      case "NonTerminal":
        return this.drawNonterminal(plot);
    }
  };

  NEZDrawer.prototype.drawText = function(text, option) {
    var t;
    t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute("x", option.x);
    t.setAttribute("y", option.y);
    t.setAttribute("fill", "#222");
    t.setAttribute("font-size", 12);
    t.setAttribute("font-family", "monospace");
    t.innerHTML = text;
    this.svg.appendChild(t);
    return t;
  };

  NEZDrawer.prototype.drawTextPadding = function(text, option) {
    var t;
    t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute("x", option.x + this.padding);
    t.setAttribute("y", option.y + this.padding);
    t.setAttribute("fill", "#222");
    t.setAttribute("font-size", 12);
    t.setAttribute("font-family", "monospace");
    t.innerHTML = text;
    this.svg.appendChild(t);
    return t;
  };

  NEZDrawer.prototype.getCharSize = function() {
    var box, text;
    if (this.charSize != null) {
      return this.charSize;
    } else {
      text = this.drawText("XgfTlM|.q", {
        x: -1000,
        y: -1000
      });
      box = text.getBBox();
      this.charSize = {};
      this.charSize.height = box.height;
      this.charSize.width = box.width / (text.innerHTML.length - 1);
      return this.charSize;
    }
  };

  NEZDrawer.prototype.drawNonterminal = function(option) {
    var point;
    point = new Point(option.x, option.y - option.height / 2);
    this.drawTextPadding(option.text, option);
    return this.drawRect({
      point: point,
      width: option.width,
      height: option.height,
      r: this.rlength
    });
  };

  NEZDrawer.prototype.drawChoice = function() {};

  return NEZDrawer;

})(SVGDrawer);
