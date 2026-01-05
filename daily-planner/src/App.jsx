import './App.css'
import Header from './component/Header'
import TaskInput from './component/TaskInput'
import TaskItem from './component/TaskItem'
import TaskList from './component/TaskList'

function App() {

  return (
    <>
      <Header />
      <TaskInput />  
      <TaskItem />
      <TaskList />
    </>
  )
}

export default App
