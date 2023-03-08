const form = document.querySelector('form');
const input = document.querySelector('#new-item');
const toDoList = document.querySelector('#to-do-list');

let toDos = [];

function renderList() {
  toDoList.innerHTML = '';
  toDos.forEach((toDo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${toDo.completed ? 'completed' : ''}">${toDo.text}</span>
      <div>
        <button class="complete-btn" data-index="${index}">${toDo.completed ? 'Incomplete' : 'Complete'}</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </div>
    `;
    toDoList.appendChild(li);
  });
}

function addToDo() {
  const text = input.value.trim();
  if (text !== '') {
    toDos.push({ text, completed: false });
    renderList();
    input.value = '';
  }
}

function completeToDo() {
  const index = parseInt(this.dataset.index);
  toDos[index].completed = !toDos[index].completed;
  renderList();
}

function deleteToDo() {
  const index = parseInt(this.dataset.index);
  toDos.splice(index, 1);
  renderList();
}

form.addEventListener('submit', e => {
  e.preventDefault();
  addToDo();
});

toDoList.addEventListener('click', e => {
  if (e.target.classList.contains('complete-btn')) {
    completeToDo.call(e.target);
  } else if (e.target.classList.contains('delete-btn')) {
    deleteToDo.call(e.target);
  }
});
