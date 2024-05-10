
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, toggleTask } from './tasksSlice';

function TasksList() {
const dispatch = useDispatch();
const tasks = useSelector(state => state.tasks.tasks);
const status = useSelector(state => state.tasks.status);

useEffect(() => {
    dispatch(fetchTasks());
}, [dispatch]);

const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
};

if (status === 'loading') {
    return <div>Loading...</div>;
}

return (
    <div>
    <h2>Tasks List</h2>
    {tasks.map(task => (
        <div key={task.id}>
        <p>
            {task.title} - {task.completed ? 'Completed' : 'Pending'}
            <button onClick={() => handleToggle(task.id)}>
            {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
        </p>
        </div>
    ))}
    </div>
);
}

export default TasksList;
