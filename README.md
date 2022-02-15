# Independent project, Epicodus, Intermediate Javascript, Week 1

#### Contributors

 * _**Kevin Williams**_

# _Pizza Parlor_

## Technologies Used

* _Javascript_
* _jQuery_

## Description

_Welcome to my first independent project with Intermediate JavaScript
as a student at [Epicodus](https://epicodus.com)!_

[Here is the
lesson](https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/object-oriented-javascript-independent-project)
from [the curriculum](https://learnhowtoprogram.com) where I started
this app on Friday January 28th 2022. Check out more of my work at:

 * https://github.com/k9w


### Planning for how the app works

For Test-Driven Development, we are suppsed to write one test, commit
it, and then write the code it's supposed to test, then commit it. But
to know what tests and code to write a head of time, I brainstormed
and planned how the app would work in the separate file
[planHowTheAppWorks.txt](https://github.com/k9w/pizza-parlor/blob/main/planHowTheAppWorks.txt).


### Tests

#### Test 1

Describe: Pizza Object Constructor

Test: "It should define an object constructor 'Pizza' with properties:
topping, size, price for each, and total price."

Code:
```
function Pizza(sizeChosen, toppingChosen) {
  this.sizeChosen = sizeChosen;
  this.toppingChosen = toppingChosen;
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}
```
Expected Output: A valid constructor with those properties.

#### Test 2

Describe: Method priceThePizzaSize

Test: "It should define a prototype method 'priceThePizzaSize' from constructor 'Pizza'."

Code: 
```
Pizza.prototype.priceThePizzaSize = function() {
  if ( this.sizeChosen === "small" ) {
    this.sizePrice = 6;
  } else if ( this.sizeChosen === "medium" ) {
    this.sizePrice = 9;
  } else if ( this.sizeChosen === "large" ) {
    this.sizePrice = 12;
  }
}
```
Expected Output: A pizza size chosen.

#### Test 3

Describe: Method priceThePizzaTopping

Test: "It should define a prototype method 'priceThePizzaTopping' from constructor 'Pizza'."

Code: 
```
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
```
Expected Output: A pizza topping chosen.

#### Test 4

Describe: Method priceTheWholePizza

Test: "It should define a prototype method 'priceTheWholePizza' from constructor 'Pizza'."

Code: 
```
Pizza.prototype.priceTheWholePizza = function() {
  this.totalPrice = this.sizePrice + this.toppingPrice;
}
```
Expected Output: A total price for the pizza chosen.


## Setup/Installation Requirements

* _Visit the live site at https://k9w.github.io/pizza-parlor_
* _Or clone the repo and open index.html in a browser._


## Known Bugs

_For any problems, please file an issue on Github. Pull Requests welcome._

- _No known issues yet._
- _Please report any you find._


## License

[ISC](https://choosealicense.com/licenses/isc)

Copyright (c) _2022_ _Kevin Williams_

