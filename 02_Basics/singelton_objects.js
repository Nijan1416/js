
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


*/
const user=new Object();

console.log(user);

const obj1={1:'Nijan',2:"n@test.com"}
const obj2={3:'Nijan',4:"n@test.com"}
const obj3={5:'Nijan',6:"n@test.com"}

const obj4=Object.assign({},obj1,obj2,obj3)
const obj5=Object.assign(obj1,obj2,obj3)
const obj6= {...obj1,...obj2,...obj3}

console.log(obj4);
console.log(obj5);
console.log(obj6)

console.log(Object.keys(obj1)) // Get keys
console.log(Object.values(obj1)) // Get values
console.log(Object.entries(obj1)); 
console.log(obj1.hasOwnProperty('1')); // Check property exist

 
 
/*
 Destructuring : alternative way to assign properties of the object to varaibles
                 assigns the properties of an object to variables with the same names by default
   - Destrucuring doesn't change the original object
   - let/const{property1:variable1,property2:varaible2}=object
   - let{property1,property2}=object - if the variables you want to keep as it as of object
   - if you assign property that doesn't exist to a variable using object destrucuring
     then the variable is set to "undefined"
   - setting default value
     let {prperty1,property2='',property3 : prop="data"}=object
   - destructuring null value
     if function retruns null or Object and you use the object destructuring then it will throw an error
     to avoid this
      we can use OR operator(||) to fallback the null object to an empty object
*/

const course= {name:'JS', price:"9999",instructor:'Nijan'}
// use value
course.instructor
course["instructor"]

const {instructor:cins}=course // Syntactial sugar quote

console.log(cins);

function getData(){
    return null;
}

// let {fname,lane}=getData();  throws Type error
let {fname,lane}=getData() || {}

console.log(fname)







