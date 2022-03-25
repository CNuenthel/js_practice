

// Like list comprehension, mapping takes an array and makes a new array
// based on passed in function

const aList = [1,2,3,4,5,6,7]
const bList = ["a", "b", "c", "d", "e", "f", "g"]

const cList = aList.map( (aListItem) => {
    let bListItem = bList[0] // take first item in bList
    bList.shift() // move list in line with a list

    return [aListItem, bListItem]
})

console.log(aList)
console.log(bList)
console.log(cList)
console.log(bList) // bList is now empty as we shifted it in line with aList

// _________________ARROW FUNCTIONS_______________________________

// Arrow functions take in implicit data and shorten function writing

function add(a,b) {
    return a+b;
}

// is the same as 

(a,b) => {a + b} // this function implicitly returns the expression within {}

const addition = (a,b) => a+b; // no "return" statement required for one expression
console.log(addition(1,1));

() => {return 1} // return statement required for {}

// _____________________TERNARY OPERATORS____________________________

// Ternary operator, shorter if-then

if(1 === 1) {
    console.log("Yea those equal")
} else {
    console.log("I cannot maths")
}

// is the same as

1 === 1 ? console.log("Yea those equal") : console.log("I cannot maths")

// _______________________FIND__________________________

let movies = [
    "the fantastic mr. fox",
    "mr and mrs smit",
    "shrek"
]

const movie = movies.find(movie => { // iterates elements in movies
    return movie.includes("mrs"); // returns first element that contains includes param
})

// You can use .slice() method to make a new array from an already set array without copying the reference

const anArray = ["thing1", "thing2", "thing3", "thing4"];

let newArray = anArray // -> newArray will continue to point to anArray as reference
let brandSpankinNewArray = anArray.splice() // creates a new array with all the same elements as anArray, but without copying it as a reference

// .some, .every && .filter

let anArray = ["thing1", "thing2", "thing3", "thing4"];

anArray.some((n)=>{n[0] === "t"}) // iterates through array, returns boolean of true if any element in the array meets the test case, or false if none do
anArray.every((n)=>{n[0] === "t"}) // the same, however every element must meet the test case to return true, else false

anArray.filter((n) => {n === "thing1"}) // will make a new array, filtering from the old array based on boolean response of test case
// expected result anArray = ["thing1"]
