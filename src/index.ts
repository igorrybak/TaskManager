import * as $ from 'jquery';
// import * as htmlTemplate from './projectTemplate';

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
  let projectNameID: string = 'todo-header';
  let projectName: HTMLElement = document.getElementById('project-name');
  let projectList: HTMLElement = document.getElementById('project-list');
  let projectNameValue = (<HTMLInputElement>document.getElementById('project-name')).value;

  if (projectNameValue) {
    // let newProject: htmlTemplate.projectTemplate = new htmlTemplate.projectTemplate(htmlTemplate.htmlTemplate, projectNameValue);
    // console.log(newProject.projName);
    projectList.innerHTML += projectNameValue;
    (projectName as HTMLTextAreaElement).value = "";
  };
  projectName.focus();
};

export { addTask };
export { addProject };

// projectList.innerHTML += $("input").before(projectBlock); //insert html-template
