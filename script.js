const button = document.querySelector('.app-input button');
const input = document.querySelector('.app-input input');
const taskList = document.querySelector('.task-list');

button.addEventListener('click', (e) => {
    const text = input.value;

    if (text === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = text;

    li.appendChild(span);
    taskList.appendChild(li);

    span.addEventListener('click', () => {
        span.classList.toggle('done');

        if (span.classList.contains('done')){
            if (!li.querySelector('.remove')){
                const botaoRemover = document.createElement('button');
                botaoRemover.textContent = 'x';
                botaoRemover.className = 'remove';

                botaoRemover.addEventListener('click', (e) => {
                    e.stopPropagation();
                    li.remove();
                });
                li.appendChild(botaoRemover);
        }
    } else {
        const botao = li.querySelector('.remove');
        if (btn) li.removeChild(btn);
    }
        reorderTasks();
    });

    input.value = '';
});

function reorderTasks(){
    const items = Array.from(taskList.children);

    items.sort((a, b) => {
        const aDone = a.querySelector('span').classList.contains('done');
        const bDone = b.querySelector('span').classList.contains('done');
        return aDone - bDone;

    })
    .forEach(li => taskList.appendChild(li));
};

