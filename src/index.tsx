import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MainPage } from '../components/main';
import { ProjectTemplate } from '../components/project';
import { TaskTemplate } from '../components/task';

export { React, ReactDOM }

ReactDOM.render(
  MainPage,
  document.getElementById('root')
);

ReactDOM.render(
  ProjectTemplate,
  document.getElementById('project-list')
);

ReactDOM.render(
  TaskTemplate,
  document.getElementById('task-list')
);

console.log("Success!");
