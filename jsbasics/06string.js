const name= "aman"
let repoCount= 50
//veryIportant
// console.log(name+repoCount)   //not recommended in modern coading

console.log(`my name is ${name} and repo count is ${repoCount} `)  

const nameAm = new String('aman')

//fuctions of string


console.log(name.toUpperCase()) //toLowerCase()
console.log(name.charAt(3))  //know value at index
console.log(name.indexOf('m')) ///know index value
console.log(name.length)

const newString =name.substring(0,2) //no negative value
console.log(newString)

const anotherString=name.slice(-4,3)  
console.log(anotherString)

let one = "    aman   "
console.log(one)
console.log(one.trim()) //remove spaces //trimStart(),trimEnd()

const url="aman@%20gmail.com"
console.log(url.replace('%20','157')) //replace
console.log(url.includes('aman'))   //check ,present or not


let two="aman-kumar-btech-cse-bennett university"
console.log(two.split('-'))
// console.log(two.join(','))