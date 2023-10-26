document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    const completedTasks = document.getElementById('completedTasks');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-content">${taskText}</div>
            <div class="action-buttons">
            <button class="complete-button">Complete</button>
            <button class="delete-button">Delete</button>
            </div>
        `;
        
        li.classList.add('added-task');

        taskList.appendChild(li);
        taskInput.value = '';

        const completeButton = li.querySelector('.complete-button');
        completeButton.addEventListener('click', function() {
            completedTasks.appendChild(li);
            li.querySelector('.action-buttons').remove();
            li.querySelector('.task-content').style.color = '#28A745';
        });

        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
    });
});
