let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList');
let clearAllBtn = document.getElementById('clearAllBtn');
let currentDate = new Date();
let formattedDate = currentDate.toString().slice(0, 16);

addTaskBtn.addEventListener('click', () => {
  let task = taskInput.value.trim();
  if (task !== "") {
    let listItem = document.createElement('li');
    listItem.textContent = `${formattedDate}: ${task}`;
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
});

clearAllBtn.addEventListener('click', () => {
  taskList.innerHTML = "";
});
