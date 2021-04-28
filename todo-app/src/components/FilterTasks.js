function FilterTasks({filter, setFilter}) {

  const updateFilter = (e) => {
    setFilter(e.target.textContent.toLowerCase());
  }

  return (
    <section className="FilterTasks">
      <button className={`FilterTasks__btn ${filter === "all" ? "FilterTasks__btn--active" : ''}`} onClick={updateFilter}>All</button>
      <button className={`FilterTasks__btn ${filter === "active" ? "FilterTasks__btn--active" : ''}`} onClick={updateFilter}>Active</button>
      <button className={`FilterTasks__btn ${filter === "completed" ? "FilterTasks__btn--active" : ''}`} onClick={updateFilter}>Completed</button>
    </section>
  );
}

export default FilterTasks;