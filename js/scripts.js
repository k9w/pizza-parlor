
/* Business Logic */

function Pizza() {
  this.toppingOptions = ["cheese", "pepperoni", "artichoke", "anchovy"];
  this.sizeOptions = ["cheese", "pepperoni", "artichoke", "anchovy"];
  this.sizeChosen = 0;
  this.toppingsChosen = [];
  this.totalPrice = 0;
}


/* 
 * Allow just one topping for Minimum Viable Product. Can be expanded
 * later.
 */

Pizza.prototype.chooseToppings = function() {
  switch (toppingsChosen) {
  case ("cheese"):
    toppingsChosen.push("cheese");
    totalPrice += 5;
    break;
  case ("pepperoni"):
    toppingsChosen.push("pepperoni");
    totalPrice += 7;
    break;
  case ("artichoke"):
    toppingsChosen.push("artichoke");
    totalPrice += 7;
    break;
  case ("anchovy"):
    toppingsChosen.push("anchovy");
    totalPrice += 7;
    break;
  default:
    console.log("No topping chosen.");
  }
}

Pizza.prototype.chooseSize = function() {
    switch (sizeChosen) {
  case ("small"):
    sizeChosen = 12;
    price += 12;
    break; 
  case ("medium"):
    sizeChosen = 18;
    price += 18;
    break; 
  case ("large"):
    sizeChosen = 24;
    price += 24;
    break;
  default:
    console.log("No size chosen.");
  }
}

Pizza.prototype.calculatePrice = function() {
  console.log(toppingsChosen);
  console.log(sizeChosen);
}

function functionName(parameter) {
  for (this, until, increment/decrement up/down by one) {
    
  }
}

function () {
  if () {
    
  }
  else if {
    
  }
  else {
    
  }
}


/* User Interface Logic */

let pizza = new Pizza();

$(document).ready(function() {
  $("").submit(function(event) {
    event.preventDefault();
    const word = $("").val();
    $("").text(function())
  });
});

