let listContainer = document.getElementById('taskList');
let taskInput = document.getElementById('taskInput');
function addTask() {
    let taskText = taskInput.value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    else{
        let listItem = document.createElement('li');
        listItem.textContent = taskText;
        listContainer.appendChild(listItem);

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        listItem.appendChild(span);
    }
    taskInput.value = '';
    saveTasks();
}
listContainer.addEventListener('click', (el)=>{
    if (el.target.tagName === 'LI') {
        el.target.classList.toggle('checked');
        saveTasks();
    }
    else if (el.target.tagName === 'SPAN') {
        el.target.parentElement.remove();
        saveTasks();
    }
})

function saveTasks() {
    localStorage.setItem('tasks', listContainer.innerHTML);
}
function loadTasks() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
        listContainer.innerHTML = tasks;
    }
}
loadTasks();