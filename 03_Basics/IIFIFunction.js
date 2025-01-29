
/*
IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is executed immediately after it is defined. I
t has the following syntax:

```javascript
(function() {
    console.log("I am an IIFE!");
})();
```

Or using arrow functions:

```javascript
(() => {
    console.log("I am an IIFE!");
})();
```

### Why Do We Need IIFE?
1. **Encapsulation & Avoiding Global Scope Pollution**  
   - Variables declared inside an IIFE are not accessible outside of it, preventing unintended conflicts with other scripts.
   - Example:
     ```javascript
     (function() {
         let message = "Hello, World!";
         console.log(message); // Accessible here
     })();
     console.log(message); // Error: message is not defined
     ```

2. **Creating Private Scope**  
   - Useful for modular code where internal logic should not be exposed.

3. **Avoiding Variable Hoisting Issues**  
   - Ensures variables are not lifted to the global scope unexpectedly.

4. **Executing Code Immediately**  
   - If you need to execute a piece of code as soon as it is defined, IIFE is a good choice.

5. **Can Pass Arguments & Return Values**  
   ```javascript
   let result = (function(a, b) {
       return a + b;
   })(5, 10);
   console.log(result); // 15
   ```

6. **Safe Use in Asynchronous Code**  
   - Useful in setTimeout, event listeners, and closures.

NOTE: If multiple IIFE functions then we wii get error

You **can** write multiple IIFE functions in the same JavaScript file, but if they are placed one after another without a proper separator, JavaScript may misinterpret them and throw an error.  

### **Problem: IIFE Parsing Issue**
Consider the following incorrect example:  

```javascript
(() => {
    console.log("First IIFE executed");
})()
(() => {
    console.log("Second IIFE executed");
})()
```
This will result in an error because **JavaScript does not automatically insert a semicolon (`;`) between the two IIFEs**. The interpreter thinks the second `(() => {` is trying to call the first IIFE’s return value as a function, which is invalid.  

### **Solution: Separate the IIFEs Properly**
You can **fix** this issue by explicitly adding a semicolon (`;`) after the first IIFE:  

```javascript
(() => {
    console.log("First IIFE executed");
})(); // <- Semicolon is important

(() => {
    console.log("Second IIFE executed");
})(); // This will now work fine
```
#### **Alternative Fixes**
1. **Wrap each IIFE in parentheses**
   ```javascript
   ;(() => {
       console.log("First IIFE executed");
   })()
   ;(() => {
       console.log("Second IIFE executed");
   })()
   ```
   The semicolon before `;(() => {...})()` ensures proper execution, even if the previous statement does not end with a semicolon.

2. **Use `void` before the second IIFE**
   ```javascript
   (() => {
       console.log("First IIFE executed");
   })();

   void (() => {
       console.log("Second IIFE executed");
   })();
   ```
   `void` ensures the second IIFE is interpreted correctly as a standalone function execution.

---

### **Key Takeaways**
✅ **Multiple IIFEs are allowed in the same file**  
✅ **Always separate IIFEs with a semicolon (`;`) to avoid parsing errors**  
✅ **Using `void` or explicit parentheses before IIFEs also prevents issues**  


------------------------------------------------------------------------------------

Sure! Let's go over some **real-world use cases of IIFE** with examples.

---

### **1. Avoiding Global Scope Pollution in Modules (Pre-ES6)**
Before ES6 introduced `import/export` modules, IIFE was a common pattern to create **private modules**.

#### **Example: Creating a Module**
```javascript
const CounterModule = (function() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
})();

CounterModule.increment(); // Count: 1
CounterModule.increment(); // Count: 2
console.log(CounterModule.getCount()); // 2
console.log(CounterModule.count); // Undefined (private variable)
```
✅ **Why?** The `count` variable is encapsulated within the IIFE and cannot be modified directly.

---

### **2. Protecting Variables in Loops**
When using `var` inside loops, it creates a common issue where the variable is not block-scoped. IIFE helps to fix this by ensuring each iteration has its own scope.

#### **Example: Fixing `var` in `setTimeout`**
```javascript
for (var i = 1; i <= 5; i++) {
    (function(i) { // IIFE captures the correct `i` value
        setTimeout(() => {
            console.log(`Value: ${i}`);
        }, i * 1000);
    })(i);
}
```
✅ **Why?** Without IIFE, all `setTimeout` callbacks would print `Value: 6` because `var` is function-scoped.

---

### **3. Executing Asynchronous Code Immediately**
IIFE can be used for running an `async` function immediately, such as fetching API data.

#### **Example: Fetching Data with IIFE**
```javascript
(async function() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
})();
```
✅ **Why?** It allows us to use `await` outside of an `async` function by executing the function immediately.

---

### **4. Initializing One-Time Setup Code**
IIFE is useful for running setup logic once, such as event listeners or environment configurations.

#### **Example: One-Time Event Listener**
```javascript
(function() {
    console.log("App initialized!");

    document.addEventListener("DOMContentLoaded", function() {
        console.log("DOM fully loaded and parsed.");
    });
})();
```
✅ **Why?** The function runs once at the start without leaving unnecessary variables in the global scope.

---

### **Conclusion**
IIFE is a **powerful tool** in JavaScript for:
✅ Encapsulation  
✅ Avoiding global namespace pollution  
✅ Preventing variable hoisting issues  
✅ Running code immediately  

*/

// Named IIFE
(function test(){
 console.log("Executed Immediately");

})();

(function test1(){
    console.log("Executed Immediately");
   
   })();

// Arrow IIFE
(() => {
    console.log("Arrow function Executed Immediately");
})();

