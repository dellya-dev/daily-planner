import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {


  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;