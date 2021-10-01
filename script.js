var mealCost = Number(
  prompt("Cost of meal (ex. 25.99)")
);

var tip = Number(
  prompt("Tip percent (ex. .15 for 15%)")
);

var tipAmount = mealCost * tip;

var total = tipAmount + mealCost;
var numPeople = Number(
  prompt("Number of people (minimum of 1)")
);

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
