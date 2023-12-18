//Document Query Variables
const taskSubmit = document.querySelector("form");
const taskList = document.querySelector("#task-list");
const toDo = document.querySelector("#new-task");

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
  console.log(newTaskInput.value);
  const newLi = document.createElement("li");
  const newButton = document.createElement("Button");
  newLi.innerText = newTaskInput.value;
  newButton.innerText = "Remove Task";

  newLi.append(newButton);
  taskList.append(newLi);
  form.rest();
});
