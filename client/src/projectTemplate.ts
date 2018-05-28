let projectTemplate = `
<div class="row">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title" id="todo-header"></h3>
        </div>
        <div class="panel-body">
            <div class="form-group">
                <input class="form-control" type="text" id="task-name"></input>
            </div>
            <div class="actions">
                <button id="add-task-btn" class="btn btn-default" onclick="addTask()">Add task</button>
                <br /><br />
            </div>
            <div id="task-list"></div>
        </div>
    </div>
</div>
`

export { projectTemplate };
