import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//////////////////__test__////////////////////////
const testElement: any = <h1>Hello, world!</h1>;

ReactDOM.render(
  testElement,
  document.getElementById('project-list')
);
//////////////////__test__////////////////////////

export const addTask = (): void => {
  let taskName: HTMLElement = document.getElementById('task-name');
  let taskList: HTMLElement = document.getElementById('task-list');
  let taskNameValue: string = (document.getElementById('task-name') as HTMLTextAreaElement).value;
  if (taskNameValue) {
    taskList.innerHTML += taskNameValue + "<br />" + "<hr />";
    (taskName as HTMLTextAreaElement).value = "";
  };
  taskName.focus();
};

export const addProject = (): void => {
  let projectNameID: string = 'todo-header';
  let projectName: HTMLElement = document.getElementById('project-name');
  let projectList: HTMLElement = document.getElementById('project-list');
  let projectNameValue = (document.getElementById('project-name') as HTMLTextAreaElement).value;

  if (projectNameValue) {
    projectList.innerHTML += projectNameValue;
    (projectName as HTMLTextAreaElement).value = "";
  };
  projectName.focus();
};
