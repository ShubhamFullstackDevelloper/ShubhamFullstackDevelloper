// script.js
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear the input field
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
      li.classList.toggle('completed'); // Toggle the 'completed' class
    });

    li.appendChild(span);
    li.appendChild(completeBtn); // Add complete button
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}