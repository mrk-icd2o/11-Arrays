# Lesson 11 - Arrays

Let's say that I want to create a program that works with my class list. I would need:

```javascript
let studentOne = 'Albert';
let studentTwo = 'Brittany';
let studentThree = 'Chris';
```

And so on. Imagine doing this for 30 students!

Now a student has been removed from the class, and two more have been added. What if I want to sort my list? This is very difficult with separate variables, but easy with **arrays**.

## What is an Array?

An array is a variable that holds multiple values, in order.

```javascript
let myArray = [value1, value2, value3];
let emptyArray = [];
```

It's possible to mix types (Strings and Numbers for example), but this can cause problems. Use one type per array.

## Individual Elements

We could use `text()` or `console.log()` to output a whole array, but it's more useful to work with the elements one at a time. To do this we use the **index** (position), which begins at **0**.

```javascript
let myStudents = ['Albert', 'Brittany', 'Claire', 'Danny', 'Edith'];
let myNumbers = [8, 4.2, 16, -5];

console.log(myStudents[0]); // Albert
console.log(myStudents[3]); // Danny
console.log(myNumbers[2]);  // 16
```

An individual element works just like a regular variable. `myNumbers[2]` is 16 (a number), so we can do anything with it that we normally do with numbers (if statements, loops etc).

> **AP CSP:** On the AP exam, arrays are called **lists**. They work the same way, but the exam's pseudocode starts counting at **1**, not 0. JavaScript (and most languages) start at 0.

## Array Methods

There are many ways to change an array once it's created. These are some of the most useful ([full list here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)):

```javascript
myArray[index] = newValue;      // change a value directly
myArray.push(value);            // add a value to the end
myArray.pop();                  // remove the last element
myArray.shift();                // remove the first element (the rest shift over)
myArray.unshift(value);         // add a value to the beginning
myArray.includes(value);        // true if the array contains the value
myArray.indexOf(value);         // the index of the value (-1 if it isn't there)
myArray.sort();                 // sort the array
myArray.splice(index, numberToDelete, additions); // see below
```

`.splice()` can delete from anywhere in the array, and add new items:

- `index`: where to start deleting
- `numberToDelete`: how many elements to delete
- `additions`: (optional) items to add at that spot, separated by commas

```javascript
let pets = ['cat', 'dog', 'fish', 'bird'];
pets.splice(1, 2);         // removes 'dog' and 'fish' -> ['cat', 'bird']
pets.splice(1, 0, 'frog'); // adds 'frog' at index 1  -> ['cat', 'frog', 'bird']
```

## Length

Once an array has been changed, we may not know its size. `.length` tells us how many elements it has:

```javascript
myStudents.length                     // 5
myStudents[myStudents.length - 1]     // the last item: 'Edith'
```

Since the index starts at 0, the last item is always at `length - 1`.

## Loops

One of the most common uses of a for loop is to go through each item in an array:

```javascript
for (let i = 0; i < myStudents.length; i += 1) {
  text(myStudents[i], 20, 150 + i * 20);
}
```

- The index `i` begins at 0.
- The loop runs until `i` reaches the length (the end of the array).
- `i` increases by 1 each time.

Inside the loop, `myStudents[i]` is the current item. You can do anything with it, including if statements:

```javascript
for (let i = 0; i < myStudents.length; i += 1) {
  if (myStudents[i] == 'Claire') {
    fill(255, 0, 0);
  }
  else {
    fill(0);
  }
  text(myStudents[i], 20, 150 + i * 20);
}
```
