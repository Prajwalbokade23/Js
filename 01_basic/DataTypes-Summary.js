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