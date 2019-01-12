
define(function() {
    "use strict";

    function HashMap() {

        if (!(this instanceof HashMap)) {
            throw new TypeError("HashMap constructor cannot be called as a function.");
        }

        this.dict = {};
    }

    HashMap.prototype = {
        constructor: HashMap,

        set: function(key, value) {
            this.dict[key] = value;
            return this;
        },

        remove: function(key) {
            delete this.dict[key];
            return this;
        },

        get: function(key) {
            return this.dict[key];
        },

        exists: function(key) {
            return this.dict.hasOwnProperty(key);
        }
    };

    return HashMap;

});
