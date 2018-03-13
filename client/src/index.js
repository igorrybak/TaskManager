function addTask() {
    var taskName = document.getElementById('task-name').value;
    var taskList = document.getElementById('tasks-list');

    taskList.innerHTML += taskName + "<br>" + "<hr>";
};
