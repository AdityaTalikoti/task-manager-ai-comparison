function TaskItem({ task, toggleTask }) {
  return (
    <li
      className={`task-item ${task.completed ? "completed" : ""}`}
      onClick={() => toggleTask(task.id)}
    >
      {task.title}
    </li>
  );
}

export default TaskItem;