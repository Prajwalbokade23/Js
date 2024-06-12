const user = {
    username : "Prajwal",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , wlcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "Sam"

// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Prajwal"
//     console.log(this.username);
// }

// chai()

// const chai  =  () => {
//     let username = "Prajwal"
//     console.log(this);
// }

// chai()

// explicit arrow function 

// const addtwo  = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addtwo(3,4));


// implicit arrow function 

// const addtwo = (num1,num2) => num1 + num2

// const addtwo = (num1,num2) => (num1 + num2)

const addtwo = (num1,num2) => ({username : "Prajwal"})
