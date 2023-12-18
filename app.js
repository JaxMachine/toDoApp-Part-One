//Document Query Variables
const taskSubmit = document.querySelector("form");
const taskList = document.querySelector("#task-list");
const toDo = document.querySelector("#new-task");

const tasks = document.getElementById("#taskEntry");

//Task List Creation and Removal
taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("task-done");
  }
});

taskSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTaskInput = document.querySelector("#new-task");
  const newLi = document.createElement("li");
  const newButton = document.createElement("Button");
  newLi.innerText = newTaskInput.value;
  newButton.innerText = "Remove Task";
  newSpan = document.createElement("span");
  newLi.append(newButton);
  taskList.append(newLi);
  taskSubmit.reset();
});
