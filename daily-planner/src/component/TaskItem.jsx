import '../App.css';

function TaskItem({ task, onToggle, onDelete }) {

  const handleToggle = () => onToggle(task.id)

  const handleDelete = () => onDelete(task.id)
  return (
    <ul className="task-list">
      <li className="task-item completed">
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
      </li>
    </ul>
  );
}

export default TaskItem;