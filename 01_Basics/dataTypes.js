/* Primitive: 7 types
   1. string  => 
   2. Number
   3. Boolean
   4. null   => Object
   5. undefined => 
   6. Symbol (to make something unique)
   7. BigInt
*/


/* Refrence/Non-Primitive
   1. Arrays
   2. Objects
   3. Functions

*/

let id1=Symbol('123')
let id2=Symbol("123")
console.log(typeof id1)


console.log(id1 === id2);

let id3="123"
let id4="123"
console.log(id3 === id4);

const heros =["shaktiman", "Hanuman"]
console.log(typeof heros)


let obj={
    name : "Nijan",
    age : 27
}

console.log(typeof obj)

const myFunction=function(){
console.log("MyFunction");
}

console.log(typeof myFunction)



