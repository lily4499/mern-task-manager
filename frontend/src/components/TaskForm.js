import React, { useState } from 'react';
import { api } from '../api';

const TaskForm = ({ fetchTasks }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/', task);
    fetchTasks();
    setTask({ title: '', description: '' });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

