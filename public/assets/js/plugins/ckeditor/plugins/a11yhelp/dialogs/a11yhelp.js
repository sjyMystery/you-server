﻿/*
 Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.dialog.add("a11yHelp", function (h) {
    var a = h.lang.a11yhelp, b = h.lang.common.keyboard, n = CKEDITOR.tools.getNextId(), e = {
        8: b[8],
        9: a.tab,
        13: b[13],
        16: b[16],
        17: b[17],
        18: b[18],
        19: a.pause,
        20: a.capslock,
        27: a.escape,
        33: a.pageUp,
        34: a.pageDown,
        35: b[35],
        36: b[36],
        37: a.leftArrow,
        38: a.upArrow,
        39: a.rightArrow,
        40: a.downArrow,
        45: a.insert,
        46: b[46],
        91: a.leftWindowKey,
        92: a.rightWindowKey,
        93: a.selectKey,
        96: a.numpad0,
        97: a.numpad1,
        98: a.numpad2,
        99: a.numpad3,
        100: a.numpad4,
        101: a.numpad5,
        102: a.numpad6,
        103: a.numpad7,
        104: a.numpad8,
        105: a.numpad9,
        106: a.multiply,
        107: a.add,
        109: a.subtract,
        110: a.decimalPoint,
        111: a.divide,
        112: a.f1,
        113: a.f2,
        114: a.f3,
        115: a.f4,
        116: a.f5,
        117: a.f6,
        118: a.f7,
        119: a.f8,
        120: a.f9,
        121: a.f10,
        122: a.f11,
        123: a.f12,
        144: a.numLock,
        145: a.scrollLock,
        186: a.semiColon,
        187: a.equalSign,
        188: a.comma,
        189: a.dash,
        190: a.period,
        191: a.forwardSlash,
        192: a.graveAccent,
        219: a.openBracket,
        220: a.backSlash,
        221: a.closeBracket,
        222: a.singleQuote
    };
    e[CKEDITOR.ALT] = b[18];
    e[CKEDITOR.SHIFT] = b[16];
    e[CKEDITOR.CTRL] = b[17];
    var g = [CKEDITOR.ALT, CKEDITOR.SHIFT,
        CKEDITOR.CTRL], p = /\$\{(.*?)\}/g, t = function () {
        var a = h.keystrokeHandler.keystrokes, b = {}, d;
        for (d in a)b[a[d]] = d;
        return function (a, d) {
            var c;
            if (b[d]) {
                c = b[d];
                for (var k, l, m = [], f = 0; f < g.length; f++)l = g[f], k = c / g[f], 1 < k && 2 >= k && (c -= l, m.push(e[l]));
                m.push(e[c] || String.fromCharCode(c));
                c = m.join("+")
            } else c = a;
            return c
        }
    }();
    return {
        title: a.title, minWidth: 600, minHeight: 400, contents: [{
            id: "info", label: h.lang.common.generalTab, expand: !0, elements: [{
                type: "html", id: "legends", style: "white-space:normal;", focus: function () {
                    this.getElement().focus()
                },
                html: function () {
                    for (var b = '\x3cdiv class\x3d"cke_accessibility_legend" role\x3d"document" aria-labelledby\x3d"' + n + '_arialbl" tabIndex\x3d"-1"\x3e%1\x3c/div\x3e\x3cspan id\x3d"' + n + '_arialbl" class\x3d"cke_voice_label"\x3e' + a.contents + " \x3c/span\x3e", e = [], d = a.legend, h = d.length, g = 0; g < h; g++) {
                        for (var c = d[g], k = [], l = c.items, m = l.length, f = 0; f < m; f++) {
                            var q = l[f], r = q.legend.replace(p, t);
                            r.match(p) || k.push("\x3cdt\x3e%1\x3c/dt\x3e\x3cdd\x3e%2\x3c/dd\x3e".replace("%1", q.name).replace("%2", r))
                        }
                        e.push("\x3ch1\x3e%1\x3c/h1\x3e\x3cdl\x3e%2\x3c/dl\x3e".replace("%1",
                            c.name).replace("%2", k.join("")))
                    }
                    return b.replace("%1", e.join(""))
                }() + '\x3cstyle type\x3d"text/css"\x3e.cke_accessibility_legend{width:600px;height:400px;padding-right:5px;overflow-y:auto;overflow-x:hidden;}.cke_browser_quirks .cke_accessibility_legend,{height:390px}.cke_accessibility_legend *{white-space:normal;}.cke_accessibility_legend h1{font-size: 20px;border-bottom: 1px solid #AAA;margin: 5px 0px 15px;}.cke_accessibility_legend dl{margin-left: 5px;}.cke_accessibility_legend dt{font-size: 13px;font-weight: bold;}.cke_accessibility_legend dd{margin:10px}\x3c/style\x3e'
            }]
        }],
        buttons: [CKEDITOR.dialog.cancelButton]
    }
});