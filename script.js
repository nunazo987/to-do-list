const button = document.querySelector('.app-input button');
const input = document.querySelector('.app-input input');
const taskList = document.querySelector('.task-list');

button.addEventListener('click', (e) => {
    const text = input.value;

    if (text === '') return;

    const li = document.createElement('li');
    li.textContent = text;

    taskList.appendChild(li);
    input.value = '';
})