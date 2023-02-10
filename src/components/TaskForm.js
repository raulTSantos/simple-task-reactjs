import { useState } from 'react';

export const TaskForm = ({ createTask }) => {

    const [newTask, setNewTask] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        createTask(newTask);
        localStorage.setItem("task", newTask);
        setNewTask("");
    };
    return (
        <form className="my-2 row" onSubmit={handleSubmit}>
            <div className="col-9">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Save a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </div>
            <div className="col-3 p-0 d-flex align-items-center">
                <button className="btn btn-primary btn-sm" type="submit">
                    Save Task
                </button>
            </div>
        </form>
    );
};
