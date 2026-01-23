import { useState, useEffect } from 'react';

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
      const stored = localStorage.getItem('tasks');
      return stored ? JSON.parse(stored) : [];
    });
  
    const [filter, setFilter] = useState('all');
  
  
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
  
    const filteredTasks = tasks.filter((task) => {
      if (filter === "active") {
        return task.completed === false;
      }
  
      if (filter === "completed") {
        return task.completed === true;
      }
  
      return true;
    });

    return {
      tasks: filteredTasks,
      filter,
      setFilter,
      addTask, 
      toggleTask,
      deleteTask
    }
}