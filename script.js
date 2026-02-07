const button = document.querySelector('.app-input button');
const input = document.querySelector('.app-input input');
const taskList = document.querySelector('.task-list');

button.addEventListener('click', (e) => {
    const text = input.value;

    if (text === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = text;

    span.addEventListener('click', () => {
        span.classList.toggle('done');
    });

    li.appendChild(span);
    taskList.appendChild(li);

    input.value = '';
});



