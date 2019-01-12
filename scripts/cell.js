
define(function(require) {
    "use strict";

    var Troop = require("Troop");

    function Cell(owner,troop,defended) {
        if (!(this instanceof Cell)) {
            throw new TypeError("Cell constructor cannot be called as a function.");
        }
        if (!Troop.valid(troop)) {
            throw new Error("Invalid troop!");
        }

        this.owner=owner;

        this._occupied = troop > 0 ? true : false;
        this._troop = new Troop(owner, troop);
        this._defended = defended;
    }

    Cell.prototype = {
        constructor: Cell,

        hasTroop: function() {
            return this._occupied;
        },

        getTroop: function() {
            if (!this.hasTroop()) {
                throw new Error("Cell does not have troop! Remember to check occupancy!");
            }
            return this._troop;
        },

        removeTroop: function() {
            if (!this.hasTroop()) {
                return;
            }
            this._troop = new Troop(this.owner,0);
            this._occupied = false;
        },

        setTroop: function(troopId) {
            if (troopId == 0) {
                console.warn("Setting troop to nothing! Use removeTroop instead.");
            } else {
                this._occupied = true;
            }
            this._troop = new Troop(this.owner, troopId);
        },

        invade: function(attacker) {
            if (!(attacker instanceof Troop)) {
                throw new TypeError("Attacker is not of type Troop!");
            }
            if (attacker.type == 0) {
                throw new Error("Attacker is an empty troop!");
            }
            if (!this.hasTroop()) {
                if (attacker.canOvertakeDefence(this._defended)) {
                    this.owner = attacker.owner;
                    this.setTroop(attacker.type);
                    return true;
                }
                return false;
            } else {
                if (attacker.canOvertakeDefence(this._defended) && attacker.canOvertake(this.getTroop())) {
                    this.owner = attacker.owner;
                    this.setTroop(attacker.type);
                    return true;
                }
                return false;
            }
        }
    };

    return Cell;
});
