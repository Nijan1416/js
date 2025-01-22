const user ={
    uName:"Nijan",
    price: 1000,
    welcomeMessage: function(){
        console.log(`${this.uName}, welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()
user["uName"]="NianUpdate"
user.welcomeMessage()

console.log(this) // in node env , this is {} object and in browser its windows object

function test(){
    console.log(this); // prints current cotenxt
    let name="Nijan"
    console.log(this.name); // undefined?
    
    
}

test()

const funDA=function functionDeclANdAssing(){
    console.log(this); // prints current cotenxt
    let name="Nijan"
    console.log(this.name); // undefined?
}

funDA()

const arrFun= () =>{
    let name="Nijan"
    console.log(this) // prints {}
}

arrFun()
