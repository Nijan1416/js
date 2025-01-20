/*
 Object declaration:
  1. Singleton : Object.create()
  2. Literals  : {key:value}
                 - by deafult key will be string key-> internally processes"key"
*/

console.log("************************ Literal Objects ***************************")
const mySym=Symbol("key1")

const user = {
    name:"Nijan",
    // mySym:"symboldvalue",// undefined
    [mySym]:"symboldvalue",
    "full name":"01-06-2000",
    location: "banglore",
    email: "ngouda@gamil.com"
}

// accessing the object properites

console.log(user.name,); // not the better approach, in the above object you can't access the full name property with this
console.log(user["name"])
console.log(user[mySym])

user["email"]="ngouda@chatgpt.com"

console.log("*************** Before freezing *********************");
console.log(user);

console.log("************** after freezing ***********************");

// Object.freeze(user) //  lock the object, any changes after this will not be propogated, meaning changes will not take effect

user["email"]="ngouda@google.com"

console.log(user);

// can add function to the object

user.greeting1=function(){
    console.log("Hello user")
}

user.greeting2=function(){
    console.log(`Hello user ${this.name}`);
    
}

console.log("********* greeting1() **************");

console.log(user)
console.log(user.greeting1)
console.log(user.greeting1())

console.log("********* greeting2() ***************");

console.log(user)
console.log(user.greeting2)
console.log(user.greeting2())






