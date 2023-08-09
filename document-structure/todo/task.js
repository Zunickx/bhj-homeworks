const taskAdd = document.querySelector('.tasks__add');
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

taskAdd.addEventListener('click', (event) => {
    event.preventDefault();
    if(taskInput.value.trim()) {
        taskList.insertAdjacentHTML('beforeend', `
        <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `);
        taskInput.value = '';

        const task = Array.from(taskList.querySelectorAll('.task'));
        const taskRemoveAll = Array.from(taskList.querySelectorAll('.task__remove'));

        const index = taskRemoveAll.length - 1;
        taskRemoveAll[index].onclick = function() {
            task[index].remove();
        }
    }
})

