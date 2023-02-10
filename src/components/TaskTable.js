import { TaskRow } from "./TaskRow";

export const TaskTable = ({tasks, toogleTask, isCompleted =false }) =>{

  const taskTableRows = (done_value) =>{
   
    return (
      tasks
      .filter( x => x.done === done_value)
      .map(task => (
        <TaskRow  task={task} key={task.name} toogleTask={toogleTask}/>
      ))
    );
  }
    return(
        <table className="table table-striped table-bordered ">
        <thead className="table-dark" >
          <tr>
            <th> Task</th>
          </tr>
        </thead>
        <tbody>
          {
            taskTableRows(isCompleted)
          }
        </tbody>
      </table>
    );
}