const score =100.9345
console.log(score)

let no=new Number(100)
console.log(no)
 //functions

console.log(score.toString().length)
console.log(score.toFixed(3))
console.log(score.toPrecision(4))

const hun=10000000
console.log(hun.toLocaleString('en-IN'))

//maths.....
//by default

console.log(Math)
console.log(Math.abs(-4))  //abs=>absolute value
console.log(Math.round(4.3))  //roundoff
console.log(Math.ceil(4.3))  //ceiling value
console.log(Math.floor(4.3))   //floor value
console.log(Math.min(4,3,5,7,9))  //also max
console.log(Math.sqrt(4))
console.log(Math.pow(4,4))

///random
console.log(Math.random())  //always return value b/w 0 and 1
console.log(Math.floor(Math.random()*10))

const min =10
const max=20

console.log(Math.random()*(max-min+1)) 