/* Business Logic */

function Pizza(sizeChosen, toppingChosen) {
  this.size  = 0;
  this.topping = [];
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}

// old business logic below to be rewritten

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

Pizza.prototype.chooseTopping = function() {
  switch (toppingOptions) {
  case ("cheese"):
    toppingChosen.push("cheese");
    totalPrice += 5;
    break;
  case ("pepperoni"):
    toppingChosen.push("pepperoni");
    totalPrice += 7;
    break;
  case ("artichoke"):
    toppingChosen.push("artichoke");
    totalPrice += 7;
    break;
  case ("anchovy"):
    toppingChosen.push("anchovy");
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
    let sizeChosen = $("input:radio[name=sizeChosen]:checked").val();
    let toppingChosen = $("input:radio[name=toppingChosen]:checked").val();
    $("#result").show();
    $("#result").append(orderPizza(sizeChosen, toppingChosen));
    $("#result").append("Order placed!");
  });
});
