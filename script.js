/*          Utility Functions           */
// A simple random number generator
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

// Get random object from array
Array.prototype.getRandomObject = function() {
    var index = randomNumber(0, this.length -1);
    return this[index];
};

/*          RealEstate Functions           */
// RealEstate constructor
function RealEstate(id, area, price) {
    this.id = id;
    this.area = area;
    this.price = price;
    this.yearlyCost = area * price;
    this.monthlyCost = Math.round(this.yearlyCost / 12);
}

var i = 0;

// Displays the RealEstate object in the DOM
RealEstate.prototype.display = function() {
    i++;
    // Get table by element
    var id = "addingRow" + i;
    $("#table").append("<div class='row' id='" + id + "'></div>");
    var row = $("#" + id);
    row.append("<div class='td'>ID : " + this.id + "</div>");
    row.append("<div class='td'>" + this.area + " sq.ft.</div>");
    row.append("<div class='td'>$" + this.price + " / sq.ft.</div>");
    row.append("<div class='td'>$" + this.yearlyCost + "</div>");
    row.append("<div class='td'>$" + this.monthlyCost + "</div>");
    row.append("<div class='td'><button class='btnRemove'>Remove</button></div>");
    row.hide();
    row.slideDown("fast");
};

// Returns a random RealEstate object
function makeRealEstate() {
    var id = randomNumber(1000,9999);
    var area = randomNumber(1000,9999);
    var price = randomNumber(15,30);
    return new RealEstate(id, area, price);
}

console.log(makeRealEstate());

$(document).ready(function() {

    $("#btnMakeRealEstate").on("click", function() {
        var property = makeRealEstate();
        var row = property.display();
    });

    $("#table").on("click", ".btnRemove", function(){
        $(this).parent().parent().slideUp("fast", function(){
            $(this).remove();
        });
        console.log("remove");
    });

});