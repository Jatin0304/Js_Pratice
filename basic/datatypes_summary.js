// Primitive 

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 232434343434334434n


// Reference (Non primitive)

// Array, Objects, functions

const heros =["shaktiman","naagraj","doga"]
let myObj= {
    name: "jatin",
    age: 21
};

const myFunction = function (){
    console.log("hello world")
}

console.log(typeof myFunction);




// **************************

// stack (Primitive), Heap(Non-Primitive)


let myYoutubename = "hiteshchoudhary.com"

let anothername = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jatin@google.com"

console.log(userOne.email)
console.log(userTwo.email)