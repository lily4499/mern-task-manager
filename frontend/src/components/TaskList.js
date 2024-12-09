import React, { useEffect, useState } from 'react';
import { api } from '../api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await api.get('/');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1> {/* Updated title style in CSS */}
      <TaskForm fetchTasks={fetchTasks} />
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

