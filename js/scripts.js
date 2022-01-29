
/* Business Logic */

function Pizza() {
  this.toppingOptions = ["cheese", "pepperoni", "artichoke", "anchovy"];
  this.sizeOptions = ["cheese", "pepperoni", "artichoke", "anchovy"];
  this.sizeChosen = 0;
  this.toppingsChosen = [];
  this.totalPrice = 0;
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

/* 
 * Allow just one topping for Minimum Viable Product. Can be expanded
 * later.
 */

Pizza.prototype.chooseToppings = function() {
  switch (toppingsChosen) {
  case ("cheese"):
    toppingsResult.push("cheese");
    totalPrice += 5;
    break;
  case ("pepperoni"):
    toppingsResult.push("pepperoni");
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

function hideResult() {
  $(".result").hide();
}

function showResult() {
  $(".result").show();
}

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    hideResult();
    let sizeChoice = $("input:radio[name=sizeChoice]:checked").val();
    let toppingsChoice = $("input:radio[name=toppingsChoice]:checked").val();
    priceTheChoices(sizeChoice, toppingsChoice);
    document.getElementById("reset").onClick = hideResult;
  });
});

