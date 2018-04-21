function addTask() {
    var taskName = document.getElementById('task-name').value;
    var taskList = document.getElementById('tasks-list');
    if (taskName) {
        taskList.innerHTML += taskName + "<br />" + "<hr />";
        document.getElementById('task-name').value = "";
    };
};

function addProject() {
    var projectName = document.getElementById('project-name').value;
    var projectList = document.getElementById('project-list');
    if (projectName) {
        projectList.innerHTML += projectName; //insert html-template
        document.getElementById('task-name').value = "";
    };
}
