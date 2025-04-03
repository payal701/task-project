// Load tasks when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

// Function to add a task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if (taskValue === "") return; // Prevent empty tasks

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `${taskValue} <button class="delete" onclick="removeTask(this)">Delete</button>`;

    taskList.appendChild(li);
    
    saveTasks(); // Save to local storage

    taskInput.value = ""; // Clear input field
}

// Function to remove a task
function removeTask(button) {
    button.parentElement.remove();
    saveTasks();
}

// Function to save tasks to local storage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach((li) => {
        tasks.push(li.textContent.replace("Delete", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let taskList = document.getElementById("taskList");
    savedTasks.forEach((task) => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete" onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(li);
    });
}
