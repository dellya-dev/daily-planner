import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
   if (tasks.length === 0) {
    return <p>No tasks yet</p>
  }
  return (
    <>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </>
  );
}

export default TaskList;