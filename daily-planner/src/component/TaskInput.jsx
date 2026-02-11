import { useState } from "react";
import '../App.css';

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState ('');

  const handleInput = (e) => setInputValue(e.target.value)

  const handleAdd = () => {
          onAddTask(inputValue);
          setInputValue('');
        }
  
  return (
    <div className="task-input">
      <input 
        type="text" 
        placeholder="Typing Your Task" 
        value= {inputValue}
        onChange={handleInput}
        />
      <button 
        onClick={handleAdd} 
      >Add</button>
    </div>
  );
}

export default TaskInput;