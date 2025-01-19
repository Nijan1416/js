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

/* datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

 Primitive - will get the copy of value
 Non-Primitve - will get original memory(Changes will be affcted to original varaible)
*/

let user1= {
    name: "Nijan",
    upi: "nijan@ybl"
}

let user2=user1
console.log("*********** After assigning user1 to user 2");

console.log(user1);
console.log(user2);

user2.name="Nijan Updated"

console.log("*********** After changing the value  ***********");

console.log(user1);
console.log(user2);



