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
console.log(LoginUser("Sunil"))
