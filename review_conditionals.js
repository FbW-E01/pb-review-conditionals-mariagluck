// 1. Save a random whole number between -10 and 10 to a variable.

const wholeNum = Math.floor(Math.random() * 21 -10);

console.log(wholeNum); // prints : e.g. -7

// 2. If that variable is greater than 0, print "Ye" and otherwise print "No"

wholeNum > 0 ? console.log("Ye") : console.log("No");

// 3. If that variable is greater than 5, print "Winner", otherwise if that variable is greather than 0, print "OK", otherwise print "Try again!"

if (wholeNum > 5) {
    console.log("Winner")
} else if (wholeNum > 0 && wholeNum < 5) {
    console.log("OK")
} else {
    console.log("Try again ")
}

// 4. Save another random number between -10 and 10 to a variable.

const randomNum = Math.floor(Math.random() * 21 - 10);

// 5. If both variables are more than 5, print "Good scores!"
// 6. If either variable is below -9, print "Minus nine!"

if (wholeNum > 5 && randomNum > 5) {
    console.log("Good scores!")
} else if (wholeNum < -9 || randomNum < -9) {
    console.log("Minus nine!")
} else {
    console.log("Try again ")
}


// 7. Create a variable to store a message. If your random numbers added together is smaller than zero, save the message "We have gone sub zero!". Otherwise, set the message to null.


wholeNum + randomNum < 0 ? message = "We have gone sub zero!" : message = null;
console.log(message);


