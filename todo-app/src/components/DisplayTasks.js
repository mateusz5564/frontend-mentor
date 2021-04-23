
import Task from "./Task";
import FilterTasks from './FilterTasks';

function DisplayTasks() {
  return (
    <section className="DisplayTasks">
      <ul className='DisplayTasks__list'>
        <li className='DisplayTasks__item'>
          <Task />
        </li>
        <li className='DisplayTasks__item'>
          <Task />
        </li>
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
