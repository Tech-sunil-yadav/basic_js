// const tinderUser = new object() --- singleton object
const tinderUser = {} // will give empty object

tinderUser.id = "123abc"
tinderUser.name = "sunil"
tinderUser.isLoggedIn = false
//console.log(tinderUser)
const regularUser = {
    email: "sunil.yadav@yahoo.com",
    FullName :{
           UserName:{
            firstName:"Sunil",
            lastName: "Yadav"
           }
    }
}
//console.log(regularUser.FullName.UserName.firstName)

const obj1 = {1:"one",2:"two"}
const obj2 = {3:"four",4:"five"}
//const obj3 = {obj1,obj2} -- it will give object in object like array

//const obj3 = Object.assign({},obj1,obj2) // wiil return single oject  // {}-- act as target and remaing asct as source

// const obj3 = {...obj1,...obj2}  // spread operator -- most of the time we will prefer this way
// console.log(obj3)

const users = [
    {
        id:1,
        email: "s@gmail.com"
    },
    {
        id:2,
        email: "a@gmail.com"
    },
    {
        id:3,
        email: "v@gmail.com"
    },
    {
        id:4,
        email: "g@gmail.com"
    }

]
users[1].email
console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // converted every keys and values in array as divided into array behaf of key

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check the existing whether element available or not

// DESTRUCTING CONCEPT
const course = {
    courseName : "Javascript",
    Price: "999",
    courseInstructor: "SunilYadav"
}
//course.courseInstructor
const {courseInstructor: instructor} = course   // HERE courseInstruct rename as instructor
console.log(instructor);

// API -- JAB BHI APNA KAM KISI KEY UPER THOP OR DEY  DETEY HAI USEY API KAHTEY HAI
// EXAMPLE-- LIKE SIGN AS GOOGLE , FACEBOOK API WORK HERE LIKE CHECINGHAM  EMAIL AUTHENTICATION ETC
// API MEY BACKEND SEY KUCH VALUE AATI HAI US VALUE KO KAISEY LIKTEY HAI -- pahley wo value XML structure mey aati thi tat was complex
//now comes in JSON -- IT LOOKS LIKE { } IT IS ALSO A OBJECT
// {
//     "name":"Abhinay",
//     "courseName":"javascript",
//     "price":"999"

// }

// some time api aaray ki fform mey milti hai
[
    {},
    {}
]