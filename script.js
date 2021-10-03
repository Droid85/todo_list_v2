const inputEl = document.querySelector('#input-todo');
const addBtnEl = document.querySelector('#add-btn');
const todoBlockEl = document.querySelector('#todo-block');
const closeBtn = '&#9587';

addBtnEl.addEventListener('click', onClick);

function onCompleteTask(e) {
    e.target.classList.toggle('complete');
}

function onRemoveTask(e) {
    const item = e.target.closest('.todo-item');
    item.remove();
}

function onClick() {
    let todoData = document.createElement('div');
    let closeButton = document.createElement('button');
    todoData.textContent = inputEl.value.trim();
    closeButton.textContent = '\u00D7';
    todoData.classList.add('todo-item');
    todoData.classList.add('not-compleat');
    closeButton.classList.add('close');
    todoData.id = `list-element${Math.random()}`;
    todoData.addEventListener('click', onCompleteTask);
    closeButton.addEventListener('click', onRemoveTask);
    if (inputEl.value) {
	    todoBlockEl.append(todoData);
        todoData.append(closeButton);
    } else {
        alert('Enter todo list');
    }
	inputEl.value = '';
}
