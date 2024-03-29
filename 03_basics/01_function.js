// function -- 
// parameter -- when we make definition and whaterver we take input that is called parameter
// argument -- when we call function and pass the value that is called is argument
// function addTwoonum(num1,num2){
//    console.log(num1+num2);
// }
// addTwoonum(7,9)
// const result =  addTwoonum(7,9)
// console.log("result",result) // will give undefined value because in function this will done by return

function addtwonumber(number1,number2){
    
    return number1+number2  // after return not any print function work 
}
const result = addtwonumber(3,5)
//console.log("Result",result)

function LoginUser (username){
    return `${username} Just Logged In`
}
// console.log(LoginUser("Sunil"))
// console.log(LoginUser(" ")) // IF PASS EMPTY STRING THEN GIVE JUST LOGGED IN
// console.log(LoginUser()) // if not pass anything then it wil give undefined value


// function LoginUser (username="yadav"){
//     if(!username)
//     {
//         console.log("Please enter a username ")
//         return
//     }
//     return `${username} Just Logged In`
// }
// console.log(LoginUser("sunil"))



// if multiple argument needed then will use rest operator 
// like cart example multple items added
// function CalculatePrice(...num1){
//  return num1
// }
// console.log(CalculatePrice(200,400,500))

// example-02
// function CalculatePrice(val1, val2,...num2){    // ... rest operator // syntax of rest operator and spread opeartor is same but it will depend according to uses 

//      return num2

//  }
//  console.log(CalculatePrice(200,400,500,600))



// handle object with function
// const user = {
//     username:"sunil",
//     price: 199
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// handleObject(user)


// handle array with function

const myNewArray = [200,300,500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([700,400,900,567]));