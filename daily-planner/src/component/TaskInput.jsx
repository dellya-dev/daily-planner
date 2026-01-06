function TaskInput({ onAddTask }) {
  
  return (
    <div>
      <input type="text" placeholder="Typing Your Task" />
      <button onClick={onAddTask}>Add</button>
    </div>
  );
}

export default TaskInput;