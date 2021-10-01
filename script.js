var mealCost = 14.05;
var tip = 0.1;

var tipAmount = mealCost * tip;

var total = tipAmount + mealCost;
var numPeople = 2;

var billShare = total / numPeople;

console.log(
  `Your meal cost is $${mealCost.toFixed(
    2
  )}, and with the tip, it comes to $${total.toFixed(
    2
  )}. Your share is $${billShare.toFixed(
    2
  )}. Hope it was delicious!”`
);
