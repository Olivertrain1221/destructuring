/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26 ,27];
// let john = ages [0];
// let mary = ages [1];
// let joe = ages [2];

let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);


// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log("John Native:", johnNative, "John Secondary:", johnSecondary)

let [, , maryNative, marySecondary] = languages;
console.log("Mary Native:", maryNative, "Mary Secondary:", marySecondary)


let languages2 = {
    firstLanguage: "English",
    secondLanguage: "French",
    thirdLanguage: "German",
    fourthLanguage: "Japanese",
}

let {firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);


// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"]
let []