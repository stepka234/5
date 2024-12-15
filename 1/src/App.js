import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask(""); // Очистка поля ввода
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
      <div className="App">
        <h1>To-Do List</h1>
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Добавьте задачу"
        />
        <button onClick={addTask}>Добавить</button>

        <ul>
          {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => deleteTask(index)}>Удалить</button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
