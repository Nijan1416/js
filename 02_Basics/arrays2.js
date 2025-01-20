const citrus_fruits=["orange","grapes","lemon"]

const tropical_fruits=["bananas","dates","papays"]

// citrus_fruits.push(tropical_fruits)

console.log(citrus_fruits)

// console.log(citrus_fruits.join())

// console.log(citrus_fruits[3][1])

const fruits=citrus_fruits.concat(tropical_fruits);

console.log(fruits)

/*
 ... : spread operator
 The **spread operator** in JavaScript, represented by three dots (`...`), is a powerful syntax used to expand iterable 
 elements like arrays, strings, or objects into individual elements or properties. It's commonly used for creating copies,
  combining structures, or passing values as arguments.

---

### **Key Use Cases of the Spread Operator**

#### **1. Expanding Arrays**
The spread operator breaks an array into individual elements.

- **Example: Copying an Array**
  ```javascript
  const numbers = [1, 2, 3];
  const copy = [...numbers]; // Creates a shallow copy
  console.log(copy); // [1, 2, 3]
  ```

- **Example: Combining Arrays**
  ```javascript
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const combined = [...arr1, ...arr2];
  console.log(combined); // [1, 2, 3, 4]
  ```

---

#### **2. Expanding Objects**
The spread operator can also be used to copy or merge objects (introduced in ES2018).

- **Example: Copying an Object**
  ```javascript
  const user = { name: "Alice", age: 25 };
  const userCopy = { ...user }; // Shallow copy
  console.log(userCopy); // { name: "Alice", age: 25 }
  ```

- **Example: Merging Objects**
  ```javascript
  const userDetails = { name: "Alice", age: 25 };
  const userContact = { email: "alice@example.com" };
  const merged = { ...userDetails, ...userContact };
  console.log(merged); // { name: "Alice", age: 25, email: "alice@example.com" }
  ```

---

#### **3. Passing Arguments**
The spread operator can be used to pass elements of an array as individual arguments to a function.

- **Example: Math.max with Spread**
  ```javascript
  const numbers = [1, 5, 3, 7];
  const maxNumber = Math.max(...numbers); // Equivalent to Math.max(1, 5, 3, 7)
  console.log(maxNumber); // 7
  ```

---

#### **4. Expanding Strings**
Strings are iterable, so the spread operator can expand them into individual characters.

- **Example: Splitting Strings into Characters**
  ```javascript
  const greeting = "Hello";
  const chars = [...greeting];
  console.log(chars); // ['H', 'e', 'l', 'l', 'o']
  ```

---

#### **5. Rest vs. Spread**
Although they use the same syntax (`...`), **spread** expands elements, while **rest** collects elements.

- **Spread:**
  ```javascript
  const arr = [1, 2, 3];
  console.log(...arr); // 1 2 3
  ```

- **Rest:**
  ```javascript
  const [first, ...rest] = [1, 2, 3];
  console.log(first); // 1
  console.log(rest);  // [2, 3]
  ```

---

### **Common Use Cases**
1. **Clone and Combine Arrays/Objects:**
   - Avoid mutating the original data.

2. **Pass Dynamic Arguments to Functions:**
   - Great for working with variadic functions like `Math.max`.

3. **Destructure and Extract Remaining Properties:**
   - Use rest to collect the remaining items.

---

### **Key Notes**
- The spread operator creates a *shallow copy*. Deeply nested objects/arrays will not be fully duplicated.
- Objects must be iterable to use the spread operator. For instance, you can't use it directly on a non-iterable object like `{}` in a context expecting an array.

The spread operator simplifies many common tasks and makes code cleaner and more concise!

Analogy:

Think of It as “Unpacking”:
    The spread operator “spreads” or unpacks values from an array, object, or iterable into their individual elements or properties.
    Analogy: Imagine you have a box of items (an array or object). The spread operator opens the box and lays out the items one by one

To Remember:

“SEA”: Spread, Expand, Apply
    Spread- elements into arrays.
    Expand- properties into objects.
    Apply- elements as arguments to functions.

*/

const fruitsNew=[...citrus_fruits,...tropical_fruits]

console.log(fruitsNew)

const nestedArray=[1,2,3,[4,5,6],[7,[8,9]]]

console.log(nestedArray.flat(Infinity));

console.log(Array.isArray("Nijan"));
const name="Nijan";
console.log(Array.from(name))

console.log(Array.from({name:name})) // interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

/*
The **spread operator** and **rest parameter** both use the same syntax (`...`), but they serve different purposes in JavaScript. Here's a clear breakdown to help you understand and remember the difference:

---

### **Spread Operator (`...`)**
- **Purpose:** Expands (spreads) elements of an array, object, or iterable into individual elements or properties.
- **Use Case:** *"Unpack elements."*
- **Context:** Used where individual elements are expected.

#### **Examples:**
1. **Expanding an Array:**
   ```javascript
   const numbers = [1, 2, 3];
   const newNumbers = [...numbers, 4, 5]; // Combines arrays
   console.log(newNumbers); // [1, 2, 3, 4, 5]
   ```

2. **Merging Objects:**
   ```javascript
   const obj1 = { a: 1, b: 2 };
   const obj2 = { c: 3 };
   const merged = { ...obj1, ...obj2 };
   console.log(merged); // { a: 1, b: 2, c: 3 }
   ```

3. **Passing Arguments:**
   ```javascript
   const nums = [5, 10, 15];
   console.log(Math.max(...nums)); // 15
   ```

---

### **Rest Parameter (`...`)**
- **Purpose:** Collects (gathers) remaining elements into an array or object.
- **Use Case:** *"Pack elements."*
- **Context:** Used in function parameters or destructuring assignments to gather the "rest" of the items.

#### **Examples:**
1. **Collecting Function Arguments:**
   ```javascript
   function sum(...nums) {
     return nums.reduce((total, num) => total + num, 0);
   }
   console.log(sum(1, 2, 3, 4)); // 10
   ```

2. **Destructuring Arrays:**
   ```javascript
   const [first, ...rest] = [1, 2, 3, 4];
   console.log(first); // 1
   console.log(rest);  // [2, 3, 4]
   ```

3. **Destructuring Objects:**
   ```javascript
   const { a, ...rest } = { a: 1, b: 2, c: 3 };
   console.log(a);    // 1
   console.log(rest); // { b: 2, c: 3 }
   ```

---

### **Key Differences**
| Feature                  | Spread Operator                     | Rest Parameter                  |
|--------------------------|--------------------------------------|---------------------------------|
| **Purpose**              | Expands elements                   | Collects elements              |
| **Input/Output**         | Breaks down data                   | Gathers data                   |
| **Use Case**             | Copying, merging, or passing data  | Handling extra arguments/items |
| **Context**              | Array literals, object literals, function calls | Function parameters, destructuring |

---

### **Analogy to Remember**
- **Spread:** *"Unpacking a suitcase."* You open the suitcase (array/object) and lay out all its contents.
- **Rest:** *"Packing items into a bag."* You gather leftover items and put them into a bag (array/object).

---

### **Quick Mnemonic**
- **Spread = Expand**
- **Rest = Gather** 

*/



