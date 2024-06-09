// Primitive

// 7 types : string, Number , boolean, null, undefined, symbol, Bigint

const id = Symbol('123')
// Refrence - Nonprimitive

// Array, objects, Functions

const heros = ['Ironman', "hulk", "Thor"];

const myObject = {
    name: "Prajwal",
    age:    24,
}

const myFunction = function (){
    console.log("Hello World")
}
console.log(typeof myFunction);



/* ------------------------Memory------------------*/

// Stack (Primitive), Heap (Non-Primitive)


let myname = "Prajwal"

let anotherName = myname
anotherName = "Rajesh"
console.log(myname);
console.log(anotherName);


// Heap

let userone = {
    name: "userone",
    email:"user@gmail.com"
}

let userTwo = userone

userTwo.email = "prajwal@google.com"

console.log(userone.email);
console.log(userTwo.email);

