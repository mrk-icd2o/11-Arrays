/*
   Description: Lesson 11 - Arrays example
   Author: Mr. Kowalczewski
   Date of last edit: October 28, 2026
*/

// ----- Creating arrays -----
let myStudents = ['Albert', 'Brittany', 'Claire', 'Danny', 'Edith'];
let myNumbers = [8, 4.2, 16, -5];

function setup() {
  createCanvas(600, 600);
  textSize(18);

  // ----- Individual elements -----
  // the index starts at 0
  console.log(myStudents[0]); // Albert
  console.log(myStudents[3]); // Danny
  console.log(myNumbers[2]);  // 16

  // an element works like a regular variable
  console.log(myNumbers[2] * 2); // 32
}

function draw() {
  background(220);
  fill(0);

  // ----- Length -----
  text(`There are ${myStudents.length} students`, 20, 40);
  text(`The last student is ${myStudents[myStudents.length - 1]}`, 20, 70);
  text("A: add   D: delete last   S: sort   R: remove index 1", 20, 100);

  // ----- Looping through an array -----
  for (let i = 0; i < myStudents.length; i += 1) {
    // highlight one student
    if (myStudents[i] == 'Claire') {
      fill(255, 0, 0);
    }
    else {
      fill(0);
    }
    text(`${i}: ${myStudents[i]}`, 20, 150 + i * 25);
  }
}

// ----- Array methods -----
function keyPressed() {
  if (key == 'a') {
    // add a value to the end
    myStudents.push('New Student');
  }
  else if (key == 'd') {
    // remove the last value
    myStudents.pop();
  }
  else if (key == 's') {
    // sort alphabetically
    myStudents.sort();
  }
  else if (key == 'r') {
    // remove 1 item at index 1
    myStudents.splice(1, 1);
  }
}
