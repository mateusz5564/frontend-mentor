import { useState } from "react";

function AddTask({ tasks, setTasks, uniqueId, setUniqueId }) {
  const [taskName, setTaskName] = useState("");

  const onChange = e => {
    setTaskName(e.target.value);
  };

  const generateTask = taskName => {
    const newTask = {
      id: uniqueId,
      name: taskName,
      isDone: false,
    };
    setUniqueId(prevState => prevState + 1);
    return newTask;
  };

  const addTask = task => {
    const newTasks = tasks.concat([task]);
    setTasks(newTasks);
  };

  const onSubmit = e => {
    e.preventDefault();
    addTask(generateTask(taskName));
  };

  return (
    <form onSubmit={onSubmit} className="AddTask">
      <button className="AddTask__btn" aria-label="add task"></button>
      <input
        className="AddTask__input"
        onChange={onChange}
        value={taskName}
        type="text"
        placeholder="Create a new todo..."
        aria-label="task name"
      />
    </form>
  );
}

export default AddTask;
