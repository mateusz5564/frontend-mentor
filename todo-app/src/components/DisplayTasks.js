import Task from "./Task";
import FilterTasks from "./FilterTasks";

function DisplayTasks(props) {
  return (
    <section className="DisplayTasks">
      <ul className="DisplayTasks__list">
        {props.tasks.map(task => {
          return (
            <li key={task.id} className='DisplayTasks__item'>
              <Task  task={task}/>
          </li>
          );
        })}
      </ul>
      <footer className="DisplayTasks__footer">
        <p className="DisplayTasks__items-left">5 items left</p>
        <div className="DisplayTasks__filters-desktop">
          <FilterTasks />
        </div>
        <button className="DisplayTasks__btn-clear">Clear Completed</button>
      </footer>
    </section>
  );
}

export default DisplayTasks;
