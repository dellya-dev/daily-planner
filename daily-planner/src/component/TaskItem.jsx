function TaskItem({ task, onToggle, onDelete }) {
  return (
    <>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
       <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none'
        }}
      >
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </>
  );
}

export default TaskItem;