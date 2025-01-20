
/*
  1. Are resizable
  2. contain mix dat types
  3. array copy operation are shallow copies

   --------------------------------------
  1. Array is written in brackets [  ].
  2. Array data type is an object.
  3. Array can contain different data types . i.e string,number,boolean,array etc.
  4. Array is zero based indexing. It starts with zero.
  5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

********* Read More *******************************
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
const myArra= [0,1,2,3,4,5,"Nijan",true]

const myArr2=new Array(1,2,3,4)

console.log(typeof myArra)

console.log(myArr2);

// ********* Array methods

myArr2.push(6) // Adds element to the array at end


console.log(myArr2)

myArr2.pop() // delete element at last
console.log(myArr2)



myArr2.unshift(9) // add element at the begning
console.log(myArr2)

myArr2.shift()

console.log(myArr2) // remove element at the beging

console.log(myArr2.includes(1)) // does its contain elements

const newArr=myArr2.join() // convert array to string

console.log(newArr)

console.log("****** SLICE ********** ");

console.log("A ",myArr2);

const myna=myArr2.slice(1,3);
/*
  1 - start index
  3 - end index - exclude
analogy : slice makes a copy
*/

console.log(myna)

console.log("B ",myArr2);

console.log("****** SPLICE ********** ");


console.log("C ",myArr2);

const splcieEx=myArr2.splice(1,2);
/*
  1 - start index
  3 - delete count
  3 - replace
 analogy to remeber: splice chages the original

 playlist analogy:
  - in playlist just deleting old and adding fresh hits (splice) - original changed
  - extracting just the workout tracks into a new list(slice) - orignial unchanged
*/

console.log(splcieEx)

console.log("D ",myArr2);

/*
 1. Group Methods by Their Purpose
    Break down the methods into categories based on what they do:

    1.1 Mutate the Array:

      push(), pop(), shift(), unshift(): Add/remove elements at the start or end.
      splice(): Add/remove/replace elements at specific indices.
      sort(), reverse(): Rearrange elements.


   1.2 Don't Mutate the Array:

      slice(): Extract part of the array.
      concat(): Combine arrays.
      map(), filter(), reduce(): Transform or reduce data.


  1.3  Search/Find:

      indexOf(), lastIndexOf(): Find the index of an element.
      includes(): Check if an element exists.
      find(), findIndex(): Find an element or its index by a condition.

  1.4  Iterate Over the Array:

      forEach(): Loop through elements.
      map(): Create a new array by applying a function to each element

2. Use Mnemonics and Associations

    Create simple stories or acronyms to help remember.

    CRUD Operations for Array Items:

    Create → push(), unshift() (add items).
    Read → slice(), includes(), find().
    Update → splice().
    Delete → pop(), shift(), splice().

    PRMS for Start and End:

    Push and Reverse affect the End.
    Map and Shift affect the Start. 

    */





