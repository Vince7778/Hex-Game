
define(function (require) {

    if (!Array.prototype.indexOf) Array.prototype.indexOf = (function (Object, max, min) {
        "use strict";
        return function indexOf(member, fromIndex) {
            if (this === null || this === undefined) throw TypeError("Array.prototype.indexOf called on null or undefined");

            var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len);
            if (i < 0) i = max(0, Len + i); else if (i >= Len) return -1;

            if (member === void 0) {
                for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i; // undefined
            } else if (member !== member) {
                for (; i !== Len; ++i) if (that[i] !== that[i]) return i; // NaN
            } else for (; i !== Len; ++i) if (that[i] === member) return i; // all else

            return -1; // if the value was not found, then return -1
        };
    })(Object, Math.max, Math.min);

    document.getElementById("body").width = window.innerWidth;
    document.getElementById("body").height = window.innerHeight;

    var Canvas = require('Canvas');
    var Grid = require('Grid');
    var Cell = require('Cell');

    var DRAW_CANVAS = new Canvas(document.getElementById("body"));
    var WIDTH = DRAW_CANVAS.canvas.width;
    var HEIGHT = DRAW_CANVAS.canvas.height;

    var grid = new Grid(DRAW_CANVAS);
    grid.addCell(0,0,new Cell(0,0,0));
    grid.addCell(-1,0,new Cell(1,0,0));
    grid.addCell(-1,1,new Cell(0,0,0));
    grid.addCell(0,1,new Cell(1,0,0));
    grid.addCell(0,-1,new Cell(0,0,0));
    grid.addCell(1,0,new Cell(0,0,0));
    grid.addCell(1,-1,new Cell(1,0,0));

    grid.draw(WIDTH/2,HEIGHT/2,3.0);


});
