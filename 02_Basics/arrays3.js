/*

---

### **1. `map()` - Transforming Each Element**
The **`map()`** method is used to *transform* each element of the array based on a function and returns a new array with the 
                transformed elements.

#### **Example 1: Doubling Values**
Suppose you have an array of numbers, and you want to create a new array where every number is doubled.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

#### **Example 2: Extracting Object Properties**
If you have an array of objects and want to create a new array that only contains a specific property from each object, `map()` can help.

```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const names = users.map(user => user.name);

console.log(names); // ["Alice", "Bob", "Charlie"]
```

In this case, we used `map()` to extract just the `name` property from each object in the `users` array.

#### **Example 3: Converting Strings to Uppercase**
If you want to transform all strings in an array to uppercase, you can use `map()`.

```javascript
const words = ["hello", "world", "javascript"];

const uppercaseWords = words.map(word => word.toUpperCase());

console.log(uppercaseWords); // ["HELLO", "WORLD", "JAVASCRIPT"]
```

---

### **2. `reduce()` - Reducing to a Single Value**
The **`reduce()`** method is used to *accumulate* or reduce all the elements of the array into a single value. This could be a sum, a product, a concatenation, or any other operation that combines elements into a single result.

#### **Example 1: Summing All Numbers**
Let's say you have an array of numbers and you want to find the sum of all the elements.

```javascript
const numbers = [10, 20, 30, 40, 50];

const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(total); // 150
```

- The `accumulator` starts at `0` (initial value).
- In each iteration, the `currentValue` (the current number) is added to the `accumulator`.
- The final result is the total sum.

#### **Example 2: Finding the Maximum Value**
You can also use `reduce()` to find the maximum value in an array.

```javascript
const numbers = [5, 12, 8, 130, 44];

const max = numbers.reduce((maxValue, currentValue) => {
  return currentValue > maxValue ? currentValue : maxValue;
}, numbers[0]);

console.log(max); // 130
```

In this example:
- The `maxValue` starts as the first element in the array (`numbers[0]`).
- We compare each `currentValue` with `maxValue` and keep the larger one.
- The result is the highest value in the array.

#### **Example 3: Flattening an Array of Arrays**
You can use `reduce()` to flatten an array of arrays into a single array.

```javascript
const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];

const flattened = arrayOfArrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattened); // [1, 2, 3, 4, 5, 6]
```

Here, `reduce()` is used to "flatten" a two-dimensional array by concatenating each inner array into the accumulator.

---

### **3. `filter()` - Filtering Elements**
The **`filter()`** method creates a new array with all elements that pass the test implemented by the provided function.

#### **Example 1: Filtering Even Numbers**
Let’s say you have an array of numbers, and you want to filter out only the even numbers.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8]
```

- The `filter()` method tests each element (number) with the provided function (`num % 2 === 0`).
- Only numbers that are even will be included in the new array.

#### **Example 2: Filtering Objects by Property**
You can filter an array of objects based on a certain property value. For example, filtering users who are older than 30.

```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 40 }
];

const olderThan30 = users.filter(user => user.age > 30);

console.log(olderThan30); 
// [{ name: "Bob", age: 35 }, { name: "Charlie", age: 40 }]
```

#### **Example 3: Filtering Non-Truthy Values**
You can use `filter()` to remove falsy values (e.g., `false`, `null`, `undefined`, `0`, `NaN`, and empty strings) from an array.

```javascript
const values = [0, "hello", false, "", 42, null, "world"];

const truthyValues = values.filter(Boolean);

console.log(truthyValues); // ["hello", 42, "world"]
```

In this example, `Boolean` is used as a shorthand to remove all falsy values from the array.

---

### **Summary of Use Cases:**

| Method     | Description                                         | Example Use Case                |
|------------|-----------------------------------------------------|---------------------------------|
| `map()`    | Transforms every element in an array               | Doubling values, extracting properties, converting to uppercase |
| `reduce()` | Reduces an array to a single value                 | Summing values, finding max/min, flattening arrays |
| `filter()` | Filters elements based on a condition             | Filtering even numbers, removing falsy values, filtering by object property |

---

*/

console.log("************* map() **************************************");

const data=[1,2,3,4]

const mappedData=data.map(num => num *2);

console.log(mappedData)

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];

const userNames=users.map(user => user.name)

console.log(userNames)

console.log("**********************************************************");


console.log("************* reduce() ***********************************");

const sumOfNumbers=data.reduce((previousValue,currentvale)=>previousValue+currentvale,0)

console.log(sumOfNumbers);

const maxNumber=data.reduce((previousValue,currentvale)=> currentvale> previousValue?currentvale:previousValue,3)
console.log(maxNumber);



console.log("**********************************************************");

console.log("************* filter() ***********************************");



console.log("**********************************************************");