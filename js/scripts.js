/* Business Logic */

function Pizza(sizeChosen, toppingChosen) {
  this.size  = 0;
  this.topping = [];
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}

Pizza.prototype.priceThePizzaSize = function(sizeChosen) {
  if ( sizeChosen === 12 ) {
    let sizePrice = 6;
  } else if ( sizeChosen === 18 ) {
    let sizePrice = 9;
  } else if ( sizeChosen === 24 ) {
    let sizePrice = 12;
  }
  return sizePrice;
}

Pizza.prototype.priceThePizzaTopping = function(toppingChosen) {
  if ( toppingChosen === "cheese" ) {
    let toppingPrice = 5;
  } else if ( toppingChosen === "pepperoni" ) {
    let toppingPrice = 7;
  } else if ( toppingChosen === "artichoke" ) {
    let toppingPrice = 6;
  } else if ( toppingChosen === "anchovy" ) {
    let toppingPrice = 7;
  }
  return toppingPrice;
}

Pizza.prototype.priceTheWholePizza = function(sizeChosen, toppingChosen) {
  let totalPrice = sizeChosen + toppingChosen;
  return totalPrice;
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
