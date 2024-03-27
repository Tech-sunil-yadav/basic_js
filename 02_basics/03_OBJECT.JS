// singleton ---- when we creaate object using constructor called singleton
// means unique
// when we define by literals not a singleton

//object.create
 const mySym = Symbol("key1")
// object literals
const JsUser = {
 name:"sunil", // name behave like string means bydefault it will string
 "Full name":"Sunil Yadav",
 [mySym]: "myKey1", // it is the syntax of symbol defined as key
 age:24,
 location : "Muzaffarpur",
 email : "sunil.yadav9584@gmail.com",
 isLoggedIn : false,
 lastLogin:["Monday","tuesdaay"]
}
//console.log(JsUser.email)
//console.log(JsUser["email"]) // it is the other method of acessing the key and value of object
// console.log(JsUser["Full name"])
// console.log(JsUser[mySym])

// JsUser.email = "abhinay.yadav@goole.com"
// console.log(JsUser)
// Object.freeze(JsUser) //this method use for fixing the value cant change anyone
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`); // this keyword refers to reference of same object
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());