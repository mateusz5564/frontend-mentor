import Task from "./Task";
import FilterTasks from "./FilterTasks";

function DisplayTasks({tasks, setTasks, filter, setFilter}) {
  
  const onDelete = (taskToDelete) => {
    const newTasks = tasks.filter(task => task.id !== taskToDelete.id);
    setTasks(newTasks);
  }

  const getActiveTasks = () => tasks.filter(task => task.isDone === false);
  const getCompletedTasks = () => tasks.filter(task => task.isDone === true);
  
  const renderTasks = (tasks) => {
    let tasksToDisplay;

    if(filter === 'active') {
      tasksToDisplay = getActiveTasks();
    } else if(filter === 'completed') {
      tasksToDisplay = getCompletedTasks();
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
        {renderTasks(tasks)}
      </ul>
      <footer className="DisplayTasks__footer">
        <p className="DisplayTasks__items-left">{tasks.length}  items left</p>
        <div className="DisplayTasks__filters-desktop">
          <FilterTasks setFilter={setFilter} />
        </div>
        <button className="DisplayTasks__btn-clear">Clear Completed</button>
      </footer>
    </section>
  );
}

export default DisplayTasks;
