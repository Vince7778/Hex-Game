
define(function (require) {
    "use strict";

    var HashMap = require('HashMap');
    var Cell = require('Cell');

    function CellMap() {

        if (!(this instanceof CellMap)) {
            throw new TypeError("CellMap constructor cannot be called as a function.");
        }

        this.map = new HashMap();

        this.coordSet = [];
    }

    CellMap.coordsToHash = function(x,y) {
        return x.toString() + "," + y.toString();
    };

    CellMap.hashToCoords = function(hash) {
        return hash.split(",");
    };

    CellMap.prototype = {
        constructor: CellMap,

        set: function(x,y,cell) {
            if (!(cell instanceof Cell)) {
                console.warn("Setting HashMap to something other than a cell!");
            }
            var hash = CellMap.coordsToHash(x,y);
            this.map.set(hash,cell);
            this.coordSet.push(hash);
            return this;
        },

        get: function(x,y) {
            var hash = CellMap.coordsToHash(x,y);
            return this.map.get(hash);
        },

        remove: function(x,y) {
            var hash = CellMap.coordsToHash(x,y);
            if (!this.map.exists(hash)) {
                console.warn("CellMap does not contain coordinates "+hash);
                return this;
            }
            this.map.remove(hash);
            var index = this.coordSet.indexOf(hash);
            this.coordSet.splice(index);
            return this;
        },

        getCoordSet: function() {
            return this.coordSet;
        }
    };

    return CellMap;

});
