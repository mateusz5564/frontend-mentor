import Task from "./Task";
import FilterTasks from "./FilterTasks";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DisplayTasks({ tasks, setTasks, filter, setFilter }) {
  const onDelete = taskToDelete => {
    const newTasks = tasks.filter(task => task.id !== taskToDelete.id);
    setTasks(newTasks);
  };

  const onDeleteCompletedTasks = () => {
    const newTasks = tasks.filter(task => !task.isDone);
    setTasks(newTasks);
  };

  const getActiveTasks = () => tasks.filter(task => !task.isDone);
  const getCompletedTasks = () => tasks.filter(task => task.isDone);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const taskIndex = tasks.findIndex(task => task.id === Number(draggableId));
    const newTasks = Array.from(tasks);
    newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, tasks[taskIndex]);
    setTasks(newTasks);
  };

  const renderTasks = tasks => {
    let tasksToDisplay;

    if (filter === "active") {
      tasksToDisplay = getActiveTasks();
    } else if (filter === "completed") {
      tasksToDisplay = getCompletedTasks();
    } else {
      tasksToDisplay = tasks;
    }

    return tasksToDisplay.map((task, index) => {
      return (
        <Draggable draggableId={String(task.id)} key={task.id} index={index}>
          {provided => (
            <li
              className="DisplayTasks__item"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Task
                task={task}
                index={index}
                tasks={tasks}
                setTasks={setTasks}
                onDelete={onDelete}
              />
            </li>
          )}
        </Draggable>
      );
    });
  };

  return (
    <section className="DisplayTasks">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"tasks-list"}>
          {provided => (
            <ul className="DisplayTasks__list" ref={provided.innerRef} {...provided.droppableProps}>
              {renderTasks(tasks)}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <footer className="DisplayTasks__footer">
        <div className="DisplayTasks__footer-top">
          <p className="DisplayTasks__items-left">{getActiveTasks().length} items left</p>
          <FilterTasks
            styleName="DisplayTasks__filters-desktop"
            filter={filter}
            setFilter={setFilter}
          />
          <button className="DisplayTasks__btn-clear" onClick={onDeleteCompletedTasks}>
            Clear Completed
          </button>
        </div>

        <div className="DisplayTasks__footer-down">
          <FilterTasks
            styleName="DisplayTasks__filters-mobile"
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </footer>
    </section>
  );
}

export default DisplayTasks;
