
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


