const inputEl = document.querySelector('#input-todo');
const addBtnEl = document.querySelector('#add-btn');
const todoBlockEl = document.querySelector('#todo-block');
const closeBtn = '\u00D7';
const parentContainer = 'div';
const childElement = 'button';

addBtnEl.addEventListener('click', onClick);

todoBlockEl.addEventListener('click', onCompleteTask, true);

function onCompleteTask(e) {
    const elements = todoBlockEl.children;
    for (let i = 0; i < elements.length; i++) {
        if (e.target.id && elements[i].id && elements[i].id === e.target.id) {
            elements[i].classList.toggle('complete');
        }
    }
}

function onRemoveTask(e) {
    const item = e.target.closest('.todo-item');
    item.remove();
}

function onClick() {
    if (inputEl.value) {
	    createElement(inputEl, closeBtn, todoBlockEl, parentContainer, childElement);
    } else {
        alert('Enter todo list');
    }
	clearValue(inputEl);
}

function createElement(parentTitle, childTitle, container, parentTag, childTag) {
    let todoData = document.createElement(parentTag);
    let closeButton = document.createElement(childTag);
    todoData.textContent = parentTitle.value.trim();
    closeButton.textContent = childTitle;
    todoData.classList.add('todo-item');
    todoData.classList.add('not-compleat');
    closeButton.classList.add('close');
    todoData.id = `list-element${Math.random()}`;
    closeButton.addEventListener('click', onRemoveTask);
    container.append(todoData);
    todoData.append(closeButton);
}

function clearValue(el) {
    el.value = '';
}
