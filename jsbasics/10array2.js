const marvel=["spiderman","ironman","captain america"]
const dc=["flash","batman","superman"]
// marvel.push(dc)
// console.log(marvel)

// console.log(marvel[3][1])

const all=marvel.concat(dc) //only two
console.log(all)

const allone=[...marvel,...dc]  //spread operator =>multiople values
console.log(allone)
//

const am=[1,2,3,[5,6],7,[8,9,[7,5]]]
const aman=am.flat(Infinity)
console.log(aman)

console.log(Array.isArray("aman")) //Array.isarray() => check array
console.log(Array.from("aman"))    //Array.from()=> creat array
//
let one=100
let two = 200
let three= 300
console.log(Array.of(one,two,three)) //Array.of()=>create arrsy




