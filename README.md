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

The Specifications section below describes my understanding of what the program
should do.

The Tests section outlines the tests as I implement them.

### Specifications

Due to the length of the specifications I came up with, I've broken
them out into their own separate file
[planHowTheAppWorks.txt](https://github.com/k9w/pizza-parlor/blob/main/planHowTheAppWorks.txt).


### Tests

_Next, I plan to re-write the tests below._

#### Test 1

Describe: Pizza Object Constructor

Test: "It should define an object constructor 'Pizza' with properties:
topping, size, price for each, and total price."

Code:
```
function Pizza(sizeChosen, toppingChosen) {
  this.size  = 0;
  this.topping = [];
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}
```
Expected Output: A valid constructor with those properties.

#### Test 2

Describe: Method calculateTotalPrice
Test: "It should define a prototype method 'priceThePizzaSize' from constructor 'Pizza'."
Code: 
```
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
```
Expected Output: A list of toppings chosen.


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

