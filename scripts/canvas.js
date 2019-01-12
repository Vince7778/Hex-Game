
define(function() {
    "use strict";

    function Canvas(canvas) {
        if (!(this instanceof Canvas)) {
            throw new TypeError("Canvas constructor cannot be called as a function.");
        }

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    function drawCellS(ctx,cX,cY,size,color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(cX - size, cY);
        ctx.lineTo(cX - (size / 2), cY + (size * Math.sqrt(3) / 2));
        ctx.lineTo(cX + (size / 2), cY + (size * Math.sqrt(3) / 2));
        ctx.lineTo(cX + size, cY);
        ctx.lineTo(cX + (size / 2), cY - (size * Math.sqrt(3) / 2));
        ctx.lineTo(cX - (size / 2), cY - (size * Math.sqrt(3) / 2));
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    Canvas.prototype = {
        constructor: Canvas,

        drawCell: function(cX,cY,size,color) {
            drawCellS(this.ctx,cX,cY,size,color);
        },

        toString: function() {
            return this.canvas.id;
        }
    };

    return Canvas;
});
