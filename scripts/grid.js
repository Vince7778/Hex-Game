
define(function (require) {
    "use strict";

    var CellMap = require('CellMap');
    var Cell = require('Cell');
    var Canvas = require('Canvas');

    function Grid(canvas) {
        
        if (!(this instanceof Grid)) {
            throw new TypeError("Grid constructor cannot be called as a function.");
        }
        if (!(canvas instanceof Canvas)) {
            throw new TypeError("Need to pass Canvas to Grid constructor!");
        }

        this.canvas = canvas;
        this.cmap = new CellMap();
    }

    Grid.prototype = {
        constructor: Grid,

        draw: function(cx,cy,scale) {
            var coordSet = this.cmap.getCoordSet();
            for (var i = 0; i < coordSet.length; i++) {
                var n = CellMap.hashToCoords(coordSet[i]);
                n[0] = parseInt(n[0]);
                n[1] = parseInt(n[1]);
                var dx = cx+(20*scale)*(3.0/2*n[0]);
                var dy = cy+(20*scale)*(Math.sqrt(3)/2*n[0]+Math.sqrt(3)*n[1]);
                this.canvas.drawCell(dx,dy,20*scale,Canvas.colors[this.cmap.get(n[0],n[1]).owner]);
            }
        },

        addCell: function(x,y,cell) {
            this.cmap.set(x,y,cell);
        }
    };

    return Grid;

});
