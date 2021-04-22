
import Task from "./Task";

function DisplayTasks() {
  return (
    <section className="DisplayTasks">
      <ul className='DisplayTasks__list'>
        <li className='DisplayTasks__item'>
          <Task />
        </li>
      </ul>
      <footer className="DisplayTasks__footer">
        <p>items left</p>
        <button>Clear Completed</button>
      </footer>
    </section>
  );
}

export default DisplayTasks;
