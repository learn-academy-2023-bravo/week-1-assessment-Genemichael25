// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------WHITEBOARD EXAMPLE: Create a function that takes in a string that has multiple words. If the individual word has 5 or more letters, we want to reverse that word. If less than 5 letters, leave as is. 

const notGoingToHappen = "The giants will win the world series in 2023."

// Input : a string
// Output : "The stnaig will win the dlrow seires in 2023" 

// Pseudocode: create a function called reverseSome 
// Set parameter to string
// Take the string and use split method to set to a newArray split(" ") ["the","giants","will","win","the","world","series"]
// Use .map to iterate over the array and go into conditional statement 
// Use a conditional statement to check if a word has 5 or more letters, use length property
//     If that is the case, I want to reverse that word 
//     In order to do that, I am going to split the word ("") ["g","i","a","n","t","s"]
//     ["s","t","n","a","i","g"]
//     Use join to put back together into word ("") "stnaig"
// Reverse method - work on an array

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: Borja
// create a function: boilingPointTester that accepts one numeral input
// create a constant boilingPoint = 212
// compare the input against boilingPoint using a if/else if statements and equality operators
// return whether input is below, at, or above boilingPoint
// use string interpolotion for the return `${checkedTemp} is + = - boiling point`

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

//Pseudo code: DeMario
//Pseudocode: create a function named fullLength that takes 2 arrays as arguments
// combine both arrays using .concat() method
// use .length at the end of the concat method and return that array
// ex. input: return [1,2,3].concat([1,2,3]).length -->   

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: Mark
// Pseudo code:
// Declare constant variable reverseCohort
// Set value to currentCohort
// Apply split to seperate letters into an array
// Apply reverse to reverse order of index's
// Apply join to combine data in array into a string
// Console.log to get string in reverse

const currentCohort = "Bravo 2023"
// Expected output: "3202 ovarB"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: Apple
    //
        // -I have to find the index at the value given by the variable
        // -use array.lastIndexOf() method
        // -plug in variable given into the method to find it at the specified value of the variable

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: Brandon

// create 2 variables to call the modified variables
// sort sanDiegoSummerTemperatures and sanDiegoWinterTemperatures
// reverse sanDiegoSummerTemperatures and sanDiegoWinterTemperatures
// string interpolate the console.log

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
