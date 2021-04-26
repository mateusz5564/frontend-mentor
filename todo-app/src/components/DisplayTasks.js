import Task from "./Task";
import FilterTasks from "./FilterTasks";

function DisplayTasks(props) {
  
  const onDelete = (e, taskToDelete) => {
    const newTasks = props.tasks.filter(task => task.id !== taskToDelete.id);
    props.setTasks(newTasks);
  }
  
  const renderTasks = (tasks) => {
    let tasksToDisplay;

    if(props.filter === 'active') {
      tasksToDisplay = tasks.filter(task => task.isDone === false);
    } else if(props.filter === 'completed') {
      tasksToDisplay = tasks.filter(task => task.isDone === true);
    } else {
      tasksToDisplay = tasks;
    }

    return tasksToDisplay.map(task => {
      return (
        <li key={task.id} className='DisplayTasks__item'>
          <Task task={task} onDelete={onDelete}/>
        </li>
        );
      })
  }

  return (
    <section className="DisplayTasks">
      <ul className="DisplayTasks__list">
        {renderTasks(props.tasks)}
      </ul>
      <footer className="DisplayTasks__footer">
        <p className="DisplayTasks__items-left">5 items left</p>
        <div className="DisplayTasks__filters-desktop">
          <FilterTasks filter={props.filter} setFilter={props.setFilter} />
        </div>
        <button className="DisplayTasks__btn-clear">Clear Completed</button>
      </footer>
    </section>
  );
}

export default DisplayTasks;
