import * as $ from 'jquery';

var addTask = function(): void {
    let taskName: HTMLElement = document.getElementById('task-name');
    let taskList: HTMLElement = document.getElementById('task-list');
    let taskNameValue: string = (<HTMLInputElement>document.getElementById('task-name')).value;

    // console.log(taskName + "----" + (<HTMLInputElement>taskName).value);
    // var inputValue = (<HTMLInputElement>document.getElementById('task-name')).value;

    if (taskNameValue) {
        taskList.innerHTML += taskNameValue + "<br />" + "<hr />";
        taskNameValue = "";
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

var addProject = function(): void {
    let projectList: HTMLElement = document.getElementById('project-list');
    let projectName: HTMLElement = document.getElementById('project-name');

    if (projectName) {
        projectList.innerHTML += $().add("<div id='test-div'>HELLO</div>"); //insert html-template
        document.getElementById('task-name').nodeValue = "";
    };
};

export { addTask };
export { addProject };

// exports.addTask = addTask;
// exports.addProject = addProject;
