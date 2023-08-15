
//Get new task
const newTask = document.querySelector("#task-input");
const submitBtn = document.querySelector("#submit-btn");
const incompleteList = document.querySelector("#incomplete-tasks");
const incompleteTasks = incompleteList.children;
const completeTasks = document.querySelector("#complete-tasks");


newTask.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        createNewTask();
    }
})
submitBtn.addEventListener("click", createNewTask);

function createNewTask() {
    const li = document.createElement("li");
    li.classList.add("my-2");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.innerText = newTask.value;
    li.append(checkbox, " ", label)

    incompleteList.appendChild(li);

    newTask.value = "";

    addToComplete(li);
}

for (const incompleteTask of incompleteTasks) {
    addToComplete(incompleteTask);
}

function addToComplete(incompleteTask) {
    const checkbox = incompleteTask.querySelector("input");

    checkbox.addEventListener("change", function () {
        incompleteTask.remove();
        checkbox.remove();
        completeTasks.appendChild(incompleteTask);
    })
}
