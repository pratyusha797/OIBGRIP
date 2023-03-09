const inputTask = document.getElementById("input-task");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add new task to the list
function addTask() {
  const task = inputTask.value.trim();

  if (task !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${task}<button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);

    inputTask.value = "";
  }
}

// Delete a task from the list
function deleteTask(e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
}

// Event listeners
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);