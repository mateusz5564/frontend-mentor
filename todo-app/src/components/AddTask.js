import { useState } from 'react';

function AddTask(props) {
  const [taskName, setTaskName] = useState("");

  const onChange = (e) => {
    setTaskName(e.target.value);
  };

  const generateTask = (taskName) => {
    props.setUniqueId(prevState => prevState + 1)
    return {
      'id': props.uniqueId,
      'name': taskName,
      'isDone': false,
    }
  };

  const insertTask = (task) => {
    const newTasks =  props.tasks.concat([task]);
    props.setTasks(newTasks);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    insertTask(generateTask(taskName));
  }

  return (
    <form onSubmit={onSubmit} className="AddTask">
      <button className="AddTask__btn" aria-label="add task"></button>
      <input className="AddTask__input" onChange={onChange} value={taskName} type="text" placeholder="Create a new todo..." aria-label="task name"/>
    </form>
  );
}

export default AddTask;