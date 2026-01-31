import { useState, useEffect } from 'react'
import Header from './component/Header'
import TaskInput from './component/TaskInput'
import TaskList from './component/TaskList'
import FilterBar from './component/FilterBar';
import { useTasks } from './hooks/useTasks';

function App() {
  const stored = localStorage.getItem('tasks');
  const initialTasks = stored ? JSON.parse(stored) : [];

  const [filter, setFilter] = useState('all');

  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask
  } = useTasks(initialTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return task.completed === false;
    }

    if (filter === "completed") {
      return task.completed === true;
    }

    return true;
  });

  return (
    <>
      <Header />
      <TaskInput
        onAddTask={addTask}
      />
      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />
      <TaskList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </>
  )
}

export default App
