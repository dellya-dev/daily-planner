import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
   if (tasks.length === 0) {
    return <p>No tasks yet</p>
  }
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;