function TaskItem({ task, onToggle, onDelete }) {

  const handleToggle = () => onToggle(task.id)

  const handleDelete = () => onDelete(task.id)
  return (
    <>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
       <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none'
        }}
      >
        {task.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default TaskItem;