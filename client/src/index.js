var addTask = function() {
    var taskName = document.getElementById('task-name');
    var taskList = document.getElementById('task-list');

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
//     taskName.addEventListener('keydown', handler);
// };

var addProject = function() {
    var projectList = document.getElementById('project-list');
    var projectName = document.getElementById('project-name');

    if (projectName) {
        projectList.innerHTML += $().add("<div id='test-div'>HELLO</div>"); //insert html-template
        document.getElementById('task-name').value = "";
    };
};

exports.addTask = addTask;
exports.addProject = addProject;
