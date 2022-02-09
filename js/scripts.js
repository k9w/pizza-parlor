/* Business Logic */

function Pizza(sizeChosen, toppingChosen) {
  this.sizeChosen = sizeChosen;
  this.toppingChosen = toppingChosen;
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}

Pizza.prototype.priceThePizzaSize = function() {
  if ( this.sizeChosen === "small" ) {
    this.sizePrice = 6;
  } else if ( this.sizeChosen === "medium" ) {
    this.sizePrice = 9;
  } else if ( this.sizeChosen === "large" ) {
    this.sizePrice = 12;
  }
}

Pizza.prototype.priceThePizzaTopping = function() {
  if ( this.toppingChosen === "cheese" ) {
    this.toppingPrice = 5;
  } else if ( this.toppingChosen === "pepperoni" ) {
    this.toppingPrice = 7;
  } else if ( this.toppingChosen === "artichoke" ) {
    this.toppingPrice = 6;
  } else if ( this.toppingChosen === "anchovy" ) {
    this.toppingPrice = 7;
  }
}

Pizza.prototype.priceTheWholePizza = function() {
  this.totalPrice = this.sizePrice + this.toppingPrice;
}


/* User Interface Logic */

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    $("#result").empty();
    let sizeChosen = $("input:radio[name=sizeChosen]:checked").val();
    let toppingChosen = $("input:radio[name=toppingChosen]:checked").val();
    let pizza = new Pizza(sizeChosen, toppingChosen);
    pizza.priceThePizzaSize();
    pizza.priceThePizzaTopping();
    pizza.priceTheWholePizza();
    $("#result").show();
    $("#result").append("<p>Your pizza is $" + pizza.totalPrice + ".</p>");
  });
});
