function FilterTasks(props) {

  const updateFilter = (e) => {
    props.setFilter(e.target.textContent.toLowerCase());
  }

  return (
    <section className="FilterTasks">
      <button className="FilterTasks__btn" onClick={updateFilter}>All</button>
      <button className="FilterTasks__btn" onClick={updateFilter}>Active</button>
      <button className="FilterTasks__btn" onClick={updateFilter}>Completed</button>
    </section>
  );
}

export default FilterTasks;