import * as $ from 'jquery';
import * as projectTemplate from './projectTemplate';

const addTask = (): void => {
    let taskName: HTMLElement = document.getElementById('task-name');
    let taskList: HTMLElement = document.getElementById('task-list');
    let taskNameValue: string = (<HTMLInputElement>document.getElementById('task-name')).value;

    if (taskNameValue) {
        taskList.innerHTML += taskNameValue + "<br />" + "<hr />";
        (taskName as HTMLTextAreaElement).value = "";
    };
    taskName.focus();
};

const addProject = (): void => {
    let projectName: HTMLElement = document.getElementById('project-name');
    let projectList: HTMLElement = document.getElementById('project-list');
    let projectNameValue: string = (<HTMLInputElement>document.getElementById('project-name')).value;
    let projectBlock = `<div id='test-div'>${projectNameValue}</div>`;

    if (projectNameValue) {
        // projectList.innerHTML += $("input").before(projectBlock); //insert html-template
        projectList.innerHTML += projectTemplate.projectTemplate;
        (projectName as HTMLTextAreaElement).value = "";
    };
    projectName.focus();
};

export { addTask };
export { addProject };
