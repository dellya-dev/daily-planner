import { useEffect, useState } from 'react'
import Header from './component/Header'
import TaskInput from './component/TaskInput'
import TaskList from './component/TaskList'

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });
    
   useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title) {
    if (!title.trim()) return;

    setTasks(prev => [
      ...prev, 
      {
        id: Date.now(),
        title,
        completed: false
      }
    ]);
  }

  function toggleTask(id) {
    setTasks(prev => 
      prev.map(task =>
        task.id === id
        ? {...task, completed : !task.completed}
        : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(prev =>
      prev.filter(task => task.id !== id)
    );
  }

  return (
    <>
      <Header />
      <TaskInput onAddTask = {addTask} />  
      <TaskList 
        tasks = {tasks} 
        onToggleTask = {toggleTask} 
        onDeleteTask = {deleteTask}
      />
    </>
  )
}

export default App
