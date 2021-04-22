// import './AddTask.scss';

function AddTask() {
  return (
    <form className="AddTask">
      <button className="AddTask__btn" aria-label="add task"></button>
      <input className="AddTask__input" type="text" placeholder="Create a new todo..." aria-label="task name"/>
    </form>
  );
}

export default AddTask;