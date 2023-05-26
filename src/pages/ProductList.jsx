import React, { useState } from 'react';

const ProductList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Create a new task object with an ID and the input value
    const newTask = {
      id: Date.now(),
      value: inputValue
    };

    // Update the tasks array with the new task
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Clear the input field
    setInputValue('');
  };

  // Function to handle task deletion
  const handleDelete = (taskId) => {
    // Filter out the task with the given ID
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    // Update the tasks array with the filtered tasks
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.value}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
