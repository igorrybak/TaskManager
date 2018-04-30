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
    taskName.addEventListener('keypress', function(event) {
        console.log(event.key);
        if (event.key == "13") {
            addTask();
        };
    });
};

function addProject() {
    var projectName = document.getElementById('project-name').value;
    var projectList = document.getElementById('project-list');
    if (projectName) {
        projectList.innerHTML += projectName; //insert html-template
        document.getElementById('task-name').value = "";
    };
}
