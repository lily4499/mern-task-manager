import React from 'react';
import { api } from '../api';

const TaskItem = ({ task, fetchTasks }) => {
  const toggleComplete = async () => {
    await api.put(`/${task._id}`, { completed: !task.completed });
    fetchTasks();
  };

  const deleteTask = async () => {
    await api.delete(`/${task._id}`);
    fetchTasks();
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <span>{task.title}</span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;

