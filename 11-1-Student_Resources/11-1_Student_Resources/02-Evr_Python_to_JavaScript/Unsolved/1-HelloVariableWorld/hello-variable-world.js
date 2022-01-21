// Create a variable called "fullName" that holds a string
var fullName = 'Juliana';
// Create a variable called "country" that holds a string
var country = 'Canada';
// Create a variable called "age" that holds an integer
var age = "31";
// Create a variable called "hourlyWage" that holds an integer
var hourlyWage = 1000;
// Calculate the "dailyWage" for the user
var dailyWage = hourlyWage*8;
// Create a variable that holds a number as a string
var stringNum = '10';
// Create a variable called 'weeklyWage' that converts a string into an integer
var weeklyWage = parseInt(stringNum)*8*5;
// Create a variable called "satisfied" that holds a boolean
var satisfied = true;
// Print out "Hello <name>!"
console.log(`My name is ${fullName}`);
// Print out what country the user entered
console.log(`You live in ${country}.`);
// Print out the user's age
console.log(`your age is ${age}`)
// Print out the daily wage that was calculated

// Print out the weekly wage that was calculated
console.log(`weekly wage is ${weeklyWage}`)
// Using an IF statement to print out whether the users were satisfied
if (satisfied === true){
    console.log(`are you satisfied?...${satisfied}`);
}
    else {
        console.log(`you are not satisfied with your pay`)
    }