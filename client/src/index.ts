import * as $ from 'jquery';

var addTask = (): void => {
    let taskName: HTMLElement = document.getElementById('task-name');
    let taskList: HTMLElement = document.getElementById('task-list');
    let taskNameValue: string = (<HTMLInputElement>document.getElementById('task-name')).value;

    if (taskNameValue) {
        taskList.innerHTML += taskNameValue + "<br />" + "<hr />";
        console.log(taskNameValue);
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

var addProject = (): void => {
    let projectName: HTMLElement = document.getElementById('project-name');
    let projectList: HTMLElement = document.getElementById('project-list');

    if (projectName) {
        projectList.innerHTML += $().add("<div id='test-div'>HELLO</div>"); //insert html-template
        document.getElementById('task-name').nodeValue = "";
    };
};

export { addTask };
export { addProject };
