var taskName = document.getElementById('task-name');
var taskList = document.getElementById('task-list');
var projectList = document.getElementById('project-list');

function addTask() {
    if (taskName.value) {
        taskList.innerHTML += taskName.value + "<br />" + "<hr />";
        taskName.value = "";
        taskName.focus();
    };
};
// TODO
// function enterListener() {
//     function handler(event) {
//         console.log(event.keyCode);
//     };
//
//     taskName.addEventListener('keydown', handler);
// };

function addProject() {
    var projectName = "First project";
    //TODO var projectName = document.getElementById('project-name').value;
    if (projectName) {
        projectList.innerHTML += projectName; //insert html-template
        document.getElementById('task-name').value = "";
    };
};
