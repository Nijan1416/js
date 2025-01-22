/*
 let
 const
 var
 An analogy for **JavaScript scopes** can be explained using the idea of **rooms in a house**:

---

### **1. Global Scope**  
Imagine the **global scope** as the **living room** of a house.  
- Everyone in the house (any function or block of code) can access things in the living room because it’s a shared space.
- If you place something (a variable) in the living room, anyone can grab it.

```javascript
// Living room
let remoteControl = "Global"; // Accessible from anywhere
```

---

### **2. Function Scope**  
Think of a **function** as a **bedroom**.  
- Only the person inside the bedroom can see what’s in there.
- Anything placed in the bedroom stays private to the person in that room unless explicitly shared.

```javascript
function myRoom() {
  let diary = "Private"; // Only accessible inside this room
}
```

---

### **3. Block Scope**  
A **block scope** is like a **drawer inside a room**.  
- If you open the drawer, you can see what’s inside, but as soon as you close the drawer (exit the block), its contents are inaccessible.

```javascript
{
  let secretNote = "In a drawer"; // Only visible when the drawer is open
}
```

---

### **4. Lexical Scope**  
Imagine a **child’s bedroom** inside a **parent’s bedroom**.  
- The child has access to everything in their room and anything in their parent’s room because they are inside it.
- However, the parent doesn’t have access to the child’s toys unless they are explicitly shared.

```javascript
function parentRoom() {
  let parentItems = "Parent's belongings";

  function childRoom() {
    console.log(parentItems); // The child can access the parent's belongings
  }

  childRoom();
}
```

---

### **5. Module Scope**  
Think of a **separate guest house** on the property.  
- It has its own set of furniture and belongings (variables), and they aren’t accessible from the main house unless explicitly shared.
- To access something from the guest house, you need to knock (import/export).

```javascript
// Guest house (module)
export let guestList = ["Alice", "Bob"];

// Main house
import { guestList } from './guestHouse.js';
```

---

### **6. Closures**  
Closures are like a **secret vault** that someone gives you the key to.  
- Even if the vault's original owner moves out of the house (function execution ends), you can still use the key they gave you to access the vault’s contents.

```javascript
function createVault() {
  let vaultContents = "Jewelry";

  return function accessVault() {
    return vaultContents; // Accessing the vault even after the function is gone
  };
}

const vaultKey = createVault();
console.log(vaultKey()); // Jewelry
```

---

### Summary
- **Global scope**: Living room – everyone can see it.  
- **Function scope**: Bedroom – private to the person using it.  
- **Block scope**: Drawer – accessible only when open.  
- **Lexical scope**: Child’s room – inner rooms can see outer rooms.  
- **Module scope**: Guest house – requires permission (import/export).  
- **Closures**: Secret vault – remains accessible with a key even after the owner leaves.


*/
let a=10
const b=20
var c=30

if(true){
    let a=40
    const b=50
    var c=60
}

console.log(a);
console.log(b);
console.log(c);

function one(){

    const userName="Nijan"
    function two(){
        const website="test@123.com"
        console.log(userName);
        
    }

    // console.log(website);
    two()
    
}

one()

addOne(3) // it doesn't throw error

function addOne(num){
 return num+1
}

addTwo(6) // Cannot access 'addTwo' before initialization, if declaring and holding in variable then we can't access before that

const addTwo=function(num){
   return num+2
}


