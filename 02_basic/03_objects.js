// singleton

// object Literals

// Object.create


const mySm = Symbol("key1")

const user1 = {
    name : "Prajwal",
    "full_name" : "Prajwal Bokade",
    age : 24,
    [mySm] : "mykey1",
    location: "Nagpur",
    email : "prajwal@google.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Saturday"]

}

// console.log(user1.email);
// console.log(user1["email"]);
// console.log(user1[mySm]);

// console.log(user1["full_name"]);

user1.email = "prajwal@chatgpt.com"

// Object.freeze(user1)
user1.email = "prajwal@microsoft.com"
// console.log(user1);

user1.greeting = function(){
    console.log("Hello user1")
}

user1.greeting2 = function(){
    console.log(`Hello user1, ${this.name}`)
}

console.log(user1.greeting);
console.log(user1.greeting());
console.log(user1.greeting2());