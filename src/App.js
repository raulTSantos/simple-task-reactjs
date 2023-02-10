
import { useEffect, useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { ShowControl } from "./components/ShowControl";
import { TaskForm } from "./components/TaskForm";
import { TaskTable } from "./components/TaskTable";

function App() {

  const [taskTitems, setTaskItems] = useState([]);
  const [showCompleted, setShowcompleted] = useState(false);

  function createTask(task) {

    if (!taskTitems.find(x => x.name === task)) {
      setTaskItems([...taskTitems, { name: task, done: false }]);
    }
  }

  const toogleTask = (task) => {
    setTaskItems(taskTitems.map(t => t.name == task.name ? { ...t, done: !t.done } : t));
  }
  const clearTasks = () => {
    setTaskItems(taskTitems.filter(x => !x.done));
    setShowcompleted(false);
  }


  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskTitems));
  }, [taskTitems]);

  return (
    <div className="App">
      <Container>
        <h2> SIMPLE TASK APP</h2>
        <TaskForm createTask={createTask} />
        <TaskTable tasks={taskTitems} toogleTask={toogleTask} />
        <ShowControl
          isChecked={showCompleted}
          setShowcompleted={(checked) => setShowcompleted(checked)}
          clearTasks={clearTasks} />
          <hr></hr>
          <br />
        {
          showCompleted === true && (
            <TaskTable tasks={taskTitems} toogleTask={toogleTask} isCompleted={showCompleted} />
          )
        }
      </Container>
    </div>
  );
}

export default App;
