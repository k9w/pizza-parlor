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
from [the curriculum](https://learnhowtoprogram.com) where I made this
page on Friday January 28th 2022. Check out more of my work at:

 * https://github.com/k9w

The Specifications section below describes my understanding of what the program
should do.

The Tests section outlines the tests as I implement them.

### Specifications

NOTE: This section does not specify which features have been implemented
thus far. It only outlines what the program is supposed to do.

The following pseudocode describes my plan for how the web app will work.

```
Business Logic

Have a pizza declared when the user loads the page.
Choose one topping from three or more options; and include the price.
 - Cheese - $5
 - Pepperoni - $7
 - Artichoke - $9
 - Anchovy - $8
Choose a size from three or more options; and include the price..
 - Small: 12 inch - $12
 - Medium: 18 inch - $18
 - Large: 24 inch - $24
Calculate a total price based on prices for each topping and size.


User Interface Logic

Menu header

Show radio buttons for
 - Toppings with prices
 - Sizes with prices

Submit button

Show final pizza with total price.

```



### Tests

```
Describe: Pizza Object Constructor
Test: "It should template a pizza with properties: topping, size, price."
Code:
function Pizza() {
  this.toppings = [];
  this.size = 0;
  this.price = 0;
}
Expected Output: A valid constructor with those properties.
```

```
Describe: Choose topping
Test: "It should return a list of chosen toppings."
Code: 
Pizza.prototype.chooseToppings = function() {
  this.toppings = [];
}
Expected Output: A list of toppings chosen.
```

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

