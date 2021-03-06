/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
!(function(e) {
  "use strict";
  var n = function(n, t, o) {
    function i(e) {
      if (a.body) return e();
      setTimeout(function() {
        i(e);
      });
    }
    function r() {
      l.addEventListener && l.removeEventListener("load", r),
        (l.media = o || "all");
    }
    var d,
      a = e.document,
      l = a.createElement("link");
    if (t) d = t;
    else {
      var f = (a.body || a.getElementsByTagName("head")[0]).childNodes;
      d = f[f.length - 1];
    }
    var s = a.styleSheets;
    (l.rel = "stylesheet"),
      (l.href = n),
      (l.media = "only x"),
      i(function() {
        d.parentNode.insertBefore(l, t ? d : d.nextSibling);
      });
    var u = function(e) {
      for (var n = l.href, t = s.length; t--; ) if (s[t].href === n) return e();
      setTimeout(function() {
        u(e);
      });
    };
    return (
      l.addEventListener && l.addEventListener("load", r),
      (l.onloadcssdefined = u),
      u(r),
      l
    );
  };
  "undefined" != typeof exports ? (exports.loadCSS = n) : (e.loadCSS = n);
})("undefined" != typeof global ? global : this);

/*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
!(function(t) {
  if (t.loadCSS) {
    var e = (loadCSS.relpreload = {});
    if (
      ((e.support = function() {
        try {
          return t.document.createElement("link").relList.supports("preload");
        } catch (t) {
          return !1;
        }
      }),
      (e.poly = function() {
        for (
          var e = t.document.getElementsByTagName("link"), r = 0;
          r < e.length;
          r++
        ) {
          var n = e[r];
          "preload" === n.rel &&
            "style" === n.getAttribute("as") &&
            (t.loadCSS(n.href, n, n.getAttribute("media")), (n.rel = null));
        }
      }),
      !e.support())
    ) {
      e.poly();
      var r = t.setInterval(e.poly, 300);
      t.addEventListener &&
        t.addEventListener("load", function() {
          e.poly(), t.clearInterval(r);
        }),
        t.attachEvent &&
          t.attachEvent("onload", function() {
            t.clearInterval(r);
          });
    }
  }
})(this);
