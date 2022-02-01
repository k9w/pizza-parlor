/* Business Logic */

function Pizza() {
  this.sizeOptions = ["small", "medium", "large"];
  this.toppingOptions = ["cheese", "pepperoni", "artichoke", "anchovy"];
  this.sizeChosen = 0;
  this.toppingsChosen = [];
  this.totalPrice = 0;
}

Pizza.prototype.chooseSize = function() {
    switch (sizeOptions) {
  case ("small"):
    sizeChosen = 12;
    totalPrice += 12;
    break; 
  case ("medium"):
    sizeChosen = 18;
    totalPrice += 18;
    break; 
  case ("large"):
    sizeChosen = 24;
    totalPrice += 24;
    break;
  default:
    break;
  }
}

Pizza.prototype.chooseToppings = function() {
  switch (toppingOptions) {
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
    break;
  }
}

Pizza.prototype.orderPizza = function() {
  function calculatePrice() {
  }
}


/* User Interface Logic */

let pizza = new Pizza();

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    $("#result").empty();
    let sizeChoice = $("input:radio[name=sizeChoice]:checked").val();
    let toppingsChoice = $("input:radio[name=toppingsChoice]:checked").val();
    $("#result").show();
    $("#result").append(orderPizza(sizeChoice, toppingsChoice));
    $("#result").append("Order placed!");
  });
});
