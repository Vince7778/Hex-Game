
define(function (require) {

    var Canvas = require('Canvas');
    var Cell = require('Cell');
    var Troop = require('Troop');

    var drawing = new Canvas(document.getElementById("body"));
    drawing.drawCell(50,50,20,"#00F");

    var testCell = new Cell(0,0,1,1,0);
    console.log("Has troop?: " + testCell.hasTroop());
    if (testCell.hasTroop()) {
        console.log("Troop type: " + testCell.getTroop().type);
    }
    console.log("Owner: " + testCell.owner);
    console.log("Attack success? " + testCell.invade(new Troop(2,1)));
    console.log("Has troop?: " + testCell.hasTroop());
    if (testCell.hasTroop()) {
        console.log("Troop type: " + testCell.getTroop().type);
    }
    console.log("Owner: " + testCell.owner);
    console.log("Attack success? " + testCell.invade(new Troop(2,3)));
    console.log("Has troop?: " + testCell.hasTroop());
    if (testCell.hasTroop()) {
        console.log("Troop type: " + testCell.getTroop().type);
    }
    console.log("Owner: " + testCell.owner);
    testCell.removeTroop();
    console.log("Removed troop");
    console.log("Has troop?: " + testCell.hasTroop());
    if (testCell.hasTroop()) {
        console.log("Troop type: " + testCell.getTroop().type);
    }
    console.log("Owner: " + testCell.owner);
    console.log("Attack success? " + testCell.invade(new Troop(2,1)));
    testCell.removeTroop();
    console.log("Removed troop");
    testCell._defended = 2; // DON'T SET PRIVATE VARIABLES NORMALLY!
    console.log("Set defence to 2");
    console.log("Has troop?: " + testCell.hasTroop());
    if (testCell.hasTroop()) {
        console.log("Troop type: " + testCell.getTroop().type);
    }
    console.log("Owner: " + testCell.owner);
    console.log("Attack success? " + testCell.invade(new Troop(2,1)));
    console.log("Has troop?: " + testCell.hasTroop());
    if (testCell.hasTroop()) {
        console.log("Troop type: " + testCell.getTroop().type);
    }
    console.log("Owner: " + testCell.owner);
    console.log("Attack success? " + testCell.invade(new Troop(2,3)));
    console.log("Has troop?: " + testCell.hasTroop());
    if (testCell.hasTroop()) {
        console.log("Troop type: " + testCell.getTroop().type);
    }
    console.log("Owner: " + testCell.owner);

});
