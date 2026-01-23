import Header from './component/Header'
import TaskInput from './component/TaskInput'
import TaskList from './component/TaskList'
import FilterBar from './component/FilterBar';
import { useTasks } from './hooks/useTasks';

function App() {
  const {
    tasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask
  } = useTasks();

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
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </>
  )
}

export default App
