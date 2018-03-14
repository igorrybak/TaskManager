function addTask() {
    var taskName = document.getElementById('task-name').value;
    var taskList = document.getElementById('tasks-list');
    if (taskName) {
        taskList.innerHTML += taskName + "<br />" + "<hr />";
    };
};
