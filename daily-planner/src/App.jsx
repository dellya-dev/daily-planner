import { useState } from 'react'
import Header from './component/Header'
import TaskInput from './component/TaskInput'
import TaskItem from './component/TaskItem'
import TaskList from './component/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {

  }

  return (
    <>
      <Header />
      <TaskInput onAddTask = {handleAddTask} />  
      <TaskItem />
      <TaskList />
    </>
  )
}

export default App
