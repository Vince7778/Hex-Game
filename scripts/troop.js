
define(function () {
    "use strict";

    function Troop(owner, type) {
        if (!(this instanceof Troop)) {
            throw new TypeError("Troop constructor cannot be called as a function.");
        }

        if (type < 0 || type > 4) {
            throw new Error("Invalid troop type!");
        }

        this.owner = owner;
        this.type = type;
    }

    var spendingList = [0,2,6,18,54];

    Troop.valid = function(x) {
        return x >= 0 && x <= 4;
    };

    Troop.prototype = {
        constructor: Troop,

        getSpending: function() {
            return spendingList[this.type];
        },

        canOvertake: function(defender) {
            if (!(defender instanceof Troop)) {
                throw new TypeError("Defender not of type Troop!");
            }
            if (defender.type == 0) {
                console.warn("Defender is nonexistent.");
            }
            return defender.type < this.type;
        },

        canOvertakeDefence: function(defenceStr) {
            return defenceStr < this.type;
        }
    };

    return Troop;
});