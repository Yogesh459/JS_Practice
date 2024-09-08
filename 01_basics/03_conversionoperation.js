//let score="33abc"
//let score=null // o/p is 0
//let score=undefined // o/p is NaN
//let score=true // o/p is 1
let score="string" // o/p is NaN

console.log(typeof score)

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);   // here alway check your value after it conversion because as in this we can see 'Score' value converted in Number but actual value is NaN


//lets check with boolean convertion

let isloggedIn = 1
let isBooleanLoggedIn = Boolean(isloggedIn)

console.log(isBooleanLoggedIn);

// 1 => true, 0=>fasle
// "" => false, "yogesh"=>true

//same conversion will happen with string and also you can investigate with others datatypes conversion

let letNumber=123
let letString = String(letNumber)
console.log(letString); //o/p is 123 and typeof is string


