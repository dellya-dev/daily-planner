import { useState } from 'react';

export function useTasks(initialTasks = []) {
  const [tasks, setTasks] = useState(initialTasks);
  
    function addTask(title) {
      const trimedTitle = title.trim();
  
      if (!trimedTitle) return;
  
      setTasks(prev => [
        ...prev,
        {
          id: Date.now(),
          title: trimedTitle,
          completed: false
        }
      ]);
    }
  
    function toggleTask(id) {
      setTasks(prev =>
        prev.map(task =>
          task.id === id
            ? { ...task, completed: !task.completed }
            : task
        )
      );
    }
  
    function deleteTask(id) {
      setTasks(prev =>
        prev.filter(task => task.id !== id)
      );
    }

    return {
      tasks,
      addTask, 
      toggleTask,
      deleteTask
    }
}