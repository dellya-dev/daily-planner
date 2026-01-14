import { useEffect, useState } from 'react'
import Header from './component/Header'
import TaskInput from './component/TaskInput'
import TaskList from './component/TaskList'
import FilterBar from './component/FilterBar';

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
  if (filter === "active") {
    return task.completed === false;
  }

  if (filter === "completed") {
    return task.completed === true;
  }

  return true; 
});
    
   useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title) {
    const trimedTitle = title.trim();

    if (!trimedTitle) return;

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
      <TaskInput 
        onAddTask = {addTask} 
      />  
      <FilterBar 
        filter = {filter}
        setFilter = {setFilter}
      />
      <TaskList 
        tasks = {filteredTasks} 
        onToggleTask = {toggleTask} 
        onDeleteTask = {deleteTask}
      />
    </>
  )
}

export default App
