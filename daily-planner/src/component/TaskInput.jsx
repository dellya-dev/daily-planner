import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState ('');
  
  return (
    <div>
      <input 
        type="text" 
        placeholder="Typing Your Task" 
        onChange={ (e) => setInputValue(e.target.value)}
        />
      <button 
        onClick={ () => {
          onAddTask(inputValue);
          setInputValue('');
        }}
      >Add</button>
    </div>
  );
}

export default TaskInput;