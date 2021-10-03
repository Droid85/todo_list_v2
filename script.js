const inputEl = document.querySelector('#input-todo');
const addBtnEl = document.querySelector('#add-btn');
const todoBlockEl = document.querySelector('#todo-block');
const closeBtn = '&#9587';

addBtnEl.addEventListener('click', onClick);

function onClick() {
    const todoData = inputEl.value.trim();
    if (todoData) {
        todoBlockEl.insertAdjacentHTML('beforeend', `<div class='todo-item not-compleat'>${todoData}<button class='close'>${closeBtn}</button></div>`);
    } else {
        alert('Enter todo list');
    }
    inputEl.value = '';
}
