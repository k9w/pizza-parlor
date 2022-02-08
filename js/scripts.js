/* Business Logic */

function Pizza(sizeChosen, toppingChosen) {
  this.sizeChosen = sizeChosen;
  this.toppingChosen = toppingChosen;
  this.sizePrice = sizePrice;
  this.toppingPrice = toppingPrice;
  this.totalPrice = totalPrice;
}

Pizza.prototype.priceThePizzaSize = function(sizeChosen) {
  let sizePrice
  if ( this.sizeChosen === 12 ) {
    sizePrice = 6;
  } else if ( this.sizeChosen === 18 ) {
    sizePrice = 9;
  } else if ( this.sizeChosen === 24 ) {
    sizePrice = 12;
  }
  console.log(sizePrice);
  return this.sizePrice;
}

Pizza.prototype.priceThePizzaTopping = function(toppingChosen) {
  let toppingPrice
  if ( this.toppingChosen === "cheese" ) {
    toppingPrice = 5;
  } else if ( this.toppingChosen === "pepperoni" ) {
    toppingPrice = 7;
  } else if ( this.toppingChosen === "artichoke" ) {
    toppingPrice = 6;
  } else if ( this.toppingChosen === "anchovy" ) {
    toppingPrice = 7;
  }
  console.log(toppingPrice);
  return this.toppingPrice;
}

Pizza.prototype.priceTheWholePizza = function(sizeChosen, toppingChosen) {
  totalPrice = this.sizeChosen + this.toppingChosen;
  return this.totalPrice;
}


/* User Interface Logic */

let pizza = new Pizza();

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    $("#result").empty();
    let sizeChosen = $("input:radio[name=sizeChosen]:checked").val();
    console.log(sizeChosen);
    let toppingChosen = $("input:radio[name=toppingChosen]:checked").val();
    console.log(toppingChosen);
    sizePrice = sizeChosen.priceThePizzaSize;
    console.log(sizePrice);
    toppingPrice = toppingChosen.priceThePizzaTopping;
    console.log(toppingPrice);
    $("#result").show();
    $("#result").append().priceTheWholePizza(sizePrice, toppingPrice);
  });
});
