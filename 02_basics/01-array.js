// ARRAY
const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktman", "naagra"]

const myArr2 = new Array (1,2,3,4)
//console.log(myArr[2])
//console.log(myArr2)

// ARRAY METHODS
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
//console.log(myArr)

// myArr.unshift(9) // adding new element on 1st position in array
// myArr.shift()  // removing 1elemt on stsrting position
// console.log(myArr)
// console.log(myArr.includes(4)) // give result in true or in false checking existing

//console.log(myArr.indexOf(3)) // for finding the postion on which element exist

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr) // return the value without in any squrae bracket

// slice, splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr); 

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2)
