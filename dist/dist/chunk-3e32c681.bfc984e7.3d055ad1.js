// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/chunk-3e32c681.bfc984e7.js":[function(require,module,exports) {
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-3e32c681"], {
  "08e8": function e8(B) {
    B.exports = JSON.parse('{"color":["#2d8cf0","#19be6b","#ff9900","#E46CBB","#9A66E4","#ed3f14"],"backgroundColor":"rgba(0,0,0,0)","textStyle":{},"title":{"textStyle":{"color":"#516b91"},"subtextStyle":{"color":"#93b7e3"}},"line":{"itemStyle":{"normal":{"borderWidth":"2"}},"lineStyle":{"normal":{"width":"2"}},"symbolSize":"6","symbol":"emptyCircle","smooth":true},"radar":{"itemStyle":{"normal":{"borderWidth":"2"}},"lineStyle":{"normal":{"width":"2"}},"symbolSize":"6","symbol":"emptyCircle","smooth":true},"bar":{"itemStyle":{"normal":{"barBorderWidth":0,"barBorderColor":"#ccc"},"emphasis":{"barBorderWidth":0,"barBorderColor":"#ccc"}}},"pie":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"scatter":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"boxplot":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"parallel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"sankey":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"funnel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"gauge":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"candlestick":{"itemStyle":{"normal":{"color":"#edafda","color0":"transparent","borderColor":"#d680bc","borderColor0":"#8fd3e8","borderWidth":"2"}}},"graph":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"}},"lineStyle":{"normal":{"width":1,"color":"#aaa"}},"symbolSize":"6","symbol":"emptyCircle","smooth":true,"color":["#2d8cf0","#19be6b","#f5ae4a","#9189d5","#56cae2","#cbb0e3"],"label":{"normal":{"textStyle":{"color":"#eee"}}}},"map":{"itemStyle":{"normal":{"areaColor":"#f3f3f3","borderColor":"#516b91","borderWidth":0.5},"emphasis":{"areaColor":"rgba(165,231,240,1)","borderColor":"#516b91","borderWidth":1}},"label":{"normal":{"textStyle":{"color":"#000"}},"emphasis":{"textStyle":{"color":"rgb(81,107,145)"}}}},"geo":{"itemStyle":{"normal":{"areaColor":"#f3f3f3","borderColor":"#516b91","borderWidth":0.5},"emphasis":{"areaColor":"rgba(165,231,240,1)","borderColor":"#516b91","borderWidth":1}},"label":{"normal":{"textStyle":{"color":"#000"}},"emphasis":{"textStyle":{"color":"rgb(81,107,145)"}}}},"categoryAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#cccccc"}},"axisTick":{"show":false,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"textStyle":{"color":"#fff"}},"splitLine":{"show":false,"lineStyle":{"color":["#eeeeee"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"valueAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#cccccc"}},"axisTick":{"show":false,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"textStyle":{"color":"#fff"}},"splitLine":{"show":false,"lineStyle":{"color":["#eeeeee"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"logAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#cccccc"}},"axisTick":{"show":false,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"textStyle":{"color":"#999999"}},"splitLine":{"show":true,"lineStyle":{"color":["#eeeeee"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"timeAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#cccccc"}},"axisTick":{"show":false,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"textStyle":{"color":"#999999"}},"splitLine":{"show":true,"lineStyle":{"color":["#eeeeee"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"toolbox":{"iconStyle":{"normal":{"borderColor":"#999"},"emphasis":{"borderColor":"#666"}}},"legend":{"textStyle":{"color":"#fff"}},"tooltip":{"axisPointer":{"lineStyle":{"color":"#ccc","width":1},"crossStyle":{"color":"#ccc","width":1}}},"timeline":{"lineStyle":{"color":"#8fd3e8","width":1},"itemStyle":{"normal":{"color":"#8fd3e8","borderWidth":1},"emphasis":{"color":"#8fd3e8"}},"controlStyle":{"normal":{"color":"#8fd3e8","borderColor":"#8fd3e8","borderWidth":0.5},"emphasis":{"color":"#8fd3e8","borderColor":"#8fd3e8","borderWidth":0.5}},"checkpointStyle":{"color":"#8fd3e8","borderColor":"rgba(138,124,168,0.37)"},"label":{"normal":{"textStyle":{"color":"#8fd3e8"}},"emphasis":{"textStyle":{"color":"#8fd3e8"}}}},"visualMap":{"color":["#516b91","#59c4e6","#a5e7f0"]},"dataZoom":{"backgroundColor":"rgba(0,0,0,0)","dataBackgroundColor":"rgba(255,255,255,0.3)","fillerColor":"rgba(167,183,204,0.4)","handleColor":"#a7b7cc","handleSize":"100%","textStyle":{"color":"#333"}},"markPoint":{"label":{"normal":{"textStyle":{"color":"#eee"}},"emphasis":{"textStyle":{"color":"#eee"}}}}}');
  },
  1885: function _(B, A, D) {
    "use strict";

    D("5fda");
  },
  "1e4b": function e4b(B, A, D) {
    "use strict";

    D.r(A);

    var C = function C() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", {
        attrs: {
          id: "index"
        }
      }, [D("dv-full-screen-container", {
        staticClass: "bg"
      }, [B.loading ? D("dv-loading", [B._v("Loading...")]) : D("div", {
        staticClass: "host-body"
      }, [D("div", {
        staticClass: "d-flex jc-center"
      }, [D("dv-decoration-10", {
        staticStyle: {
          width: "33.3%",
          height: ".0625rem"
        }
      }), D("div", {
        staticClass: "d-flex jc-center"
      }, [D("dv-decoration-8", {
        staticStyle: {
          width: "2.5rem",
          height: ".625rem"
        },
        attrs: {
          color: ["#568aea", "#000000"]
        }
      }), D("div", {
        staticClass: "title"
      }, [D("span", {
        staticClass: "title-text"
      }, [B._v("大数据可视化平台")]), D("dv-decoration-6", {
        staticClass: "title-bototm",
        staticStyle: {
          width: "3.125rem",
          height: ".1rem"
        },
        attrs: {
          reverse: !0,
          color: ["#50e3c2", "#67a1e5"]
        }
      })], 1), D("dv-decoration-8", {
        staticStyle: {
          width: "2.5rem",
          height: ".625rem"
        },
        attrs: {
          reverse: !0,
          color: ["#568aea", "#000000"]
        }
      })], 1), D("dv-decoration-10", {
        staticStyle: {
          width: "33.3%",
          height: ".0625rem",
          transform: "rotateY(180deg)"
        }
      })], 1), D("div", {
        staticClass: "d-flex jc-between px-2"
      }, [D("div", {
        staticClass: "d-flex",
        staticStyle: {
          width: "40%"
        }
      }, [D("div", {
        staticClass: "react-right ml-4",
        staticStyle: {
          width: "6.25rem",
          "text-align": "left",
          "background-color": "#0f1325"
        }
      }, [D("span", {
        staticClass: "react-before"
      }), D("span", {
        staticClass: "text"
      }, [B._v("数据分析1")])]), D("div", {
        staticClass: "react-right ml-3",
        staticStyle: {
          "background-color": "#0f1325"
        }
      }, [D("span", {
        staticClass: "text colorBlue"
      }, [B._v("数据分析2")])])]), D("div", {
        staticClass: "d-flex",
        staticStyle: {
          width: "40%"
        }
      }, [D("div", {
        staticClass: "react-left bg-color-blue mr-3"
      }, [D("span", {
        staticClass: "text fw-b"
      }, [B._v("vue-big-screen")])]), D("div", {
        staticClass: "react-left mr-4",
        staticStyle: {
          width: "6.25rem",
          "background-color": "#0f1325",
          "text-align": "right"
        }
      }, [D("span", {
        staticClass: "react-after"
      }), D("span", {
        staticClass: "text"
      }, [B._v(B._s(B.dateYear) + " " + B._s(B.dateWeek) + " " + B._s(B.dateDay))])])])]), D("div", {
        staticClass: "body-box"
      }, [D("div", {
        staticClass: "content-box"
      }, [D("div", [D("dv-border-box-12", [D("centerLeft1")], 1)], 1), D("div", [D("dv-border-box-12", [D("centerLeft2")], 1)], 1), D("div", [D("center")], 1), D("div", [D("centerRight2")], 1), D("div", [D("dv-border-box-13", [D("centerRight1")], 1)], 1)]), D("div", {
        staticClass: "bototm-box"
      }, [D("dv-border-box-13", [D("bottomLeft")], 1), D("dv-border-box-12", [D("bottomRight")], 1)], 1)])])], 1)], 1);
    },
        F = [];

    D("ac1f"), D("5319"), D("4d63"), D("25f0");

    function E(B, A) {
      var D;
      return function () {
        var C = this,
            F = arguments;
        clearTimeout(D), D = setTimeout(function () {
          B.apply(C, F);
        }, A);
      };
    }

    function t(B, A) {
      if (B) {
        var D = new Date(B),
            C = {
          "M+": D.getMonth() + 1,
          "d+": D.getDate(),
          "H+": D.getHours(),
          "m+": D.getMinutes(),
          "s+": D.getSeconds(),
          "q+": Math.floor((D.getMonth() + 3) / 3),
          S: D.getMilliseconds()
        };

        for (var F in /(y+)/.test(A) && (A = A.replace(RegExp.$1, (D.getFullYear() + "").substr(4 - RegExp.$1.length))), C) {
          new RegExp("(" + F + ")").test(A) && (A = A.replace(RegExp.$1, 1 === RegExp.$1.length ? C[F] : ("00" + C[F]).substr(("" + C[F]).length)));
        }

        return A;
      }

      return "";
    }

    var e = function e() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", {
        attrs: {
          id: "centreLeft1"
        }
      }, [D("div", {
        staticClass: "bg-color-black"
      }, [D("div", {
        staticClass: "d-flex pt-2 pl-2"
      }, [D("span", {
        staticStyle: {
          color: "#5cd9e8"
        }
      }, [D("icon", {
        attrs: {
          name: "chart-bar"
        }
      })], 1), D("div", {
        staticClass: "d-flex"
      }, [D("span", {
        staticClass: "fs-xl text mx-2"
      }, [B._v("任务通过率")]), D("dv-decoration-3", {
        staticStyle: {
          width: "1.25rem",
          height: ".25rem",
          position: "relative",
          top: "-.0375rem"
        }
      })], 1)]), D("div", {
        staticClass: "d-flex jc-center"
      }, [D("CentreLeft1Chart")], 1), D("div", {
        staticClass: "bottom-data"
      }, B._l(B.numberData, function (A, C) {
        return D("div", {
          key: C,
          staticClass: "item-box"
        }, [D("div", {
          staticClass: "d-flex"
        }, [D("span", {
          staticClass: "coin"
        }, [B._v("￥")]), D("dv-digital-flop", {
          staticStyle: {
            width: "2.5rem",
            height: ".625rem"
          },
          attrs: {
            config: A.number
          }
        })], 1), D("p", {
          staticClass: "text",
          staticStyle: {
            "text-align": "center"
          }
        }, [B._v(" " + B._s(A.text) + " "), D("span", {
          staticClass: "colorYellow"
        }, [B._v("(件)")])])]);
      }), 0)])]);
    },
        a = [],
        H = D("5530"),
        G = (D("159b"), function () {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", [D("Chart", {
        attrs: {
          cdata: B.cdata
        }
      })], 1);
    }),
        o = [],
        r = function r() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", [D("Echart", {
        attrs: {
          options: B.options,
          id: "centreLeft1Chart",
          height: "2.75rem",
          width: "3.25rem"
        }
      })], 1);
    },
        n = [],
        i = function i() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", {
        class: B.className,
        style: {
          height: B.height,
          width: B.width
        },
        attrs: {
          id: B.id
        }
      });
    },
        J = [],
        I = D("08e8"),
        l = D("ade3"),
        s = "$__resizeChartMethod",
        c = {
      data: function data() {
        return {
          chart: null
        };
      },
      created: function created() {
        window.addEventListener("resize", this[s], !1);
      },
      activated: function activated() {
        this.chart && this.chart.resize();
      },
      beforeDestroy: function beforeDestroy() {
        window.removeEventListener("reisze", this[s]);
      },
      methods: Object(l["a"])({}, s, E(function () {
        this.chart && this.chart.resize();
      }, 300))
    },
        L = (D("72f2"), {
      name: "echart",
      mixins: [c],
      props: {
        className: {
          type: String,
          default: "chart"
        },
        id: {
          type: String,
          default: "chart"
        },
        width: {
          type: String,
          default: "100%"
        },
        height: {
          type: String,
          default: "2.5rem"
        },
        options: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      },
      data: function data() {
        return {
          chart: null
        };
      },
      watch: {
        options: {
          handler: function handler(B) {
            this.chart.setOption(B, !0);
          },
          deep: !0
        }
      },
      mounted: function mounted() {
        this.$echarts.registerTheme("tdTheme", I), this.initChart();
      },
      methods: {
        initChart: function initChart() {
          this.chart = this.$echarts.init(this.$el, "tdTheme"), this.chart.setOption(this.options, !0);
        }
      }
    }),
        d = L,
        K = D("2877"),
        N = Object(K["a"])(d, i, J, !1, null, null, null),
        M = N.exports,
        f = {
      data: function data() {
        return {
          options: {}
        };
      },
      components: {
        Echart: M
      },
      props: {
        cdata: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      },
      watch: {
        cdata: {
          handler: function handler(B) {
            this.options = {
              color: ["#37a2da", "#32c5e9", "#9fe6b8", "#ffdb5c", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378ea"],
              tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              toolbox: {
                show: !0
              },
              calculable: !0,
              legend: {
                orient: "horizontal",
                icon: "circle",
                bottom: 0,
                x: "center",
                data: B.xData,
                textStyle: {
                  color: "#fff"
                }
              },
              series: [{
                name: "通过率统计",
                type: "pie",
                radius: [10, 60],
                roseType: "area",
                center: ["50%", "40%"],
                data: B.seriesData
              }]
            };
          },
          immediate: !0,
          deep: !0
        }
      }
    },
        m = f,
        h = Object(K["a"])(m, r, n, !1, null, "5e213fe3", null),
        u = h.exports,
        O = {
      data: function data() {
        return {
          cdata: {
            xData: ["rose11", "rose2", "rose3", "rose4", "rose5", "rose6"],
            seriesData: [{
              value: 10,
              name: "rose11"
            }, {
              value: 5,
              name: "rose2"
            }, {
              value: 15,
              name: "rose3"
            }, {
              value: 25,
              name: "rose4"
            }, {
              value: 20,
              name: "rose5"
            }, {
              value: 35,
              name: "rose6"
            }]
          }
        };
      },
      components: {
        Chart: u
      },
      mounted: function mounted() {},
      methods: {}
    },
        p = O,
        P = Object(K["a"])(p, G, o, !1, null, "61d7f301", null),
        S = P.exports,
        b = {
      data: function data() {
        return {
          config: {
            lineWidth: 30,
            activeRadius: "80%",
            radius: "75%",
            activeTimeGap: 2e3,
            data: [{
              name: "周口",
              value: 55
            }, {
              name: "南阳",
              value: 120
            }, {
              name: "西峡",
              value: 78
            }, {
              name: "驻马店",
              value: 66
            }, {
              name: "新乡",
              value: 80
            }]
          },
          numberData: [{
            number: {
              number: [15],
              toFixed: 1,
              content: "{nt}"
            },
            text: "今日构建总量"
          }, {
            number: {
              number: [1144],
              toFixed: 1,
              content: "{nt}"
            },
            text: "总共完成数量"
          }, {
            number: {
              number: [361],
              toFixed: 1,
              content: "{nt}"
            },
            text: "正在编译数量"
          }, {
            number: {
              number: [157],
              toFixed: 1,
              content: "{nt}"
            },
            text: "未通过数量"
          }]
        };
      },
      components: {
        CentreLeft1Chart: S
      },
      mounted: function mounted() {
        this.changeTiming();
      },
      methods: {
        changeTiming: function changeTiming() {
          var B = this;
          setInterval(function () {
            B.changeNumber();
          }, 3e3);
        },
        changeNumber: function changeNumber() {
          this.numberData.forEach(function (B, A) {
            B.number.number[0] += ++A, B.number = Object(H["a"])({}, B.number);
          });
        }
      }
    },
        R = b,
        y = (D("8766"), Object(K["a"])(R, e, a, !1, null, null, null)),
        Q = y.exports,
        g = function g() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", {
        attrs: {
          id: "centreLeft1"
        }
      }, [D("div", {
        staticClass: "bg-color-black"
      }, [D("div", {
        staticClass: "d-flex pt-2 pl-2"
      }, [D("span", {
        staticStyle: {
          color: "#5cd9e8"
        }
      }, [D("icon", {
        attrs: {
          name: "chart-pie"
        }
      })], 1), D("div", {
        staticClass: "d-flex"
      }, [D("span", {
        staticClass: "fs-xl text mx-2"
      }, [B._v("地图数据")]), D("dv-decoration-1", {
        staticStyle: {
          width: "1.25rem",
          height: ".25rem",
          position: "relative",
          top: "-.0375rem"
        }
      })], 1)]), D("div", {
        staticClass: "d-flex jc-center"
      }, [D("CentreLeft2Chart")], 1)])]);
    },
        v = [],
        x = function x() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", [D("Chart", {
        attrs: {
          cdata: B.cdata
        }
      })], 1);
    },
        T = [],
        w = function w() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", [D("Echart", {
        ref: "centreLeft2ChartRef",
        attrs: {
          id: "centreLeft2Chart",
          options: B.options,
          height: "4.5rem",
          width: "4.125rem"
        }
      })], 1);
    },
        U = [],
        V = (D("b0c0"), D("99af"), {
      data: function data() {
        return {
          options: {}
        };
      },
      components: {
        Echart: M
      },
      props: {
        cdata: {
          type: Array,
          default: function _default() {
            return [];
          }
        }
      },
      watch: {
        cdata: {
          handler: function handler(B) {
            var A = {
              "厦门市": [118.11022, 24.490474, 20],
              "福州市": [119.206239, 26.275302, 20],
              "泉州市": [118.589421, 24.908853, 20],
              "漳州市": [117.561801, 24.510897, 20],
              "龙岩市": [116.82978, 25.391603, 20],
              "莆田市": [119.007558, 25.591011, 20],
              "三明市": [117.435001, 26.465444, 20],
              "南平市": [118.178459, 27.535627, 20],
              "宁德市": [119.527082, 27.15924, 20]
            },
                D = [{
              name: "厦门市"
            }, {
              name: "福州市"
            }, {
              name: "泉州市"
            }, {
              name: "漳州市"
            }, {
              name: "龙岩市"
            }, {
              name: "莆田市"
            }, {
              name: "三明市"
            }, {
              name: "南平市"
            }, {
              name: "宁德市"
            }],
                C = function C(B) {
              for (var D = [], C = 0; C < B.length; C++) {
                var F = A[B[C].name];
                F && D.push({
                  name: B[C].name,
                  value: F.concat(B[C].value)
                });
              }

              return D;
            };

            this.options = {
              showLegendSymbol: !0,
              tooltip: {
                trigger: "item",
                textStyle: {
                  fontSize: 14,
                  lineHeight: 22
                },
                position: function position(B) {
                  return [B[0] + 50, B[1] - 20];
                }
              },
              visualMap: {
                min: 0,
                max: 10,
                show: !1,
                seriesIndex: 0,
                inRange: {
                  color: ["rgba(41,166,206, .5)", "rgba(69,117,245, .9)"]
                }
              },
              geo: {
                show: !0,
                aspectScale: .85,
                zoom: 1.2,
                top: "10%",
                left: "16%",
                map: "福建",
                roam: !1,
                itemStyle: {
                  normal: {
                    areaColor: "rgba(0,0,0,0)",
                    shadowColor: "rgba(7,114,204, .8)",
                    shadowOffsetX: 5,
                    shadowOffsetY: 5
                  },
                  emphasis: {
                    areaColor: "#00aeef"
                  }
                }
              },
              series: [{
                name: "相关指数",
                type: "map",
                aspectScale: .85,
                zoom: 1.2,
                mapType: "福建",
                top: "10%",
                left: "16%",
                itemStyle: {
                  normal: {
                    color: "red",
                    areaColor: "rgba(19,54,162, .5)",
                    borderColor: "rgba(0,242,252,.3)",
                    borderWidth: 1,
                    shadowBlur: 7,
                    shadowColor: "#00f2fc"
                  },
                  emphasis: {
                    areaColor: "#4f7fff",
                    borderColor: "rgba(0,242,252,.6)",
                    borderWidth: 2,
                    shadowBlur: 10,
                    shadowColor: "#00f2fc"
                  }
                },
                label: {
                  formatter: function formatter(B) {
                    return "".concat(B.name);
                  },
                  show: !0,
                  position: "insideRight",
                  textStyle: {
                    fontSize: 14,
                    color: "#efefef"
                  },
                  emphasis: {
                    textStyle: {
                      color: "#fff"
                    }
                  }
                },
                data: B
              }, {
                type: "effectScatter",
                coordinateSystem: "geo",
                symbolSize: 7,
                effectType: "ripple",
                legendHoverLink: !1,
                showEffectOn: "render",
                rippleEffect: {
                  period: 4,
                  scale: 2.5,
                  brushType: "stroke"
                },
                zlevel: 1,
                itemStyle: {
                  normal: {
                    color: "#99FBFE",
                    shadowBlur: 5,
                    shadowColor: "#fff"
                  }
                },
                data: C(D)
              }]
            }, this.handleMapRandomSelect();
          },
          immediate: !0,
          deep: !0
        }
      },
      methods: {
        startInterval: function startInterval() {
          var B = this,
              A = 2e3;
          null !== this.intervalId && clearInterval(this.intervalId), this.intervalId = setInterval(function () {
            B.reSelectMapRandomArea();
          }, A);
        },
        reSelectMapRandomArea: function reSelectMapRandomArea() {
          var B = this,
              A = 9;
          this.$nextTick(function () {
            var D = B.$refs.centreLeft2ChartRef.chart,
                C = Math.floor(Math.random() * A);

            while (C === B.preSelectMapIndex || C >= A) {
              C = Math.floor(Math.random() * A);
            }

            D.dispatchAction({
              type: "mapUnSelect",
              seriesIndex: 0,
              dataIndex: B.preSelectMapIndex
            }), D.dispatchAction({
              type: "showTip",
              seriesIndex: 0,
              dataIndex: C
            }), D.dispatchAction({
              type: "mapSelect",
              seriesIndex: 0,
              dataIndex: C
            }), B.preSelectMapIndex = C;
          });
        },
        handleMapRandomSelect: function handleMapRandomSelect() {
          var B = this;
          this.$nextTick(function () {
            var A = B.$refs.centreLeft2ChartRef.chart,
                D = B;
            setTimeout(function () {
              D.reSelectMapRandomArea();
            }, 0), A.on("mouseover", function (B) {
              clearInterval(D.intervalId), A.dispatchAction({
                type: "mapUnSelect",
                seriesIndex: 0,
                dataIndex: D.preSelectMapIndex
              }), A.dispatchAction({
                type: "mapSelect",
                seriesIndex: 0,
                dataIndex: B.dataIndex
              }), D.preSelectMapIndex = B.dataIndex;
            }), A.on("globalout", function () {
              D.reSelectMapRandomArea(), D.startInterval();
            }), B.startInterval();
          });
        }
      }
    }),
        W = V,
        X = Object(K["a"])(W, w, U, !1, null, null, null),
        _ = X.exports,
        Y = {
      data: function data() {
        return {
          cdata: [{
            name: "福州市",
            value: 10,
            elseData: {}
          }, {
            name: "厦门市",
            value: 9
          }, {
            name: "漳州市",
            value: 8
          }, {
            name: "泉州市",
            value: 7
          }, {
            name: "三明市",
            value: 6
          }, {
            name: "莆田市",
            value: 5
          }, {
            name: "南平市",
            value: 4
          }, {
            name: "龙岩市",
            value: 3
          }, {
            name: "宁德市",
            value: 2
          }]
        };
      },
      components: {
        Chart: _
      },
      mounted: function mounted() {},
      methods: {}
    },
        Z = Y,
        k = Object(K["a"])(Z, x, T, !1, null, "10e5fc75", null),
        j = k.exports,
        $ = {
      data: function data() {
        return {};
      },
      components: {
        CentreLeft2Chart: j
      },
      mounted: function mounted() {},
      methods: {}
    },
        z = $,
        q = (D("1885"), Object(K["a"])(z, g, v, !1, null, null, null)),
        BB = q.exports,
        AB = function AB() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", {
        attrs: {
          id: "centreRight1"
        }
      }, [D("div", {
        staticClass: "bg-color-black"
      }, [D("div", {
        staticClass: "d-flex pt-2 pl-2"
      }, [D("span", {
        staticStyle: {
          color: "#5cd9e8"
        }
      }, [D("icon", {
        attrs: {
          name: "chart-line"
        }
      })], 1), B._m(0)]), D("div", {
        staticClass: "d-flex jc-center body-box"
      }, [D("dv-scroll-board", {
        staticStyle: {
          width: "3.375rem",
          height: "4.28rem"
        },
        attrs: {
          config: B.config
        }
      })], 1)])]);
    },
        DB = [function () {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", {
        staticClass: "d-flex"
      }, [D("span", {
        staticClass: "fs-xl text mx-2"
      }, [B._v("任务完成排行榜")])]);
    }],
        CB = {
      data: function data() {
        return {
          config: {
            header: ["组件", "分支", "覆盖率"],
            data: [["组件1", "dev-1", "<span  class='colorGrass'>↑75%</span>"], ["组件2", "dev-2", "<span  class='colorRed'>↓33%</span>"], ["组件3", "dev-3", "<span  class='colorGrass'>↑100%</span>"], ["组件4", "rea-1", "<span  class='colorGrass'>↑94%</span>"], ["组件5", "rea-2", "<span  class='colorGrass'>↑95%</span>"], ["组件6", "fix-2", "<span  class='colorGrass'>↑63%</span>"], ["组件7", "fix-4", "<span  class='colorGrass'>↑84%</span>"], ["组件8", "fix-7", "<span  class='colorRed'>↓46%</span>"], ["组件9", "dev-2", "<span  class='colorRed'>↓13%</span>"], ["组件10", "dev-9", "<span  class='colorGrass'>↑76%</span>"]],
            rowNum: 7,
            headerHeight: 35,
            headerBGC: "#0f1325",
            oddRowBGC: "#0f1325",
            evenRowBGC: "#171c33",
            index: !0,
            columnWidth: [50],
            align: ["center"]
          }
        };
      },
      components: {},
      mounted: function mounted() {},
      methods: {}
    },
        FB = CB,
        EB = (D("1f7e"), Object(K["a"])(FB, AB, DB, !1, null, null, null)),
        tB = EB.exports,
        eB = function eB() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", {
        attrs: {
          id: "centreRight2"
        }
      }, [D("div", {
        staticClass: "bg-color-black"
      }, [D("div", {
        staticClass: "d-flex pt-2 pl-2"
      }, [D("span", {
        staticStyle: {
          color: "#5cd9e8"
        }
      }, [D("icon", {
        attrs: {
          name: "align-left"
        }
      })], 1), D("span", {
        staticClass: "fs-xl text mx-2"
      }, [B._v("产品销售渠道分析")])]), D("div", {
        staticClass: "d-flex jc-center body-box",
        staticStyle: {
          "margin-top": "0"
        }
      }, [D("dv-capsule-chart", {
        staticStyle: {
          width: "100%",
          height: "2rem"
        },
        attrs: {
          config: B.config
        }
      }), D("centreRight2Chart1")], 1)])]);
    },
        aB = [],
        HB = function HB() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", [D("Chart", {
        attrs: {
          cdata: B.cdata
        }
      })], 1);
    },
        GB = [],
        oB = function oB() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", [D("Echart", {
        attrs: {
          options: B.options,
          id: "centreRight2Chart1",
          height: "2.60rem",
          width: "100%"
        }
      })], 1);
    },
        rB = [],
        nB = {
      data: function data() {
        return {
          options: {}
        };
      },
      components: {
        Echart: M
      },
      props: {
        cdata: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      },
      watch: {
        cdata: {
          handler: function handler(B) {
            var A = {
              normal: {
                width: 1,
                opacity: .5
              }
            };
            this.options = {
              radar: {
                indicator: B.indicatorData,
                shape: "circle",
                splitNumber: 5,
                name: {
                  textStyle: {
                    color: "rgb(238, 197, 102)"
                  }
                },
                splitLine: {
                  lineStyle: {
                    color: ["rgba(238, 197, 102, 0.1)", "rgba(238, 197, 102, 0.2)", "rgba(238, 197, 102, 0.4)", "rgba(238, 197, 102, 0.6)", "rgba(238, 197, 102, 0.8)", "rgba(238, 197, 102, 1)"].reverse()
                  }
                },
                splitArea: {
                  show: !1
                },
                axisLine: {
                  lineStyle: {
                    color: "rgba(238, 197, 102, 0.5)"
                  }
                }
              },
              series: [{
                name: "北京",
                type: "radar",
                lineStyle: A,
                data: B.dataBJ,
                symbol: "none",
                itemStyle: {
                  normal: {
                    color: "#F9713C"
                  }
                },
                areaStyle: {
                  normal: {
                    opacity: .1
                  }
                }
              }, {
                name: "上海",
                type: "radar",
                lineStyle: A,
                data: B.dataSH,
                symbol: "none",
                itemStyle: {
                  normal: {
                    color: "#B3E4A1"
                  }
                },
                areaStyle: {
                  normal: {
                    opacity: .05
                  }
                }
              }, {
                name: "广州",
                type: "radar",
                lineStyle: A,
                data: B.dataGZ,
                symbol: "none",
                itemStyle: {
                  normal: {
                    color: "rgb(238, 197, 102)"
                  }
                },
                areaStyle: {
                  normal: {
                    opacity: .05
                  }
                }
              }]
            };
          },
          immediate: !0,
          deep: !0
        }
      }
    },
        iB = nB,
        JB = Object(K["a"])(iB, oB, rB, !1, null, null, null),
        IB = JB.exports,
        lB = {
      data: function data() {
        return {
          cdata: {
            indicatorData: [{
              name: "data1",
              max: 300
            }, {
              name: "data2",
              max: 250
            }, {
              name: "data3",
              max: 300
            }, {
              name: "data4",
              max: 5
            }, {
              name: "data5",
              max: 200
            }, {
              name: "data6",
              max: 100
            }],
            dataBJ: [[94, 69, 114, 2.08, 73, 39, 22], [99, 73, 110, 2.43, 76, 48, 23], [31, 12, 30, .5, 32, 16, 24], [42, 27, 43, 1, 53, 22, 25], [154, 117, 157, 3.05, 92, 58, 26], [234, 185, 230, 4.09, 123, 69, 27], [160, 120, 186, 2.77, 91, 50, 28]],
            dataGZ: [[84, 94, 140, 2.238, 68, 18, 22], [93, 77, 104, 1.165, 53, 7, 23], [99, 130, 227, 3.97, 55, 15, 24], [146, 84, 139, 1.094, 40, 17, 25], [113, 108, 137, 1.481, 48, 15, 26], [81, 48, 62, 1.619, 26, 3, 27], [56, 48, 68, 1.336, 37, 9, 28]],
            dataSH: [[91, 45, 125, .82, 34, 23, 1], [65, 27, 78, .86, 45, 29, 2], [83, 60, 84, 1.09, 73, 27, 3], [109, 81, 121, 1.28, 68, 51, 4], [106, 77, 114, 1.07, 55, 51, 5], [109, 81, 121, 1.28, 68, 51, 6], [106, 77, 114, 1.07, 55, 51, 7]]
          }
        };
      },
      components: {
        Chart: IB
      },
      mounted: function mounted() {},
      methods: {}
    },
        sB = lB,
        cB = Object(K["a"])(sB, HB, GB, !1, null, "54c6c3de", null),
        LB = cB.exports,
        dB = {
      data: function data() {
        return {
          config: {
            data: [{
              name: "南阳",
              value: 167
            }, {
              name: "周口",
              value: 67
            }, {
              name: "漯河",
              value: 123
            }, {
              name: "郑州",
              value: 55
            }, {
              name: "西峡",
              value: 98
            }]
          }
        };
      },
      components: {
        centreRight2Chart1: LB
      },
      mounted: function mounted() {},
      methods: {}
    },
        KB = dB,
        NB = (D("2061"), Object(K["a"])(KB, eB, aB, !1, null, null, null)),
        MB = NB.exports,
        fB = function fB() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", {
        attrs: {
          id: "center"
        }
      }, [D("div", {
        staticClass: "up"
      }, B._l(B.titleItem, function (A) {
        return D("div", {
          key: A.title,
          staticClass: "bg-color-black item"
        }, [D("p", {
          staticClass: "ml-3 colorBlue fw-b"
        }, [B._v(B._s(A.title))]), D("div", [D("dv-digital-flop", {
          staticStyle: {
            width: "1.25rem",
            height: ".625rem"
          },
          attrs: {
            config: A.number
          }
        })], 1)]);
      }), 0), D("div", {
        staticClass: "down"
      }, [D("div", {
        staticClass: "ranking bg-color-black"
      }, [D("span", {
        staticStyle: {
          color: "#5cd9e8"
        }
      }, [D("icon", {
        attrs: {
          name: "align-left"
        }
      })], 1), D("span", {
        staticClass: "fs-xl text mx-2 mb-1"
      }, [B._v("年度负责人组件达标榜")]), D("dv-scroll-ranking-board", {
        staticStyle: {
          height: "2.75rem"
        },
        attrs: {
          config: B.ranking
        }
      })], 1), D("div", {
        staticClass: "percent"
      }, [D("div", {
        staticClass: "item bg-color-black"
      }, [D("span", [B._v("今日任务通过率")]), D("CenterChart", {
        attrs: {
          id: B.rate[0].id,
          tips: B.rate[0].tips,
          colorObj: B.rate[0].colorData
        }
      })], 1), D("div", {
        staticClass: "item bg-color-black"
      }, [D("span", [B._v("今日任务达标率")]), D("CenterChart", {
        attrs: {
          id: B.rate[1].id,
          tips: B.rate[1].tips,
          colorObj: B.rate[1].colorData
        }
      })], 1), D("div", {
        staticClass: "water"
      }, [D("dv-water-level-pond", {
        staticStyle: {
          height: "1.5rem"
        },
        attrs: {
          config: B.water
        }
      })], 1)])])]);
    },
        mB = [],
        hB = function hB() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", [D("Echart", {
        attrs: {
          options: B.options,
          id: B.id,
          height: "1.25rem",
          width: "1.5rem"
        }
      })], 1);
    },
        uB = [],
        OB = (D("a9e3"), {
      data: function data() {
        return {
          options: {}
        };
      },
      components: {
        Echart: M
      },
      props: {
        id: {
          type: String,
          required: !0,
          default: "chartRate"
        },
        tips: {
          type: Number,
          required: !0,
          default: 50
        },
        colorObj: {
          type: Object,
          default: function _default() {
            return {
              textStyle: "#3fc0fb",
              series: {
                color: ["#00bcd44a", "transparent"],
                dataColor: {
                  normal: "#03a9f4",
                  shadowColor: "#97e2f5"
                }
              }
            };
          }
        }
      },
      watch: {
        tips: {
          handler: function handler(B) {
            this.options = {
              title: {
                text: 1 * B + "%",
                x: "center",
                y: "center",
                textStyle: {
                  color: this.colorObj.textStyle,
                  fontSize: 16
                }
              },
              series: [{
                type: "pie",
                radius: ["75%", "80%"],
                center: ["50%", "50%"],
                hoverAnimation: !1,
                color: this.colorObj.series.color,
                label: {
                  normal: {
                    show: !1
                  }
                },
                data: [{
                  value: B,
                  itemStyle: {
                    normal: {
                      color: this.colorObj.series.dataColor.normal,
                      shadowBlur: 10,
                      shadowColor: this.colorObj.series.dataColor.shadowColor
                    }
                  }
                }, {
                  value: 100 - B
                }]
              }]
            };
          },
          immediate: !0,
          deep: !0
        }
      }
    }),
        pB = OB,
        PB = Object(K["a"])(pB, hB, uB, !1, null, "2b39e0b7", null),
        SB = PB.exports,
        bB = {
      data: function data() {
        return {
          titleItem: [{
            title: "今年累计任务建次数",
            number: {
              number: [120],
              toFixed: 1,
              content: "{nt}"
            }
          }, {
            title: "本月累计任务次数",
            number: {
              number: [18],
              toFixed: 1,
              content: "{nt}"
            }
          }, {
            title: "今日累计任务次数",
            number: {
              number: [2],
              toFixed: 1,
              content: "{nt}"
            }
          }, {
            title: "今年失败任务次数",
            number: {
              number: [14],
              toFixed: 1,
              content: "{nt}"
            }
          }, {
            title: "今年成功任务次数",
            number: {
              number: [106],
              toFixed: 1,
              content: "{nt}"
            }
          }, {
            title: "今年达标任务个数",
            number: {
              number: [100],
              toFixed: 1,
              content: "{nt}"
            }
          }],
          ranking: {
            data: [{
              name: "周口",
              value: 55
            }, {
              name: "南阳",
              value: 120
            }, {
              name: "西峡",
              value: 78
            }, {
              name: "驻马店",
              value: 66
            }, {
              name: "新乡",
              value: 80
            }, {
              name: "新乡2",
              value: 80
            }, {
              name: "新乡3",
              value: 80
            }, {
              name: "新乡4",
              value: 80
            }, {
              name: "新乡5",
              value: 80
            }, {
              name: "新乡6",
              value: 80
            }],
            carousel: "single",
            unit: "人"
          },
          water: {
            data: [24, 45],
            shape: "roundRect",
            formatter: "{value}%",
            waveNum: 3
          },
          rate: [{
            id: "centerRate1",
            tips: 60,
            colorData: {
              textStyle: "#3fc0fb",
              series: {
                color: ["#00bcd44a", "transparent"],
                dataColor: {
                  normal: "#03a9f4",
                  shadowColor: "#97e2f5"
                }
              }
            }
          }, {
            id: "centerRate2",
            tips: 40,
            colorData: {
              textStyle: "#67e0e3",
              series: {
                color: ["#faf3a378", "transparent"],
                dataColor: {
                  normal: "#ff9800",
                  shadowColor: "#fcebad"
                }
              }
            }
          }]
        };
      },
      components: {
        CenterChart: SB
      }
    },
        RB = bB,
        yB = (D("8410"), Object(K["a"])(RB, fB, mB, !1, null, "6011b593", null)),
        QB = yB.exports,
        gB = function gB() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", {
        attrs: {
          id: "bottomLeft"
        }
      }, [D("div", {
        staticClass: "bg-color-black"
      }, [D("div", {
        staticClass: "d-flex pt-2 pl-2"
      }, [D("span", {
        staticStyle: {
          color: "#5cd9e8"
        }
      }, [D("icon", {
        attrs: {
          name: "chart-bar"
        }
      })], 1), B._m(0)]), D("div", [D("BottomLeftChart")], 1)])]);
    },
        vB = [function () {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", {
        staticClass: "d-flex"
      }, [D("span", {
        staticClass: "fs-xl text mx-2"
      }, [B._v("数据统计图")])]);
    }],
        xB = function xB() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", [D("Chart", {
        attrs: {
          cdata: B.cdata
        }
      })], 1);
    },
        TB = [],
        wB = (D("b680"), function () {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", [D("Echart", {
        attrs: {
          options: B.options,
          id: "bottomLeftChart",
          height: "6.25rem",
          width: "100%"
        }
      })], 1);
    }),
        UB = [],
        VB = {
      data: function data() {
        return {
          options: {}
        };
      },
      components: {
        Echart: M
      },
      props: {
        cdata: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      },
      watch: {
        cdata: {
          handler: function handler(B) {
            this.options = {
              title: {
                text: ""
              },
              tooltip: {
                trigger: "axis",
                backgroundColor: "rgba(255,255,255,0.1)",
                axisPointer: {
                  type: "shadow",
                  label: {
                    show: !0,
                    backgroundColor: "#7B7DDC"
                  }
                }
              },
              legend: {
                data: ["已贯通", "计划贯通", "贯通率"],
                textStyle: {
                  color: "#B4B4B4"
                },
                top: "0%"
              },
              grid: {
                x: "8%",
                width: "88%",
                y: "4%"
              },
              xAxis: {
                data: B.category,
                axisLine: {
                  lineStyle: {
                    color: "#B4B4B4"
                  }
                },
                axisTick: {
                  show: !1
                }
              },
              yAxis: [{
                splitLine: {
                  show: !1
                },
                axisLine: {
                  lineStyle: {
                    color: "#B4B4B4"
                  }
                },
                axisLabel: {
                  formatter: "{value} "
                }
              }, {
                splitLine: {
                  show: !1
                },
                axisLine: {
                  lineStyle: {
                    color: "#B4B4B4"
                  }
                },
                axisLabel: {
                  formatter: "{value} "
                }
              }],
              series: [{
                name: "贯通率",
                type: "line",
                smooth: !0,
                showAllSymbol: !0,
                symbol: "emptyCircle",
                symbolSize: 8,
                yAxisIndex: 1,
                itemStyle: {
                  normal: {
                    color: "#F02FC2"
                  }
                },
                data: B.rateData
              }, {
                name: "已贯通",
                type: "bar",
                barWidth: 10,
                itemStyle: {
                  normal: {
                    barBorderRadius: 5,
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: "#956FD4"
                    }, {
                      offset: 1,
                      color: "#3EACE5"
                    }])
                  }
                },
                data: B.barData
              }, {
                name: "计划贯通",
                type: "bar",
                barGap: "-100%",
                barWidth: 10,
                itemStyle: {
                  normal: {
                    barBorderRadius: 5,
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: "rgba(156,107,211,0.8)"
                    }, {
                      offset: .2,
                      color: "rgba(156,107,211,0.5)"
                    }, {
                      offset: 1,
                      color: "rgba(156,107,211,0.2)"
                    }])
                  }
                },
                z: -12,
                data: B.lineData
              }]
            };
          },
          immediate: !0,
          deep: !0
        }
      }
    },
        WB = VB,
        XB = Object(K["a"])(WB, wB, UB, !1, null, null, null),
        _B = XB.exports,
        YB = {
      data: function data() {
        return {
          cdata: {
            category: ["市区", "万州", "江北", "南岸", "北碚", "綦南", "长寿", "永川", "璧山", "江津", "城口", "大足", "垫江", "丰都", "奉节", "合川", "江津区", "开州", "南川", "彭水", "黔江", "石柱", "铜梁", "潼南", "巫山", "巫溪", "武隆", "秀山", "酉阳", "云阳", "忠县", "川东", "检修"],
            lineData: [18092, 20728, 24045, 28348, 32808, 36097, 39867, 44715, 48444, 50415, 56061, 62677, 59521, 67560, 18092, 20728, 24045, 28348, 32808, 36097, 39867, 44715, 48444, 50415, 36097, 39867, 44715, 48444, 50415, 50061, 32677, 49521, 32808],
            barData: [4600, 5e3, 5500, 6500, 7500, 8500, 9900, 12500, 14e3, 21500, 23200, 24450, 25250, 33300, 4600, 5e3, 5500, 6500, 7500, 8500, 9900, 22500, 14e3, 21500, 8500, 9900, 12500, 14e3, 21500, 23200, 24450, 25250, 7500],
            rateData: []
          }
        };
      },
      components: {
        Chart: _B
      },
      mounted: function mounted() {
        this.setData();
      },
      methods: {
        setData: function setData() {
          for (var B = 0; B < this.cdata.barData.length - 1; B++) {
            var A = this.cdata.barData[B] / this.cdata.lineData[B];
            this.cdata.rateData.push(A.toFixed(2));
          }
        }
      }
    },
        ZB = YB,
        kB = Object(K["a"])(ZB, xB, TB, !1, null, "d0670fd6", null),
        jB = kB.exports,
        $B = {
      data: function data() {
        return {};
      },
      components: {
        BottomLeftChart: jB
      },
      mounted: function mounted() {},
      methods: {}
    },
        zB = $B,
        qB = (D("cfd0"), Object(K["a"])(zB, gB, vB, !1, null, null, null)),
        BA = qB.exports,
        AA = function AA() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", {
        attrs: {
          id: "bottomRight"
        }
      }, [D("div", {
        staticClass: "bg-color-black"
      }, [D("div", {
        staticClass: "d-flex pt-2 pl-2"
      }, [D("span", {
        staticStyle: {
          color: "#5cd9e8"
        }
      }, [D("icon", {
        attrs: {
          name: "chart-area"
        }
      })], 1), D("div", {
        staticClass: "d-flex"
      }, [D("span", {
        staticClass: "fs-xl text mx-2"
      }, [B._v("工单修复以及满意度统计图")]), D("div", {
        staticClass: "decoration2"
      }, [D("dv-decoration-2", {
        staticStyle: {
          width: "5px",
          height: "6rem"
        },
        attrs: {
          reverse: !0
        }
      })], 1)])]), D("div", [D("BottomRightChart")], 1)])]);
    },
        DA = [],
        CA = function CA() {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", [D("Chart", {
        attrs: {
          cdata: B.cdata
        }
      })], 1);
    },
        FA = [],
        EA = (D("a15b"), function () {
      var B = this,
          A = B.$createElement,
          D = B._self._c || A;
      return D("div", [D("Echart", {
        attrs: {
          options: B.options,
          id: "centreLeft1Chart",
          height: "6rem",
          width: "100%"
        }
      })], 1);
    }),
        tA = [],
        eA = {
      data: function data() {
        return {
          options: {},
          colorList: {
            linearYtoG: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: "#f5b44d"
              }, {
                offset: 1,
                color: "#28f8de"
              }]
            },
            linearGtoB: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: "#43dfa2"
              }, {
                offset: 1,
                color: "#28f8de"
              }]
            },
            linearBtoG: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: "#1c98e8"
              }, {
                offset: 1,
                color: "#28f8de"
              }]
            },
            areaBtoG: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: "rgba(35,184,210,.2)"
              }, {
                offset: 1,
                color: "rgba(35,184,210,0)"
              }]
            }
          }
        };
      },
      components: {
        Echart: M
      },
      props: {
        cdata: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      },
      watch: {
        cdata: {
          handler: function handler(B) {
            this.options = {
              title: {
                text: "",
                textStyle: {
                  color: "#D3D6DD",
                  fontSize: 24,
                  fontWeight: "normal"
                },
                subtext: B.year + "/" + B.weekCategory[6],
                subtextStyle: {
                  color: "#fff",
                  fontSize: 16
                },
                top: 50,
                left: 80
              },
              legend: {
                top: 120,
                left: 80,
                orient: "vertical",
                itemGap: 15,
                itemWidth: 12,
                itemHeight: 12,
                data: ["平均指标", "我的指标"],
                textStyle: {
                  color: "#fff",
                  fontSize: 14
                }
              },
              tooltip: {
                trigger: "item"
              },
              radar: {
                center: ["68%", "27%"],
                radius: "40%",
                name: {
                  color: "#fff"
                },
                splitNumber: 8,
                axisLine: {
                  lineStyle: {
                    color: this.colorList.linearYtoG,
                    opacity: .6
                  }
                },
                splitLine: {
                  lineStyle: {
                    color: this.colorList.linearYtoG,
                    opacity: .6
                  }
                },
                splitArea: {
                  areaStyle: {
                    color: "#fff",
                    opacity: .1,
                    shadowBlur: 25,
                    shadowColor: "#000",
                    shadowOffsetX: 0,
                    shadowOffsetY: 5
                  }
                },
                indicator: [{
                  name: "服务态度",
                  max: B.maxData
                }, {
                  name: "产品质量",
                  max: 10
                }, {
                  name: "任务效率",
                  max: 12
                }, {
                  name: "售后保障",
                  max: 3.5
                }]
              },
              grid: {
                left: 90,
                right: 80,
                bottom: 40,
                top: "60%"
              },
              xAxis: {
                type: "category",
                position: "bottom",
                axisLine: !0,
                axisLabel: {
                  color: "rgba(255,255,255,.8)",
                  fontSize: 12
                },
                data: B.weekCategory
              },
              yAxis: {
                name: "工单",
                nameLocation: "end",
                nameGap: 24,
                nameTextStyle: {
                  color: "rgba(255,255,255,.5)",
                  fontSize: 14
                },
                max: B.maxData,
                splitNumber: 4,
                axisLine: {
                  lineStyle: {
                    opacity: 0
                  }
                },
                splitLine: {
                  show: !0,
                  lineStyle: {
                    color: "#fff",
                    opacity: .1
                  }
                },
                axisLabel: {
                  color: "rgba(255,255,255,.8)",
                  fontSize: 12
                }
              },
              series: [{
                name: "",
                type: "radar",
                symbolSize: 0,
                data: [{
                  value: B.radarDataAvg[6],
                  name: "平均指标",
                  itemStyle: {
                    normal: {
                      color: "#f8d351"
                    }
                  },
                  lineStyle: {
                    normal: {
                      opacity: 0
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: "#f8d351",
                      shadowBlur: 25,
                      shadowColor: "rgba(248,211,81,.3)",
                      shadowOffsetX: 0,
                      shadowOffsetY: -10,
                      opacity: 1
                    }
                  }
                }, {
                  value: B.radarData[6],
                  name: "我的指标",
                  itemStyle: {
                    normal: {
                      color: "#43dfa2"
                    }
                  },
                  lineStyle: {
                    normal: {
                      opacity: 0
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: this.colorList.linearGtoB,
                      shadowBlur: 15,
                      shadowColor: "rgba(0,0,0,.2)",
                      shadowOffsetX: 0,
                      shadowOffsetY: 5,
                      opacity: .8
                    }
                  }
                }]
              }, {
                name: "",
                type: "line",
                smooth: !0,
                symbol: "emptyCircle",
                symbolSize: 8,
                itemStyle: {
                  normal: {
                    color: "#fff"
                  }
                },
                lineStyle: {
                  normal: {
                    color: this.colorList.linearBtoG,
                    width: 3
                  }
                },
                areaStyle: {
                  normal: {
                    color: this.colorList.areaBtoG
                  }
                },
                data: B.weekLineData,
                lineSmooth: !0,
                markLine: {
                  silent: !0,
                  data: [{
                    type: "average",
                    name: "平均值"
                  }],
                  precision: 0,
                  label: {
                    normal: {
                      formatter: "平均值: \n {c}"
                    }
                  },
                  lineStyle: {
                    normal: {
                      color: "rgba(248,211,81,.7)"
                    }
                  }
                },
                tooltip: {
                  position: "top",
                  formatter: "{c} m",
                  backgroundColor: "rgba(28,152,232,.2)",
                  padding: 6
                }
              }, {
                name: "占位背景",
                type: "bar",
                itemStyle: {
                  normal: {
                    show: !0,
                    color: "#000",
                    opacity: 0
                  }
                },
                silent: !0,
                barWidth: "50%",
                data: B.weekMaxData,
                animation: !1
              }]
            };
          },
          immediate: !0,
          deep: !0
        }
      }
    },
        aA = eA,
        HA = Object(K["a"])(aA, EA, tA, !1, null, null, null),
        GA = HA.exports,
        oA = {
      data: function data() {
        return {
          drawTiming: null,
          cdata: {
            year: null,
            weekCategory: [],
            radarData: [],
            radarDataAvg: [],
            maxData: 12e3,
            weekMaxData: [],
            weekLineData: []
          }
        };
      },
      components: {
        Chart: GA
      },
      mounted: function mounted() {
        this.drawTimingFn();
      },
      beforeDestroy: function beforeDestroy() {
        clearInterval(this.drawTiming);
      },
      methods: {
        drawTimingFn: function drawTimingFn() {
          var B = this;
          this.setData(), this.drawTiming = setInterval(function () {
            B.setData();
          }, 6e3);
        },
        setData: function setData() {
          this.cdata.weekCategory = [], this.cdata.weekMaxData = [], this.cdata.weekLineData = [], this.cdata.radarData = [], this.cdata.radarDataAvg = [];
          var B = new Date();
          this.cdata.year = B.getFullYear();

          for (var A = 0; A < 7; A++) {
            var D = new Date();
            this.cdata.weekCategory.unshift([D.getMonth() + 1, D.getDate() - A].join("/")), this.cdata.weekMaxData.push(this.cdata.maxData);
            var C = Math.round(11e3 * Math.random() + 500);
            this.cdata.weekLineData.push(C);
            var F = +(5 * Math.random() + 3).toFixed(3),
                E = F + +(3 * Math.random()).toFixed(2),
                t = +(C / 1e3 / F).toFixed(1),
                e = [C, F, E, t];
            this.cdata.radarData.unshift(e);
            var a = Math.round(8e3 * Math.random() + 4e3),
                H = +(4 * Math.random() + 4).toFixed(3),
                G = H + +(2 * Math.random()).toFixed(2),
                o = +(C / 1e3 / F).toFixed(1),
                r = [a, H, G, o];
            this.cdata.radarDataAvg.unshift(r);
          }
        }
      }
    },
        rA = oA,
        nA = Object(K["a"])(rA, CA, FA, !1, null, "1537ff58", null),
        iA = nA.exports,
        JA = {
      data: function data() {
        return {};
      },
      components: {
        BottomRightChart: iA
      },
      mounted: function mounted() {},
      methods: {}
    },
        IA = JA,
        lA = (D("c51b"), Object(K["a"])(IA, AA, DA, !1, null, null, null)),
        sA = lA.exports,
        cA = {
      data: function data() {
        return {
          loading: !0,
          dateDay: null,
          dateYear: null,
          dateWeek: null,
          weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
        };
      },
      components: {
        centerLeft1: Q,
        centerLeft2: BB,
        centerRight1: tB,
        centerRight2: MB,
        center: QB,
        bottomLeft: BA,
        bottomRight: sA
      },
      mounted: function mounted() {
        this.timeFn(), this.cancelLoading();
      },
      methods: {
        timeFn: function timeFn() {
          var B = this;
          setInterval(function () {
            B.dateDay = t(new Date(), "HH: mm: ss"), B.dateYear = t(new Date(), "yyyy-MM-dd"), B.dateWeek = B.weekday[new Date().getDay()];
          }, 1e3);
        },
        cancelLoading: function cancelLoading() {
          var B = this;
          setTimeout(function () {
            B.loading = !1;
          }, 500);
        }
      }
    },
        LA = cA,
        dA = (D("c072"), Object(K["a"])(LA, C, F, !1, null, null, null));

    A["default"] = dA.exports;
  },
  "1f7e": function f7e(B, A, D) {
    "use strict";

    D("ff01");
  },
  2061: function _(B, A, D) {
    "use strict";

    D("cf33");
  },
  "2d3f": function d3f(B, A, D) {},
  "392c": function c(B, A, D) {},
  "44e7": function e7(B, A, D) {
    var C = D("861d"),
        F = D("c6b6"),
        E = D("b622"),
        t = E("match");

    B.exports = function (B) {
      var A;
      return C(B) && (void 0 !== (A = B[t]) ? !!A : "RegExp" == F(B));
    };
  },
  "4d63": function d63(B, A, D) {
    var C = D("83ab"),
        F = D("da84"),
        E = D("94ca"),
        t = D("7156"),
        e = D("9bf2").f,
        a = D("241c").f,
        H = D("44e7"),
        G = D("ad6d"),
        o = D("9f7f"),
        r = D("6eeb"),
        n = D("d039"),
        i = D("69f3").enforce,
        J = D("2626"),
        I = D("b622"),
        l = I("match"),
        s = F.RegExp,
        c = s.prototype,
        L = /a/g,
        d = /a/g,
        K = new s(L) !== L,
        N = o.UNSUPPORTED_Y,
        M = C && E("RegExp", !K || N || n(function () {
      return d[l] = !1, s(L) != L || s(d) == d || "/a/i" != s(L, "i");
    }));

    if (M) {
      var f = function f(B, A) {
        var D,
            C = this instanceof f,
            F = H(B),
            E = void 0 === A;
        if (!C && F && B.constructor === f && E) return B;
        K ? F && !E && (B = B.source) : B instanceof f && (E && (A = G.call(B)), B = B.source), N && (D = !!A && A.indexOf("y") > -1, D && (A = A.replace(/y/g, "")));
        var e = t(K ? new s(B, A) : s(B, A), C ? this : c, f);

        if (N && D) {
          var a = i(e);
          a.sticky = !0;
        }

        return e;
      },
          m = function m(B) {
        B in f || e(f, B, {
          configurable: !0,
          get: function get() {
            return s[B];
          },
          set: function set(A) {
            s[B] = A;
          }
        });
      },
          h = a(s),
          u = 0;

      while (h.length > u) {
        m(h[u++]);
      }

      c.constructor = f, f.prototype = c, r(F, "RegExp", f);
    }

    J("RegExp");
  },
  "5fda": function fda(B, A, D) {},
  "72f2": function f2(B, A, D) {
    var C, F, E;
    D("7037").default;

    (function (t, e) {
      F = [A, D("313e")], C = e, E = "function" === typeof C ? C.apply(A, F) : C, void 0 === E || (B.exports = E);
    })(0, function (B, A) {
      var D = function D(B) {
        "undefined" !== typeof console && console && console.error && console.error(B);
      };

      A ? A.registerMap ? A.registerMap("福建", {
        type: "FeatureCollection",
        features: [{
          id: "350100",
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [["@@K@KLDBLBBIHCAA"], ["@@CBABCD@FJFCFBDHFFBB@FM@CCEBCCEMC"], ["@@ACCBBDDA"], ["@@@CC@@DD@"], ["@@B@A@"], ["@@MCKEO@ICCCAEAKBKAAIAC@AVFPCRBBFBNHNBVXJ@DADCHAB@@GBCL@B@BCCIEEBC@CHCACG@ABKPA@CC"], ["@@@A@B"], ["@@A@CDC@WH@FLXCB@DFDATBFH@HELA@CCACI@AFAD@BA@AH@DED@FDBHHHJDT@JC@AEOECGKC@EDOQIACBG@CC@CKC"], ["@@B@BCE@BD"], ["@@J@BA@AAAI@ABBD"], ["@@B@@ACABD"], ["@@B@@AA@@B"], ["@@B@AC@@@D"], ["@@BAA@@B"], ["@@@A@B"], ["@@BAA@ABB@"], ["@@DA@CCB@D"], ["@@MDFFAFBH@BCFCDBN@BHFDJJHFBDCDMCCE@AA@EHOD@HDDABC@ECCGDCEGAGACC@G@A"], ["@@B@@AA@@B"], ["@@B@@AA@@B"], ["@@B@A@"], ["@@B@A@"], ["@@B@AC@B@B"], ["@@BA@AAB@B"], ["@@BA@CC@ABCCC@@BDDHB"], ["@@BKCEEAEF@HBDHDDA"], ["@@E@AFCBC@CCABACA@AACFB@@BADQAALDDAB@JBFADLADGAC@@PBHF@@DCAAAECEJCDDAFBDCDBLDBBA@AAADAAADA@ADBDACGDACADCAADEGKE@AA"], ["@@ABBBAFEBQBEDQBABCJOLEHD^NF\\BLGFMH@FKD@LBPENB@A@CM@CAAE@CBA@CE@A@@ABA@EDAAKE@MEC@"], ["@@@HCBEAEJAH@BDDL@DCFDNBB@@CFBDEEEGGG@A@BCEEEA"], ["@@ABFLAB@DJDFNDDJ@BCDAFHBBFC@CGEBCKEA@BEIC@CCBADIIA@ACC@"], ["@@FD@A@CAC@ACABFAD"], ["@@C@@BDDD@@FBB@DAB@B@BB@BA@AF@@CFEIEIC"], ["@@BDHBB@CGBGEADAACCCEACCC@@DE@@DHDBFHJ"], ["@@@AA@BB"], ["@@FFB@@CACC@AB"], ["@@ABD@@BB@HACCABE@"], ["@@BBJ@DBDAAEA@CAABC@ACCH"], ["@@ABBBF@AACA"], ["@@@DFJDBFFHDB@@ECCEGEACEE@"], ["@@DHDBD@FADCCEFAFBB@HKBECCEDC@A@CF@@AGEECCCGABABABCAEBAABCAAA@GH@DDDAFF@BBADGBECABARA@CGCECBABBFAFJD@HBBD@JABCDC@EAI@AF@FBF@@F"], ["@@CBD@BAA@"], ["@@B@@AA@@B"], ["@@DBBACAAB"], ["@@DFDAACA@AEA@@F"], ["@@DB@CC@ABB@"], ["@@FNFAFFFACGA@ACC@EEE@@B"], ["@@@DBBF@AECAAB"], ["@@BDB@@CBAEEA@BH"], ["@@BBD@@ACCDAE@@D@B"], ["@@JB@@AAE@CA@BB@"], ["@@BDDBBAAC@CC@ACA@BH"], ["@@DD@CD@ACC@AD"], ["@@FDH@GEEB"], ["@@C@ADHBBF@@DAFBCEIE"], ["@@BCAEBA@IECABBJEHID@FMFBBBBBFD@FFD@D@@HBBF@RADCBE@CGCEBAAGG@CBC"], ["@@B@@BD@@CAAAA@BAD@@"], ["@@BDAE@B"], ["@@CFDDD@DAJ@D@BAACBACC@EAACBABKH"], ["@@BB@AA@"], ["@@DBBGAAA@CA@BDFAB"], ["@@@BDFDBB@CGEA"], ["@@@BB@@AA@"], ["@@EDBDB@FA@EC@"], ["@@CF@DADDFB@BA@CBBHBBABAD@ACAABEAAEAIB"], ["@@@@@A@B"], ["@@BBBA@ACB"], ["@@DB@CA@AB"], ["@@DDB@@ABACCABAB"], ["@@ABBBD@@CD@@ACACD"], ["@@BBDAAEE@BF"], ["@@@BB@AA@@"], ["@@JFB@CEG@"], ["@@@DFBAEC@"], ["@@@DD@ACA@"], ["@@ABFB@CC@"], ["@@B@B@AAAB"], ["@@BDB@ACA@"], ["@@B@@@A@"], ["@@JHB@ACGCA@"], ["@@DDHFBBDCFDD@JHDA@@KKCAACEBEGGCABBDCD"], ["@@DFNJHBJOJEBACGIACCK@CACBCCC@CDADDP"], ["@@ADBBHAAABCAAED"], ["@@@BBA@AAB"], ["@@HBBCAEGF@B"], ["@@HHB@GIAB"], ["@@P@@A@CECM@@DDF"], ["@@IKGACD@FNLHJHB@EGM"], ["@@A@CDG@CBC@EFIDBBAD@BDDFA@FDFD@BICKDAD@JNDBBJAB@BPH@BJJF@FDAHHDF@DAJDBDB@@GCA@CBCCMIKBCE@CA@GECE@IEE@@ABACGIEC@"], ["@@BA@ACBBB"], ["@@BCAAAAC@DHB@"], ["@@DB@CBAE@@D"], ["@@@@@@"], ["@@FAB@BCAAE@CDBD"], ["@@JNPJF@DABAAI@ADAVHZFFBHJJDF@DA@EEI@EFG@C@A@KAEECEAC@GBIJC@IGQA@BC@GEEBE@GCABADMJC@@BAHBD"], ["@@DDBA@CCAAB@B"], ["@@BAAB"], ["@@DBBA@CC@AD"], ["@@JFBCDA@AACIACD@D"], ["@@@BDAC@"], ["@@B@BAA@AB"], ["@@BBDBAEAAA@@D"], ["@@@DHBBMCG@AAAC@AFBN"], ["@@BBBCA@AB"], ["@@@BBB@CA@"], ["@@@DD@AEC@BB"], ["@@BBBAACC@BD"], ["@@BBB@@C@AG@DD"], ["@@@BB@@CAB"], ["@@BBBCC@@B"], ["@@BBB@ACAB"], ["@@@B@A"], ["@@B@@AAB"], ["@@BDF@CECB"], ["@@ABDBBCC@"], ["@@ABDBDEA@CB"], ["@@@BBBDAAAC@"], ["@@D@AAAB"], ["@@E@@FB@@ADA@A"], ["@@@BF@DEC@ED"], ["@@DDD@@ACAC@"], ["@@B@B@AAAB"], ["@@HHDAAACEE@@B"], ["@@B@AA@B"], ["@@BDB@BCCAAB"], ["@@FBAAC@@@"], ["@@B@AAA@BB"], ["@@BBF@B@@EEACB@D"], ["@@BDB@@EC@@B"], ["@@CDBBDAAC"], ["@@CD@F@BDAHA@CD@@E@AC@GD"], ["@@FFB@@ACGA@AD"], ["@@ADB@BCA@"], ["@@@BF@AAC@"], ["@@@DBCA@"], ["@@@AAAADD@"], ["@@DIF@ACCBCAC@@DCBALA@@DF@FG"], ["@@BDD@CI@@AF"], ["@@@@@@"], ["@@@BB@@AA@"], ["@@BHBBFA@AAABCCCBCAAA@ABC@@FBB"], ["@@CB@BF@@AAA"], ["@@ADBDB@FMC@CF"], ["@@ADBBDEC@"], ["@@@BBAA@"], ["@@ADD@@CA@"], ["@@AB@BBC@@"], ["@@B@@AAB"], ["@@@B@A"], ["@@@BDAC@"], ["@@@BBDFADB@CE@ACCA@D"], ["@@J@BCCCG@@H"], ["@@A@@DBC@@"], ["@@@EAACFAAAFBBBCF@"], ["@@EDADD@DABBD@@EEA"], ["@@@BBFCBC@A@ERBBJ@FBF@EFE@@DDBN@HED@FBCFFBBDD@JC@CEEBCAANCBCB@@CKEEEOAGCADE@ME"], ["@@@BBBF@@CAAEB"], ["@@@BBBBECA@D"], ["@@ABBBDCCA@B"], ["@@GDDFHABAACCA"], ["@@BDB@DA@CAAA@CD"], ["@@DB@CAAAD"], ["@@ABBBHACAC@"], ["@@DHH@BA@EFBBA@ICCACCBE@@FEF@D"], ["@@DFHDBAACCCCACB"], ["@@@DFBD@@CAAGA@B"], ["@@B@@AA@@B"], ["@@@DF@ACDCAGA@@FCF"], ["@@@DDBDCBAAAE@AB"], ["@@@BDAC@"], ["@@DBBAEAABB@"], ["@@ABBBBAAA"], ["@@DBB@AAC@"], ["@@@BB@@CA@@B"], ["@@B@AA@B"], ["@@@@@@@@"], ["@@ADDADDDB@GEEE@BF"], ["@@ADFBFBDA@ACACECBAB"], ["@@BFFGCAA@AD"], ["@@AB@BDCA@"], ["@@B@@CE@AD@@F@"], ["@@CDM@@BDBAFFBBDBB@FFDRFLDAK@ICEHKACGACBABC@K@"], ["@@DBDA@CEAAB@D"], ["@@DDAEA@@B"], ["@@CCA@DLB@DCBCE@"], ["@@BBBCCAABBB"], ["@@BBBAAAAB"], ["@@@BDJDBDDDACEBCDAHCBAEACDQ@"], ["@@@DDAAAA@"], ["@@AB@BFCA@A@"], ["@@@BB@AA"], ["@@@AAB@@B@"], ["@@DBCA"], ["@@@BB@@CAB"], ["@@ADD@@CA@"], ["@@AB@DDCAA"], ["@@AAABD@"], ["@@f\x95f\xAFBGEOBGBCLKbqBEBOBCRORQBAIKAEBEVEZ@\\HjRXJ\\@FA@COeCEe_aUGEAOEEKAIAmDQEG@A@CRCDGFSDG@\x85]GGBILENADC@EAIEIYWIACBMLOPIFI@\x9F_YCYAmGECGG@KDGRQBE@EAGUMAC@UAIEEoM]_YISKAM@MFILIFcFKBCNEPARM@ECEJYR@BWHMJyH]BEFAHBdNH@F@NERGLODMAiCUIaY\x81OuCIGCSC{CMCICEEEGGWGeAeD{D\x87HMBCH@DOAGCEQKEIEEMGCCEOCAAEEA@EJCBGFC@AQcQIUA\x91JaA\x89SAKMEKBGEAE@IHMDUAIBA`BNMFAJFF@^EFBHJJ@FCBGAQFM@GACQSACDKJ@REVBTCJDJDPNJBL@DAHMEQ@ATOFQHC@GAGHWBKCGKKAKDWFELKJM@E@EGG@GBADAJ@FDTVLDDABA@]BAlJHV@BEB@HHFBFVHFPDDTFREF@JDBD@DSHABDLCH@F@DH@@V@LKXELcPALIJAH@JJHH@BJLLBHXND@FAD@DBBPDHHFTJXFTLBH@@HAjZF@FAFG@KCEYa@C@GDOJMDAJA\\HLAD@HIFCH@PKPGFG@ECCECCIIK@ADCH@PMhKN@ZLH@DA@EE[GKYUKEGAI@CDGPGDIBiSGECCEUAWDODGBCXCDCDIDEBANDDBB@JCDIPHBDB@FEAKBIKS@KEEK@EBABCLCFAB[FGAECCEKCEBIAKIKCc[IAGACCEO@MHCN@FCLAFC@GMC@KEABCACE@EBCAAB@DA@GCE@SPCHAHGDCFSBIFKAKPKDW@C@@B@DVD@FAHEBAEM@CBEHGDCD@DNR@FG@CAC@IL@D{OAA@GCKCIYMG@CC@CHEPADAH@BBBHD@D@JILA@FAHBHF@F@FBFCDE@SDI@AEG@MEAIBGA@KAC@EJ[DC@MDA@AGEBEAAA@GHC@SMQCKE@CDAVBTHHHF@BA@CCMGIECEG_IWBABMBEAMIIAEBCHKN@HDBLBQXIV@LBFJLDRCFAPIDCH@LHJCDIFADDH@NCJGFMAEAEECEBEGUHIFADADE@IBAH@DBDEDKDI@AGEMECIAEACIEGBECAKEABG@CEEIAMEE@@JDF@D@HEBEBO@KAGIQEEQC@QHCD@JJP^XDD@HENQVGFGBCDBNJfCFGDE@GA]BCACIGOQSG[EACDBTCJON@DPJTT@HIFA@AHDVBFHHJ^AFGDMBI@OSAAEAiHEDATEFsVIFIDIAEIGUKsAODOJYJO@EBQAICCI@CECBCDGHO@IGG[IEIDM@OASBWTOJKVA`JZJRHFGDMEIBEF@TA@o]AIO@EAEJA@GACBADFJ@DELCD@DDBLANCD@LVBFENB@JCF@DDDBDDAHFP@FGNMT@PIJAPIGGCQOIGCCADAHIBIFICGBCBKRMDCRSTBBBBJBFGFCB@BHCPEB@EAAC@C@DN@DADEBIB@HBB@BBDGDALMFGFMR@HAH@JJTFPFJANFBHAJ@BBCFIBIJETBDNBDBBDCHADGAAHADEBI@@HIAAABAEC@BCB@A@AABBHHFPNJDJHLT@DABIDG@EBEBGHMGEHkDEAKGAACBCLA@CAEGGCKDCD@HEC@EgGMK_BSIACmAIGKDMAEEEIMCCCAGOGANDTDHBFCPEF@D@HDDF@DB@DADCBC@MG@GGGG@ICIOMMAKIACAQCGECBCGCCCEKGIIEAEEC@ABHL@FGBCCO@OGC@MDADEBG@QLEHADW@EBEGOI@AHABAMSUMWIICMBIDMNCBCA@CBEBGCGIGMAIMEEE@GBADL`@NCBUOI@EGCAKF@HA@CCIFAJSAMBED@BBBHFON]FO@EAI@ECACAOICEBIHIDAJABC@CA@EDMCAEDCA@CBOAGEAGAADELABGACA@MCGCAGPEBEAAC@CJIGEC@INUKIFOMCGDEEEGCYAEBCLKJGLGFC@IJKJALUPAJWFMJGJA@CBKEGBIFQRGV@LBBARCHIHCH@JG`EJSHGFKRMCEF@FVXDP@NDLD@LEHDLNF@HF@DEJIZABKFADBDJBCLDFN@BDCJV\\LNHC\\ULOFAFCBCI{BAJHP@FHBZCFAHAFC@AFBDJHHBPINALCP@JO@AACD@HB@BKPCJEBHHALBFNRDJAFG@AFDTHLAHDFKLBDDFDFEF@FEDJTBHCXGF@L@BH@ETBFJJBZIPAHAHBB\\CpBnHJ@XSRFONBHJHFNCBGCGBAFE^CBEFAN@LAFFHFLAFDD@FCBSGG@GFGNA`FL@LCFBD@LD@PGDBDDITDJDHBDCFBDABBB@BF@FDBB@DBB\\BTKFLIHKTEFPLFHDAhANINGLANJD@HCBDDLFHBDCDHB@F@NK`BHABHJVJDDCJH@D@@DD@BADCF@DBBD@DABKDBZDDNJFFHDHHR\\|AFABA@ENE\\EFB\\RHDDVDJBJEHQLE@EBCDGLIHDHEFGFQBEDAFDF@JJBELJPEDSH]PGFHNBFCRDJ@RBFHFD@HJRHBHAHIBBLCDEB@B@HDHVAFBD@DCHAT@FEFIEKBAJAPENEDG@]OK@CXSDEACC@@E@KFKJGJAL@XHbTJNBLPHDD@J@D\\HDDHDbJLAVBF@PSHEN@LHH\\ALEFOAEFAHDLPNDVFJLFRH`BFAJGF@DBBDFB@DEHBDFF@DOP@DDDFDD@LEHF@BCJBDJJ@DE@AD@HHBBDBNFBJED@@DANHD`CJ@DBNND@DADENIFEFE@EACIAKGEGAEDCRGL@PDB@DCDAJBBB@LDBD@@GDCAEFGACAAJADEBCFCAIFG@CDCHBFABB@DDBT@DAHGBBBHHBF@FCHBDAD@BFJJD@H@NFDDJNHDFJDBNEDENYHG@SDCNSFAD@ZHJJJZDFHAVIJGBCJCDDH\x86HRVXFBF@VA@GFABAAIE@CE@CB@HD@CFCBFFBB@DAHDFH@FJFJAFFAFED@B@DBBH@DC@LDAH@DCDAVDFFJP@NBFPBNAJCJADAH@JDAHYJABBBH@BB@DDBLANOFANBVDNFT@HADCF@FB@DFBTKLC@EXBDCJKAC@INQJCBILELQ@AKIPUDCN@^KBC@EECDCDAJDFANKRBHGF@HFF@NEFCDC@EFA@CB@NABAAE@ADAF@RFNHDAHBPEJ@FBBH@DDHF@FENF@DPpDDFBJ@NJVEH@FAXKJDTPDBGF@DDBLA\\DJATMJCDGTKBGJM"]],
            encodeOffsets: [[[121678, 27068]], [[122867, 26893]], [[123104, 26891]], [[123102, 26881]], [[122918, 26872]], [[122887, 26845]], [[122899, 26847]], [[122808, 26762]], [[123295, 26793]], [[122500, 26759]], [[122597, 26600]], [[122653, 26290]], [[122432, 26267]], [[122495, 26224]], [[122330, 26023]], [[122337, 25968]], [[122386, 25960]], [[122568, 25912]], [[122491, 25946]], [[122489, 25944]], [[122479, 25933]], [[122477, 25932]], [[122575, 25918]], [[122572, 25914]], [[122600, 25884]], [[122600, 25866]], [[122778, 26197]], [[122515, 26757]], [[122816, 26587]], [[122847, 26569]], [[122779, 27057]], [[122762, 27045]], [[122794, 27053]], [[122756, 27019]], [[122755, 26998]], [[122828, 27009]], [[122848, 27e3]], [[122971, 27014]], [[123107, 26964]], [[123388, 27005]], [[122776, 26927]], [[122780, 26924]], [[122774, 26924]], [[122896, 26865]], [[122900, 26866]], [[122880, 26870]], [[122857, 26818]], [[122855, 26792]], [[122703, 26916]], [[122688, 26897]], [[122685, 26889]], [[122705, 26880]], [[122597, 26897]], [[122598, 26867]], [[122549, 26752]], [[122532, 26772]], [[122538, 26773]], [[122508, 26742]], [[122877, 26603]], [[122846, 26566]], [[122564, 26378]], [[122535, 26397]], [[122528, 26369]], [[122546, 26375]], [[122686, 26379]], [[122731, 26321]], [[122734, 26322]], [[122700, 26282]], [[122700, 26286]], [[122708, 26284]], [[122643, 26330]], [[122631, 26281]], [[122600, 26328]], [[122566, 26286]], [[122561, 26282]], [[122575, 26281]], [[122577, 26283]], [[122534, 26303]], [[122539, 26306]], [[122511, 26289]], [[122521, 26281]], [[122483, 26327]], [[122477, 26331]], [[122496, 26319]], [[122487, 26291]], [[122494, 26291]], [[122458, 26284]], [[122450, 26243]], [[122414, 26223]], [[122416, 26230]], [[122478, 26197]], [[122483, 26194]], [[122473, 26208]], [[122535, 26263]], [[122567, 26229]], [[122588, 26246]], [[122671, 26268]], [[122676, 26263]], [[122686, 26264]], [[122691, 26237]], [[122726, 26231]], [[122737, 26209]], [[122786, 26210]], [[122722, 26189]], [[122715, 26193]], [[122751, 26184]], [[122716, 26129]], [[122701, 26140]], [[122691, 26129]], [[122691, 26122]], [[122699, 26124]], [[122696, 26122]], [[122542, 26118]], [[122578, 26154]], [[122582, 26156]], [[122583, 26146]], [[122580, 26168]], [[122590, 26165]], [[122580, 26144]], [[122571, 26142]], [[122568, 26189]], [[122479, 26187]], [[122495, 26125]], [[122497, 26125]], [[122499, 26129]], [[122500, 26143]], [[122545, 26107]], [[122532, 26091]], [[122519, 26069]], [[122539, 26058]], [[122556, 26069]], [[122511, 26041]], [[122587, 26026]], [[122681, 26067]], [[122677, 26060]], [[122686, 26053]], [[122695, 26033]], [[122691, 26034]], [[122693, 26038]], [[122818, 26043]], [[122753, 26083]], [[122747, 26086]], [[122725, 26100]], [[122643, 26003]], [[122650, 26004]], [[122634, 25999]], [[122631, 26e3]], [[122628, 26e3]], [[122620, 26011]], [[122548, 26022]], [[122539, 26005]], [[122542, 26007]], [[122602, 25961]], [[122588, 25985]], [[122578, 25962]], [[122579, 25943]], [[122579, 25951]], [[122570, 25955]], [[122565, 25953]], [[122556, 25945]], [[122648, 25899]], [[122646, 25905]], [[122632, 25906]], [[122619, 25901]], [[122600, 25885]], [[122442, 26033]], [[122436, 26036]], [[122438, 26056]], [[122438, 25999]], [[122455, 26007]], [[122420, 25975]], [[122403, 25968]], [[122376, 25971]], [[122375, 25972]], [[122375, 25975]], [[122470, 25938]], [[122346, 25914]], [[122355, 25916]], [[122358, 25920]], [[122351, 25932]], [[122342, 25940]], [[122331, 25960]], [[122336, 25979]], [[122230, 26022]], [[122230, 26020]], [[122245, 26043]], [[122256, 26046]], [[122280, 26060]], [[122299, 26064]], [[122846, 26708]], [[122684, 26856]], [[122684, 26858]], [[122686, 26859]], [[122689, 26858]], [[122586, 25928]], [[122556, 26196]], [[122676, 27184]]]
          },
          properties: {
            cp: [119.206239, 26.075302],
            name: "福州市",
            childNum: 197
          }
        }, {
          id: "350200",
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [["@@C@@DJ@@AEA"], ["@@QDKHAHJPLBJIFCDCBE@GCCGA"], ["@@BFF@@CCACA@B"], ["@@JDFFJ@HCFDDABAAAC@AEMAC@GCGBCF"], ["@@FDJC@AEBECAGA@AACB@BHDAF"], ["@@FcAIO[MOMKQAcDUFaNIJKTMNAFCP@HHNFjTxBHJXJNHHXNfHJDNBFAFEJQFC^ClQNKFIDOB["], ["@@iDoCEBSHKREDQBEDONKTCLHV@@CBABHHBHAJBBG`E@AFOHCHCBEAEBADCPEHKHCBO@GD@LBJBDGHAFDRFF@HEHEDMHMLMHADJFDJ@J@FALDBBBNCPDRADBTfJHNFLLJDDDDNDH@DAJLDDF@FCNK\\CNBLABMFCFIhARFLDTDHJDFBALHJDLBNAXALGNF@DBBF@FABAFDJAFFTIFCBSCG@EBWbMHQLBJBDFDH@H@DCJGFKBAXJTEHIHQHEDGDAHHF@ZLLDBBONAD@DLNL@RCDBBFCHOJSDGF@FDFHBZMHADDBPFBXGLBFADEAQDGLKHMFEHAFDHNH@DABE@SDMFAPTrXBAF@LTLHTLFBLEN@LB@FJDN@JADADEDAD@DDJCNBRUAAKAEM@EFGTKLCHGTGBIACEEBELODIDAFAH@FBDLHBF@DGFBDADCF@FBHHTDH@JERCFCHWFCHMLEHEHACGHEAEGIBCRMD@BFDDDBFCDE@KA@CBCBCACE@EFEESCCC@CDSAEE@EDCFUDANADCJMAG]iAEDCHGXM@EAGBC\\QA_OMHWCQEEIAEOCCEE@CDIDBFBJNB@BC@GCQLGLEBEBKBAJ@DW@]IUEGOGkGGsMkGl]ZgZOZIJKNICOGaOQMMUOGGIIOIKUO}AEQSGSEu"]],
            encodeOffsets: [[[120993, 25143]], [[120906, 25022]], [[121027, 25035]], [[121218, 25145]], [[121249, 25142]], [[121042, 25093]], [[120883, 25005]]]
          },
          properties: {
            cp: [118.11022, 24.690474],
            name: "厦门市",
            childNum: 7
          }
        }, {
          id: "350300",
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [["@@ABG@DFAFHDDH@B@BF@@CHBBCAAHCAGDC@CE@GBMC"], ["@@@FAAGDBNDFD@@EBA@CBCB@DBDAGGA@CC"], ["@@F@@ACAAD"], ["@@EBMLCF@FHBLEDEDG@CAAAA"], ["@@B@A@@@"], ["@@BBB@ACAB"], ["@@BDD@CCA@"], ["@@BBB@ACAB"], ["@@DBFAFCCCE@ED@D"], ["@@KDADDBDADDHCBA@CGA"], ["@@T@BA@AECC@KFG@@DB@FA"], ["@@@BDFBCDDDABCACMB"], ["@@@BBBF@BAJAACB@@ACCKAGDABBDDB"], ["@@FD@BD@@GI@A@BB"], ["@@@FBBH@BA@IF@@EBCC@CDAACDAAC@AFBD"], ["@@AEEBCCEAADDJA@A@@FB@FAF@@BBBFGAC"], ["@@FBDAAAC@C@@B"], ["@@CD@BFBBHH@B@AC@AJ@CCBA@ACCA@CDIA"], ["@@HDBCGAAB@@"], ["@@FHADDBDIAGEACF"], ["@@@BEBAFDBJLBAAGH@@CEEAMGB@DBD"], ["@@OJ@FJAZK@AAEC@MF"], ["@@ADBFFDHABEAAEIA@E@BDAB"], ["@@BHFBBBD@BEACGCDC@AA@GF@B"], ["@@ADCBBBD@BC@AAA"], ["@@BAACABBD"], ["@@@BBDAFDBDBBDPI@C@CGEIAGF"], ["@@RDDAACCACEE@ACAHIFBBFA"], ["@@YDI@SFETDJFFBFOR@D@HDDD@JEHADDBHDHDDD@JADB@HBJFHFBJEDEBIAECA@CBAFCFBBBABBDDBJAHCDEAQBSDIJER@BGDEbKL@BDDHDFDABEBAHBDED@FBFHHDPAFABC@CECA@AAFGEEEAIAIBEFCACEDQ@AMDCC@CNSCGDC@AICGAW@QGA@ABBHADCDGFODAB@FCD@DDFABKDG@GDIDGAGHSJ"], ["@@FJFFFBH@LCJHnBBDTJ`ANLhH@FFD@GDCLCHDFHDBB@DKDABBLHNBdCFGNHHGFAFAH@JCBAAGIOIGICOMGEAEBC@DDA@AFDABBBJB@GJ@FABCBGHBBCDGACCAMAACFSJIJADEAAI@GBEABMEIEOIS@IBG@GNQHENEBKHCAC@AAA@GJAFABC@CCMD@D@BB@FFADOAGA@EDEHIAAAAATSDQNCLQDAHAJDJEJADKDDJHRPHDJHBOJI@ONSHM@EEOBGAAECCCE@IDA@FMAEKUC@MDKBCC@ADCFK@CEIBCDAHBB@FIMIuSqYEGOUKkAaBELCJBNFD@HE@MDCpMPAFDDBXEHKBC@IFCBCAKBGPS@OJG@EDAFAFBBJCZBDD@F@HATIHATBJBFBPAFCXgnkHGVEN@HIVGH@PHF@BAEIAIAKBMACCCYIIEIA]BGACE@IEAQDMHGBKEC@EFI@EAAEFI@CAC@EFKBKDKJMNEDGCCGAEEIMCAC@ADEAYQGMOEEB@JED@DDFADqVIFEBWCWOSEQ@ODGFOHEDEJcZGJCHBLAHEDMCEGEIMECC@EGGAIAAEB@CJYLOR@NIN@DCDGAMGECBAABEFCHEF@B@JHN@FCDGCeBG@EK_@KAKIAIKKECAAI@KHMEEAEBCL@BC@GAAGAAGGCAGGICUICFKAE@@K@C@@HBJALGDEFKBCDBDHD@BCHCBODOLADFDJ@ZIHBDDDD@DO\\EHBDDDJ@HPLFJJFBTBDB@DAFIFG@©FMQSFSNGNUHKJM\\AVBLANDPDDFFB@TIRCJBHJPXBJBbDHLHBHU\\_EI@GAIIEASBIAACCOAEEEOIKAKDICE@AFBNQREH@JDHHJFDBH@LBJHHDNDBLGFGBEBAHALDFHDDDHAHEHKBMAOFIBGCIIC@Q@IBK@GDG@CCCGCAiSGAKDI@MIGMIE[CUBACICBKAGGGQAECGIC@ADDH@FOBE@BGCACAIAEASBICGBKCEBBHMEGCQECCEKDQ@AAAMAKBEAGEQEICGBEKWYCBM@IIEGGC@ASAA@AEC@BHC@DJCFBJOFEHEBCNDNKJ@BBFFBL@DFHDBFFF@B@BECAFG@@EAA@RAHBBF@@FEFBBHFBD@BCBADAH@DJRLF@BYREFGCGGCAK@ABCBEQA@CFIFAHGBBHFFTDFFBJFHKPDHMDSEG@MFEAMOEACBI@EBIJA@CAAEA@KNA@OEI@IDCC@CE@A@@GCB@ADGAEC@AFIB]@ACCAEF@BS@BLGNAHFHFL@FELCBECCECIGKA@G@ADAHBFFFDJDDN@ABIFBZJJDD@HQJ@JAFCBUNGLEBK@AD@FJRADSFEP@VADCBICMBA@AJILERADDHNTFNJBBDDP@HADC@KCC@CB@BJDDDBFADOFBLEF@JJH@DGB@BJLJFJPLNLLBBCD@DFFJDZNBR@DABBJjpBLLFBHLFADADFFHPEF[LCBABJLRL@DADEFFFCFDHPNJEVLJMD@HFIJ@DBDFBFAHODBDH@NDBHBBAFKBCHBFBBHAP@DDBFCDBCN@FDBD@BABIJCJGFAJDBPDFdD^EDCLIGEAA@AFCNATBBIJEDDB@@GJCF@FHL@TPDA@MK_BCHAF@FFJNNBJHDHAHAF@DDBDANMJCNAJDXJVNNTABGB@BPJFHFAX@BCFGRKH@FABCNCD@PHP@DDHA@EGKBAD@FFFBJJLHDFDDDHDAHFRDDBJBBLNNJPJDH@HH@HFDLDDABC@CCAE@CC@G@CFEDOAECGCSBMPHBHDDND"]],
            encodeOffsets: [[[122386, 25872]], [[122237, 25718]], [[121933, 25635]], [[122329, 25582]], [[122027, 26e3]], [[122033, 25986]], [[122061, 25979]], [[122434, 25772]], [[122266, 25758]], [[122516, 25833]], [[122474, 25841]], [[122480, 25849]], [[122461, 25848]], [[122461, 25821]], [[122449, 25855]], [[122450, 25871]], [[122423, 25772]], [[122463, 25792]], [[122389, 25759]], [[122350, 25860]], [[122207, 25920]], [[122233, 25935]], [[122120, 25960]], [[122130, 25957]], [[122231, 25718]], [[122143, 25765]], [[121875, 25778]], [[121906, 25704]], [[122339, 25802]], [[121825, 26342]]]
          },
          properties: {
            cp: [119.007558, 25.431011],
            name: "莆田市",
            childNum: 30
          }
        }, {
          id: "350400",
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: ["@@A@CFUPGBQAQKC@EDCbADKF@FARCHIFEBIAEIK]IEK@O@GHIXEDCAOOEAGFGNI@IAIIGIAGLSBECEECIAIDMAEECIKCGEGEOLIJIHM@EEEKKGQCOBGF@JFF@HCBODOJIBMMGCO@QBKEQEEGE@IDOKKCQBGAAG@GHCHCBCBEAEICKGKMIGE@EDEHGHC@MCG@EFEHABC@CAAGWCAA@EFCBKJAFEBCLGDIIMCD@HADGIEACCCMIE@IEOAC@CHC@CCIBOEGAMOEE@GBGFC@AAAEAOAAEDE@@A@GBCJC@IDGFEDE@GBCNBFA@AGGBCHEDIBALRD@FA@IMgAMEGECWAKGC@M@WCEC@ABCACK@EDG@ACHE@AKCEECCCM@CBAH@NHJ@BECEHQFDFALD@AFCAGH@HG@CCCJADEF@AEDEFAAAC@BCB@BCB@FNDEPAPHTDJNLCLBDABADMBOAGBECOCICCGCAEDKGEAA@MACOGOMCEQGACMSYGCE@KAGBAD@DAACCACBKLULK@IEICI@EKIACKGCQEEBCAEEAAYAA@@ECAYBSGC@MBUMIAEBIFUdMJEFK@SOCAIDO@CCBKBQNMDEBGACC@GBKFMNIHINC@EEEBCNEFI@SEMDEDADFB@DABQAIBCCABICC@KFCFQGCEGR@XBHFJDPFPBBH@HHRKLKHAD@JPRPJNJlAJG@CEMBcGKLK\\U\\YVMHGNGTKTQJOBECG@GC_UOIKAI@GBGJKVBFLJAHOPIPCBKBI@ODOHEFCPKTEFE@GGG@QGKIKSGCA@@HIH@NGNBFPLBHABQGGBCNEBG@GEOCO@CC@CHEFDHCFC@CAECCKEOISoKgIG{M]@EHBJTdDJANCN@TEjEHACBSAGAASNCVGPBBJFDDATEDGf]FM@KICQBMAQYEWI]OQCM@MAWKKMASECAKMOMYLGZFPBJALQBIEMg[SQaQCMAQGKEIMIIWMECC@IQU\\AACCAKCCEIEIFQ\\EBGAACEEEAGBBRDN@TSbYXGLCXOPwNQAAAGAKAK@CPKP@BDBHCF@BLG@AD@FABG@@HE@KCCBEB@DTNBZ@FOZCBA@A@DOCAQRADBDPFFHLB@FMV@D@FJFBD@DADKLBLBF@HENQRW`KhC^GPOHOBWCUCQGKGeGGJSFKJQBOAWIWYO[CCOGGKM_IGODMEOGcGUNMPg\\INF\\FPJRLNAFIDSA[OQGOLGjA`CJIJOHQFYTMDUBMVEDKAOPU@GBCFAZDLCJGF@VFRDFAFBDFFEBK@ABDHSNKDGkIKGCKAGDGFKDGBMOIEQHgJ]NG@IEMM[Q[WK@GFGLCPB`CLIJOHwFWFOD]PIHFLCPDBLDTJDFBRDDFBTNPFTPJLLBDF^RLLFFBPANCHADIH@JDHGJ@FDJAF@DEBEHBDABB@IFO@CGC@CCC@EA@CB@AAEACBWKQAGBCCADBDHFGHCAGOE@C@ADCFUDIH@DDFHFAFBFBLFD@BE@AFDDABEACD@DB@JB@BGFBF@@EBAACCF@@AAAG@IFHDD@FNCNGNCNVN@D@FAFEF@BDJHHAJDFFDbHDDDL@JSN^DBBPLBBD\\JHFB@@DDJFFJFRLHPFN@DFPJL@HDBDCFGDFL@PBJFBLAHHBJ@LFNHD^CBE@IVGJBFDDE@GHO@MIYDA^LL@FA@CDAFANJNBFBBJNNDTMXBHALBDDBAJBHHLFFFFNDFDDFBJ@JBHFFFDBDAJDL@DMAUBSCMNCAIB@BHNEBMDCFNJFJ@FCDK@ADED@HQDBJ@JCFMFONIFQHIFGDAFADDNDDH@NLLjFrFN@PHNEP_BIRIFGJadGLGdFZNNRHNJBHXVLRFNANINKVGZBbHhRXHFPHllNFJLh~X^``VZh`NFRLTHLDLBPATBXGHEPEPbRLRFvLRFJARAhMTD^TJL\\LTB^@RCRYHFJRDNX`RR\x84fXJPBZFZPLDDDB@DFPLF@B@BGAGJGPCNCHDFJDLDBD@JCNINMHAHBJFPDPNFDN@DFD@HKPGFEFCDEFSHIHORWJEN@JGRCHCDCVGDQDCF@JDDBFJFPBBPFNNJ@BB@RDJBFAPGNDJLHBDAVCFG@EAEEG@@FDTBFFDFBJ@`SNEHAFAL@FAJMPGNCFEBCNHL@JBPAHCLBFEBIGK@KCEBK@ADADBRCFC@CBGNOLANNPBLJHBF@DA@CEGQQEE@CBCHCJLFBHCDCDUBEGK@ALEBACMFMHCF@NNZHDHFFDDHC@CGQ@AdAFBBFLDBAAGLCFGFCLDDABCACBERBHEBAEGAEOEAG@KAEASAAEC_EGCCECIAQBE@IBCJILCRLFBJ@PGD@D@HNFBN@HKFCF@LHHADCF[LaJC@CBAHAHCX[B@HBDAHMLI@CAIFGBGBEPKNQFMJK\\S@CGE@QHIBGIKIEIICI@KCIEGGOKEOCCAIMAESDEAEECKKSAAI@ACAEDEFCP@HC@C@CKIBCJCLAJIDFNENAJC@IHGICCBA@@ABCHADG^ATBDA@EAEMGBGHOD@TFDLDBZEFPHJNHNDH@HDFDJAFEB@BBAHDDDADAFKD@TFF@TKHNLHFBDAP@XJPAFED@FHDALERFJLTHHADABED@IEDEEEAEAACAACVK@BCF@BF@BABCAICEECAKLEBGRCFCACGIO@GEGBCGHEDYNCDCBKGQ@AFANBBCDGBGEIJSDDHJXJHD@@@EBGB@FFDBDABKBAXARJNTB@B@LEHMLFPCLFB@NIJJBD@FGJBDD@FCJBF@DAJIHAN@BA@AKIU[@KCC@EXQDC@UEI@ED@DED@NFF@DEXHF@D@JEDEAEAACDA@GMC@@AJQIAECAC@IHUDCDAFJDFFBFBFANGAKBEPMCCEC@ICA@CBELEBQDCB@HDD@HEL@@EHKBGEI@CBCFC@IJ@JDHGFALB@GFEEG@GJ@FCR@D@DE@OBAB@d\\F@FCB@DDH@BB@NFDHBHCFBLG@CFCHBHFJBHDDFHBHFAN@JNFF@DEFCRAJ@EM@A`CNL@JEDAFBDHLHJX@DALKDAVJBF@FGJ@DTLDADKZATPD@@@@CESICECCE@KDGFCL@FDL@@FFHB@BCFSDCDANDBEB@NJDHVIFKDCLEJ@V@FFPBf@DCHADBBJBDDBH@@CCEHOAICCCCC@OPCDE@IGGI@OBKFEFIDCBGFEPCFCDQDCZNFFJDBFTHRNHDFADGDALANMBGPWFBR@DHDBNBNAPKBEEK@CHEDAPFdABCGIDGFCBEFGHCFDD@JGBEDQJBLCHBBADO@GBGJIDEZ@DCLQRWAEEECKACGDC@MIKBMHMJgBCBEGOKFELSJGEKSL]CAEECE@@AAABAACDEACCGCIJSCCCAOHC@@KACDE@KEKB_HMHEH@THDA@ECCBEEKEGBE@KBMFEDAF]BEHAHDDAEMIGAGPMQEWTI@mGoA[DAABGBGJOAYIIAEFSG@@A@KHEDWAGISFC@EFECECEACLKCEBGGKCSBEH@BECIMQAEBKGGFADILO@AGAC@BD@BIPO@KDMBOJGAIGACBED@BEBGDEAYEGO@IGABJ|ADEDEBKP[VGDKMU[DIACM@CE"],
            encodeOffsets: [[121252, 26511]]
          },
          properties: {
            cp: [117.435001, 26.265444],
            name: "三明市",
            childNum: 1
          }
        }, {
          id: "350500",
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [["@@D@ACC@BD"], ["@@DAJBAEEAG@AFDB"], ["@@CB@F@DDBBDH@BAAGEGC@"], ["@@BAAAEBBBD@"], ["@@HBDAACG@A@@D"], ["@@@AABB@"], ["@@DDDACCC@@B"], ["@@@A@B"], ["@@DA@AEAADDB"], ["@@B@@AA@@B"], ["@@F@B@GA@B@@"], ["@@MHIBEF@BJFBDBFCJ@FFFN@DZDJHDR@BBBDFBDBDAPKVIAKCG@MEKAAI@ABADE@IGBECGICGDC@EAIMEA"], ["@@BAAAE@@BFB"], ["@@H@AEBGHAFBD@AEICGFE@BFEHDD"], ["@@B@DCJ@CCGACDC@@DDB"], ["@@ACA@@BDB"], ["@@BA@AC@@BBB"], ["@@GAADLJH@@EDCAAK@"], ["@@BBB@ACAB"], ["@@@BDAAAAB"], ["@@BBBACA@B"], ["@@FB@CC@AB"], ["@@DBDACAC@@B"], ["@@@BBA@AAB"], ["@@BBBAAAAB"], ["@@BB@AAA@B"], ["@@BBFBACCCAB@B"], ["@@DDFB@CAAEAAB"], ["@@DBAAA@"], ["@@@@BAAA@D"], ["@@BDBAACAB"], ["@@BBB@ACAB"], ["@@D@@@AAAB"], ["@@BBBAAAAB"], ["@@BB@AAA@B"], ["@@D@@AA@AB"], ["@@@BB@BCC@@B"], ["@@B@BA@@CB"], ["@@DBBA@CC@AD"], ["@@BA@AGABFD@"], ["@@@AABB@"], ["@@@AA@@BB@"], ["@@HC@AC@CD@B"], ["@@@BBBBC@ECB@D"], ["@@AACAAEEAAIC@AJBDDBBADJBFFBD@@AAABAAC"], ["@@@AA@BB"], ["@@@A@ACB@BD@"], ["@@ABBBF@@ABDD@AGIB"], ["@@B@BGAECCAD@HDF"], ["@@@B@BD@DA@C@@GB"], ["@@@AC@BDBA"], ["@@DB@CAAAD"], ["@@B@BAC@@B"], ["@@EDBBFA@CA@"], ["@@@FAB@DCDBDBBBAF@BA@EBCHA@AGGGBAB"], ["@@@BB@AA"], ["@@A@@BBA"], ["@@ACCAEB@BNF@AAA"], ["@@BAAAE@ABHB"], ["@@AB@BD@DA@CAACD"], ["@@BAAACB@BD@"], ["@@BAAAC@BDB@"], ["@@AB@BBABBBAAAA@"], ["@@ADDAAA"], ["@@@BB@@AA@"], ["@@DBB@AAC@"], ["@@D@AAAB"], ["@@DBB@@AAACB"], ["@@DAA@AB"], ["@@B@BACB"], ["@@BBBACA@B"], ["@@@BAA@BD@@AA@"], ["@@BBBAC@"], ["@@D@AAAB"], ["@@@DF@@CCAAB"], ["@@@DDACA"], ["@@@@D@AAAB"], ["@@BAAB"], ["@@FDD@@AECCB"], ["@@BBD@BAG@"], ["@@BNCHBDD@BEFCB@@DHBH@DCDBBACCFGBKFEDAZAFA@AAI@EBCFABCBOHIDAHDHA@CIMAG@MFMDEH@FC@E@GCEEAC@@BABAACEEABEBAFIGGC@CBCAAABG@AEEQGC@MGUACFBDHDJ@BDADIHSBKDKHKFY@gCWKOICE[sGGGAG@MBWPOBAHGF@FWNAD@DDDN@DB@DEHBDHBd@@BC`I\\CHCDKFABAJDLNJTFBHFBLEDCl]NEdIJCNBPLDJAJMNBBJAF@BFLFBFAFEB@BBB@FCN@FRBRH"], ["@@D@A@A@"], ["@@@DD@@CC@"], ["@@AB@BH@@CAACB"], ["@@BBBAA@A@"], ["@@@DB@@CA@"], ["@@@BBAA@"], ["@@BBBAAAAB"], ["@@AAABDB@A"], ["@@DDJARBBA@CEABCFCNCTFJ@FEDMFAFFD@JMJGNMLEHAD@BDAHCFMNARALDDP@JCDBTPL@FENIVcJEFAJBVNNAD@THZADB@FB@ZBBBFFDBFARFHDDLJBFLJ@JDJFL@VKLKDADBBDIDBH@LDFZHNTBDRHDFPNPHBD@NBBHFCLBFHDDDDJDPAFBHAPCNABCBKAKDIMSCOGOBCFEMA@ADA@ADD@BBEBCFBFE@CFIBDD@DGHG@BHED@BKCEBECGRDFAFI@MGG@AB@DDNDDFFLD@BGFBDH@FCL@BDAD@BFDXDN@D@LHXBFDFHBNNh@JEBC@KQABCJGFADHH@BEBMAAD@HCFEFCH@JIDAD@H@BF@FCBBBPBFBBD@HEHAF@PFBNFHAPDJ@DGD@DBDFP@JJFDNDDFBHJBC@GDCJNCJKHADEFIBALED@FBBXDBHDBD@BAFGFEH@NDD@HGFGFCF@JHLNLHJDBFAFADGDGD@HBHHBRALDPLJCF@FHRFLFRAP@HDNNJAPIPCDA@GEE@IHEPARDLHFLFFN@JGJIPKHFHFLDDJFFNBJCJBFDDFAFKTBHHJJJJBJ@HMHEFBPPDBFCJWHGP@L@JFL^FJJBFAJEDGBQ@ELEBCDaFCD@RLRBHAVODEB@DKIA@GLEBAJYFI@CGEE@KMGCKFC@CK@MCOUW@EFENDLQHETGFIH_@IDGJGDGBQAA@KHURQJEHALFDAB@HINIXEBIVOBKLIJID@HEHKLIDGBC^@HDDCDE@CQKIKBADA\\KFEGOEEBCBCKEAGKEAKioAIBA@CAQYMICEE@CDCAAKKKMIOIEEECGHA@CIG@E@CFEAKPEBCAECCIC@ADAD@LDD@BC@GCOACIAEMMSCGBCFQJKBIB@NAJDDABC@UFOTEBCIQ@EBCL@FAHKVMDABE@IRI@GCCIIAYJEBAM@CCCIGI@ABGDCF@B@HLDJDFFDDADGBIEKEGBGHMAKT@@AFEDBBD^@JABED@BFCH@BDA@HB@F@@DDDJCJ@PFB@LMB@BFDBB@JIFAJ@DAFBNPFBNEH@TFNCCGLOEGAIEEEAMAEEAGHABGJEFGBBDRDABAL@DBHHHDFETMFEKEGMAGDKDA@AACGEAAFE@EE@AABG@QBB@FH@BEFD@A@AEEAEGCCEK@EAAE@ALICMDMFAFGPEAIDECID@AGD@BFB@TB@BHDFHJJN@DAXZFLHAJDRFHFFBLANBBB@BCRBFHJhPAGFAHDLAJDTAFBJBHDAHF@PA@ECGBCD@HJFDRBHHBHALJDBDPADAZBNCLFDCJADKRCJIRCBGEE@EDEDAHGF@bFHADOBCVG@mBKEAKIGCOKYAAE@MBSBIFANBFGRCBCAEMGYIEEICSIG@KDUAEE_GM@qST]FGJGJ@TBJALEHMAYHKVKJAF@JFHBHAPIHAL@HBLHJ\\BFDBP@DBLJRJH@JIJ@BC@CIMIKIE@QEEAMHG@CCAI@@CDCBCGAKAEFG@EKAGBMLUNID@HDDADE@OD@PJFBDCL@JAACBC[UII_C_KCD@BFBABGB\\G@GAIE]cAEBIDGLADADQBCDARBFCJKDCHAJBHDPDP@NGBABMHIBCCEWGaEKCA@DDABA@CCC@ABADCBGAE@KGIASF]FMFGJIB]FWAGCEEEAMKS@AKCCRCDCAACAAGEEIAGLKJIHMDMAIGCCWOUGI@WCGCCCAGBEFATAHCBYDYDKHAJHV@DGDC@CAMSIEUIkGECCU@GJgFEJAHCFIHCHCJ@FBRJXIRBHF@DCJ@BHNJDV@DEBCGSBODKDGJEHANANBBAFBHENBJABAHBH@@CEE@CDCEIDE@CCCGYEEIAGEAE@C@EAAIABEGGGCABKJGCCGDANBBCQOC@@CEABKB@FBBAEGAEA@KCAGCACBADAAAADABCEG@ECAK@EGGACEGEUEM@IDGFIPCJMEKGCGE_DiDIFIHCJ@FLBHDBLBBA@CF@@FBBDABCBmIQ@MGUCGIGQAMGCGBMBIAAG@EBIAKI@COGKOA@CBC@GSCGIEMEYCUMCAIDCDE@KAEBADRRC`AF]NEFALDHHFJBDBBF@FCFytSPMDN_BeAMGYUEC_IcMIEEACCTI@ABALAFKFKHDR@HADA@IMEACACJ@DFFDDFPJBFFDRGXPNB`[RADBH@FWNGHCDBF^jBHINCDMBCBEVCD@FFFTBDCD@DDFTEF@FDFDBDADAB@@JCHCDEACCAEC@QNADHJBFGFDHGBGFKFGNEDGXEDQDIFG@SCGGEAE@CDCBEACHE@GACKEAG@EBCBCJKPAFFFBDAJSHGHKDSLEH@FFNLBBBQVMAIDCCC@CBCFCBIBM@IC@EKAM@KFEASKKGKSE@ABqWOSEBCN@TAFCBG@GMECGBEFGNKLCHBRCFEBKAWHEAAOCCGBYNGACE@EHETCPIDGAECAQDK@KM@CBCPMAAKCYKE@GGCBCHGFGRGJSFWIABELIHCDG@G@ECACAKI@GHIBIJAFBHCFIJIDAABIAAEIGEAE@ICCCBKLMAGEEAKDULG@IEGGHOIIDC@CIECGCAIDKB@DCD@LEFE@AACICECAQIE@IJBF@BCRADC@ICEDIDAHEBOBKFE@OCOIGGEMCCECYGMEGGEAMBIJEBOCINKAC@IJGFGBOAENIHAFBD@FCJ@J@FBBRJFJHHBVCDW@ODGF@JEN@LJJJPJHfNHDFFXL@DCJBJ@FFBR@JDHALIHIF@JDDD@HJNJBPAF@FXDFHBZPFF@JAFYLLPADGN@VEJCDE@KGGKC@QVGFO@SNGHCNA\\BXABMJUHa@ADCJCBIGKTAFDH@LMFK@IBIFCHMDI@EDON@BDDADEDO@ECEBEF@FDZEJPLFFD@F@@FHFBHFBFAPGF@B@DA@EB@LCB@DDJAF@FFJVDLCNGJKJOHDf@HELCD@DLJT@HBTPRFVLLJFRHNJJ\\LFD@FIFBFNDLR@JCPDRON@HPRFJBHHJOZ@JDL@HDFDDLDDFBNFNHHLBFDGJELALFPBN"]],
            encodeOffsets: [[[121802, 25820]], [[121740, 25685]], [[121899, 25675]], [[121684, 25454]], [[121623, 25425]], [[121623, 25333]], [[121555, 25259]], [[121539, 25232]], [[121508, 25224]], [[121270, 25180]], [[121098, 25050]], [[121068, 24987]], [[121114, 25038]], [[121002, 24979]], [[120996, 24966]], [[121182, 24971]], [[121184, 24974]], [[121622, 25426]], [[121505, 25152]], [[121225, 25095]], [[121247, 25105]], [[121281, 25132]], [[121310, 25121]], [[121294, 25099]], [[121308, 25078]], [[121313, 25080]], [[121224, 25052]], [[121217, 25047]], [[121312, 25017]], [[121314, 25021]], [[121048, 25070]], [[121078, 25061]], [[121087, 25044]], [[121071, 25039]], [[121068, 25037]], [[121054, 25036]], [[121052, 25033]], [[121055, 25030]], [[121034, 25014]], [[121843, 25475]], [[121818, 25469]], [[121820, 25470]], [[121739, 25478]], [[121837, 25804]], [[121861, 25787]], [[121838, 25757]], [[121820, 25703]], [[121800, 25650]], [[121798, 25647]], [[121880, 25681]], [[121897, 25672]], [[121871, 25658]], [[121870, 25623]], [[121876, 25629]], [[121885, 25631]], [[121885, 25580]], [[121891, 25561]], [[121897, 25564]], [[121836, 25535]], [[121815, 25501]], [[121685, 25431]], [[121692, 25439]], [[121642, 25448]], [[121650, 25451]], [[121624, 25406]], [[121606, 25376]], [[121609, 25377]], [[121549, 25420]], [[121535, 25397]], [[121552, 25256]], [[121505, 25148]], [[121483, 25130]], [[121401, 25127]], [[121359, 25192]], [[121301, 25152]], [[121289, 25160]], [[121259, 25116]], [[121278, 25108]], [[121282, 25109]], [[121304, 24997]], [[121255, 25103]], [[121040, 25021]], [[121071, 24986]], [[121034, 24979]], [[121012, 24979]], [[121005, 24963]], [[120979, 24957]], [[120982, 24961]], [[120987, 24961]], [[120544, 26125]]]
          },
          properties: {
            cp: [118.289421, 25.108853],
            name: "泉州市",
            childNum: 90
          }
        }, {
          id: "350600",
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [["@@@BBDH@ACGA"], ["@@@DD@DA@CAAC@AD"], ["@@@@B@BAAAAD"], ["@@BBBAAAAB"], ["@@AABB@@"], ["@@ADBBHADGA@EDC@"], ["@@@DBA@AA@"], ["@@@DDABDD@ACCCCB@@"], ["@@ABD@AA"], ["@@CB@DD@DA@ECB"], ["@@A@CDBBDE"], ["@@B@BAA@AB"], ["@@@BDACA@B"], ["@@AFB@BCAA@@"], ["@@PHDAACECC@EAAB@B"], ["@@AACBHFAC@A"], ["@@BAAABAACEBCBC@ADBBFAHB"], ["@@BBB@AEA@@D"], ["@@CDAHFABBF@BCFBFABAB@DAAEBAA@IFCGIAA@@FAB"], ["@@AB@BB@DBHCCGEDAB"], ["@@FCFDBIFC@EGBCFEDC@@HB@"], ["@@D@@AA@AB"], ["@@@DAF@LBDB@BADG@IDAACDA@AACCACDCF"], ["@@BBD@EC@@@B"], ["@@BACA@DB@"], ["@@B@DA@E@AGF@DB@"], ["@@RKNGXaFAH@TDDAJEESBECIBEBA@EAECAE@HMBKBWAMCKGIBKEAICCGCSEKBQJgDENEBAAKDML[DM@ECEKCBI@CCGCMCCICKKMEIGSeCAQBOCMDAACABK@E@ICIIEBCNGNKNGFCFG@GEECQBEHGACAI@KHCP@DALGFGDOBCFAFBDADGPGBEF@H_AABIAGGGBADA@@GUDKLSPMFCRAFCLQZIpDXAVAODC@EGiBQCKEGGEAEBCJEJDTBVAJAPMDEBUFABC@]B@XGJGDICQ@GTSHKBOAMCIEEKEGAcBA@AaAEECGCQAEKCIGMSGEGEcKKAM@EI_a@mIKIG_QWQa[UWOUAEC[FaBSCMQ]EOIIUKSCs@ICWcmeeeIUS}IMeWMABqDYAWIMK[uMBGDGJKDGAMCGgeWe]IOMGK@I@UJULqHMCcSc@CAO[GU@IBEHAFADCFO@QCGMIKAiAICGIEI@aBKPOBUACSUWGM@OBIAWKyWM@G@SFI@OA_G_CM@QBGHGJEXiIßGAÀBJCHIFEAIBICGHK@GDKJMRIEADC@CAG@OIAAERKVKBUAIHIAABEJKLEPEFE@GCQFEDCJ@NBFEF@DBJCFAFDFAJBF@DCJ@XCJILE^EHENSPIJBFCL@BRPEPCVEJAHABEDAHABYHIFIBICEIQ@OFEFEJBBDDDBZACFBFBJFD@BABIBAB@DDFCH]LADDFBD@HAFEDCHBDHBFAJBLHFHBNFFBNCJHNORCF@FBJAFBDBNLLBFIJMFGAKGKHAD@DDN@FKJGHGBCF@DBBLBDBBFBJALDBBFGBMEG@ABCNIHADBHC^BLCJAJBFHLFZBHJJDFJBDBHNHFJLFDR@DBBHHHRHDDDJJJBDAFGJWLGJCBKAGJCJOJ@HU@EAQFANDJF@@@BRAFELDNAVFF@F@FA@C@@B@DDF@DGFIBQEC@GFCnBJLNCFMHADAXYT@FBLRZ@DELL@NATDFBNPJpFTBRIbEPQXEPM^GVC^DJRLN[D@BBHP@JGN`Xv@NA`GTHVXJRBX@TDP@PS\\BXHDdELNFRBT@BMVML@DFJBJDD@PCDUB@LCHMLL~@`AZBLHL^TJ@HHFJA\\BNFJNDJGBGDSCY@IBIFENCTJBDJBLBzIN@NLNbHLXRFHB^BT@NBRHJVLDJF@LHFL@DGB@NKBCDGT@HCJBHZGR@JANUDCJAFBFJPTAPHNBFDDF@BPCFUB@JDFlNTJNLJPNFLGBEMO@EDANHL@LOHAHDBAD@HF\\HLHPCLENCNBFDNNLFTGP@fCDBFCHELMNMHC^ARB^AHBJFFRIBNJJFPHJFNBbBLFhOfkXEF@HJNBd@ZDDNCDB@LDFPDVAHDLHHHBZFFBBLMLED@BFIX@FBDF@N@FICY@EFEFAFDP@FCBCCC@APMFCJ@NCDGJEJAL@NE@KCGBELSJHDADIBCb@VGNIBAAWB[DMHGTMP@HERUD@HLLHF@DCFI@UHMBCKOZKBE@IEEYOGACEEWE@OBIAIM@GCCICE@GJKJGBICQ@EA@EAIDI@CWKEEGCeMIGIOII@KFM@IHEPCX@DCAUGGEIQIAA@E@IDI@EACBEJGFMPBHAHEJID@LBJMPDFAJINAFBHHNFZHFDDDFNHHPJPDF@LEPAFABGJCFCJDD@BCDQ@AAEJIF@RJDBDFDJBBF@FE@KDC@CLAJCDBDHJF@DCDJJGPHHJFH@VKLCFBHFNBLKDADD@JBFHFFJBBAJBBJCJIDEAGBEJIJAHGJB"], ["@@JE@EA@AAA@BHED@B@@"], ["@@DDFBBBB@@EECC@CCABBD"], ["@@BDD@@CAAC@@B"], ["@@BDB@DCEAAB"], ["@@C@@FCFBBCFDB@BAFA@AF@DBBD@LGBEDAACEA@CBCB@@ADCCCE@AA"]],
            encodeOffsets: [[[120963, 24945]], [[120535, 24416]], [[120559, 24424]], [[120918, 24768]], [[120921, 24767]], [[120968, 24911]], [[120975, 24931]], [[120916, 24946]], [[120923, 24946]], [[120861, 24766]], [[120641, 24511]], [[120694, 24484]], [[120562, 24394]], [[120570, 24387]], [[120585, 24385]], [[120560, 24355]], [[120557, 24362]], [[120543, 24340]], [[120537, 24344]], [[120521, 24355]], [[120509, 24356]], [[120498, 24353]], [[120494, 24362]], [[120517, 24095]], [[120494, 24116]], [[120293, 24163]], [[120743, 25468]], [[120278, 24145]], [[120239, 24127]], [[120243, 24135]], [[121075, 24739]], [[120987, 24903]]]
          },
          properties: {
            cp: [117.561801, 24.310897],
            name: "漳州市",
            childNum: 32
          }
        }, {
          id: "350700",
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: ["@@NCDCHMHE@GCIEGCMACSCSUECKAGEU_@KBAR@HDPHJ@VGJGDIBMEYEMDOAIDCSIGKCAC@QBKAEAEECQKEKDMGAACICAEGCGMGGKI@@A@]BGJCPODIAEIOES@SFGHKCCBGCYBELEbeBKH@N@LCBAZEhQBGECAC@AdC@CEGJK@C@OJKFCFAKKBKNEDI@GEEAEAMCCCCROBGBCCEFQFGLGBE@OFKBECAE@ICECFKCENEDEJ@BABOJKJSL]DAHAFCJMJKJBF@AIHI@CAEG@UBM@CAAGJKBEAECEGE@EBCHI@EBELKPIHMJKBIEKDCBAAMFCJ@DABCAIGEAMCIBGGGBE@M@KFEHCCEQCGECMIQMIYEKUGAEK@GBAJEFBNDBBFCBKAA@CBAFA@CCCDCLDDGDG@KCC@CBEJBHEJSAIFCFAX@DBJ@NBD@FADGVEJKFDJVAFADCBNJH@PFNAHDBHAFDF@DEFEDCD@FPJHGHEN@XDHAFGLEPSFCD@DFVGBKRKDBLJF@FAHKHAD@HDDFFDJHNFLJPCHCFGFSACO@ICBCHEDC@CCKAIAG@ANIF@HDD@LAFE@GDAHDDBJEFBFDFEB@J@JFD@JENEFGJBJADDFDJAPGZDFEBBJD@RFDBABE@I@EFDHDHAFAAEAMDOFMJIHGBOMSKEM@CC@MDM@EICEA@GAEECAEDG@KBGUBECAIAAA@KFCAGEM]DE@EAGEA@WBKDKACG@C@BCHCBGFAF@D@LSTONHH@BABEDBLIDDFA@AACAELEDILGBCEKEGAIC@ABAJIBCCE@ACCAAD@HCFEBEEABGHBNAD@HGDGAKFI@GHE@C@CE@GG_UGIAKFCEDCCE@K@K@M@GEI@C@AF@LBHADEDIAKIaAGBCJEJ@RGFCBEEEAGGAIICBEHMFCCEAE@GCOCECAOFGACCCEBECUGSDKAAABSBCJIFYACaE@LEDAB@FCDE@C@AD@JADMDKJAJDH@HCDWBGDABEA@BC@ECC@ADAAACG@AFBHA@IIA@CHIFE@AA@GIBEAYBECIIIBGHEGE@CBAFGBCJNRDLOJCFDTGhCHEDKAE@SJQ@IBMDGHE@ECGG@CFC@AAG@AD@LFAIMY@KFAJ@JBFDAM@MT@@KDEACCAIQGCSDGFAHC@I@AAAEAKGGCEQEGEIWAMQMGKIKCICOCKSQCAEGKFEBECIIAKBGFEAKGCCCDG@CWKIGQEWCQMEGBMAKGGKCU@QFQAMBYNGAOMKEIAODIHEH@LKHSAEEMYFIf]J]DEHI@CEAAK@IAGMKHSCCGKOEIBIEIBGDYCEEBEACC@G@UAAAIWDENIFGFGBI@GGiEEI@CACEDE@ECEAOGIKUAI@[CGKG@IES@MC@GDC@ECEDC@KOCKDEKIEIACDCJGVAPGDADM@EKMBKCQEME@CGBG@EEMHQ@GEO@KCIBOCI@ECCDGFILEJAHADAFBLHLAD@FE@EMOFM@IYmHW@IEIGMEGE@C@AJC@GGWIKEECEGCEAEBIAEIGBAJCFEDGAIAEIEEKGAGG@K@AAABQDA@GVGDC@OAUBAJADDBFDDPAFBDHAFFBDC@CEM@GDCJC@KCGL@FDNPDBD@HHFBJALMFCRCTMLCLG@CCEFOSMCEFEFIBCAGFKHGBEBOCOFGAGNeAG@EAAE@MTKRCDGBOAOPAH@HCRA@KAGDIACRAFIHC@ECIFELILHJADcBOECBGF@DFLAFOLMBMACACGQ@EAOXAHMNKBCBCHCBICQMSGAEICEEYMCDCREDODEFAHCDEJEFAL@PHJJHF@DCPOD@DDDDBJGPDF@DG@CAACAICAGBCDe@OAEEU@I@KFCDELUJCGMIA@AFMCCBCDETADA@EG@EK@ECK@EDCH@LDFFDJDFT@D@@C@SOYBCLCBSK@CHI@EAEUICBKLCBW@GIGKACBEFC@IMK_D@BFNI@QBEDCFE@ME@IBMGEGACEGCIAGEGAED@DKHEAGDGAEC@MAAG@CCA@EDE@c[A@AB@PCFC@Q@EDI@@HFHEF@HKAEBGHICI@@JEDAD@DFJAHGL@FK@GFC@GCA@CDARKFAF@DDB@JFDDDONAFBLMHEBEAEACEEICBCDGV@JBDFDJBIR@BD@HNB@DCBBBFCFIFC@E@WGCFE@MEC@CFC@@FFJ@VCDWR@FDD@LV\\LJ@BABM@GBIJCBE@IAEDC@ACHI@EACIIMJA@KEODKEGNKFA@A@MSQIWBABALCBCAEEA@AH@F@@GCWIGICCITFJAHCHADMAEB@BHRALCDMDCZGFDHHAHFP@HJBDEDQDAHKFBLFDDFBJADABE@@ADE@AULBDDBBBBFFFCFJFC@AFCBGBSGIKQEKFCBEGC@EFOBWIO@CBEAKGGMSLE@SEC@ELCBCBCCBGAAA@EFIBECGCG@MCMGGIEOYFCACKSEC@GPAHNHBF@FCBSA]BCHGBAD@BB@DAJDGH@JIDMBMFCEIJKBIDADLJ@D@DGDO@EDCFBFBDJ@BBLTDLFFFBTCBFJNDBPDLFHPFHDJ@LDJJJJFJLAHGJ@RHF@D[TILENMROLAFAHEHBJ@DKJGNCBGAA@W\\GDGBAB@DIDKbE\\CDGBKGE@EDGLM@EAGMC@C@OHI@EAQKKDIJAD@JAFBRDJDFHD`FFDBBBTBF@LBHPFBFFHABGFQAAFBDADCBKCEDEHKDBHABKCAEEAcB@BHR@DGDCCEECGYGMME@GDENDNABKF@BHLAFCVCDGDEAIKGDAD@DFFRRFH@DCBE@GAKIOAMMKBMPAH@DEDQDCACB@BALDF@LHLAJEFKAGDOBIAK@MGADEFMDOHINEBK@EBGBMF_TI@EAECAECS@EH@FFFBH@DEBUACKGCIHMBOAECI@QAAI@MMOEAAEOEICAICE@CDCRUHCDGDQDIHM@IFQXGPGJETCFEDEFOHGLC@CEM@ECOMOCIEGAGBMNMJIDC@CACKEIGCMDODEDCDBLCDE@OKCEA@EX@JADEHET@NDPFHRJDNTX`PDFDJR^HDHGXHDFDLJDFJVNFLNHBDCJLL@RDDHDHAFF@LFDCHDFFRCDG@GBCDGNM@IAQDBJJP@FCHU@]LGCA@IHGLAFFZCPFRADEJAHNF@RBF`NFHDDBJHVBFMRAdCBIAMJCDBNCD@DFNIHCD@FBJJLFBCFEBAJCHEDALB`APEHOFEJBJINCDCBICEMMGIOGECAGNE@MCIFG@GBMHGJAHFPJjEHAHCDIDAB@DHJ@BOLEJEFDDFDBFJEDBFNFJCTLPPHHJFBL@JDPCLILOPM@CAEBG`]DAF@JFLFABCBAF@JHBDDSdKJ@@HTLH@JJBHJFDJ@BCJAFGLDL@PGJBfQRFFFN@JDNA@@AF@HBPCH@HBJFHFBJANFNBN@LCFBJPFDFBNCFDBNFJJJLDBDGV@FDJD@LGV@JPHHBF@FQb@DD\\HfCHONO@GBGDADF^DHCD@DDBDABCFAJFN@HDLJ@LJJHLHBH@DAJGDCBIBICMBECE@GB@HCHGNBFBDD@JJLPXXLNCHDLJT@PHFH`\\BJDDDBFBHDHPHDFJNDD@DE@CDCJABEB@HALRl`FDDJDZVPNBDA@KFEVGN@FCHCDGFCBEGQDMHGHCHNLHNGCMDA@SDKAECG@GBCBANGFOHGFECYBGBCFA@AFCV@FEvQLITGHKHQNID@JHD@HCB@FDHJHBBAFKJGHOTMHIFCHAF@BBJLPJFVJPJFFFL@DDJTJLBDAFEDCJBNFJDLCJAJBFDBNDHFBJHFJDJPLFXFJFZPDFJNFBDADCDIDANJJBTHFBRCHFR@@HJJFJPFH@FFHHHBF@VGDADGFCH@ZHLHFHDPPPDALSHDH@DAF@NLRBD@FCFKFAB@DBDBN@HDNEFEBODCVCL@JBDB@FIXDPAF@JBLFFLHDNFAHEPAH@JHBDALCHIJARJF@FTL@DDDN@LDJFNGTALCLGL@HDB@FEF@LFJHDBFAVFXRLNTMFBVRPHN@HDPCdPFAJCLDVAF@BEDAXFFHBLALFJBHEJ@NFFRF@BADILADBJGLBBBHRFPLDDIP@HBPADCBSBKFUCMFIZKDQLIL@FLHdRB@JAFLFFBDAJBBRBJD@FHJNJD@DCRDJH@DHFNBBFBBJFJBRNJ@FDB@BIGQFEDQHBDA@EEEBAT@BCII@A@EHBDEHCHABAF@DCLFLCHFNKJEHNND@FDF@BGAABBB@FC@CHGD@@DHBLBDHBFHD@RSHAXB`HBB@L@F@DBBTGXFLCTBHCFILKBEEIBMJENFZAD@HHNBNZN@JFF@JIJCJ@LBNPPZHVLPHBHAHFH@HAFCLKDE@KCIAG@KZEBE@O\\[RG\\GHE^@"],
            encodeOffsets: [[121647, 28921]]
          },
          properties: {
            cp: [118.178459, 27.335627],
            name: "南平市",
            childNum: 1
          }
        }, {
          id: "350800",
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: ["@@JG^OPCXExEPGJIDKA_DOHKHEL@\\X\\RNNJFH@^MhIRGJFNPHALCHEHCLBHDJLHlLCTMCGBAL@FAEEACBECEEQ@UHEDICKBYDEHAV@POLBFCNUVANCZSREPGJIDIB_HiPKRH\\PTBJCBEKMIQEOE[JMh[NOVMdHPHNFPCJHN`HLPHDDP\\XZXJPBRALITEHIfHLHRHVDXDPAPGHOD]LgX_RQFM@GAEAKLKBC@CACIE@E@CNU@EKAEGOEACBCRQDBCPB@B@DAPY@EAYSM@CFADALDF@@GH@BA@EBCH@AKE@GDCA@ALODOL@LBHBBBRBxMPODWHKZWTa@SCMAQHAFBFFBDHBFAR[JEJFDFLDDBBD[BRV@JDDNFJXNJFJHLBRDNbRTRh\\FNAJKRIBOAYEKHNZNPBLFDBTLNXLNBN@RD^PXJZFBRANBJBHLJN@^EHeFCBSCCIEAAHODUTMBBBHATBDFGFi@SDMBMCIScAIFG^@|NJHLhTpPJLFDDBF@DEDGDECGF@DDDP@PDHFH@FADMHARHBAAGOKAEHM@MJG@GB@HDLTLJRHH@HHF@FELSDOFEPGPCJ@LADAJOPOBGKIAELUHIHAJ@LBPJ`VHDH@FDPARILSHSHMNGZUV[L[LKdHNAFFF@@A@QGaIMQOIOC@GBKLQLGGG@AAEOCOEIA_HQDFRHDELED@JDBAAMEOBKFKHIECKAGGEMAMCEKCEGAICK@EBGNUGIAGEIOQ@GPMCQDO@IKQMCAEJE@EEC[KIIGMEQKIUKQESOGAS@KI@CDCFK@GCePGLIHIDMCKIUEEE@IBCCA@KDA@@FCBA@E@OHEBEAAGGE@EE@C@EEOKS@AC@EJWAEC@KFKNAAEEAYGGKGGCUBOCCE@KCAMDCC@YAcIM@GFElWPeEgAKAaEMGIEOIIAMJEQIEGA]BQA]BGDMNKNGFEDCAeDO@SHKEMMECMAMDKFODKG[GGEC@ABGCGBKPK@MGCB@FNPAFKHMEIOMKSIkMCE@IVADEAOE@CCAEGMBOOSEIEAIBCDMVIBQ@YHAGDI@GHSDCLA@MHA@CEKKGE@CIUKGIAQ@MASA]EGWQGKMaMKM@yJKAIAACSIMDEFAJ@JDZE\\IHMCEIAMB[EIGGI@]SGKAKBY@_K}NKDG@KVADC@OCCAIEI@CNKNU@AASEQKMcFGCAWT[@OCO@SAWIQKMIISG_HMBu@_WHM@IGOAAC@M\\QKCID]HUN]FORWFOJaAQESIoMOEASCMBK@FK@CCEKXURCLE@EAKGCHCF@TIBABKVCFOHABO^@DHFCLBBTCBBLHDF@DMPIROPOT[SKEA@@D@BHH@B_NIHORINGN@FBLCBM@[XCH@JBDHFNHIXEHBFjjDHFHBHPJDDDDCRBJFDFBFFJDBBDREJCLQZIBIASDGAQQMKQS@@MHGJAFCBM@I@KEKDGAI@CCAEAEECUHICQBQ@UEEAAEC@QAEEG@CGAGA@CBKBEHGDEAE@SNGBGIAKIMSGIEAE@EAEQCAEIACAACSAKEOGG@KLIDIFGLHHAHFL@JBF@DHFBHCFGBAJIJCFCHAV@FDH@LCFSVEPGFE@GEQD[KI@IBGFCLANCHEDI@AHABQDEDAFDFHBIJ@BFHF@CH@DOPIFCFCJCNADC@KGE@I@EFBJMLAFFRAHHHFDJBFDJ@NHXJFF@DILI@ALMAEBEFAHDNIHDDHB@DAB_@ECC@@ABGACI@GFGCOSGEBE@GCM@MCKGGI@CACGC@@JIGSIGIOGIKGAYEY@MB[MK@IDOJ@DBHJNNNJD@H@DGDKBMCECCAMHABAXADADIDELCDODIPGXGBMEGKWUGEQSGAOAIF_DIDGCIBC@CCEDG@CABIGKA@GFBFALCFA@WBAEEAEPCDI@KDCFEHDHABABGEE@@BDBBDCBAPCFQNMPGFGBA@SQA@KAMHG@C@CNCDAH@FC@A@ICA@CFAEEAGD@BMFCCEBCCAFCBI@I@GBI@UHG@EAABAFADQPABGAKRCJGDG@EBEL@RDHVJDADGJCFODAF@JFZKH@FBBBAHMTedaFCDBHIFAFAF@NAHLJRCDFBJJBBFBDDBDAFHPDLGDDFJH@DFADKJAD@HO@@FFDAHHFEFEJIHMFKBW@EBAFBPFHOLCFAD@NDDLAJFDHAJCNEBCDALCDC@OEGBEHKAADAHAHBBPD@DCDGFCHJD@DAXBFC^PLHNFAHCDGDAPFBAHDVZRDPEBBHDLDDBDLHJFPJH@FJJBNEPALFLDBF@JCLIJ@DBFD@NBBDBF@HEDIB@HHJHLNDNHP@DEDIB@DHDBD@LEHCFQD@@BHLDDNOZ@HFJZ\\AFIX@HBBDDT@JHDD@HAD@HDLADIJ@HIRBPFLFJABMGGFAFDTCBAFJHFHFTHBVDLHCHBD@DAPBTDLBBDBPCLBDBBHHHDJ@DKLBJGJ@^CJIFGBED@FNTGFCNDBP@BDDLFFFBDAFGD@BDBTKHAHIJ@DJH@DCHBHH@@B@BQLHN@LFBBABIFBATBFDBFGHBLKD@D@HHNAF@PHDB@HAN@RJNFBDDCLBFHLJJBFDHP@FBBBJCDFH@JFJBH@B@BCEIBI@KHCLFBbDJFL@DEDCJCDGBAFCFCDGBCBDPCHUNMBCD@FEFGECD@RADAF@ZDFAJXNBDBFBBRJRDNAHN@FHNZNPATDJHVFD@DAJMFALDLBNCFBDBFPHFFBZ@LHF@H@NFDBDNFHJHHBHFHTBHDDT@LHLBbAFBDDBBEVEPIR@FBD@HHJJ@FBAJLLLZBB`D"],
            encodeOffsets: [[119194, 26658]]
          },
          properties: {
            cp: [116.72978, 25.191603],
            name: "龙岩市",
            childNum: 1
          }
        }, {
          id: "350900",
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [["@@KBWJOLYXEJAFDRFHHHXLLDRARGPKJKFUDI\\KDEBEACEAUDC@]SIA"], ["@@MFEFM^@RJXDHPLHDH@PKTGjEZHTJ\\HRCLGBOIOosKuC"], ["@@I@IHIHEJAJPLLFFHFNTTHJFDHBJ@LGFE@I@MI_CAKBOEAIBGSMIC"], ["@@E@IH@JBBJDBDBFDH@BEFBDNDFDJBRGDLDDFBF@DCDC@CASEICMGECAEDO@AAAEEES@"], ["@@DMA@K@IBIHABNHFEL@"], ["@@BBH@DDD@AGKCA@AF"], ["@@NLFBPBDBDAACEIE@EAAAIBIEAB@D"], ["@@BFF@DBB@BCHB@GDA@AKAE@BCH@@ACCC@@ADA@CEACAID@FFBABBDABCB@BFDAB"], ["@@CFHB@FBABBDCD@D@BADBFEE@EEB@BBDACC@AIA@ACC@ACAC@ABBFBB@DCD@B"], ["@@ADD@DEE@@B"], ["@@ADDAAA"], ["@@@FBBBGDEAAA@ABAF"], ["@@JDBBD@B@BEAAC@M@@B"], ["@@BBDCD@DDDACGE@EAA@AFBD"], ["@@BBD@FEFFJAJABCCAGBKEC@AAA@AB@FCBAD"], ["@@JBABBBN@RC@CACF@DFB@BCAA@AD@BCEACDEA@AC@@CCABECAIBEAADEAADG@EAOHEFBDDBHAPF"], ["@@H@@AB@HBBACCEAKFBB"], ["@@D@DEJADHDALBBBD@@CGAKIEC@AD@D@JBD@@E@AE@AIA@ADCACBEAAAE@AEG@@D@HJHGDBFAHBD"], ["@@ILDHRJL@@AECBC@CDACEKGG@"], ["@@FBJ@NBD@EEI@CCK@EA@DDD"], ["@@HBHCD@DB@FNDDAACFEAAGCEAIBCAKAGF@BDD"], ["@@C@CB@DG@IDEH@DF@BDB@BCD@BAFDDABEH@BCAEEE"], ["@@JBDHHDB@DCB@BCH@@CFABA@EAAM@CCG@KGCA@F@FEAEBBFABBDDDB@@C@@"], ["@@@DJJJABCDABEBAHDFCEC@ECAIDAF@@ICCDEAAF"], ["@@HHJ@@CF@ACAAKCCAA@AB@B@D"], ["@@DDL@@AHB@@CEKAGD"], ["@@HBFD@HD@B@BGDCDCCCBAAAGBGAE@GB@DB@BD"], ["@@BDFADBDFCLJBFFBA@EBCHEDGIACGWBED"], ["@@AB@DPBHHD@BEAC@CEEEGIAAF@DAD"], ["@@CPBBF@DABAEIFBFA@C@CECAGGGI@ABBDBBHP"], ["@@FDD@DIQBDD"], ["@@H@@CACC@BDC@@D"], ["@@BBJ@HBF@FAT@JBFDBBTCDC@AKIE@@ABCACCC@GEE@ALGFI@AAAKBEBEJA@ECG@ABBFCNQACFKDAFGB@BFDADBD"], ["@@IFIHBDADN@FAHEF@DCD@BA@A@AHDD@@EF@CEEACEEAEAC@AD@@DD@DGDE@"], ["@@A@AFDLDFJDNC@CBCAC[K"], ["@@CH@FBBLDHDLBL@dLDADERCNIBCACIGEGC@GDOBAEGEYEEEC@AFEBG@CDCDCJ"], ["@@FJHBJKEECAEBEAAD@D"], ["@@BBFBFARHB@EE@ADACEBCAEEBE@@BG@AFCBAD"], ["@@A@BCCCIDGEJOJ@HGH@DCBKACDEHEAIBCFAP@HCDGJCAEDCDCJABM@INFFC@EIGKMPEDMDEH@HEN@D@DGCG@CBEHEH@JAHGAEKGILCBA@AEBU@ACE@CDAB@F@JCTCDDDLD@^KHKLCDB@HDBFA@ABANDLCDBFNKBIJPRFDFADEHEDCHDJCN@BAAAMG@CDANBBAAGDCFD@HBHHABCB@BF@FB@JEHBF@BHDDHBD@D@H@LIDBADDBNAHBHAPCBDCLG@ADDDCF@BJHABI@ABDDL@DBDF@DFHRJDDFH@DABOEADBHHDVDRFP@BB@JLFVEFABG@ONBFKPO@GAEDCP@TGN@BLDFL@JVDDHBFFDLLBNNJ@FDAVDDRHVDHAFABEFAJBFHBJCJEFCHBFFFPFdDF@BBFABCJ@LEBBF@VNH@LBD@LKFCHADDFABDJBDHPDRLDJD@XMDE@G@OGECE@EDELKNWDAH@HDJJJDFANGJ@DFBCHABBAHDJ@H@BFDHCBC@CGEBANEH@RHLIHKDGEMGI@ABECCACDGRGBE@AEK@ELIBERKJADAHKJUJI\\UDYJOLIFCZUAGCEICGDEHI@QKGIBEVMHG@AGOIG@CDEKEDAJ@BA@CGEJIBGEE@ARADGNGBCCEDIRIDE@GBAHBFAbeuoQMoUAI@MACOKY@kH_D]ACDCJCBE@[KCAIBSLC@GCAEBKLKBEAIEOHOPUBG@CGC\x7F@I@CAAEDAXAJCDGBEDUAKCIFIBGCICCaCGIKG@EFMIGCKAOCKBAFBBAAK@OEEMIISC@MBDJC@O@KFeECBMJEB_@QEIBGHC@MMECEBGJCBK@CCACACBQHS@I@EGIMIMKMAQ@QAGCIIEAIA]DKAIECKBOJ]BEFEJApARAhHFECCKEEGFWJOHAD@LFNBB@FEHAPFD@BICG]QOaOQ@CPQL@LCnPDBJ@DE@EACIGAC@CTBDAFC@QGMCASMkGKCMKIICEBCDCDQHMCMBEHCNDHBB@@CIGAEBG@@JBJDJAFC@A@ECEIG\x85cKKGA]FIDCDING@\x83goYSCIAQBSFMDUESKIQGG@AFCAADKFCHA@CAAEAACICAOEEYAUIEGIECCBEEIKQSGQ@KAYDQDQBGDELGDAFBBDPAFBFLP@HAPBDPLDF@JEJ@BFNLLFD`NPJJLRDTPD@D@VED@LDNALBF@FGBIBCDADBBDATDDLDJR@HEFAJFHT@DDCN@HBDHHFFAFKJAFAFBHNJNNDBFLJTNH^DJDBLAHBBRJFHBBP@ddFFBJAJGLCBGBgGo@QAUCYKI@GBAB@FDH@FEDGAGGG@IDM@UIECGIAENONY@OEGGUc[IMGQKIDOFGBIEE@EBEHADC@EGEKAIGKCGIUGG@IBEBEHAH@J@DLV@BAFUPeRMA[GECmNG@\x95MW@Q@SFaT}|CHI^G@BGBI@EBIFEJE@GGYEIOCMFEDCAECCCBGNM@EMQK@IgGOQIQGUOKDA@OMBIrqLGLENBLJLBHHrPHFFHFBR@JCLITA^DVDT@JEFEPQDETIP@fOHMBEEGACJOJGDMAEINAHSLCHIDSNIB[CKBCA@CHECASOICWLEBG@UFMII@EACCOo@CMEEFE@CG@CAGEAI@OFGACBMGQEE@CB@BBFABMBA@@DEB@FCDEDMFE@GEE@GHQAMLEBICCBCDFD@FAD]LM@CDOVLJ@BKRKFAJIDMR@JBDILCDWA@FKDSLEA@CEAE@CDGBS@MEUCMAEBMPKBCA@CAAG@AABAZIBGICG@CBIBIDMBOAAE@MIOEEUCCBCDG@CB@KCDG@AA@C@AFCBEEEIBIE@EEGGCCBA@EAAEED@DGCA@@DDFF@BJABEB@HUBE@EAUWGQG\x85CCIDADIHUJGBCEIYII]GEBQX@TGHMZCFMFCAEIGCIMCCMEG@C@IIAEC@CBGAEDE@GAAGAAGHEBQ@CA@CAAO@AD@DEHBJEDADCFIBBBBDEHBFCD@HC@CA@KAAIACBCDA@OCK@QHCDBFFHLHJBBD@FEFEFMJCFCBC@MMCAI@_DGCBMACKFEAAMACGA@EBEF@@CIIACDI@AGEKFC@ECCC@CPO@CEEACFG@AECACCAE@IHEBS@KAQGKEEICUOMCKBGFEPBFEBKG[GECAM@CDSVE@UAKBaIGCCC[G@C@ICCOGAKIMaSUGCNBBGDAJOCFEMGCJ@L@FD@BDCFWT@DPL@^CHMFOFIBABFLEJEFS@GBCDC@EAUBCG@G@AFADCAKJABGAGQGGIC@GEAE@QCIDQAEGMHE^OTGFCIOFKIA@ICEBEFCRAHEFECGJGHKDCFAF@RKFGAICICUGC[QEA[FMF@FABEB{BQ[GGGCEEMICCAYLCBA@CACCAE@CDABC@@CC@G@DICCUIGICFDPAPAFGHELBHADEJEFDFTNEPDF@DKHKDSNQDEDKNIBEAGGC@CAMOECK@DH@LIDCD@HFN@DCDEABECGEAOBCCAECCIBABBV@PCDUH@HCB@HAJBB@B@LHHHBFLJFBFBJCHEFID@DHFBFAJBFJNRJXJHHD@BID@F@JLJT@JGXZn@JENNP@FEFC@KBKGEACBGBIBKFEJCHDD@FDJAPDJ@LFP@HGRFN@FAHDHF@FNDRALLN@FCNCBOHUBIHCDBDFJLJCFDLLPD@FCFDD@HCD@@NFT@JLHDH@\\BJLVHJBPDF@FCFDFDBJ@FFHj@HAJEHEHMJCFJXBBVBH@D@BDAFFFZDHCJAJFJAPFHLDDGTNLBH@JBLFB@DGJCFI^e^EJHPLPTBLG@KFGJGPCJBLFPNHBZMNARBREV@LDHHBLANFHRNXDRFJHXL@DCHDDHDBLEFAHBLJJFDFALEFHDBTRDLDPDJJLHLRNBNJXHFRFDFHHBLBFBBJ@D@BGHETCHDJRDBBDCF@LS@@NBNECIAI@EB@LNZBJKEC@@BBH@BED@DHHFDF@HGNCJAR@TIF@LBFCDGHgCSDEPICKMQDIHABEDAF@FHHGJAJJFDZAFBJA@HBBF@JEDGB@JJB@AGBEH@BDBBBCD@FDD@@AFBBAHCXADC@GCGBILINCBC@IBCD@F@DC@EBAFC@KbFBDEZIJADATBBLBTCVHFDFADDBDEHBPFDPDHDF@FBDDNEFGDAJJHBBHFFAFEDQHI@IFADBHJbBLCJCFGBKAE@@B@DFJ@H@N@L@LDFCDDFLEJBVHH`@HDFD@F@HGJ@LEHBHC@GBCAMHGBAFFFADE@GBCDBBDF@DDJABIBAD@BJFHFJAFKHCJKFBFBD@BEBCCKJCAAFABG@MGSPKTC@E@EBAHGDADD@H@BDCLAL@XFBBH@FCFN^HFDBLEB@BBBJFDVAAH@LCHBFFDBF@HFBJD@FCN@NDDN@LFNR@BAPGHIJCDCPAPDNLBBBDJLPBF@DNdNH~ZLHNDLHFHD@AHHBAHEB@F@JCBFHJHTTVPLFfJl@LEJK@IDMHKJIPFLDJHTTRZDL@RLTDNE^N\\XRBD@BENBHCHFFAFD\\@JN@FHFAFCFAFDBDBJBDVCFBDH@FELBFH@DGHABI@A@ABAHBDAD@HFHCBBLFDFB@DAFEDALALDDJB@PFD@NAFBFCBC\\CDCF@HE@EIQBEPQ@ACIECCG@EAAGDAAGEC@ECAKDGFE@ECE@GDGBWFCLBJEH@vGDGIM@OC@C@ACEKEGCIHCDCACD@JFPBFADB@FBBDEHACCBCVQACDKHAFC@EIGAOBALC@GBGGC@EBCFB@A@CEADGEIHMMIDGCC@KIEEA"]],
            encodeOffsets: [[[123250, 27563]], [[122541, 27268]], [[123020, 27189]], [[122916, 27125]], [[121678, 27068]], [[123398, 27612]], [[123294, 27747]], [[123611, 27636]], [[123592, 27651]], [[123587, 27574]], [[123587, 27576]], [[123438, 27501]], [[123358, 27630]], [[123380, 27622]], [[123263, 27607]], [[123185, 27583]], [[123137, 27586]], [[123136, 27581]], [[123105, 27518]], [[123002, 27474]], [[123025, 27443]], [[123021, 27325]], [[123237, 27343]], [[123240, 27281]], [[123209, 27290]], [[122984, 27247]], [[123034, 27193]], [[123016, 27168]], [[123017, 27126]], [[122884, 27182]], [[122850, 27191]], [[122865, 27137]], [[122785, 27331]], [[122683, 27314]], [[122653, 27317]], [[122636, 27252]], [[122672, 27239]], [[122677, 27206]], [[122569, 28102]]]
          },
          properties: {
            cp: [119.527082, 26.95924],
            name: "宁德市",
            childNum: 39
          }
        }],
        UTF8Encoding: !0
      }) : D("ECharts Map is not loaded") : D("ECharts is not Loaded");
    });
  },
  "7e6a": function e6a(B, A, D) {},
  8410: function _(B, A, D) {
    "use strict";

    D("7e6a");
  },
  8766: function _(B, A, D) {
    "use strict";

    D("9ae9");
  },
  "9ae9": function ae9(B, A, D) {},
  b8f3: function b8f3(B, A, D) {},
  c072: function c072(B, A, D) {
    "use strict";

    D("392c");
  },
  c51b: function c51b(B, A, D) {
    "use strict";

    D("2d3f");
  },
  cf33: function cf33(B, A, D) {},
  cfd0: function cfd0(B, A, D) {
    "use strict";

    D("b8f3");
  },
  ff01: function ff01(B, A, D) {}
}]);
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60837" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","js/chunk-3e32c681.bfc984e7.js"], null)
//# sourceMappingURL=/chunk-3e32c681.bfc984e7.3d055ad1.js.map