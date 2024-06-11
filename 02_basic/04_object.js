// const tinerUser = new Object()  //singleton object

const tinerUser = {}

tinerUser.id = "123abc"
tinerUser.name = "Sammy"
tinerUser.isLoggedIn = false


const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userfullname:{
            firstName : "Prajwal",
            lastName : "Bokade"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1 , obj2}

// const newobj = Object.assign({}, obj1, obj2)
// console.log(newobj)

const obj3 = {...obj1,...obj2} //spread operator
console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]