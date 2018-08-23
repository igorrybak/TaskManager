import { React } from '../src/index';
export const addTask = (): void => { };

// export const MainPage = <div className="container wrapper">
//   <div id="project-list"></div>
// </div>

export class MainPage extends React.Component {
  render() {
    return (
      <div className="container wrapper">
        <div id="project-list"></div>
      </div>
    );
  };
};
