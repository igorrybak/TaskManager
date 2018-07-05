import { React } from '../src/index';

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

export const ProjectTemplate = <div className="container panel-body">
  <div id="task-list"></div>
  <div className="form-group">
    <input id="project-name" className="form-control input-small" type="text" placeholder="TODO-list name"></input>
  </div>
  <div id="add-project-button" className="action">
    <button className="btn btn-default" id="add-project-btn" onClick={addProject}>Add TODO List</button>
  </div>
</div>
