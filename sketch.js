/*
   Description:
   Author:
   Date of last edit:
*/

let groceryInput, submit, removeButton;

function setup() {
  createCanvas(windowWidth, windowHeight);

  groceryInput = createInput();
  groceryInput.position(100, 48);

  submit = createButton("Add");
  submit.position(300, 48);
  submit.mousePressed(pressSubmit);

  removeButton = createButton("Delete");
  removeButton.position(350, 48);
  removeButton.mousePressed(removeGroceryItem);
}

function draw() {
  background(255);

  fill(0);
  textSize(20);
  text("Item: ", 20, 65);

  text("Current List: ", 20, 150);

}

function pressSubmit() {

}

function removeGroceryItem() {

}
