import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask }) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks yet!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </ul>
  );
}

export default TaskList;