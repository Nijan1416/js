
// Comparing String and number
console.log("****** String & number *************")
console.log("2" > 1);
console.log("02" > 1);
// JavaScript automatically converts the string "2" and "02" to numbers (2 and 2 respectively).

//  null comparison
console.log("****** null *************")
console.log(null > 0)

console.log(null == 0)

console.log (null >= 0)
/*
null > 0: null is converted to 0, so 0 > 0 is false.
null == 0: Special case—null is only loosely equal to undefined, but not to any number. So, false.
null >= 0: null is converted to 0, and 0 >= 0 is true.

*/

// undefined
console.log("****** undefined *************")
console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >=0)

/*
undefined > 0: undefined is treated as NaN, and any comparison with NaN (except NaN == NaN) results in false.
undefined == 0: undefined is only loosely equal to null, so false.
undefined >= 0: Since undefined is NaN, and NaN >= 0 is false.

*/

console.log(true == 1);  // true (true is converted to 1)
console.log(false == 0); // true (false is converted to 0)
console.log(true === 1); // false (different types)
console.log(false == ""); // true (empty string is falsy, so it's treated as false)
/*
Boolean values (true and false) are converted to 1 and 0 in loose equality.
Empty strings and 0 are treated as false in loose comparisons.

*/

/*

Type coercion is the automatic conversion of one data type into another during operations. 
JavaScript is loosely typed, meaning it tries to convert values automatically when needed.

Note:
 String to Number conversion happens when comparing strings with numbers.
null behaves strangely in comparisons because null >= 0 is true, but null > 0 is false.
undefined always results in false when compared to numbers.
*/

/*


### **Type Coercion in JavaScript**
Type coercion is the automatic conversion of one data type into another during operations. JavaScript is loosely typed, meaning it tries to convert values automatically when needed. 

---

## **1. Implicit Type Coercion (Automatic)**
Implicit coercion happens when JavaScript automatically converts a value from one type to another.

### **1.1 String Conversion (Concatenation)**
```javascript
console.log("5" + 2); // "52"
console.log("5" + true); // "5true"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"
```
- When using the `+` operator with a string, **everything is converted to a string**.

---

### **1.2 Number Conversion**
```javascript
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5
console.log("5" - "2"); // 3
console.log("5" * "2"); // 10
console.log("5" / "2"); // 2.5
```
- When using `-`, `*`, `/`, JavaScript converts strings to numbers automatically.
- `"5" - 2` → `5 - 2` → `3`.

---

### **1.3 Boolean Conversion**
```javascript
console.log(true + 1); // 2  (true → 1)
console.log(false + 1); // 1  (false → 0)
console.log(true + "1"); // "true1" (true → string)
console.log(5 == "5"); // true  (string converted to number)
console.log(0 == false); // true (false is converted to 0)
console.log("" == false); // true (empty string is falsy)
console.log(" " == false); // true (space is also considered falsy)
```
- `true` becomes `1`, `false` becomes `0` in numerical operations.
- In loose equality (`==`), JavaScript converts one value to match the other.

---

## **2. Explicit Type Coercion (Manual)**
Explicit coercion is when you manually convert a value to another type using built-in functions.

### **2.1 Convert to Number**
```javascript
console.log(Number("5")); // 5
console.log(Number("5.5")); // 5.5
console.log(Number("")); // 0 (empty string is converted to 0)
console.log(Number(" ")); // 0 (string with space is converted to 0)
console.log(Number("abc")); // NaN (Not a Number)
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(parseInt("42px")); // 42 (extracts number)
console.log(parseFloat("3.14test")); // 3.14 (extracts float number)
```
- `Number()` converts values to numbers, but `"abc"` becomes `NaN`.
- `parseInt()` and `parseFloat()` extract numbers from strings.

---

### **2.2 Convert to String**
```javascript
console.log(String(5)); // "5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
```
- `String()` explicitly converts values to strings.

---

### **2.3 Convert to Boolean**
```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(" ")); // true (space is a truthy value)
```
- **Falsy values**: `0`, `""`, `null`, `undefined`, `NaN`, `false`
- **Truthy values**: Everything else, including `" "` (string with space).

---

## **3. Equality Comparisons & Type Coercion**
### **3.1 Loose Equality (`==`)**
```javascript
console.log(5 == "5"); // true  (string converted to number)
console.log(0 == false); // true  (false converted to 0)
console.log(null == undefined); // true (special case)
console.log(" " == 0); // true (empty string converted to 0)
```
- **Avoid using `==`** because it causes unexpected results due to type coercion.

---

### **3.2 Strict Equality (`===`)**
```javascript
console.log(5 === "5"); // false (no type conversion)
console.log(0 === false); // false (different types)
console.log(null === undefined); // false
console.log(" " === 0); // false
```
- **Always use `===` for comparisons** to avoid automatic type conversion.

---

## **4. Weird Edge Cases**
```javascript
console.log([] + []); // "" (empty string)
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]"
console.log([] == false); // true ([] is converted to "")
console.log(![]); // false (empty array is truthy)
console.log([] == ![]); // true ([] becomes "", `![]` is false, and "" == false)
```
- Arrays and objects behave strangely in coercion.
- `[]` is converted to an empty string.
- `{}` is treated as an object and gets converted to `"[object Object]"`.

---

## **5. Summary Table of Coercion Rules**
| **Type**      | **Converted to Number (`Number()`)** | **Converted to String (`String()`)** | **Converted to Boolean (`Boolean()`)** |
|--------------|---------------------------------|--------------------------------|--------------------------------|
| `"123"`      | `123`                           | `"123"`                         | `true`                          |
| `""`         | `0`                             | `""`                            | `false`                         |
| `" "`        | `0`                             | `" "`                           | `true`                          |
| `"abc"`      | `NaN`                           | `"abc"`                         | `true`                          |
| `true`       | `1`                             | `"true"`                        | `true`                          |
| `false`      | `0`                             | `"false"`                       | `false`                         |
| `null`       | `0`                             | `"null"`                        | `false`                         |
| `undefined`  | `NaN`                           | `"undefined"`                   | `false`                         |
| `0`          | `0`                             | `"0"`                           | `false`                         |
| `1`          | `1`                             | `"1"`                           | `true`                          |
| `NaN`        | `NaN`                           | `"NaN"`                         | `false`                         |
| `[]`         | `0`                             | `""`                            | `true`                          |
| `{}`         | `NaN`                           | `"[object Object]"`             | `true`                          |

---

## **6. Best Practices to Avoid Coercion Issues**
1. **Use `===` instead of `==`** to avoid unexpected type conversions.
2. **Convert values explicitly** using `Number()`, `String()`, or `Boolean()`.
3. **Be careful with `null` and `undefined`** when checking values.
4. **Use `isNaN()` to check for NaN values** instead of `== NaN`.
5. **Avoid relying on truthy and falsy values** in conditions.

*/

if(""){
 console.log("true");
}else{
    console.log("false");
}