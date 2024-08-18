document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        if (taskInput.value.trim() !== "") {
            const newTask = document.createElement('li');
            newTask.innerHTML = `<span>${taskInput.value}</span>
                                 <span>
                                     <span class="edit">Edit</span>
                                     <span class="delete">Delete</span>
                                 </span>`;
            taskList.appendChild(newTask);
            taskInput.value = "";
        }
    });
    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete')) {
            e.target.closest('li').remove();
        } else if (e.target.classList.contains('edit')) {
            const taskText = e.target.closest('li').querySelector('span:first-child');
            const newTaskText = prompt('Edit task:', taskText.textContent);
            if (newTaskText) {
                taskText.textContent = newTaskText;
            }
        }
    });
});
