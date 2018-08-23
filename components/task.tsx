import { React } from '../src/index';

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

export class TaskTemplate extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Tasks</h3>
          </div>
          <div className="panel-body">
            <div className="form-group">
              <input className="form-control" type="text" id="task-name"></input>
            </div>
            <div className="actions">
              <button id="add-task-btn" className="btn btn-default" onClick={addTask}>Add task</button>
              <br /><br />
            </div>
            <div id="task-list"></div>
          </div>
        </div>
      </div>
    );
  };
};
