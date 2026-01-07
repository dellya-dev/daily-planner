import { useState } from 'react'
import Header from './component/Header'
import TaskInput from './component/TaskInput'
import TaskItem from './component/TaskItem'
import TaskList from './component/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (title) => {
    setTasks(prev => [
      ...prev, 
      {
        id: Date.now(),
        title,
        completed: false
      }
    ]);
  }

  return (
    <>
      <Header />
      <TaskInput onAddTask = {handleAddTask} />  
      <TaskList tasks = {tasks} />
    </>
  )
}

export default App
