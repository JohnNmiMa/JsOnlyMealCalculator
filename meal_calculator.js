/////////////////////////////////////
// Object Oriented Meal Calculator //
/////////////////////////////////////

// The Diner constructor
var Diner = function(name, dish, cost) {
    this.name = name;
    this.dish = dish;
    this.cost = cost;
};

// The Meal constructor
var Meal = function(taxPcnt, tipPcnt) {
    this.diners = [];
    this.tax = taxPcnt / 100;
    this.tip = tipPcnt / 100;
    this.totalCost = 0;
    this.totalTax = 0;
    this.totalTip = 0;
};

// Per class functions
Meal.prototype.addDiner = function(diner) {
    this.diners.push(diner);
    this.totalCost += diner.cost;
    this.totalTax = this.totalCost * this.tax;
    this.totalTip = this.totalCost * this.tip;
};

Meal.prototype.printCostPerDiner = function() {
    if (!this.diners.length) return;

    console.log("Cost per diner:");
    for (var i=0; i<this.diners.length; i++) {
        var dinerTip = this.diners[i].cost * this.tip,
            dinerTax = this.diners[i].cost * this.tax,
            dinerTotal = this.diners[i].cost + dinerTax + dinerTip;

        console.log("  " + this.diners[i].name + "'s " + this.diners[i].dish + " = $" +this.diners[i].cost.toFixed(2) +
                    ", tax = $" + dinerTax.toFixed(2) +
                    ", tip = $" + dinerTip.toFixed(2) +
                    ": total meal = $" + dinerTotal.toFixed(2));
    }
};

Meal.prototype.printTotalMealCost = function() {
    var totalMealCost = this.totalCost + this.totalTax + this.totalTip;
    console.log("Total cost of meal = " + totalMealCost.toFixed(2));
    console.log("  Food items = $" + meal.totalCost.toFixed(2));
    console.log("  Tax = $" + meal.totalTax.toFixed(2));
    console.log("  Tip = $" + meal.totalTip.toFixed(2));
};

// Create the Meal object
var meal = new Meal(7.55, 20);

// Add the diners to the meal objects
meal.addDiner(new Diner("Pam", "Corned Beef Sandwich", 11.95));
meal.addDiner(new Diner("Aubrie", "Mac-n-Cheese", 7.95));
meal.addDiner(new Diner("John", "Hamburger & Fries", 12.95));

// Output meal stats
console.log("");
meal.printCostPerDiner();
meal.printTotalMealCost();

