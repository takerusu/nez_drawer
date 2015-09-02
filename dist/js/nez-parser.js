var Parser;

Parser = (function() {
  function Parser() {
    this.currPos = 0;
  }

  Parser.prototype.parse = function(input) {
    this.currPos = 0;
    this.input = input;
    return this.nez$File();
  };

  Parser.prototype.nez$File = function() {
    var obj, outs, pos978, pos981, posl978, posl981, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    while (result !== false) {
      posl978 = poss.length;
      pos978 = this.currPos;
      result = this.nez$S();
    }
    this.currPos = pos978;
    while (poss.length > posl978) {
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
    }
    result = true;
    if (result !== false) {
      while (result !== false) {
        posl981 = poss.length;
        pos981 = this.currPos;
        result = this.nez$Statement();
        if (typeof result !== "boolean") {
          outs.push(result);
        }
      }
      this.currPos = pos981;
      while (poss.length > posl981) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (result !== false) {
        if (result !== false) {
          tag = "List";
        }
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$S = function() {
    var obj, outs, pos1051, posl1051, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos1051 = this.currPos;
    posl1051 = poss.length;
    result = true;
    if (/[\t]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result === false) {
      this.currPos = pos1051;
      while (poss.length > posl1051) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (/[\n]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result === false) {
        this.currPos = pos1051;
        while (poss.length > posl1051) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (/[\r]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result === false) {
          this.currPos = pos1051;
          while (poss.length > posl1051) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[ ]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Statement = function() {
    var obj, outs, pos1122, posl1122, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos1122 = this.currPos;
    posl1122 = poss.length;
    result = true;
    result = this.nez$Document();
    if (result === false) {
      this.currPos = pos1122;
      while (poss.length > posl1122) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      result = this.nez$ExampleStatement();
      if (result === false) {
        this.currPos = pos1122;
        while (poss.length > posl1122) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        result = this.nez$ImportStatement();
        if (result === false) {
          this.currPos = pos1122;
          while (poss.length > posl1122) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          result = this.nez$FormatStatement();
          if (result === false) {
            this.currPos = pos1122;
            while (poss.length > posl1122) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            result = this.nez$TemplateStatement();
            if (result === false) {
              this.currPos = pos1122;
              while (poss.length > posl1122) {
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
              result = true;
              result = this.nez$Production();
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Document = function() {
    var obj, outs, pos836, pos838, posl836, posl838, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    result = this.nez$COMMENT();
    if (result !== false) {
      while (result !== false) {
        posl838 = poss.length;
        pos838 = this.currPos;
        while (result !== false) {
          posl836 = poss.length;
          pos836 = this.currPos;
          if (/[\t-\n\r ]/.test(this.input.charAt(this.currPos))) {
            result = true;
            this.currPos++;
          } else {
            result = false;
          }
        }
        this.currPos = pos836;
        while (poss.length > posl836) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (result !== false) {
          result = this.nez$COMMENT();
        }
      }
      this.currPos = pos838;
      while (poss.length > posl838) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (result !== false) {
        if (result !== false) {
          tag = "Comment";
        }
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
        if (result !== false) {
          result = this.nez$_();
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$COMMENT = function() {
    var obj, outs, pos555, pos557, pos919, pos921, pos925, posl557, posl921, posl925, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos925 = this.currPos;
    posl925 = poss.length;
    result = true;
    if (/[\/]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (/[\*]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        while (result !== false) {
          posl557 = poss.length;
          pos557 = this.currPos;
          pos555 = this.currPos;
          if (/[\*]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[\/]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
          }
          this.currPos = pos555;
          if (result === false) {
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (this.input.length > this.currPos) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
          }
        }
        this.currPos = pos557;
        while (poss.length > posl557) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (result !== false) {
          if (/[\*]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[\/]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
          }
        }
      }
    }
    if (result === false) {
      this.currPos = pos925;
      while (poss.length > posl925) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (/[\/]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[\/]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          while (result !== false) {
            posl921 = poss.length;
            pos921 = this.currPos;
            pos919 = this.currPos;
            result = this.nez$EOL();
            this.currPos = pos919;
            if (result === false) {
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (this.input.length > this.currPos) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
            }
          }
          this.currPos = pos921;
          while (poss.length > posl921) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (result !== false) {
            result = this.nez$EOL();
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$EOL = function() {
    var obj, outs, pos654, pos899, posl654, posl899, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos899 = this.currPos;
    posl899 = poss.length;
    result = true;
    if (/[\n]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result === false) {
      this.currPos = pos899;
      while (poss.length > posl899) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (/[\r]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        pos654 = this.currPos;
        posl654 = poss.length;
        if (/[\n]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result === false) {
          this.currPos = pos654;
          while (poss.length > posl654) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
        }
        result = true;
      }
      if (result === false) {
        this.currPos = pos899;
        while (poss.length > posl899) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        result = this.nez$EOT();
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$EOT = function() {
    var obj, outs, pos715, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos715 = this.currPos;
    if (this.input.length > this.currPos) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    this.currPos = pos715;
    if (result === false) {
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (typeof posobj !== "undefined" && posobj !== null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((typeof posobj !== "undefined" && posobj !== null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$_ = function() {
    var obj, outs, pos1114, pos1115, pos555, pos557, pos919, pos921, posl1114, posl1115, posl557, posl921, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    while (result !== false) {
      posl1115 = poss.length;
      pos1115 = this.currPos;
      pos1114 = this.currPos;
      posl1114 = poss.length;
      result = true;
      if (/[\t]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result === false) {
        this.currPos = pos1114;
        while (poss.length > posl1114) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (/[\n]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result === false) {
          this.currPos = pos1114;
          while (poss.length > posl1114) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[\r]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result === false) {
            this.currPos = pos1114;
            while (poss.length > posl1114) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            if (/[ ]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result === false) {
              this.currPos = pos1114;
              while (poss.length > posl1114) {
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
              result = true;
              if (/[\/]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[\*]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  while (result !== false) {
                    posl557 = poss.length;
                    pos557 = this.currPos;
                    pos555 = this.currPos;
                    if (/[\*]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[\/]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                    }
                    this.currPos = pos555;
                    if (result === false) {
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (this.input.length > this.currPos) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                    }
                  }
                  this.currPos = pos557;
                  while (poss.length > posl557) {
                    if (poss.length > 0) {
                      posobj = poss.pop(posobj);
                    }
                  }
                  result = true;
                  if (result !== false) {
                    if (/[\*]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[\/]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                    }
                  }
                }
              }
              if (result === false) {
                this.currPos = pos1114;
                while (poss.length > posl1114) {
                  if (poss.length > 0) {
                    posobj = poss.pop(posobj);
                  }
                }
                result = true;
                if (/[\/]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[\/]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    while (result !== false) {
                      posl921 = poss.length;
                      pos921 = this.currPos;
                      pos919 = this.currPos;
                      result = this.nez$EOL();
                      this.currPos = pos919;
                      if (result === false) {
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (this.input.length > this.currPos) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                      }
                    }
                    this.currPos = pos921;
                    while (poss.length > posl921) {
                      if (poss.length > 0) {
                        posobj = poss.pop(posobj);
                      }
                    }
                    result = true;
                    if (result !== false) {
                      result = this.nez$EOL();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    this.currPos = pos1115;
    while (poss.length > posl1115) {
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
    }
    result = true;
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$ExampleStatement = function() {
    var obj, outs, pos142, pos166, pos850, posl166, posl850, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    if (/[e]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (/[x]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[a]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[m]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[p]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[l]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[e]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  pos142 = this.currPos;
                  if (/[0-9A-Z_a-z]/.test(this.input.charAt(this.currPos))) {
                    result = true;
                    this.currPos++;
                  } else {
                    result = false;
                  }
                  this.currPos = pos142;
                  if (result === false) {
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    result = this.nez$_();
                    if (result !== false) {
                      pos166 = this.currPos;
                      posl166 = poss.length;
                      result = true;
                      if (/[\!]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        tag = "Rebut";
                      }
                      if (result === false) {
                        this.currPos = pos166;
                        while (poss.length > posl166) {
                          if (poss.length > 0) {
                            posobj = poss.pop(posobj);
                          }
                        }
                        result = true;
                        if (result !== false) {
                          tag = "Example";
                        }
                      }
                      if (result !== false) {
                        result = this.nez$NonTerminal();
                        if (typeof result !== "boolean") {
                          outs.push(result);
                        }
                        if (result !== false) {
                          while (result !== false) {
                            posl850 = poss.length;
                            pos850 = this.currPos;
                            if (/[\&]/.test(this.input.charAt(this.currPos))) {
                              this.currPos++;
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              result = this.nez$NonTerminal();
                              if (typeof result !== "boolean") {
                                outs.push(result);
                              }
                            }
                          }
                          this.currPos = pos850;
                          while (poss.length > posl850) {
                            if (poss.length > 0) {
                              posobj = poss.pop(posobj);
                            }
                          }
                          result = true;
                          if (result !== false) {
                            result = this.nez$addInputText();
                            if (result !== false) {
                              if (posobj != null) {
                                posobj.end = this.currPos;
                              }
                              obj = {};
                              result = true;
                              if (tag === "") {
                                if (outs.length > 0) {
                                  obj = outs.pop();
                                } else if ((this.obj != null)) {
                                  obj = this.obj;
                                }
                              } else {
                                obj.tag = tag;
                                if (posobj != null) {
                                  obj.pos = posobj;
                                }
                                if (outs.length !== 0 && poss.length === 0) {
                                  obj.value = outs;
                                  this.obj = obj;
                                } else if ((posobj != null)) {
                                  if (posobj.end == null) {
                                    posobj.end = this.currPos;
                                  }
                                  obj.value = this.input.slice(posobj.start, posobj.end);
                                  this.obj = obj;
                                } else {
                                  if (this.obj != null) {
                                    obj = this.obj;
                                  }
                                }
                              }
                              posobj = null;
                              if ((obj.value == null) || obj.value === "") {
                                obj = true;
                              }
                              result = obj;
                              if (poss.length > 0) {
                                posobj = poss.pop(posobj);
                              }
                              if (result !== false) {
                                result = this.nez$_();
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$NonTerminal = function() {
    var obj, outs, pos901, posl901, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    result = this.nez$NAME();
    if (result !== false) {
      pos901 = this.currPos;
      posl901 = poss.length;
      if (/[\.]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        result = this.nez$NAME();
      }
      if (result === false) {
        this.currPos = pos901;
        while (poss.length > posl901) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
      }
      result = true;
      if (result !== false) {
        if (result !== false) {
          tag = "NonTerminal";
        }
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
        if (result !== false) {
          result = this.nez$_();
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$NAME = function() {
    var obj, outs, pos1076, pos933, posl933, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos1076 = this.currPos;
    result = this.nez$KEYWORD();
    this.currPos = pos1076;
    if (result === false) {
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      result = this.nez$LETTER();
      if (result !== false) {
        while (result !== false) {
          posl933 = poss.length;
          pos933 = this.currPos;
          result = this.nez$W();
        }
        this.currPos = pos933;
        while (poss.length > posl933) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$KEYWORD = function() {
    var obj, outs, pos1048, pos142, pos869, posl1048, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos1048 = this.currPos;
    posl1048 = poss.length;
    result = true;
    if (/[p]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (/[u]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[b]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[l]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[i]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[c]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                pos869 = this.currPos;
                result = this.nez$W();
                this.currPos = pos869;
                if (result === false) {
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  result = this.nez$_();
                }
              }
            }
          }
        }
      }
    }
    if (result === false) {
      this.currPos = pos1048;
      while (poss.length > posl1048) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (/[i]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[n]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[l]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[i]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[n]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[e]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  pos869 = this.currPos;
                  result = this.nez$W();
                  this.currPos = pos869;
                  if (result === false) {
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    result = this.nez$_();
                  }
                }
              }
            }
          }
        }
      }
      if (result === false) {
        this.currPos = pos1048;
        while (poss.length > posl1048) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (/[i]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[m]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[p]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[o]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[r]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[t]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    pos869 = this.currPos;
                    result = this.nez$W();
                    this.currPos = pos869;
                    if (result === false) {
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      result = this.nez$_();
                    }
                  }
                }
              }
            }
          }
        }
        if (result === false) {
          this.currPos = pos1048;
          while (poss.length > posl1048) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[f]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[r]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[o]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[m]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  pos869 = this.currPos;
                  result = this.nez$W();
                  this.currPos = pos869;
                  if (result === false) {
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    result = this.nez$_();
                  }
                }
              }
            }
          }
          if (result === false) {
            this.currPos = pos1048;
            while (poss.length > posl1048) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            if (/[g]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[r]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[a]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[m]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[m]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[a]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[r]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          pos869 = this.currPos;
                          result = this.nez$W();
                          this.currPos = pos869;
                          if (result === false) {
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            result = this.nez$_();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            if (result === false) {
              this.currPos = pos1048;
              while (poss.length > posl1048) {
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
              result = true;
              if (/[e]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[x]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[a]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[m]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[p]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[l]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          if (/[e]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            pos142 = this.currPos;
                            if (/[0-9A-Z_a-z]/.test(this.input.charAt(this.currPos))) {
                              result = true;
                              this.currPos++;
                            } else {
                              result = false;
                            }
                            this.currPos = pos142;
                            if (result === false) {
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              result = this.nez$_();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (result === false) {
                this.currPos = pos1048;
                while (poss.length > posl1048) {
                  if (poss.length > 0) {
                    posobj = poss.pop(posobj);
                  }
                }
                result = true;
                if (/[t]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[e]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[m]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[p]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[l]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          if (/[a]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            if (/[t]/.test(this.input.charAt(this.currPos))) {
                              this.currPos++;
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              if (/[e]/.test(this.input.charAt(this.currPos))) {
                                this.currPos++;
                                result = true;
                              } else {
                                result = false;
                              }
                              if (result !== false) {
                                pos869 = this.currPos;
                                result = this.nez$W();
                                this.currPos = pos869;
                                if (result === false) {
                                  result = true;
                                } else {
                                  result = false;
                                }
                                if (result !== false) {
                                  result = this.nez$_();
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (result === false) {
                  this.currPos = pos1048;
                  while (poss.length > posl1048) {
                    if (poss.length > 0) {
                      posobj = poss.pop(posobj);
                    }
                  }
                  result = true;
                  if (/[f]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[o]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[r]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[m]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          if (/[a]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            if (/[t]/.test(this.input.charAt(this.currPos))) {
                              this.currPos++;
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              pos869 = this.currPos;
                              result = this.nez$W();
                              this.currPos = pos869;
                              if (result === false) {
                                result = true;
                              } else {
                                result = false;
                              }
                              if (result !== false) {
                                result = this.nez$_();
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (result === false) {
                    this.currPos = pos1048;
                    while (poss.length > posl1048) {
                      if (poss.length > 0) {
                        posobj = poss.pop(posobj);
                      }
                    }
                    result = true;
                    if (/[t]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[r]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[u]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          if (/[e]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            pos869 = this.currPos;
                            result = this.nez$W();
                            this.currPos = pos869;
                            if (result === false) {
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              result = this.nez$_();
                            }
                          }
                        }
                      }
                    }
                    if (result === false) {
                      this.currPos = pos1048;
                      while (poss.length > posl1048) {
                        if (poss.length > 0) {
                          posobj = poss.pop(posobj);
                        }
                      }
                      result = true;
                      if (/[f]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[a]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          if (/[l]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            if (/[s]/.test(this.input.charAt(this.currPos))) {
                              this.currPos++;
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              if (/[e]/.test(this.input.charAt(this.currPos))) {
                                this.currPos++;
                                result = true;
                              } else {
                                result = false;
                              }
                              if (result !== false) {
                                pos869 = this.currPos;
                                result = this.nez$W();
                                this.currPos = pos869;
                                if (result === false) {
                                  result = true;
                                } else {
                                  result = false;
                                }
                                if (result !== false) {
                                  result = this.nez$_();
                                }
                              }
                            }
                          }
                        }
                      }
                      if (result === false) {
                        this.currPos = pos1048;
                        while (poss.length > posl1048) {
                          if (poss.length > 0) {
                            posobj = poss.pop(posobj);
                          }
                        }
                        result = true;
                        if (/[d]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          if (/[e]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            if (/[f]/.test(this.input.charAt(this.currPos))) {
                              this.currPos++;
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              if (/[i]/.test(this.input.charAt(this.currPos))) {
                                this.currPos++;
                                result = true;
                              } else {
                                result = false;
                              }
                              if (result !== false) {
                                if (/[n]/.test(this.input.charAt(this.currPos))) {
                                  this.currPos++;
                                  result = true;
                                } else {
                                  result = false;
                                }
                                if (result !== false) {
                                  if (/[e]/.test(this.input.charAt(this.currPos))) {
                                    this.currPos++;
                                    result = true;
                                  } else {
                                    result = false;
                                  }
                                  if (result !== false) {
                                    pos869 = this.currPos;
                                    result = this.nez$W();
                                    this.currPos = pos869;
                                    if (result === false) {
                                      result = true;
                                    } else {
                                      result = false;
                                    }
                                    if (result !== false) {
                                      result = this.nez$_();
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        if (result === false) {
                          this.currPos = pos1048;
                          while (poss.length > posl1048) {
                            if (poss.length > 0) {
                              posobj = poss.pop(posobj);
                            }
                          }
                          result = true;
                          if (/[t]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            if (/[y]/.test(this.input.charAt(this.currPos))) {
                              this.currPos++;
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              if (/[p]/.test(this.input.charAt(this.currPos))) {
                                this.currPos++;
                                result = true;
                              } else {
                                result = false;
                              }
                              if (result !== false) {
                                if (/[e]/.test(this.input.charAt(this.currPos))) {
                                  this.currPos++;
                                  result = true;
                                } else {
                                  result = false;
                                }
                                if (result !== false) {
                                  pos869 = this.currPos;
                                  result = this.nez$W();
                                  this.currPos = pos869;
                                  if (result === false) {
                                    result = true;
                                  } else {
                                    result = false;
                                  }
                                  if (result !== false) {
                                    result = this.nez$_();
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$W = function() {
    var obj, outs, pos1067, posl1067, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos1067 = this.currPos;
    posl1067 = poss.length;
    result = true;
    if (/[0-9]/.test(this.input.charAt(this.currPos))) {
      result = true;
      this.currPos++;
    } else {
      result = false;
    }
    if (result === false) {
      this.currPos = pos1067;
      while (poss.length > posl1067) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (/[A-Z]/.test(this.input.charAt(this.currPos))) {
        result = true;
        this.currPos++;
      } else {
        result = false;
      }
      if (result === false) {
        this.currPos = pos1067;
        while (poss.length > posl1067) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (/[_]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result === false) {
          this.currPos = pos1067;
          while (poss.length > posl1067) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[a-z]/.test(this.input.charAt(this.currPos))) {
            result = true;
            this.currPos++;
          } else {
            result = false;
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$LETTER = function() {
    var obj, outs, pos1206, posl1206, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos1206 = this.currPos;
    posl1206 = poss.length;
    result = true;
    if (/[A-Z]/.test(this.input.charAt(this.currPos))) {
      result = true;
      this.currPos++;
    } else {
      result = false;
    }
    if (result === false) {
      this.currPos = pos1206;
      while (poss.length > posl1206) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (/[_]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result === false) {
        this.currPos = pos1206;
        while (poss.length > posl1206) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (/[a-z]/.test(this.input.charAt(this.currPos))) {
          result = true;
          this.currPos++;
        } else {
          result = false;
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$addInputText = function() {
    var obj, outs, pos1478, pos178, pos180, pos194, pos196, pos209, pos211, pos919, pos921, posl1478, posl180, posl196, posl211, posl921, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos1478 = this.currPos;
    posl1478 = poss.length;
    result = true;
    if (/[\']/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (/[\']/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[\']/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          result = this.nez$EOL();
          if (result !== false) {
            if (typeof posobj !== "undefined" && posobj !== null) {
              poss.push(posobj);
            }
            posobj = {};
            posobj.start = this.currPos;
            while (result !== false) {
              posl180 = poss.length;
              pos180 = this.currPos;
              pos178 = this.currPos;
              if (/[\n]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[\']/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[\']/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[\']/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                  }
                }
              }
              this.currPos = pos178;
              if (result === false) {
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (this.input.length > this.currPos) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
              }
            }
            this.currPos = pos180;
            while (poss.length > posl180) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            if (result !== false) {
              if (posobj != null) {
                posobj.end = this.currPos;
              }
              obj = {};
              result = true;
              if (tag === "") {
                if (outs.length > 0) {
                  obj = outs.pop();
                } else if ((this.obj != null)) {
                  obj = this.obj;
                }
              } else {
                obj.tag = tag;
                if (posobj != null) {
                  obj.pos = posobj;
                }
                if (outs.length !== 0 && poss.length === 0) {
                  obj.value = outs;
                  this.obj = obj;
                } else if ((posobj != null)) {
                  if (posobj.end == null) {
                    posobj.end = this.currPos;
                  }
                  obj.value = this.input.slice(posobj.start, posobj.end);
                  this.obj = obj;
                } else {
                  if (this.obj != null) {
                    obj = this.obj;
                  }
                }
              }
              posobj = null;
              if ((obj.value == null) || obj.value === "") {
                obj = true;
              }
              result = obj;
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            if (typeof result !== "boolean") {
              outs.push(result);
            }
            if (result !== false) {
              if (/[\n]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[\']/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[\']/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[\']/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result === false) {
      this.currPos = pos1478;
      while (poss.length > posl1478) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (/[`]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[`]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[`]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            result = this.nez$EOL();
            if (result !== false) {
              if (posobj != null) {
                poss.push(posobj);
              }
              posobj = {};
              posobj.start = this.currPos;
              while (result !== false) {
                posl196 = poss.length;
                pos196 = this.currPos;
                pos194 = this.currPos;
                if (/[\n]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[`]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[`]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[`]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                    }
                  }
                }
                this.currPos = pos194;
                if (result === false) {
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (this.input.length > this.currPos) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                }
              }
              this.currPos = pos196;
              while (poss.length > posl196) {
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
              result = true;
              if (result !== false) {
                if (posobj != null) {
                  posobj.end = this.currPos;
                }
                obj = {};
                result = true;
                if (tag === "") {
                  if (outs.length > 0) {
                    obj = outs.pop();
                  } else if ((this.obj != null)) {
                    obj = this.obj;
                  }
                } else {
                  obj.tag = tag;
                  if (posobj != null) {
                    obj.pos = posobj;
                  }
                  if (outs.length !== 0 && poss.length === 0) {
                    obj.value = outs;
                    this.obj = obj;
                  } else if ((posobj != null)) {
                    if (posobj.end == null) {
                      posobj.end = this.currPos;
                    }
                    obj.value = this.input.slice(posobj.start, posobj.end);
                    this.obj = obj;
                  } else {
                    if (this.obj != null) {
                      obj = this.obj;
                    }
                  }
                }
                posobj = null;
                if ((obj.value == null) || obj.value === "") {
                  obj = true;
                }
                result = obj;
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
              if (typeof result !== "boolean") {
                outs.push(result);
              }
              if (result !== false) {
                if (/[\n]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[`]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[`]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[`]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (result === false) {
        this.currPos = pos1478;
        while (poss.length > posl1478) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (/["]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/["]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/["]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              result = this.nez$EOL();
              if (result !== false) {
                if (posobj != null) {
                  poss.push(posobj);
                }
                posobj = {};
                posobj.start = this.currPos;
                while (result !== false) {
                  posl211 = poss.length;
                  pos211 = this.currPos;
                  pos209 = this.currPos;
                  if (/[\n]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/["]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/["]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/["]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                      }
                    }
                  }
                  this.currPos = pos209;
                  if (result === false) {
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (this.input.length > this.currPos) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                  }
                }
                this.currPos = pos211;
                while (poss.length > posl211) {
                  if (poss.length > 0) {
                    posobj = poss.pop(posobj);
                  }
                }
                result = true;
                if (result !== false) {
                  if (posobj != null) {
                    posobj.end = this.currPos;
                  }
                  obj = {};
                  result = true;
                  if (tag === "") {
                    if (outs.length > 0) {
                      obj = outs.pop();
                    } else if ((this.obj != null)) {
                      obj = this.obj;
                    }
                  } else {
                    obj.tag = tag;
                    if (posobj != null) {
                      obj.pos = posobj;
                    }
                    if (outs.length !== 0 && poss.length === 0) {
                      obj.value = outs;
                      this.obj = obj;
                    } else if ((posobj != null)) {
                      if (posobj.end == null) {
                        posobj.end = this.currPos;
                      }
                      obj.value = this.input.slice(posobj.start, posobj.end);
                      this.obj = obj;
                    } else {
                      if (this.obj != null) {
                        obj = this.obj;
                      }
                    }
                  }
                  posobj = null;
                  if ((obj.value == null) || obj.value === "") {
                    obj = true;
                  }
                  result = obj;
                  if (poss.length > 0) {
                    posobj = poss.pop(posobj);
                  }
                }
                if (typeof result !== "boolean") {
                  outs.push(result);
                }
                if (result !== false) {
                  if (/[\n]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/["]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/["]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/["]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (result === false) {
          this.currPos = pos1478;
          while (poss.length > posl1478) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (posobj != null) {
            poss.push(posobj);
          }
          posobj = {};
          posobj.start = this.currPos;
          while (result !== false) {
            posl921 = poss.length;
            pos921 = this.currPos;
            pos919 = this.currPos;
            result = this.nez$EOL();
            this.currPos = pos919;
            if (result === false) {
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (this.input.length > this.currPos) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
            }
          }
          this.currPos = pos921;
          while (poss.length > posl921) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (result !== false) {
            if (posobj != null) {
              posobj.end = this.currPos;
            }
            obj = {};
            result = true;
            if (tag === "") {
              if (outs.length > 0) {
                obj = outs.pop();
              } else if ((this.obj != null)) {
                obj = this.obj;
              }
            } else {
              obj.tag = tag;
              if (posobj != null) {
                obj.pos = posobj;
              }
              if (outs.length !== 0 && poss.length === 0) {
                obj.value = outs;
                this.obj = obj;
              } else if ((posobj != null)) {
                if (posobj.end == null) {
                  posobj.end = this.currPos;
                }
                obj.value = this.input.slice(posobj.start, posobj.end);
                this.obj = obj;
              } else {
                if (this.obj != null) {
                  obj = this.obj;
                }
              }
            }
            posobj = null;
            if ((obj.value == null) || obj.value === "") {
              obj = true;
            }
            result = obj;
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          if (typeof result !== "boolean") {
            outs.push(result);
          }
          if (result !== false) {
            result = this.nez$EOL();
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$ImportStatement = function() {
    var obj, outs, pos1084, pos869, posl1084, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    if (/[i]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (/[m]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[p]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[o]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[r]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[t]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                pos869 = this.currPos;
                result = this.nez$W();
                this.currPos = pos869;
                if (result === false) {
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  result = this.nez$_();
                  if (result !== false) {
                    result = this.nez$ImportName();
                    if (typeof result !== "boolean") {
                      outs.push(result);
                    }
                    if (result !== false) {
                      if (/[f]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[r]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          if (/[o]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            if (/[m]/.test(this.input.charAt(this.currPos))) {
                              this.currPos++;
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              pos869 = this.currPos;
                              result = this.nez$W();
                              this.currPos = pos869;
                              if (result === false) {
                                result = true;
                              } else {
                                result = false;
                              }
                              if (result !== false) {
                                result = this.nez$_();
                                if (result !== false) {
                                  pos1084 = this.currPos;
                                  posl1084 = poss.length;
                                  result = true;
                                  result = this.nez$Character();
                                  if (typeof result !== "boolean") {
                                    outs.push(result);
                                  }
                                  if (result === false) {
                                    this.currPos = pos1084;
                                    while (poss.length > posl1084) {
                                      if (poss.length > 0) {
                                        posobj = poss.pop(posobj);
                                      }
                                    }
                                    result = true;
                                    result = this.nez$String();
                                    if (typeof result !== "boolean") {
                                      outs.push(result);
                                    }
                                  }
                                  if (result !== false) {
                                    if (result !== false) {
                                      tag = "Import";
                                    }
                                    if (posobj != null) {
                                      posobj.end = this.currPos;
                                    }
                                    obj = {};
                                    result = true;
                                    if (tag === "") {
                                      if (outs.length > 0) {
                                        obj = outs.pop();
                                      } else if ((this.obj != null)) {
                                        obj = this.obj;
                                      }
                                    } else {
                                      obj.tag = tag;
                                      if (posobj != null) {
                                        obj.pos = posobj;
                                      }
                                      if (outs.length !== 0 && poss.length === 0) {
                                        obj.value = outs;
                                        this.obj = obj;
                                      } else if ((posobj != null)) {
                                        if (posobj.end == null) {
                                          posobj.end = this.currPos;
                                        }
                                        obj.value = this.input.slice(posobj.start, posobj.end);
                                        this.obj = obj;
                                      } else {
                                        if (this.obj != null) {
                                          obj = this.obj;
                                        }
                                      }
                                    }
                                    posobj = null;
                                    if ((obj.value == null) || obj.value === "") {
                                      obj = true;
                                    }
                                    result = obj;
                                    if (poss.length > 0) {
                                      posobj = poss.pop(posobj);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$ImportName = function() {
    var obj, outs, pos1207, pos1209, pos1211, posl1207, posl1209, posl1211, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    pos1211 = this.currPos;
    posl1211 = poss.length;
    result = true;
    if (/[\*]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result === false) {
      this.currPos = pos1211;
      while (poss.length > posl1211) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      result = this.nez$NAME();
      if (result !== false) {
        pos1209 = this.currPos;
        posl1209 = poss.length;
        if (/[\.]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          pos1207 = this.currPos;
          posl1207 = poss.length;
          result = true;
          if (/[\*]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result === false) {
            this.currPos = pos1207;
            while (poss.length > posl1207) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            result = this.nez$NAME();
          }
        }
        if (result === false) {
          this.currPos = pos1209;
          while (poss.length > posl1209) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
        }
        result = true;
      }
    }
    if (result !== false) {
      if (result !== false) {
        tag = "Name";
      }
      if (posobj != null) {
        posobj.end = this.currPos;
      }
      obj = {};
      result = true;
      if (tag === "") {
        if (outs.length > 0) {
          obj = outs.pop();
        } else if ((this.obj != null)) {
          obj = this.obj;
        }
      } else {
        obj.tag = tag;
        if (posobj != null) {
          obj.pos = posobj;
        }
        if (outs.length !== 0 && poss.length === 0) {
          obj.value = outs;
          this.obj = obj;
        } else if ((posobj != null)) {
          if (posobj.end == null) {
            posobj.end = this.currPos;
          }
          obj.value = this.input.slice(posobj.start, posobj.end);
          this.obj = obj;
        } else {
          if (this.obj != null) {
            obj = this.obj;
          }
        }
      }
      posobj = null;
      if ((obj.value == null) || obj.value === "") {
        obj = true;
      }
      result = obj;
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
      if (result !== false) {
        result = this.nez$_();
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Character = function() {
    var obj, outs, pos1335, pos1337, pos1338, posl1337, posl1338, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (/[\']/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (typeof posobj !== "undefined" && posobj !== null) {
        poss.push(posobj);
      }
      posobj = {};
      posobj.start = this.currPos;
      while (result !== false) {
        posl1338 = poss.length;
        pos1338 = this.currPos;
        pos1337 = this.currPos;
        posl1337 = poss.length;
        result = true;
        if (/[\\]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[\']/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
        }
        if (result === false) {
          this.currPos = pos1337;
          while (poss.length > posl1337) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[\\]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[\\]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
          }
          if (result === false) {
            this.currPos = pos1337;
            while (poss.length > posl1337) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            pos1335 = this.currPos;
            if (/[\n\r\']/.test(this.input.charAt(this.currPos))) {
              result = true;
              this.currPos++;
            } else {
              result = false;
            }
            this.currPos = pos1335;
            if (result === false) {
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (this.input.length > this.currPos) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
            }
          }
        }
      }
      this.currPos = pos1338;
      while (poss.length > posl1338) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (result !== false) {
        if (result !== false) {
          tag = "Character";
        }
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
        if (result !== false) {
          if (/[\']/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            result = this.nez$_();
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$String = function() {
    var obj, outs, pos824, pos826, pos827, posl826, posl827, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (/["]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (typeof posobj !== "undefined" && posobj !== null) {
        poss.push(posobj);
      }
      posobj = {};
      posobj.start = this.currPos;
      while (result !== false) {
        posl827 = poss.length;
        pos827 = this.currPos;
        pos826 = this.currPos;
        posl826 = poss.length;
        result = true;
        if (/[\\]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/["]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
        }
        if (result === false) {
          this.currPos = pos826;
          while (poss.length > posl826) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[\\]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[\\]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
          }
          if (result === false) {
            this.currPos = pos826;
            while (poss.length > posl826) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            pos824 = this.currPos;
            if (/[\n\r"]/.test(this.input.charAt(this.currPos))) {
              result = true;
              this.currPos++;
            } else {
              result = false;
            }
            this.currPos = pos824;
            if (result === false) {
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (this.input.length > this.currPos) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
            }
          }
        }
      }
      this.currPos = pos827;
      while (poss.length > posl827) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (result !== false) {
        if (result !== false) {
          tag = "String";
        }
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
        if (result !== false) {
          if (/["]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            result = this.nez$_();
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$FormatStatement = function() {
    var obj, outs, pos869, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    if (/[f]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (/[o]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[r]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[m]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[a]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[t]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                pos869 = this.currPos;
                result = this.nez$W();
                this.currPos = pos869;
                if (result === false) {
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  result = this.nez$_();
                  if (result !== false) {
                    if (/[#]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      result = this.nez$Identifier();
                      if (typeof result !== "boolean") {
                        outs.push(result);
                      }
                      if (result !== false) {
                        if (/[\[]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          result = this.nez$_();
                          if (result !== false) {
                            result = this.nez$FormatSize();
                            if (typeof result !== "boolean") {
                              outs.push(result);
                            }
                            if (result !== false) {
                              if (/[\]]/.test(this.input.charAt(this.currPos))) {
                                this.currPos++;
                                result = true;
                              } else {
                                result = false;
                              }
                              if (result !== false) {
                                result = this.nez$_();
                                if (result !== false) {
                                  if (/[`]/.test(this.input.charAt(this.currPos))) {
                                    this.currPos++;
                                    result = true;
                                  } else {
                                    result = false;
                                  }
                                  if (result !== false) {
                                    result = this.nez$Formatter();
                                    if (typeof result !== "boolean") {
                                      outs.push(result);
                                    }
                                    if (result !== false) {
                                      if (/[`]/.test(this.input.charAt(this.currPos))) {
                                        this.currPos++;
                                        result = true;
                                      } else {
                                        result = false;
                                      }
                                      if (result !== false) {
                                        if (result !== false) {
                                          tag = "Format";
                                        }
                                        if (posobj != null) {
                                          posobj.end = this.currPos;
                                        }
                                        obj = {};
                                        result = true;
                                        if (tag === "") {
                                          if (outs.length > 0) {
                                            obj = outs.pop();
                                          } else if ((this.obj != null)) {
                                            obj = this.obj;
                                          }
                                        } else {
                                          obj.tag = tag;
                                          if (posobj != null) {
                                            obj.pos = posobj;
                                          }
                                          if (outs.length !== 0 && poss.length === 0) {
                                            obj.value = outs;
                                            this.obj = obj;
                                          } else if ((posobj != null)) {
                                            if (posobj.end == null) {
                                              posobj.end = this.currPos;
                                            }
                                            obj.value = this.input.slice(posobj.start, posobj.end);
                                            this.obj = obj;
                                          } else {
                                            if (this.obj != null) {
                                              obj = this.obj;
                                            }
                                          }
                                        }
                                        posobj = null;
                                        if ((obj.value == null) || obj.value === "") {
                                          obj = true;
                                        }
                                        result = obj;
                                        if (poss.length > 0) {
                                          posobj = poss.pop(posobj);
                                        }
                                        if (result !== false) {
                                          result = this.nez$_();
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Identifier = function() {
    var obj, outs, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    result = this.nez$NAME();
    if (result !== false) {
      if (result !== false) {
        tag = "Name";
      }
      if (posobj != null) {
        posobj.end = this.currPos;
      }
      obj = {};
      result = true;
      if (tag === "") {
        if (outs.length > 0) {
          obj = outs.pop();
        } else if ((this.obj != null)) {
          obj = this.obj;
        }
      } else {
        obj.tag = tag;
        if (posobj != null) {
          obj.pos = posobj;
        }
        if (outs.length !== 0 && poss.length === 0) {
          obj.value = outs;
          this.obj = obj;
        } else if ((posobj != null)) {
          if (posobj.end == null) {
            posobj.end = this.currPos;
          }
          obj.value = this.input.slice(posobj.start, posobj.end);
          this.obj = obj;
        } else {
          if (this.obj != null) {
            obj = this.obj;
          }
        }
      }
      posobj = null;
      if ((obj.value == null) || obj.value === "") {
        obj = true;
      }
      result = obj;
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
      if (result !== false) {
        result = this.nez$_();
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$FormatSize = function() {
    var obj, outs, pos1135, posl1135, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    pos1135 = this.currPos;
    posl1135 = poss.length;
    result = true;
    if (/[\*]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result === false) {
      this.currPos = pos1135;
      while (poss.length > posl1135) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      result = this.nez$INT();
    }
    if (result !== false) {
      if (result !== false) {
        tag = "Integer";
      }
      if (posobj != null) {
        posobj.end = this.currPos;
      }
      obj = {};
      result = true;
      if (tag === "") {
        if (outs.length > 0) {
          obj = outs.pop();
        } else if ((this.obj != null)) {
          obj = this.obj;
        }
      } else {
        obj.tag = tag;
        if (posobj != null) {
          obj.pos = posobj;
        }
        if (outs.length !== 0 && poss.length === 0) {
          obj.value = outs;
          this.obj = obj;
        } else if ((posobj != null)) {
          if (posobj.end == null) {
            posobj.end = this.currPos;
          }
          obj.value = this.input.slice(posobj.start, posobj.end);
          this.obj = obj;
        } else {
          if (this.obj != null) {
            obj = this.obj;
          }
        }
      }
      posobj = null;
      if ((obj.value == null) || obj.value === "") {
        obj = true;
      }
      result = obj;
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$INT = function() {
    var obj, outs, pos613, posl613, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (/[0-9]/.test(this.input.charAt(this.currPos))) {
      result = true;
      this.currPos++;
    } else {
      result = false;
    }
    if (result !== false) {
      while (result !== false) {
        posl613 = poss.length;
        pos613 = this.currPos;
        if (/[0-9]/.test(this.input.charAt(this.currPos))) {
          result = true;
          this.currPos++;
        } else {
          result = false;
        }
      }
      this.currPos = pos613;
      while (poss.length > posl613) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Formatter = function() {
    var ltmp, obj, outs, pos1309, pos1320, pos1321, pos1323, pos1324, pos1328, pos1330, pos600, posl1309, posl1320, posl1323, posl1324, posl1328, posl1330, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    if (result !== false) {
      tag = "List";
    }
    while (result !== false) {
      posl1330 = poss.length;
      pos1330 = this.currPos;
      pos600 = this.currPos;
      if (/[`]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      this.currPos = pos600;
      if (result === false) {
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        pos1328 = this.currPos;
        posl1328 = poss.length;
        result = true;
        if (/[$]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[{]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            result = this.nez$Identifier();
            if (result !== false) {
              if (/[}]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
            }
          }
        }
        if (typeof result !== "boolean") {
          outs.push(result);
        }
        if (result === false) {
          this.currPos = pos1328;
          while (poss.length > posl1328) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[$]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[\[]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              result = this.nez$_();
              if (result !== false) {
                result = this.nez$Index();
                if (result !== false) {
                  result = this.nez$_();
                  if (result !== false) {
                    pos1309 = this.currPos;
                    posl1309 = poss.length;
                    ltmp = [];
                    if (ltmp[ltmp.length - 1] !== result) {
                      if (typeof result !== "boolean") {
                        ltmp.push(result);
                      }
                    }
                    if (posobj != null) {
                      poss.push(posobj);
                    }
                    posobj = {};
                    posobj.start = this.currPos;
                    if (/[`]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      result = this.nez$Formatter();
                      if (typeof result !== "boolean") {
                        ltmp.push(result);
                      }
                      if (result !== false) {
                        if (/[`]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          result = this.nez$_();
                          if (result !== false) {
                            result = this.nez$Index();
                            if (typeof result !== "boolean") {
                              ltmp.push(result);
                            }
                            if (result !== false) {
                              result = this.nez$_();
                              if (result !== false) {
                                if (result !== false) {
                                  tag = "Format";
                                }
                                if (posobj != null) {
                                  posobj.end = this.currPos;
                                }
                                obj = {};
                                result = true;
                                if (tag === "") {
                                  if (outs.length > 0) {
                                    obj = outs.pop();
                                  } else if ((this.obj != null)) {
                                    obj = this.obj;
                                  }
                                } else {
                                  obj.tag = tag;
                                  if (posobj != null) {
                                    obj.pos = posobj;
                                  }
                                  if (outs.length !== 0 && poss.length === 0) {
                                    obj.value = outs;
                                    this.obj = obj;
                                  } else if ((posobj != null)) {
                                    if (posobj.end == null) {
                                      posobj.end = this.currPos;
                                    }
                                    obj.value = this.input.slice(posobj.start, posobj.end);
                                    this.obj = obj;
                                  } else {
                                    if (this.obj != null) {
                                      obj = this.obj;
                                    }
                                  }
                                }
                                posobj = null;
                                if ((obj.value == null) || obj.value === "") {
                                  obj = true;
                                }
                                result = obj;
                                if (poss.length > 0) {
                                  posobj = poss.pop(posobj);
                                }
                                if (result !== false) {
                                  if ((obj != null)) {
                                    if (typeof obj !== "boolean") {
                                      obj.value = ltmp;
                                      ltmp = [];
                                      if (typeof result !== "boolean") {
                                        outs.push(result);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    if (ltmp.length > 0) {
                      outs.push(ltmp.pop());
                    }
                    if (result === false) {
                      this.currPos = pos1309;
                      while (poss.length > posl1309) {
                        if (poss.length > 0) {
                          posobj = poss.pop(posobj);
                        }
                      }
                    }
                    result = true;
                    if (result !== false) {
                      if (/[\]]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                    }
                  }
                }
              }
            }
          }
          if (typeof result !== "boolean") {
            outs.push(result);
          }
          if (result === false) {
            this.currPos = pos1328;
            while (poss.length > posl1328) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            if (posobj != null) {
              poss.push(posobj);
            }
            posobj = {};
            posobj.start = this.currPos;
            pos1324 = this.currPos;
            posl1324 = poss.length;
            result = true;
            if (/[$]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[$]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                result = "$";
              }
            }
            if (result === false) {
              this.currPos = pos1324;
              while (poss.length > posl1324) {
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
              result = true;
              if (/[\\]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[`]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  result = "\\`";
                }
              }
              if (result === false) {
                this.currPos = pos1324;
                while (poss.length > posl1324) {
                  if (poss.length > 0) {
                    posobj = poss.pop(posobj);
                  }
                }
                result = true;
                pos1321 = this.currPos;
                pos1320 = this.currPos;
                posl1320 = poss.length;
                result = true;
                if (/[$]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[$]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                }
                if (result === false) {
                  this.currPos = pos1320;
                  while (poss.length > posl1320) {
                    if (poss.length > 0) {
                      posobj = poss.pop(posobj);
                    }
                  }
                  result = true;
                  if (/[$]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[{]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                  }
                  if (result === false) {
                    this.currPos = pos1320;
                    while (poss.length > posl1320) {
                      if (poss.length > 0) {
                        posobj = poss.pop(posobj);
                      }
                    }
                    result = true;
                    if (/[$]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[\[]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                    }
                    if (result === false) {
                      this.currPos = pos1320;
                      while (poss.length > posl1320) {
                        if (poss.length > 0) {
                          posobj = poss.pop(posobj);
                        }
                      }
                      result = true;
                      if (/[\\]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[`]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                      }
                      if (result === false) {
                        this.currPos = pos1320;
                        while (poss.length > posl1320) {
                          if (poss.length > 0) {
                            posobj = poss.pop(posobj);
                          }
                        }
                        result = true;
                        if (/[`]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                      }
                    }
                  }
                }
                this.currPos = pos1321;
                if (result === false) {
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (this.input.length > this.currPos) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                }
                if (result !== false) {
                  while (result !== false) {
                    pos1323 = this.currPos;
                    posl1323 = poss.length;
                    pos1321 = this.currPos;
                    pos1320 = this.currPos;
                    posl1320 = poss.length;
                    result = true;
                    if (/[$]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[$]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                    }
                    if (result === false) {
                      this.currPos = pos1320;
                      while (poss.length > posl1320) {
                        if (poss.length > 0) {
                          posobj = poss.pop(posobj);
                        }
                      }
                      result = true;
                      if (/[$]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[{]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                      }
                      if (result === false) {
                        this.currPos = pos1320;
                        while (poss.length > posl1320) {
                          if (poss.length > 0) {
                            posobj = poss.pop(posobj);
                          }
                        }
                        result = true;
                        if (/[$]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          if (/[\[]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                        }
                        if (result === false) {
                          this.currPos = pos1320;
                          while (poss.length > posl1320) {
                            if (poss.length > 0) {
                              posobj = poss.pop(posobj);
                            }
                          }
                          result = true;
                          if (/[\\]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            if (/[`]/.test(this.input.charAt(this.currPos))) {
                              this.currPos++;
                              result = true;
                            } else {
                              result = false;
                            }
                          }
                          if (result === false) {
                            this.currPos = pos1320;
                            while (poss.length > posl1320) {
                              if (poss.length > 0) {
                                posobj = poss.pop(posobj);
                              }
                            }
                            result = true;
                            if (/[`]/.test(this.input.charAt(this.currPos))) {
                              this.currPos++;
                              result = true;
                            } else {
                              result = false;
                            }
                          }
                        }
                      }
                    }
                    this.currPos = pos1321;
                    if (result === false) {
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (this.input.length > this.currPos) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                    }
                  }
                  this.currPos = pos1323;
                  while (poss.length > posl1323) {
                    if (poss.length > 0) {
                      posobj = poss.pop(posobj);
                    }
                  }
                  result = true;
                }
              }
            }
            if (result !== false) {
              if (posobj != null) {
                posobj.end = this.currPos;
              }
              obj = {};
              result = true;
              if (tag === "") {
                if (outs.length > 0) {
                  obj = outs.pop();
                } else if ((this.obj != null)) {
                  obj = this.obj;
                }
              } else {
                obj.tag = tag;
                if (posobj != null) {
                  obj.pos = posobj;
                }
                if (outs.length !== 0 && poss.length === 0) {
                  obj.value = outs;
                  this.obj = obj;
                } else if ((posobj != null)) {
                  if (posobj.end == null) {
                    posobj.end = this.currPos;
                  }
                  obj.value = this.input.slice(posobj.start, posobj.end);
                  this.obj = obj;
                } else {
                  if (this.obj != null) {
                    obj = this.obj;
                  }
                }
              }
              posobj = null;
              if ((obj.value == null) || obj.value === "") {
                obj = true;
              }
              result = obj;
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            if (typeof result !== "boolean") {
              outs.push(result);
            }
          }
        }
      }
    }
    this.currPos = pos1330;
    while (poss.length > posl1330) {
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
    }
    result = true;
    if (result !== false) {
      if (posobj != null) {
        posobj.end = this.currPos;
      }
      obj = {};
      result = true;
      if (tag === "") {
        if (outs.length > 0) {
          obj = outs.pop();
        } else if ((this.obj != null)) {
          obj = this.obj;
        }
      } else {
        obj.tag = tag;
        if (posobj != null) {
          obj.pos = posobj;
        }
        if (outs.length !== 0 && poss.length === 0) {
          obj.value = outs;
          this.obj = obj;
        } else if ((posobj != null)) {
          if (posobj.end == null) {
            posobj.end = this.currPos;
          }
          obj.value = this.input.slice(posobj.start, posobj.end);
          this.obj = obj;
        } else {
          if (this.obj != null) {
            obj = this.obj;
          }
        }
      }
      posobj = null;
      if ((obj.value == null) || obj.value === "") {
        obj = true;
      }
      result = obj;
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Index = function() {
    var obj, outs, pos467, posl467, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    pos467 = this.currPos;
    posl467 = poss.length;
    if (/[-]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result === false) {
      this.currPos = pos467;
      while (poss.length > posl467) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
    }
    result = true;
    if (result !== false) {
      result = this.nez$INT();
      if (result !== false) {
        if (result !== false) {
          tag = "Integer";
        }
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$TemplateStatement = function() {
    var obj, outs, pos869, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    if (/[t]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (/[e]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[m]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[p]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[l]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[a]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[t]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[e]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    pos869 = this.currPos;
                    result = this.nez$W();
                    this.currPos = pos869;
                    if (result === false) {
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      result = this.nez$_();
                      if (result !== false) {
                        result = this.nez$Identifier();
                        if (typeof result !== "boolean") {
                          outs.push(result);
                        }
                        if (result !== false) {
                          if (/[<]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            result = this.nez$_();
                            if (result !== false) {
                              result = this.nez$TemplateParameter();
                              if (typeof result !== "boolean") {
                                outs.push(result);
                              }
                              if (result !== false) {
                                if (/[>]/.test(this.input.charAt(this.currPos))) {
                                  this.currPos++;
                                  result = true;
                                } else {
                                  result = false;
                                }
                                if (result !== false) {
                                  result = this.nez$_();
                                  if (result !== false) {
                                    if (/[=]/.test(this.input.charAt(this.currPos))) {
                                      this.currPos++;
                                      result = true;
                                    } else {
                                      result = false;
                                    }
                                    if (result !== false) {
                                      result = this.nez$_();
                                      if (result !== false) {
                                        result = this.nez$Expression();
                                        if (typeof result !== "boolean") {
                                          outs.push(result);
                                        }
                                        if (result !== false) {
                                          if (result !== false) {
                                            tag = "Template";
                                          }
                                          if (posobj != null) {
                                            posobj.end = this.currPos;
                                          }
                                          obj = {};
                                          result = true;
                                          if (tag === "") {
                                            if (outs.length > 0) {
                                              obj = outs.pop();
                                            } else if ((this.obj != null)) {
                                              obj = this.obj;
                                            }
                                          } else {
                                            obj.tag = tag;
                                            if (posobj != null) {
                                              obj.pos = posobj;
                                            }
                                            if (outs.length !== 0 && poss.length === 0) {
                                              obj.value = outs;
                                              this.obj = obj;
                                            } else if ((posobj != null)) {
                                              if (posobj.end == null) {
                                                posobj.end = this.currPos;
                                              }
                                              obj.value = this.input.slice(posobj.start, posobj.end);
                                              this.obj = obj;
                                            } else {
                                              if (this.obj != null) {
                                                obj = this.obj;
                                              }
                                            }
                                          }
                                          posobj = null;
                                          if ((obj.value == null) || obj.value === "") {
                                            obj = true;
                                          }
                                          result = obj;
                                          if (poss.length > 0) {
                                            posobj = poss.pop(posobj);
                                          }
                                          if (result !== false) {
                                            result = this.nez$_();
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$TemplateParameter = function() {
    var obj, outs, pos928, posl928, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    result = this.nez$Identifier();
    if (typeof result !== "boolean") {
      outs.push(result);
    }
    if (result !== false) {
      while (result !== false) {
        posl928 = poss.length;
        pos928 = this.currPos;
        if (/[,]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          result = this.nez$_();
          if (result !== false) {
            result = this.nez$Identifier();
            if (typeof result !== "boolean") {
              outs.push(result);
            }
          }
        }
      }
      this.currPos = pos928;
      while (poss.length > posl928) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (result !== false) {
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Expression = function() {
    var ltmp, obj, outs, pos1187, pos1190, posl1187, posl1190, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    result = this.nez$Sequence();
    if (result !== false) {
      pos1190 = this.currPos;
      posl1190 = poss.length;
      ltmp = [];
      if (ltmp[ltmp.length - 1] !== result) {
        if (typeof result !== "boolean") {
          ltmp.push(result);
        }
      }
      if (typeof posobj !== "undefined" && posobj !== null) {
        poss.push(posobj);
      }
      posobj = {};
      posobj.start = this.currPos;
      if (/[\/]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        result = this.nez$_();
        if (result !== false) {
          result = this.nez$Sequence();
          if (typeof result !== "boolean") {
            ltmp.push(result);
          }
        }
      }
      if (result !== false) {
        while (result !== false) {
          pos1187 = this.currPos;
          posl1187 = poss.length;
          if (/[\/]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            result = this.nez$_();
            if (result !== false) {
              result = this.nez$Sequence();
              if (typeof result !== "boolean") {
                ltmp.push(result);
              }
            }
          }
        }
        this.currPos = pos1187;
        while (poss.length > posl1187) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
      }
      if (result !== false) {
        if (result !== false) {
          tag = "Choice";
        }
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
        if (result !== false) {
          if ((obj != null)) {
            if (typeof obj !== "boolean") {
              obj.value = ltmp;
              ltmp = [];
              if (typeof result !== "boolean") {
                outs.push(result);
              }
            }
          }
        }
      }
      if (ltmp.length > 0) {
        outs.push(ltmp.pop());
      }
      if (result === false) {
        this.currPos = pos1190;
        while (poss.length > posl1190) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
      }
      result = true;
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Sequence = function() {
    var ltmp, obj, outs, pos1070, pos1073, posl1070, posl1073, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    result = this.nez$Prefix();
    if (result !== false) {
      pos1073 = this.currPos;
      posl1073 = poss.length;
      ltmp = [];
      if (ltmp[ltmp.length - 1] !== result) {
        if (typeof result !== "boolean") {
          ltmp.push(result);
        }
      }
      if (typeof posobj !== "undefined" && posobj !== null) {
        poss.push(posobj);
      }
      posobj = {};
      posobj.start = this.currPos;
      result = this.nez$Prefix();
      if (typeof result !== "boolean") {
        ltmp.push(result);
      }
      if (result !== false) {
        while (result !== false) {
          pos1070 = this.currPos;
          posl1070 = poss.length;
          result = this.nez$Prefix();
          if (typeof result !== "boolean") {
            ltmp.push(result);
          }
        }
        this.currPos = pos1070;
        while (poss.length > posl1070) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
      }
      if (result !== false) {
        if (result !== false) {
          tag = "Sequence";
        }
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
        if (result !== false) {
          if ((obj != null)) {
            if (typeof obj !== "boolean") {
              obj.value = ltmp;
              ltmp = [];
              if (typeof result !== "boolean") {
                outs.push(result);
              }
            }
          }
        }
      }
      if (ltmp.length > 0) {
        outs.push(ltmp.pop());
      }
      if (result === false) {
        this.currPos = pos1073;
        while (poss.length > posl1073) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
      }
      result = true;
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Prefix = function() {
    var obj, outs, pos970, pos976, posl970, posl976, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos976 = this.currPos;
    posl976 = poss.length;
    result = true;
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    pos970 = this.currPos;
    posl970 = poss.length;
    result = true;
    if (/[\&]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      tag = "And";
    }
    if (result === false) {
      this.currPos = pos970;
      while (poss.length > posl970) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (/[\!]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        tag = "Not";
      }
      if (result === false) {
        this.currPos = pos970;
        while (poss.length > posl970) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (/[@]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[\[]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            result = this.nez$_();
            if (result !== false) {
              result = this.nez$Integer();
              if (typeof result !== "boolean") {
                outs.push(result);
              }
              if (result !== false) {
                result = this.nez$_();
                if (result !== false) {
                  if (/[\]]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    tag = "Link";
                  }
                }
              }
            }
          }
        }
        if (result === false) {
          this.currPos = pos970;
          while (poss.length > posl970) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[@]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            tag = "Link";
          }
          if (result === false) {
            this.currPos = pos970;
            while (poss.length > posl970) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            if (/[~]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              tag = "Match";
            }
          }
        }
      }
    }
    if (result !== false) {
      result = this.nez$Suffix();
      if (typeof result !== "boolean") {
        outs.push(result);
      }
      if (result !== false) {
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
    }
    if (result === false) {
      this.currPos = pos976;
      while (poss.length > posl976) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      result = this.nez$Suffix();
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Integer = function() {
    var obj, outs, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    result = this.nez$INT();
    if (result !== false) {
      if (result !== false) {
        tag = "Integer";
      }
      if (posobj != null) {
        posobj.end = this.currPos;
      }
      obj = {};
      result = true;
      if (tag === "") {
        if (outs.length > 0) {
          obj = outs.pop();
        } else if ((this.obj != null)) {
          obj = this.obj;
        }
      } else {
        obj.tag = tag;
        if (posobj != null) {
          obj.pos = posobj;
        }
        if (outs.length !== 0 && poss.length === 0) {
          obj.value = outs;
          this.obj = obj;
        } else if ((posobj != null)) {
          if (posobj.end == null) {
            posobj.end = this.currPos;
          }
          obj.value = this.input.slice(posobj.start, posobj.end);
          this.obj = obj;
        } else {
          if (this.obj != null) {
            obj = this.obj;
          }
        }
      }
      posobj = null;
      if ((obj.value == null) || obj.value === "") {
        obj = true;
      }
      result = obj;
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Suffix = function() {
    var ltmp, obj, outs, pos909, pos912, pos915, posl909, posl912, posl915, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    result = this.nez$Primary();
    if (result !== false) {
      pos915 = this.currPos;
      posl915 = poss.length;
      ltmp = [];
      if (ltmp[ltmp.length - 1] !== result) {
        if (typeof result !== "boolean") {
          ltmp.push(result);
        }
      }
      if (typeof posobj !== "undefined" && posobj !== null) {
        poss.push(posobj);
      }
      posobj = {};
      posobj.start = this.currPos;
      pos912 = this.currPos;
      posl912 = poss.length;
      result = true;
      if (/[\*]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        pos909 = this.currPos;
        posl909 = poss.length;
        result = this.nez$Integer();
        if (typeof result !== "boolean") {
          ltmp.push(result);
        }
        if (result === false) {
          this.currPos = pos909;
          while (poss.length > posl909) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
        }
        result = true;
        if (result !== false) {
          tag = "Repetition";
        }
      }
      if (result === false) {
        this.currPos = pos912;
        while (poss.length > posl912) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (/[\+]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          tag = "Repetition1";
        }
        if (result === false) {
          this.currPos = pos912;
          while (poss.length > posl912) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[\?]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            tag = "Option";
          }
        }
      }
      if (result !== false) {
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      if (result !== false) {
        if ((obj != null)) {
          if (typeof obj !== "boolean") {
            obj.value = ltmp;
            ltmp = [];
            if (typeof result !== "boolean") {
              outs.push(result);
            }
          }
        }
      }
      if (ltmp.length > 0) {
        outs.push(ltmp.pop());
      }
      if (result === false) {
        this.currPos = pos915;
        while (poss.length > posl915) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
      }
      result = true;
      if (result !== false) {
        result = this.nez$_();
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Primary = function() {
    var obj, outs, pos1275, pos1292, pos1293, pos1295, pos869, posl1292, posl1295, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos1295 = this.currPos;
    posl1295 = poss.length;
    result = true;
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    if (/[t]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (/[r]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[u]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[e]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            pos869 = this.currPos;
            result = this.nez$W();
            this.currPos = pos869;
            if (result === false) {
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              result = this.nez$_();
              if (result !== false) {
                if (result !== false) {
                  tag = "Empty";
                }
                if (posobj != null) {
                  posobj.end = this.currPos;
                }
                obj = {};
                result = true;
                if (tag === "") {
                  if (outs.length > 0) {
                    obj = outs.pop();
                  } else if ((this.obj != null)) {
                    obj = this.obj;
                  }
                } else {
                  obj.tag = tag;
                  if (posobj != null) {
                    obj.pos = posobj;
                  }
                  if (outs.length !== 0 && poss.length === 0) {
                    obj.value = outs;
                    this.obj = obj;
                  } else if ((posobj != null)) {
                    if (posobj.end == null) {
                      posobj.end = this.currPos;
                    }
                    obj.value = this.input.slice(posobj.start, posobj.end);
                    this.obj = obj;
                  } else {
                    if (this.obj != null) {
                      obj = this.obj;
                    }
                  }
                }
                posobj = null;
                if ((obj.value == null) || obj.value === "") {
                  obj = true;
                }
                result = obj;
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
            }
          }
        }
      }
    }
    if (result === false) {
      this.currPos = pos1295;
      while (poss.length > posl1295) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (posobj != null) {
        poss.push(posobj);
      }
      posobj = {};
      posobj.start = this.currPos;
      if (/[f]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[a]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[l]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[s]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[e]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                pos869 = this.currPos;
                result = this.nez$W();
                this.currPos = pos869;
                if (result === false) {
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  result = this.nez$_();
                  if (result !== false) {
                    if (result !== false) {
                      tag = "Failure";
                    }
                    if (posobj != null) {
                      posobj.end = this.currPos;
                    }
                    obj = {};
                    result = true;
                    if (tag === "") {
                      if (outs.length > 0) {
                        obj = outs.pop();
                      } else if ((this.obj != null)) {
                        obj = this.obj;
                      }
                    } else {
                      obj.tag = tag;
                      if (posobj != null) {
                        obj.pos = posobj;
                      }
                      if (outs.length !== 0 && poss.length === 0) {
                        obj.value = outs;
                        this.obj = obj;
                      } else if ((posobj != null)) {
                        if (posobj.end == null) {
                          posobj.end = this.currPos;
                        }
                        obj.value = this.input.slice(posobj.start, posobj.end);
                        this.obj = obj;
                      } else {
                        if (this.obj != null) {
                          obj = this.obj;
                        }
                      }
                    }
                    posobj = null;
                    if ((obj.value == null) || obj.value === "") {
                      obj = true;
                    }
                    result = obj;
                    if (poss.length > 0) {
                      posobj = poss.pop(posobj);
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (result === false) {
        this.currPos = pos1295;
        while (poss.length > posl1295) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        result = this.nez$Character();
        if (result === false) {
          this.currPos = pos1295;
          while (poss.length > posl1295) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          result = this.nez$Charset();
          if (result === false) {
            this.currPos = pos1295;
            while (poss.length > posl1295) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            if (posobj != null) {
              poss.push(posobj);
            }
            posobj = {};
            posobj.start = this.currPos;
            if (/[\.]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (result !== false) {
                tag = "Any";
              }
              if (posobj != null) {
                posobj.end = this.currPos;
              }
              obj = {};
              result = true;
              if (tag === "") {
                if (outs.length > 0) {
                  obj = outs.pop();
                } else if ((this.obj != null)) {
                  obj = this.obj;
                }
              } else {
                obj.tag = tag;
                if (posobj != null) {
                  obj.pos = posobj;
                }
                if (outs.length !== 0 && poss.length === 0) {
                  obj.value = outs;
                  this.obj = obj;
                } else if ((posobj != null)) {
                  if (posobj.end == null) {
                    posobj.end = this.currPos;
                  }
                  obj.value = this.input.slice(posobj.start, posobj.end);
                  this.obj = obj;
                } else {
                  if (this.obj != null) {
                    obj = this.obj;
                  }
                }
              }
              posobj = null;
              if ((obj.value == null) || obj.value === "") {
                obj = true;
              }
              result = obj;
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
              if (result !== false) {
                result = this.nez$_();
              }
            }
            if (result === false) {
              this.currPos = pos1295;
              while (poss.length > posl1295) {
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
              result = true;
              if (posobj != null) {
                poss.push(posobj);
              }
              posobj = {};
              posobj.start = this.currPos;
              if (/[0]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[x]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  result = this.nez$HEX();
                  if (result !== false) {
                    result = this.nez$HEX();
                    if (result !== false) {
                      if (result !== false) {
                        tag = "Byte";
                      }
                      if (posobj != null) {
                        posobj.end = this.currPos;
                      }
                      obj = {};
                      result = true;
                      if (tag === "") {
                        if (outs.length > 0) {
                          obj = outs.pop();
                        } else if ((this.obj != null)) {
                          obj = this.obj;
                        }
                      } else {
                        obj.tag = tag;
                        if (posobj != null) {
                          obj.pos = posobj;
                        }
                        if (outs.length !== 0 && poss.length === 0) {
                          obj.value = outs;
                          this.obj = obj;
                        } else if ((posobj != null)) {
                          if (posobj.end == null) {
                            posobj.end = this.currPos;
                          }
                          obj.value = this.input.slice(posobj.start, posobj.end);
                          this.obj = obj;
                        } else {
                          if (this.obj != null) {
                            obj = this.obj;
                          }
                        }
                      }
                      posobj = null;
                      if ((obj.value == null) || obj.value === "") {
                        obj = true;
                      }
                      result = obj;
                      if (poss.length > 0) {
                        posobj = poss.pop(posobj);
                      }
                      if (result !== false) {
                        result = this.nez$_();
                      }
                    }
                  }
                }
              }
              if (result === false) {
                this.currPos = pos1295;
                while (poss.length > posl1295) {
                  if (poss.length > 0) {
                    posobj = poss.pop(posobj);
                  }
                }
                result = true;
                if (posobj != null) {
                  poss.push(posobj);
                }
                posobj = {};
                posobj.start = this.currPos;
                if (/[U]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[\+]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    result = this.nez$HEX();
                    if (result !== false) {
                      result = this.nez$HEX();
                      if (result !== false) {
                        result = this.nez$HEX();
                        if (result !== false) {
                          result = this.nez$HEX();
                          if (result !== false) {
                            if (result !== false) {
                              tag = "Byte";
                            }
                            if (posobj != null) {
                              posobj.end = this.currPos;
                            }
                            obj = {};
                            result = true;
                            if (tag === "") {
                              if (outs.length > 0) {
                                obj = outs.pop();
                              } else if ((this.obj != null)) {
                                obj = this.obj;
                              }
                            } else {
                              obj.tag = tag;
                              if (posobj != null) {
                                obj.pos = posobj;
                              }
                              if (outs.length !== 0 && poss.length === 0) {
                                obj.value = outs;
                                this.obj = obj;
                              } else if ((posobj != null)) {
                                if (posobj.end == null) {
                                  posobj.end = this.currPos;
                                }
                                obj.value = this.input.slice(posobj.start, posobj.end);
                                this.obj = obj;
                              } else {
                                if (this.obj != null) {
                                  obj = this.obj;
                                }
                              }
                            }
                            posobj = null;
                            if ((obj.value == null) || obj.value === "") {
                              obj = true;
                            }
                            result = obj;
                            if (poss.length > 0) {
                              posobj = poss.pop(posobj);
                            }
                            if (result !== false) {
                              result = this.nez$_();
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (result === false) {
                  this.currPos = pos1295;
                  while (poss.length > posl1295) {
                    if (poss.length > 0) {
                      posobj = poss.pop(posobj);
                    }
                  }
                  result = true;
                  if (/[\(]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    result = this.nez$_();
                    if (result !== false) {
                      result = this.nez$Expression();
                      if (result !== false) {
                        if (/[\)]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          result = this.nez$_();
                        }
                      }
                    }
                  }
                  if (result === false) {
                    this.currPos = pos1295;
                    while (poss.length > posl1295) {
                      if (poss.length > 0) {
                        posobj = poss.pop(posobj);
                      }
                    }
                    result = true;
                    result = this.nez$Constructor();
                    if (result === false) {
                      this.currPos = pos1295;
                      while (poss.length > posl1295) {
                        if (poss.length > 0) {
                          posobj = poss.pop(posobj);
                        }
                      }
                      result = true;
                      result = this.nez$Replace();
                      if (result === false) {
                        this.currPos = pos1295;
                        while (poss.length > posl1295) {
                          if (poss.length > 0) {
                            posobj = poss.pop(posobj);
                          }
                        }
                        result = true;
                        result = this.nez$Tagging();
                        if (result === false) {
                          this.currPos = pos1295;
                          while (poss.length > posl1295) {
                            if (poss.length > 0) {
                              posobj = poss.pop(posobj);
                            }
                          }
                          result = true;
                          result = this.nez$String();
                          if (result !== false) {
                            pos1275 = this.currPos;
                            if (/[=]/.test(this.input.charAt(this.currPos))) {
                              this.currPos++;
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              result = this.nez$_();
                            }
                            this.currPos = pos1275;
                            if (result === false) {
                              result = true;
                            } else {
                              result = false;
                            }
                          }
                          if (result === false) {
                            this.currPos = pos1295;
                            while (poss.length > posl1295) {
                              if (poss.length > 0) {
                                posobj = poss.pop(posobj);
                              }
                            }
                            result = true;
                            result = this.nez$Extension();
                            if (result === false) {
                              this.currPos = pos1295;
                              while (poss.length > posl1295) {
                                if (poss.length > 0) {
                                  posobj = poss.pop(posobj);
                                }
                              }
                              result = true;
                              result = this.nez$NonTerminal();
                              if (result !== false) {
                                pos1293 = this.currPos;
                                pos1292 = this.currPos;
                                posl1292 = poss.length;
                                result = true;
                                if (/[=]/.test(this.input.charAt(this.currPos))) {
                                  this.currPos++;
                                  result = true;
                                } else {
                                  result = false;
                                }
                                if (result !== false) {
                                  result = this.nez$_();
                                }
                                if (result === false) {
                                  this.currPos = pos1292;
                                  while (poss.length > posl1292) {
                                    if (poss.length > 0) {
                                      posobj = poss.pop(posobj);
                                    }
                                  }
                                  result = true;
                                  if (/[\[]/.test(this.input.charAt(this.currPos))) {
                                    this.currPos++;
                                    result = true;
                                  } else {
                                    result = false;
                                  }
                                  if (result !== false) {
                                    if (/[e]/.test(this.input.charAt(this.currPos))) {
                                      this.currPos++;
                                      result = true;
                                    } else {
                                      result = false;
                                    }
                                    if (result !== false) {
                                      if (/[x]/.test(this.input.charAt(this.currPos))) {
                                        this.currPos++;
                                        result = true;
                                      } else {
                                        result = false;
                                      }
                                      if (result !== false) {
                                        if (/[a]/.test(this.input.charAt(this.currPos))) {
                                          this.currPos++;
                                          result = true;
                                        } else {
                                          result = false;
                                        }
                                        if (result !== false) {
                                          if (/[m]/.test(this.input.charAt(this.currPos))) {
                                            this.currPos++;
                                            result = true;
                                          } else {
                                            result = false;
                                          }
                                          if (result !== false) {
                                            if (/[p]/.test(this.input.charAt(this.currPos))) {
                                              this.currPos++;
                                              result = true;
                                            } else {
                                              result = false;
                                            }
                                            if (result !== false) {
                                              if (/[l]/.test(this.input.charAt(this.currPos))) {
                                                this.currPos++;
                                                result = true;
                                              } else {
                                                result = false;
                                              }
                                              if (result !== false) {
                                                if (/[e]/.test(this.input.charAt(this.currPos))) {
                                                  this.currPos++;
                                                  result = true;
                                                } else {
                                                  result = false;
                                                }
                                                if (result !== false) {
                                                  if (/[:]/.test(this.input.charAt(this.currPos))) {
                                                    this.currPos++;
                                                    result = true;
                                                  } else {
                                                    result = false;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (result === false) {
                                    this.currPos = pos1292;
                                    while (poss.length > posl1292) {
                                      if (poss.length > 0) {
                                        posobj = poss.pop(posobj);
                                      }
                                    }
                                    result = true;
                                    if (/[\[]/.test(this.input.charAt(this.currPos))) {
                                      this.currPos++;
                                      result = true;
                                    } else {
                                      result = false;
                                    }
                                    if (result !== false) {
                                      if (/[b]/.test(this.input.charAt(this.currPos))) {
                                        this.currPos++;
                                        result = true;
                                      } else {
                                        result = false;
                                      }
                                      if (result !== false) {
                                        if (/[a]/.test(this.input.charAt(this.currPos))) {
                                          this.currPos++;
                                          result = true;
                                        } else {
                                          result = false;
                                        }
                                        if (result !== false) {
                                          if (/[d]/.test(this.input.charAt(this.currPos))) {
                                            this.currPos++;
                                            result = true;
                                          } else {
                                            result = false;
                                          }
                                          if (result !== false) {
                                            if (/[-]/.test(this.input.charAt(this.currPos))) {
                                              this.currPos++;
                                              result = true;
                                            } else {
                                              result = false;
                                            }
                                            if (result !== false) {
                                              if (/[e]/.test(this.input.charAt(this.currPos))) {
                                                this.currPos++;
                                                result = true;
                                              } else {
                                                result = false;
                                              }
                                              if (result !== false) {
                                                if (/[x]/.test(this.input.charAt(this.currPos))) {
                                                  this.currPos++;
                                                  result = true;
                                                } else {
                                                  result = false;
                                                }
                                                if (result !== false) {
                                                  if (/[a]/.test(this.input.charAt(this.currPos))) {
                                                    this.currPos++;
                                                    result = true;
                                                  } else {
                                                    result = false;
                                                  }
                                                  if (result !== false) {
                                                    if (/[m]/.test(this.input.charAt(this.currPos))) {
                                                      this.currPos++;
                                                      result = true;
                                                    } else {
                                                      result = false;
                                                    }
                                                    if (result !== false) {
                                                      if (/[p]/.test(this.input.charAt(this.currPos))) {
                                                        this.currPos++;
                                                        result = true;
                                                      } else {
                                                        result = false;
                                                      }
                                                      if (result !== false) {
                                                        if (/[l]/.test(this.input.charAt(this.currPos))) {
                                                          this.currPos++;
                                                          result = true;
                                                        } else {
                                                          result = false;
                                                        }
                                                        if (result !== false) {
                                                          if (/[e]/.test(this.input.charAt(this.currPos))) {
                                                            this.currPos++;
                                                            result = true;
                                                          } else {
                                                            result = false;
                                                          }
                                                          if (result !== false) {
                                                            if (/[:]/.test(this.input.charAt(this.currPos))) {
                                                              this.currPos++;
                                                              result = true;
                                                            } else {
                                                              result = false;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                this.currPos = pos1293;
                                if (result === false) {
                                  result = true;
                                } else {
                                  result = false;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Charset = function() {
    var ltmp, obj, outs, pos1145, pos1151, posl1145, posl1151, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (/[\[]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (typeof posobj !== "undefined" && posobj !== null) {
        poss.push(posobj);
      }
      posobj = {};
      posobj.start = this.currPos;
      while (result !== false) {
        posl1151 = poss.length;
        pos1151 = this.currPos;
        if (posobj != null) {
          poss.push(posobj);
        }
        posobj = {};
        posobj.start = this.currPos;
        result = this.nez$CHAR();
        if (result !== false) {
          if (result !== false) {
            tag = "Class";
          }
          if (posobj != null) {
            posobj.end = this.currPos;
          }
          obj = {};
          result = true;
          if (tag === "") {
            if (outs.length > 0) {
              obj = outs.pop();
            } else if ((this.obj != null)) {
              obj = this.obj;
            }
          } else {
            obj.tag = tag;
            if (posobj != null) {
              obj.pos = posobj;
            }
            if (outs.length !== 0 && poss.length === 0) {
              obj.value = outs;
              this.obj = obj;
            } else if ((posobj != null)) {
              if (posobj.end == null) {
                posobj.end = this.currPos;
              }
              obj.value = this.input.slice(posobj.start, posobj.end);
              this.obj = obj;
            } else {
              if (this.obj != null) {
                obj = this.obj;
              }
            }
          }
          posobj = null;
          if ((obj.value == null) || obj.value === "") {
            obj = true;
          }
          result = obj;
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
          if (result !== false) {
            pos1145 = this.currPos;
            posl1145 = poss.length;
            ltmp = [];
            if (ltmp[ltmp.length - 1] !== result) {
              if (typeof result !== "boolean") {
                ltmp.push(result);
              }
            }
            if (posobj != null) {
              poss.push(posobj);
            }
            posobj = {};
            posobj.start = this.currPos;
            if (/[-]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (posobj != null) {
                poss.push(posobj);
              }
              posobj = {};
              posobj.start = this.currPos;
              result = this.nez$CHAR();
              if (result !== false) {
                if (result !== false) {
                  tag = "Class";
                }
                if (posobj != null) {
                  posobj.end = this.currPos;
                }
                obj = {};
                result = true;
                if (tag === "") {
                  if (outs.length > 0) {
                    obj = outs.pop();
                  } else if ((this.obj != null)) {
                    obj = this.obj;
                  }
                } else {
                  obj.tag = tag;
                  if (posobj != null) {
                    obj.pos = posobj;
                  }
                  if (outs.length !== 0 && poss.length === 0) {
                    obj.value = outs;
                    this.obj = obj;
                  } else if ((posobj != null)) {
                    if (posobj.end == null) {
                      posobj.end = this.currPos;
                    }
                    obj.value = this.input.slice(posobj.start, posobj.end);
                    this.obj = obj;
                  } else {
                    if (this.obj != null) {
                      obj = this.obj;
                    }
                  }
                }
                posobj = null;
                if ((obj.value == null) || obj.value === "") {
                  obj = true;
                }
                result = obj;
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
              if (typeof result !== "boolean") {
                ltmp.push(result);
              }
              if (result !== false) {
                if (result !== false) {
                  tag = "List";
                }
                if (posobj != null) {
                  posobj.end = this.currPos;
                }
                obj = {};
                result = true;
                if (tag === "") {
                  if (outs.length > 0) {
                    obj = outs.pop();
                  } else if ((this.obj != null)) {
                    obj = this.obj;
                  }
                } else {
                  obj.tag = tag;
                  if (posobj != null) {
                    obj.pos = posobj;
                  }
                  if (outs.length !== 0 && poss.length === 0) {
                    obj.value = outs;
                    this.obj = obj;
                  } else if ((posobj != null)) {
                    if (posobj.end == null) {
                      posobj.end = this.currPos;
                    }
                    obj.value = this.input.slice(posobj.start, posobj.end);
                    this.obj = obj;
                  } else {
                    if (this.obj != null) {
                      obj = this.obj;
                    }
                  }
                }
                posobj = null;
                if ((obj.value == null) || obj.value === "") {
                  obj = true;
                }
                result = obj;
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
                if (result !== false) {
                  if ((obj != null)) {
                    if (typeof obj !== "boolean") {
                      obj.value = ltmp;
                      ltmp = [];
                      if (typeof result !== "boolean") {
                        outs.push(result);
                      }
                    }
                  }
                }
              }
            }
            if (ltmp.length > 0) {
              outs.push(ltmp.pop());
            }
            if (result === false) {
              this.currPos = pos1145;
              while (poss.length > posl1145) {
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
            }
            result = true;
          }
        }
        if (typeof result !== "boolean") {
          outs.push(result);
        }
      }
      this.currPos = pos1151;
      while (poss.length > posl1151) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (result !== false) {
        if (result !== false) {
          tag = "Class";
        }
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
        if (result !== false) {
          if (/[\]]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            result = this.nez$_();
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$CHAR = function() {
    var obj, outs, pos551, pos950, posl950, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos950 = this.currPos;
    posl950 = poss.length;
    result = true;
    if (/[\\]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (/[u]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        result = this.nez$HEX();
        if (result !== false) {
          result = this.nez$HEX();
          if (result !== false) {
            result = this.nez$HEX();
            if (result !== false) {
              result = this.nez$HEX();
            }
          }
        }
      }
    }
    if (result === false) {
      this.currPos = pos950;
      while (poss.length > posl950) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (/[\\]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[x]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          result = this.nez$HEX();
          if (result !== false) {
            result = this.nez$HEX();
          }
        }
      }
      if (result === false) {
        this.currPos = pos950;
        while (poss.length > posl950) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (/[\\]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[n]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
        }
        if (result === false) {
          this.currPos = pos950;
          while (poss.length > posl950) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[\\]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[t]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
          }
          if (result === false) {
            this.currPos = pos950;
            while (poss.length > posl950) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            if (/[\\]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[\\]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
            }
            if (result === false) {
              this.currPos = pos950;
              while (poss.length > posl950) {
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
              result = true;
              if (/[\\]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[r]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
              }
              if (result === false) {
                this.currPos = pos950;
                while (poss.length > posl950) {
                  if (poss.length > 0) {
                    posobj = poss.pop(posobj);
                  }
                }
                result = true;
                if (/[\\]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[v]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                }
                if (result === false) {
                  this.currPos = pos950;
                  while (poss.length > posl950) {
                    if (poss.length > 0) {
                      posobj = poss.pop(posobj);
                    }
                  }
                  result = true;
                  if (/[\\]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[f]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                  }
                  if (result === false) {
                    this.currPos = pos950;
                    while (poss.length > posl950) {
                      if (poss.length > 0) {
                        posobj = poss.pop(posobj);
                      }
                    }
                    result = true;
                    if (/[\\]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[-]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                    }
                    if (result === false) {
                      this.currPos = pos950;
                      while (poss.length > posl950) {
                        if (poss.length > 0) {
                          posobj = poss.pop(posobj);
                        }
                      }
                      result = true;
                      if (/[\\]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[\]]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                      }
                      if (result === false) {
                        this.currPos = pos950;
                        while (poss.length > posl950) {
                          if (poss.length > 0) {
                            posobj = poss.pop(posobj);
                          }
                        }
                        result = true;
                        pos551 = this.currPos;
                        if (/[\]]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        this.currPos = pos551;
                        if (result === false) {
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          if (this.input.length > this.currPos) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$HEX = function() {
    var obj, outs, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (/[0-9A-Fa-f]/.test(this.input.charAt(this.currPos))) {
      result = true;
      this.currPos++;
    } else {
      result = false;
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (typeof posobj !== "undefined" && posobj !== null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((typeof posobj !== "undefined" && posobj !== null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Constructor = function() {
    var obj, outs, pos1125, pos1128, posl1125, posl1128, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    if (/[{]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      pos1125 = this.currPos;
      posl1125 = poss.length;
      result = true;
      if (/[@]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        result = this.nez$S();
        if (result !== false) {
          tag = "LeftNew";
        }
      }
      if (result === false) {
        this.currPos = pos1125;
        while (poss.length > posl1125) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (result !== false) {
          tag = "New";
        }
      }
      if (result !== false) {
        result = this.nez$_();
        if (result !== false) {
          pos1128 = this.currPos;
          posl1128 = poss.length;
          result = this.nez$Expression();
          if (typeof result !== "boolean") {
            outs.push(result);
          }
          if (result === false) {
            this.currPos = pos1128;
            while (poss.length > posl1128) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
          }
          result = true;
          if (result !== false) {
            if (/[}]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (posobj != null) {
                posobj.end = this.currPos;
              }
              obj = {};
              result = true;
              if (tag === "") {
                if (outs.length > 0) {
                  obj = outs.pop();
                } else if ((this.obj != null)) {
                  obj = this.obj;
                }
              } else {
                obj.tag = tag;
                if (posobj != null) {
                  obj.pos = posobj;
                }
                if (outs.length !== 0 && poss.length === 0) {
                  obj.value = outs;
                  this.obj = obj;
                } else if ((posobj != null)) {
                  if (posobj.end == null) {
                    posobj.end = this.currPos;
                  }
                  obj.value = this.input.slice(posobj.start, posobj.end);
                  this.obj = obj;
                } else {
                  if (this.obj != null) {
                    obj = this.obj;
                  }
                }
              }
              posobj = null;
              if ((obj.value == null) || obj.value === "") {
                obj = true;
              }
              result = obj;
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
              if (result !== false) {
                result = this.nez$_();
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Replace = function() {
    var obj, outs, pos1104, pos1106, pos1107, posl1106, posl1107, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (/[`]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (typeof posobj !== "undefined" && posobj !== null) {
        poss.push(posobj);
      }
      posobj = {};
      posobj.start = this.currPos;
      while (result !== false) {
        posl1107 = poss.length;
        pos1107 = this.currPos;
        pos1106 = this.currPos;
        posl1106 = poss.length;
        result = true;
        if (/[\\]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[`]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
        }
        if (result === false) {
          this.currPos = pos1106;
          while (poss.length > posl1106) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[\\]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[\\]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
          }
          if (result === false) {
            this.currPos = pos1106;
            while (poss.length > posl1106) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            pos1104 = this.currPos;
            if (/[\n\r`]/.test(this.input.charAt(this.currPos))) {
              result = true;
              this.currPos++;
            } else {
              result = false;
            }
            this.currPos = pos1104;
            if (result === false) {
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (this.input.length > this.currPos) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
            }
          }
        }
      }
      this.currPos = pos1107;
      while (poss.length > posl1107) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (result !== false) {
        if (result !== false) {
          tag = "Replace";
        }
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
        if (result !== false) {
          if (/[`]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            result = this.nez$_();
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Tagging = function() {
    var obj, outs, pos933, posl933, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (/[#]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (typeof posobj !== "undefined" && posobj !== null) {
        poss.push(posobj);
      }
      posobj = {};
      posobj.start = this.currPos;
      result = this.nez$LETTER();
      if (result !== false) {
        while (result !== false) {
          posl933 = poss.length;
          pos933 = this.currPos;
          result = this.nez$W();
        }
        this.currPos = pos933;
        while (poss.length > posl933) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (result !== false) {
          if (result !== false) {
            tag = "Tagging";
          }
          if (posobj != null) {
            posobj.end = this.currPos;
          }
          obj = {};
          result = true;
          if (tag === "") {
            if (outs.length > 0) {
              obj = outs.pop();
            } else if ((this.obj != null)) {
              obj = this.obj;
            }
          } else {
            obj.tag = tag;
            if (posobj != null) {
              obj.pos = posobj;
            }
            if (outs.length !== 0 && poss.length === 0) {
              obj.value = outs;
              this.obj = obj;
            } else if ((posobj != null)) {
              if (posobj.end == null) {
                posobj.end = this.currPos;
              }
              obj.value = this.input.slice(posobj.start, posobj.end);
              this.obj = obj;
            } else {
              if (this.obj != null) {
                obj = this.obj;
              }
            }
          }
          posobj = null;
          if ((obj.value == null) || obj.value === "") {
            obj = true;
          }
          result = obj;
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
          if (result !== false) {
            result = this.nez$_();
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Extension = function() {
    var obj, outs, pos978, posl978, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (/[<]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      result = this.nez$_();
      if (result !== false) {
        if (typeof posobj !== "undefined" && posobj !== null) {
          poss.push(posobj);
        }
        posobj = {};
        posobj.start = this.currPos;
        result = this.nez$addExtension();
        if (result !== false) {
          if (posobj != null) {
            posobj.end = this.currPos;
          }
          obj = {};
          result = true;
          if (tag === "") {
            if (outs.length > 0) {
              obj = outs.pop();
            } else if ((this.obj != null)) {
              obj = this.obj;
            }
          } else {
            obj.tag = tag;
            if (posobj != null) {
              obj.pos = posobj;
            }
            if (outs.length !== 0 && poss.length === 0) {
              obj.value = outs;
              this.obj = obj;
            } else if ((posobj != null)) {
              if (posobj.end == null) {
                posobj.end = this.currPos;
              }
              obj.value = this.input.slice(posobj.start, posobj.end);
              this.obj = obj;
            } else {
              if (this.obj != null) {
                obj = this.obj;
              }
            }
          }
          posobj = null;
          if ((obj.value == null) || obj.value === "") {
            obj = true;
          }
          result = obj;
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
          if (result !== false) {
            while (result !== false) {
              posl978 = poss.length;
              pos978 = this.currPos;
              result = this.nez$S();
            }
            this.currPos = pos978;
            while (poss.length > posl978) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            if (result !== false) {
              if (/[>]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                result = this.nez$_();
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$addExtension = function() {
    var obj, outs, pos1453, pos1458, pos410, pos869, posl1453, posl1458, posl410, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos1458 = this.currPos;
    posl1458 = poss.length;
    result = true;
    if (/[i]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (/[f]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        pos869 = this.currPos;
        result = this.nez$W();
        this.currPos = pos869;
        if (result === false) {
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          result = this.nez$_();
          if (result !== false) {
            result = this.nez$FlagName();
            if (typeof result !== "boolean") {
              outs.push(result);
            }
            if (result !== false) {
              tag = "If";
            }
          }
        }
      }
    }
    if (result === false) {
      this.currPos = pos1458;
      while (poss.length > posl1458) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (/[o]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[n]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          pos869 = this.currPos;
          result = this.nez$W();
          this.currPos = pos869;
          if (result === false) {
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            result = this.nez$_();
            if (result !== false) {
              result = this.nez$FlagName();
              if (typeof result !== "boolean") {
                outs.push(result);
              }
              if (result !== false) {
                result = this.nez$Expression();
                if (typeof result !== "boolean") {
                  outs.push(result);
                }
                if (result !== false) {
                  tag = "On";
                }
              }
            }
          }
        }
      }
      if (result === false) {
        this.currPos = pos1458;
        while (poss.length > posl1458) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (/[b]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[l]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[o]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[c]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[k]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  pos869 = this.currPos;
                  result = this.nez$W();
                  this.currPos = pos869;
                  if (result === false) {
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    result = this.nez$_();
                    if (result !== false) {
                      result = this.nez$Expression();
                      if (typeof result !== "boolean") {
                        outs.push(result);
                      }
                      if (result !== false) {
                        tag = "Block";
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (result === false) {
          this.currPos = pos1458;
          while (poss.length > posl1458) {
            if (poss.length > 0) {
              posobj = poss.pop(posobj);
            }
          }
          result = true;
          if (/[d]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[e]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[f]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                pos869 = this.currPos;
                result = this.nez$W();
                this.currPos = pos869;
                if (result === false) {
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  result = this.nez$_();
                  if (result !== false) {
                    result = this.nez$TableName();
                    if (typeof result !== "boolean") {
                      outs.push(result);
                    }
                    if (result !== false) {
                      result = this.nez$Expression();
                      if (typeof result !== "boolean") {
                        outs.push(result);
                      }
                      if (result !== false) {
                        tag = "Def";
                      }
                    }
                  }
                }
              }
            }
          }
          if (result === false) {
            this.currPos = pos1458;
            while (poss.length > posl1458) {
              if (poss.length > 0) {
                posobj = poss.pop(posobj);
              }
            }
            result = true;
            if (/[i]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[s]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                pos869 = this.currPos;
                result = this.nez$W();
                this.currPos = pos869;
                if (result === false) {
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  result = this.nez$_();
                  if (result !== false) {
                    result = this.nez$TableName();
                    if (typeof result !== "boolean") {
                      outs.push(result);
                    }
                    if (result !== false) {
                      tag = "Is";
                    }
                  }
                }
              }
            }
            if (result === false) {
              this.currPos = pos1458;
              while (poss.length > posl1458) {
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
              result = true;
              if (/[i]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[s]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[a]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    pos869 = this.currPos;
                    result = this.nez$W();
                    this.currPos = pos869;
                    if (result === false) {
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      result = this.nez$_();
                      if (result !== false) {
                        result = this.nez$TableName();
                        if (typeof result !== "boolean") {
                          outs.push(result);
                        }
                        if (result !== false) {
                          tag = "Isa";
                        }
                      }
                    }
                  }
                }
              }
              if (result === false) {
                this.currPos = pos1458;
                while (poss.length > posl1458) {
                  if (poss.length > 0) {
                    posobj = poss.pop(posobj);
                  }
                }
                result = true;
                if (/[e]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[x]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[i]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[s]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[t]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          if (/[s]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            pos869 = this.currPos;
                            result = this.nez$W();
                            this.currPos = pos869;
                            if (result === false) {
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              result = this.nez$_();
                              if (result !== false) {
                                result = this.nez$TableName();
                                if (typeof result !== "boolean") {
                                  outs.push(result);
                                }
                                if (result !== false) {
                                  tag = "Exists";
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (result === false) {
                  this.currPos = pos1458;
                  while (poss.length > posl1458) {
                    if (poss.length > 0) {
                      posobj = poss.pop(posobj);
                    }
                  }
                  result = true;
                  if (/[l]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[o]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[c]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        if (/[a]/.test(this.input.charAt(this.currPos))) {
                          this.currPos++;
                          result = true;
                        } else {
                          result = false;
                        }
                        if (result !== false) {
                          if (/[l]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            pos869 = this.currPos;
                            result = this.nez$W();
                            this.currPos = pos869;
                            if (result === false) {
                              result = true;
                            } else {
                              result = false;
                            }
                            if (result !== false) {
                              result = this.nez$_();
                              if (result !== false) {
                                result = this.nez$TableName();
                                if (typeof result !== "boolean") {
                                  outs.push(result);
                                }
                                if (result !== false) {
                                  result = this.nez$Expression();
                                  if (typeof result !== "boolean") {
                                    outs.push(result);
                                  }
                                  if (result !== false) {
                                    tag = "Local";
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (result === false) {
                    this.currPos = pos1458;
                    while (poss.length > posl1458) {
                      if (poss.length > 0) {
                        posobj = poss.pop(posobj);
                      }
                    }
                    result = true;
                    result = this.nez$Identifier();
                    if (typeof result !== "boolean") {
                      outs.push(result);
                    }
                    if (result !== false) {
                      result = this.nez$Expression();
                      if (typeof result !== "boolean") {
                        outs.push(result);
                      }
                      if (result !== false) {
                        while (result !== false) {
                          posl1453 = poss.length;
                          pos1453 = this.currPos;
                          if (/[,]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            result = this.nez$_();
                            if (result !== false) {
                              result = this.nez$Expression();
                              if (typeof result !== "boolean") {
                                outs.push(result);
                              }
                            }
                          }
                        }
                        this.currPos = pos1453;
                        while (poss.length > posl1453) {
                          if (poss.length > 0) {
                            posobj = poss.pop(posobj);
                          }
                        }
                        result = true;
                        if (result !== false) {
                          tag = "Expand";
                        }
                      }
                    }
                    if (result === false) {
                      this.currPos = pos1458;
                      while (poss.length > posl1458) {
                        if (poss.length > 0) {
                          posobj = poss.pop(posobj);
                        }
                      }
                      result = true;
                      if (/[\x00-=?-\xff]/.test(this.input.charAt(this.currPos))) {
                        result = true;
                        this.currPos++;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        while (result !== false) {
                          pos410 = this.currPos;
                          posl410 = poss.length;
                          if (/[\x00-=?-\xff]/.test(this.input.charAt(this.currPos))) {
                            result = true;
                            this.currPos++;
                          } else {
                            result = false;
                          }
                        }
                        this.currPos = pos410;
                        while (poss.length > posl410) {
                          if (poss.length > 0) {
                            posobj = poss.pop(posobj);
                          }
                        }
                        result = true;
                      }
                      if (result !== false) {
                        tag = "Undefined";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$FlagName = function() {
    var obj, outs, pos510, pos933, posl510, posl933, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    pos510 = this.currPos;
    posl510 = poss.length;
    if (/[\!]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result === false) {
      this.currPos = pos510;
      while (poss.length > posl510) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
    }
    result = true;
    if (result !== false) {
      result = this.nez$LETTER();
      if (result !== false) {
        while (result !== false) {
          posl933 = poss.length;
          pos933 = this.currPos;
          result = this.nez$W();
        }
        this.currPos = pos933;
        while (poss.length > posl933) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        if (result !== false) {
          if (result !== false) {
            tag = "Name";
          }
          if (posobj != null) {
            posobj.end = this.currPos;
          }
          obj = {};
          result = true;
          if (tag === "") {
            if (outs.length > 0) {
              obj = outs.pop();
            } else if ((this.obj != null)) {
              obj = this.obj;
            }
          } else {
            obj.tag = tag;
            if (posobj != null) {
              obj.pos = posobj;
            }
            if (outs.length !== 0 && poss.length === 0) {
              obj.value = outs;
              this.obj = obj;
            } else if ((posobj != null)) {
              if (posobj.end == null) {
                posobj.end = this.currPos;
              }
              obj.value = this.input.slice(posobj.start, posobj.end);
              this.obj = obj;
            } else {
              if (this.obj != null) {
                obj = this.obj;
              }
            }
          }
          posobj = null;
          if ((obj.value == null) || obj.value === "") {
            obj = true;
          }
          result = obj;
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
          if (result !== false) {
            result = this.nez$_();
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$TableName = function() {
    var obj, outs, pos933, posl933, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    result = this.nez$LETTER();
    if (result !== false) {
      while (result !== false) {
        posl933 = poss.length;
        pos933 = this.currPos;
        result = this.nez$W();
      }
      this.currPos = pos933;
      while (poss.length > posl933) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (result !== false) {
        if (result !== false) {
          tag = "Name";
        }
        if (posobj != null) {
          posobj.end = this.currPos;
        }
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
        if (result !== false) {
          result = this.nez$_();
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Production = function() {
    var obj, outs, pos1218, pos1221, pos956, posl1218, posl1221, posl956, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    pos1218 = this.currPos;
    posl1218 = poss.length;
    result = this.nez$Modifiers();
    if (typeof result !== "boolean") {
      outs.push(result);
    }
    if (result === false) {
      this.currPos = pos1218;
      while (poss.length > posl1218) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
    }
    result = true;
    if (result !== false) {
      pos956 = this.currPos;
      posl956 = poss.length;
      result = true;
      result = this.nez$Identifier();
      if (typeof result !== "boolean") {
        outs.push(result);
      }
      if (result === false) {
        this.currPos = pos956;
        while (poss.length > posl956) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
        result = true;
        result = this.nez$String();
        if (typeof result !== "boolean") {
          outs.push(result);
        }
      }
      if (result !== false) {
        result = this.nez$_SKIP_();
        if (result !== false) {
          if (/[=]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            result = this.nez$_();
            if (result !== false) {
              while (result !== false) {
                posl1221 = poss.length;
                pos1221 = this.currPos;
                result = this.nez$OldExample();
                if (typeof result !== "boolean") {
                  outs.push(result);
                }
              }
              this.currPos = pos1221;
              while (poss.length > posl1221) {
                if (poss.length > 0) {
                  posobj = poss.pop(posobj);
                }
              }
              result = true;
              if (result !== false) {
                result = this.nez$Expression();
                if (typeof result !== "boolean") {
                  outs.push(result);
                }
                if (result !== false) {
                  if (result !== false) {
                    tag = "Production";
                  }
                  if (posobj != null) {
                    posobj.end = this.currPos;
                  }
                  obj = {};
                  result = true;
                  if (tag === "") {
                    if (outs.length > 0) {
                      obj = outs.pop();
                    } else if ((this.obj != null)) {
                      obj = this.obj;
                    }
                  } else {
                    obj.tag = tag;
                    if (posobj != null) {
                      obj.pos = posobj;
                    }
                    if (outs.length !== 0 && poss.length === 0) {
                      obj.value = outs;
                      this.obj = obj;
                    } else if ((posobj != null)) {
                      if (posobj.end == null) {
                        posobj.end = this.currPos;
                      }
                      obj.value = this.input.slice(posobj.start, posobj.end);
                      this.obj = obj;
                    } else {
                      if (this.obj != null) {
                        obj = this.obj;
                      }
                    }
                  }
                  posobj = null;
                  if ((obj.value == null) || obj.value === "") {
                    obj = true;
                  }
                  result = obj;
                  if (poss.length > 0) {
                    posobj = poss.pop(posobj);
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Modifiers = function() {
    var obj, outs, pos867, posl867, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    while (result !== false) {
      posl867 = poss.length;
      pos867 = this.currPos;
      result = this.nez$Modifier();
    }
    this.currPos = pos867;
    while (poss.length > posl867) {
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
    }
    result = true;
    if (result !== false) {
      if (result !== false) {
        tag = "Sequence";
      }
      if (posobj != null) {
        posobj.end = this.currPos;
      }
      obj = {};
      result = true;
      if (tag === "") {
        if (outs.length > 0) {
          obj = outs.pop();
        } else if ((this.obj != null)) {
          obj = this.obj;
        }
      } else {
        obj.tag = tag;
        if (posobj != null) {
          obj.pos = posobj;
        }
        if (outs.length !== 0 && poss.length === 0) {
          obj.value = outs;
          this.obj = obj;
        } else if ((posobj != null)) {
          if (posobj.end == null) {
            posobj.end = this.currPos;
          }
          obj.value = this.input.slice(posobj.start, posobj.end);
          this.obj = obj;
        } else {
          if (this.obj != null) {
            obj = this.obj;
          }
        }
      }
      posobj = null;
      if ((obj.value == null) || obj.value === "") {
        obj = true;
      }
      result = obj;
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$Modifier = function() {
    var obj, outs, pos1052, pos869, posl1052, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    pos1052 = this.currPos;
    posl1052 = poss.length;
    result = true;
    if (/[p]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      if (/[u]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[b]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[l]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[i]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[c]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                pos869 = this.currPos;
                result = this.nez$W();
                this.currPos = pos869;
                if (result === false) {
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  result = this.nez$_();
                }
              }
            }
          }
        }
      }
    }
    if (result === false) {
      this.currPos = pos1052;
      while (poss.length > posl1052) {
        if (poss.length > 0) {
          posobj = poss.pop(posobj);
        }
      }
      result = true;
      if (/[i]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[n]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[l]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[i]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[n]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[e]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  pos869 = this.currPos;
                  result = this.nez$W();
                  this.currPos = pos869;
                  if (result === false) {
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    result = this.nez$_();
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$_SKIP_ = function() {
    var obj, outs, pos846, posl846, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    while (result !== false) {
      posl846 = poss.length;
      pos846 = this.currPos;
      result = this.nez$_ANNOTATION_();
    }
    this.currPos = pos846;
    while (poss.length > posl846) {
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
    }
    result = true;
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$_ANNOTATION_ = function() {
    var obj, outs, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (/[\[]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      result = this.nez$_DOC_();
      if (result !== false) {
        if (/[\]]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          result = this.nez$_();
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (typeof posobj !== "undefined" && posobj !== null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((typeof posobj !== "undefined" && posobj !== null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$_DOC_ = function() {
    var obj, outs, pos1204, pos245, posl1204, posl245, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    while (result !== false) {
      posl245 = poss.length;
      pos245 = this.currPos;
      if (/[\x00-Z\\^-\xff]/.test(this.input.charAt(this.currPos))) {
        result = true;
        this.currPos++;
      } else {
        result = false;
      }
    }
    this.currPos = pos245;
    while (poss.length > posl245) {
      if (poss.length > 0) {
        posobj = poss.pop(posobj);
      }
    }
    result = true;
    if (result !== false) {
      pos1204 = this.currPos;
      posl1204 = poss.length;
      if (/[\[]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        result = this.nez$_DOC_();
        if (result !== false) {
          if (/[\]]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            result = this.nez$_DOC_();
          }
        }
      }
      if (result === false) {
        this.currPos = pos1204;
        while (poss.length > posl1204) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
      }
      result = true;
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  Parser.prototype.nez$OldExample = function() {
    var obj, outs, pos1351, pos1353, posl1351, posl1353, posobj, poss, result, tag, tags;
    obj = null;
    outs = [];
    poss = [];
    tags = [];
    tag = "";
    if (typeof posobj !== "undefined" && posobj !== null) {
      poss.push(posobj);
    }
    posobj = {};
    posobj.start = this.currPos;
    if (/[\[]/.test(this.input.charAt(this.currPos))) {
      this.currPos++;
      result = true;
    } else {
      result = false;
    }
    if (result !== false) {
      pos1351 = this.currPos;
      posl1351 = poss.length;
      if (/[b]/.test(this.input.charAt(this.currPos))) {
        this.currPos++;
        result = true;
      } else {
        result = false;
      }
      if (result !== false) {
        if (/[a]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[d]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[-]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
          }
        }
      }
      if (result === false) {
        this.currPos = pos1351;
        while (poss.length > posl1351) {
          if (poss.length > 0) {
            posobj = poss.pop(posobj);
          }
        }
      }
      result = true;
      if (result !== false) {
        if (/[e]/.test(this.input.charAt(this.currPos))) {
          this.currPos++;
          result = true;
        } else {
          result = false;
        }
        if (result !== false) {
          if (/[x]/.test(this.input.charAt(this.currPos))) {
            this.currPos++;
            result = true;
          } else {
            result = false;
          }
          if (result !== false) {
            if (/[a]/.test(this.input.charAt(this.currPos))) {
              this.currPos++;
              result = true;
            } else {
              result = false;
            }
            if (result !== false) {
              if (/[m]/.test(this.input.charAt(this.currPos))) {
                this.currPos++;
                result = true;
              } else {
                result = false;
              }
              if (result !== false) {
                if (/[p]/.test(this.input.charAt(this.currPos))) {
                  this.currPos++;
                  result = true;
                } else {
                  result = false;
                }
                if (result !== false) {
                  if (/[l]/.test(this.input.charAt(this.currPos))) {
                    this.currPos++;
                    result = true;
                  } else {
                    result = false;
                  }
                  if (result !== false) {
                    if (/[e]/.test(this.input.charAt(this.currPos))) {
                      this.currPos++;
                      result = true;
                    } else {
                      result = false;
                    }
                    if (result !== false) {
                      if (/[:]/.test(this.input.charAt(this.currPos))) {
                        this.currPos++;
                        result = true;
                      } else {
                        result = false;
                      }
                      if (result !== false) {
                        while (result !== false) {
                          posl1353 = poss.length;
                          pos1353 = this.currPos;
                          if (/[\x00-\\^-\xff]/.test(this.input.charAt(this.currPos))) {
                            result = true;
                            this.currPos++;
                          } else {
                            result = false;
                          }
                        }
                        this.currPos = pos1353;
                        while (poss.length > posl1353) {
                          if (poss.length > 0) {
                            posobj = poss.pop(posobj);
                          }
                        }
                        result = true;
                        if (result !== false) {
                          if (/[\]]/.test(this.input.charAt(this.currPos))) {
                            this.currPos++;
                            result = true;
                          } else {
                            result = false;
                          }
                          if (result !== false) {
                            if (result !== false) {
                              tag = "OldExample";
                            }
                            if (posobj != null) {
                              posobj.end = this.currPos;
                            }
                            obj = {};
                            result = true;
                            if (tag === "") {
                              if (outs.length > 0) {
                                obj = outs.pop();
                              } else if ((this.obj != null)) {
                                obj = this.obj;
                              }
                            } else {
                              obj.tag = tag;
                              if (posobj != null) {
                                obj.pos = posobj;
                              }
                              if (outs.length !== 0 && poss.length === 0) {
                                obj.value = outs;
                                this.obj = obj;
                              } else if ((posobj != null)) {
                                if (posobj.end == null) {
                                  posobj.end = this.currPos;
                                }
                                obj.value = this.input.slice(posobj.start, posobj.end);
                                this.obj = obj;
                              } else {
                                if (this.obj != null) {
                                  obj = this.obj;
                                }
                              }
                            }
                            posobj = null;
                            if ((obj.value == null) || obj.value === "") {
                              obj = true;
                            }
                            result = obj;
                            if (poss.length > 0) {
                              posobj = poss.pop(posobj);
                            }
                            if (result !== false) {
                              result = this.nez$_();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result !== false) {
      if (obj === null) {
        obj = {};
        result = true;
        if (tag === "") {
          if (outs.length > 0) {
            obj = outs.pop();
          } else if ((this.obj != null)) {
            obj = this.obj;
          }
        } else {
          obj.tag = tag;
          if (posobj != null) {
            obj.pos = posobj;
          }
          if (outs.length !== 0 && poss.length === 0) {
            obj.value = outs;
            this.obj = obj;
          } else if ((posobj != null)) {
            if (posobj.end == null) {
              posobj.end = this.currPos;
            }
            obj.value = this.input.slice(posobj.start, posobj.end);
            this.obj = obj;
          } else {
            if (this.obj != null) {
              obj = this.obj;
            }
          }
        }
        posobj = null;
        if ((obj.value == null) || obj.value === "") {
          obj = true;
        }
        result = obj;
      }
      result = obj;
    }
    return result;
  };

  return Parser;

})();
