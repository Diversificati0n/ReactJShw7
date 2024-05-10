

import React from 'react';
import TasksList from './TasksList';
import AddTaskForm from './AddTaskForm';

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TasksList />
      <AddTaskForm />
    </div>
  );
}

export default App;
