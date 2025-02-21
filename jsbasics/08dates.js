let d=new Date()
console.log(d.toString())
console.log(d.toISOString())
console.log(d.toJSON())
console.log(d.toLocaleString('default',{weekday:"long"
})) ///imp
console.log(d.toDateString())

//
console.log(typeof d)
let s =new Date(2023,0,25)  //months start with 0 in js inthis format

let v =new Date("2023-4-23")
console.log(v)
console.log(v.getTime()) //,getmonth//.getday//.getyear


let mytimestamp=Date.now()
console.log(mytimestamp)