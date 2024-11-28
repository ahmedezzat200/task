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
    let taskText = document.createElement('span');
    taskText.textContent = `${formattedDate}: ${task}`;
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
});

clearAllBtn.addEventListener('click', () => {
  taskList.innerHTML = "";
});
