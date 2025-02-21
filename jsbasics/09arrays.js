//array =>collection of items //mix of datatypes //resizable //items can acess through index values
//array copy operation create shallow copy=>changes occured in original array

const myarr=[1,2,3,45]
console.log(myarr[0])
myarr.push(9)
myarr.pop() //removes last value
myarr.unshift(7)
myarr.shift()//removes first elem
console.log(myarr) // input at first
console.log(myarr.includes(9))
console.log(myarr.indexOf(9))
//

const newarr=myarr.join()
console.log(myarr)
console.log(newarr)

//slice and splice

const one=myarr.slice(1,3)
console.log(one)
console.log("b ",myarr)
const two=myarr.splice(1,3)  //includes last index value and also removes from original array
console.log(two)

