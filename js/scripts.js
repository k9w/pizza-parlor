/* Business Logic */

function Pizza(sizeChosen, toppingChosen) {
  this.size  = 0;
  this.topping = [];
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}

Pizza.prototype.priceThePizzaSize = function(sizeChosen) {
  if ( this.sizeChosen === 12 ) {
    let sizePrice = 6;
  } else if ( this.sizeChosen === 18 ) {
    let sizePrice = 9;
  } else if ( this.sizeChosen === 24 ) {
    let sizePrice = 12;
  }
  return this.sizePrice;
}

Pizza.prototype.priceThePizzaTopping = function(toppingChosen) {
  if ( this.toppingChosen === "cheese" ) {
    let toppingPrice = 5;
  } else if ( this.toppingChosen === "pepperoni" ) {
    let toppingPrice = 7;
  } else if ( this.toppingChosen === "artichoke" ) {
    let toppingPrice = 6;
  } else if ( this.toppingChosen === "anchovy" ) {
    let toppingPrice = 7;
  }
  return this.toppingPrice;
}

Pizza.prototype.priceTheWholePizza = function(sizeChosen, toppingChosen) {
  let totalPrice = this.sizeChosen + this.toppingChosen;
  return this.totalPrice;
}


/* User Interface Logic */

let pizza = new Pizza();

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    $("#result").empty();
    let sizeChosen = $("input:radio[name=sizeChosen]:checked").val();
    let toppingChosen = $("input:radio[name=toppingChosen]:checked").val();
    priceThePizzaSize(sizeChosen);
    toppingChosen.priceThePizzaTopping;
    $("#result").show();
    $("#result").append(priceTheWholePizza(sizeChosen, toppingChosen));
  });
});
