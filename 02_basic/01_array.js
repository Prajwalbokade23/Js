// Array

const myArr = [0,1,2,2, "Prajwal", true]

const   heros = ["Ironman" , "Captian America"]

const myArr2  = new Array(1,2,3,4)
// console.log(myArr2[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(10)
// myArr.shift()

// console.log(myArr.indexOf(9))

// const newArr = new Array("Ironman" , "Captian America")
// console.log(typeof(newArr.join()))



//slice splice
console.log("A",myArr);

// const myn1 = myArr.slice(1,3)

const myn2 = myArr.splice(1,3)
// console.log(myn1);
console.log(myn2)
console.log(myArr);