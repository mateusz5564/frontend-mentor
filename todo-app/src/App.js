import "./App.scss";
import AddTask from "./AddTask";
import DisplayTasks from "./DisplayTasks";
import FilterTasks from "./FilterTasks";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__heading">Todo</h1>
        <button className="App__btn-theme" aria-labelledby="toggle-btn">
          <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
          </svg>
          <span className="App__btn-label" id="toggle-btn" hidden>
            Toggle dark mode
          </span>
        </button>
      </header>

      <main>
        <AddTask />

        <DisplayTasks />

        <FilterTasks />
      </main>

      <footer>Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
