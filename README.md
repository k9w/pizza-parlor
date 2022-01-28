# _Independent project, Epicodus, Intermediate Javascript, Week 1

#### By _**Kevin Williams**_

#### _Mr Roboger's Neighborhood_

## Technologies Used

* _Javascript_
* _jQuery_

## Description

_Welcome to my third independent project as a student at
[Epicodus](https://epicodus.com)!_

[Here is the
lesson](https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/arrays-and-looping-independent-project)
from [the curriculum](https://learnhowtoprogram.com) where I made this
page on Friday January 21st 2022. Check out more of my work at:

 * https://github.com/k9w

The Specifications section below describes my understanding of what the program
should do.

The Tests section outlines the tests as I implement them.

### Specifications

NOTE: This section does not specify which features have been implemented
thus far. It only outlines what the program is supposed to do.

The form on the page asks the user to enter any integer number of one or
more digits in length.

By default, the page returns a range of integer numbers from 0 up
through the number entered by the user. For example:

```
Input: 45
Output: 
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19,
20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
38, 39, 40, 41, 42, 43, 44, 45
```



### Tests

```
Describe: returnNumberRange()

Test: "It should return a range of numbers from zero (0) up through the
number entered in the HTML Form by the user."

Code:
const numberRangeArray = [];
const numberInput = 10;
function returnNumberRange(numberInput) {
  for (let i = 0; i < numberInput; i++) {
    numberRangeArray.push(i);
  }
}


Example Input: 
45

Expected Output: 
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19,
20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
38, 39, 40, 41, 42, 43, 44, 45

```

```
Describe: beepBoop()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Test: "It should..." // this is the start of 2nd test for beepBoop()
```


## Setup/Installation Requirements

* _Visit the live site at https://k9w.github.io/mr-robogers-neighborhood_
* _Or clone the repo and open index.html in a browser._


## Known Bugs

_For any problems, please file an issue on Github. Pull Requests welcome._

- _After a choice is selected and submitted, the page returns no results._
- _Also after a choice is selected and submitted, the dropdown reverts to the first choice._


## License

[ISC](https://choosealicense.com/licenses/isc)

Copyright (c) _2022_ _Kevin Williams_
