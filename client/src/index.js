var taskName = document.getElementById('task-name');
var taskList = document.getElementById('tasks-list');

function addTask() {
    if (taskName.value) {
        taskList.innerHTML += taskName.value + "<br />" + "<hr />";
        taskName.value = "";
        taskName.focus();
    };
};

function enterListener() {
    function handler(event) {
        console.log(event.keyCode);
    };

    taskName.addEventListener('keydown', handler);
    // taskName.removeEventListener('keydown', handler);
};

function addProject() {
    var projectName = document.getElementById('project-name').value;
    var projectList = document.getElementById('project-list');
    if (projectName) {
        projectList.innerHTML += projectName; //insert html-template
        document.getElementById('task-name').value = "";
    };
}
