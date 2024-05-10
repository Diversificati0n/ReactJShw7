
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';

function AddTaskForm() {
const dispatch = useDispatch();
const [title, setTitle] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    dispatch(addTask({ id: Date.now(), title, completed: false }));
    setTitle('');
};

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
    />
    <button type="submit">Add Task</button>
    </form>
);
}

export default AddTaskForm;
