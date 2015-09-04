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
    var b1, b2, b3, b4, end, option, p1, p2, p3, p4, p5, p6, paddingY, rlx, rly, route, start, width, xl, yl;
    if (b == null) {
      option = a;
      a = [option.x, option.y];
      b = [option.xx, option.yy];
      if (option.through || option.loop) {
        paddingY = option.height > 0 ? this.padding : -this.padding;
        start = new Point(a);
        end = new Point(b);
        width = end.x - start.x;
        p1 = new Point(start.x + this.padding, start.y - paddingY);
        b1 = new Point(start.x + this.padding, start.y);
        p2 = new Point(p1.x, start.y - option.height + paddingY);
        p3 = new Point(p2.x + this.padding, p2.y - paddingY);
        b2 = new Point(p2.x, p3.y);
        p4 = new Point(start.x + width - this.padding * 2, p3.y);
        p5 = new Point(p4.x + this.padding, p4.y + paddingY);
        b3 = new Point(p5.x, p4.y);
        p6 = new Point(p5.x, p4.y + option.height - paddingY);
        b4 = new Point(p5.x, p6.y + paddingY);
        if (option.loop) {
          start.x += this.padding * 2;
          end.x -= this.padding * 2;
        }
        route = [start, "Q", b1, p1, "L", p2, "Q", b2, p3, "L", p4, "Q", b3, p5, "L", p6, "Q", b4, end].join(" ");
        return this.makePathObj(route);
      }
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
    var end_line, name, opt, option, plot, production, start_line, target;
    console.log(json.value[0].value[1]);
    production = json.value[0];
    if (production.value.length < 2) {
      return;
    }
    target = production.value[production.value.length - 1];
    name = production.value[production.value.length - 2];
    this.name = name.value;
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
    opt = this.plot(target, option);
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
    console.log(JSON.parse(JSON.stringify(plot)));
    this.draw(plot);
    console.log(plot);
    return this.setViewport(plot);
  };

  NEZDrawer.prototype.plot = function(json, option) {
    var choice_height, choice_width, i, j, k, left, len, len1, len2, len3, len4, loops, m, n, opt, option_height, option_width, p, path, ref, ref1, ref2, ref3, ref4, repetition_height, repetition_width, ret, right, sequence_width, str, v, x, y;
    switch (json.tag) {
      case "Any":
      case "Character":
      case "String":
      case "NonTerminal":
        return this.Textrect(json.tag, json.value, option);
      case "Class":
        str = "";
        ref = json.value;
        for (i = 0, len = ref.length; i < len; i++) {
          v = ref[i];
          if (v.tag === "Class") {
            str += v.value;
          } else if (v.tag === "List") {
            str += v.value[0].value + "-" + v.value[1].value;
          }
        }
        return this.Textrect("Class", str, option);
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
        opt = JSON.parse(JSON.stringify(option));
        ref1 = json.value;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          v = ref1[j];
          p = this.plot(v, opt);
          opt.x += p.width + sequence_width;
          ret.width += p.width + sequence_width;
          if (ret.height < p.height) {
            ret.height = p.height;
          }
          ret.value.push(p);
        }
        x = 0;
        path = [];
        ref2 = ret.value;
        for (k = 0, len2 = ref2.length; k < len2; k++) {
          v = ref2[k];
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
        return ret;
      case "Choice":
        choice_width = 20;
        choice_height = 10;
        ret = {
          shape: "List",
          width: 0,
          height: -choice_height
        };
        ret.x = option.x;
        ret.y = option.y;
        ret.value = [];
        ref3 = json.value;
        for (m = 0, len3 = ref3.length; m < len3; m++) {
          v = ref3[m];
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
        ref4 = ret.value;
        for (n = 0, len4 = ref4.length; n < len4; n++) {
          v = ref4[n];
          v.moveX = ret.width / 2 - v.width / 2;
          v.moveY = y + v.height / 2;
          y = y + v.height + choice_height;
          left = {
            shape: "path",
            x: ret.x,
            y: ret.y,
            xx: ret.x + v.moveX,
            yy: ret.y + v.moveY
          };
          right = {
            shape: "path",
            x: ret.x + v.moveX + v.width,
            y: ret.y + v.moveY,
            xx: ret.x + ret.width,
            yy: ret.y
          };
          path.push(left);
          path.push(right);
        }
        ret.value.push.apply(ret.value, path);
        return ret;
      case "Option":
        option_width = 10;
        option_height = 10;
        ret = {
          shape: "List",
          width: 0,
          height: -option_height
        };
        ret.x = option.x;
        ret.y = option.y;
        ret.value = [];
        p = this.plot(json.value[0], option);
        ret.width = p.width + option_width * 2;
        ret.height = p.height + option_height * 2;
        p.moveX = option_width;
        p.moveY = 0;
        ret.value.push(p);
        path = {
          shape: "path",
          through: true,
          x: ret.x,
          y: ret.y,
          xx: ret.x + ret.width,
          yy: ret.y,
          height: -ret.height / 2
        };
        left = {
          shape: "path",
          x: ret.x,
          y: ret.y,
          xx: ret.x + option_width,
          yy: ret.y
        };
        right = {
          shape: "path",
          x: left.xx + p.width,
          y: ret.y,
          xx: left.xx + p.width + option_width,
          yy: ret.y
        };
        ret.value.push(path, left, right);
        return ret;
      case "Repetition":
      case "Repetition1":
        repetition_width = 10;
        repetition_height = 10;
        ret = {
          shape: "List",
          x: option.x,
          y: option.y,
          width: 0,
          height: 0
        };
        ret.value = [];
        p = this.plot(json.value[0], option);
        p.moveX = repetition_width;
        ret.width = p.width + repetition_width * 2;
        ret.height = p.height + repetition_height * 2;
        loops = {
          shape: "path",
          loop: true,
          x: ret.x,
          y: ret.y,
          xx: ret.x + ret.width,
          yy: ret.y,
          height: ret.height / 2
        };
        path = {
          shape: "path",
          through: true,
          x: ret.x,
          y: ret.y,
          xx: ret.x + ret.width,
          yy: ret.y,
          height: -ret.height / 2
        };
        left = {
          shape: "path",
          x: ret.x,
          y: ret.y,
          xx: ret.x + repetition_width,
          yy: ret.y
        };
        right = {
          shape: "path",
          x: left.xx + p.width,
          y: ret.y,
          xx: left.xx + p.width + repetition_width,
          yy: ret.y
        };
        ret.value.push(p, loops, left, right);
        if (json.tag === "Repetition") {
          ret.value.push(path);
        }
        return ret;
    }
  };

  NEZDrawer.prototype.Textrect = function(type, text, option) {
    var charSize, h, l, round, w;
    charSize = this.getCharSize();
    if (type === "Character") {
      text = "'" + text + "'";
    }
    if (type === "String") {
      text = "\"" + text + "\"";
    }
    if (type === "Class") {
      text = "[" + text + "]";
    }
    l = text.length;
    w = charSize.width * l + this.padding * 2;
    h = charSize.height + this.padding * 2;
    round = type === "NonTerminal" ? true : false;
    return {
      shape: "rect",
      text: text,
      round: round,
      x: option.x,
      y: option.y,
      width: w,
      height: h
    };
  };

  NEZDrawer.prototype.draw = function(plot) {
    var i, len, opt, option, p, ref;
    if (plot.moveX != null) {
      plot.x += plot.moveX;
    }
    if (plot.moveY != null) {
      plot.y += plot.moveY;
    }
    switch (plot.shape) {
      case "List":
        option = {};
        option.value = [];
        option.shape = "List";
        ref = plot.value;
        for (i = 0, len = ref.length; i < len; i++) {
          p = ref[i];
          if (plot.moveX != null) {
            p.x += plot.moveX;
            if (p.moveX == null) {
              p.moveX = 0;
            }
            if (p.shape === "List") {
              p.moveX += plot.moveX;
            }
            if (p.xx != null) {
              p.xx += plot.moveX;
            }
          }
          if (plot.moveY != null) {
            p.y += plot.moveY;
            if (p.moveY == null) {
              p.moveY = 0;
            }
            if (p.shape === "List") {
              p.moveY += plot.moveY;
            }
            if (p.yy != null) {
              p.yy += plot.moveY;
            }
          }
          opt = this.draw(p);
        }
        return option;
      case "path":
        return this.drawPath(plot);
      case "rect":
        return this.drawRectWithText(plot);
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

  NEZDrawer.prototype.drawRectWithText = function(option) {
    var point, r;
    point = new Point(option.x, option.y - option.height / 2);
    this.drawTextPadding(option.text, option);
    r = 0;
    if (option.round) {
      r = this.rlength;
    }
    return this.drawRect({
      point: point,
      width: option.width,
      height: option.height,
      r: r
    });
  };

  NEZDrawer.prototype.drawChoice = function() {};

  return NEZDrawer;

})(SVGDrawer);
