export const useTasks = () => {
  const tasks = useState('tasks', () => [])

  const addTask = (title) => {
    tasks.value.push({
      id: Date.now(),
      title,
      completed: false
    })

    saveTasks()
  }

  const removeTask = (id) => {
    tasks.value = tasks.value.filter(
      task => task.id !== id
    )

    saveTasks()
  }

  const toggleTask = (id) => {
    const task = tasks.value.find(
      task => task.id === id
    )

    if (task) {
      task.completed = !task.completed
    }

    saveTasks()
  }

  const saveTasks = () => {
    localStorage.setItem(
      'tasks',
      JSON.stringify(tasks.value)
    )
  }

  const loadTasks = () => {
    const storedTasks = localStorage.getItem('tasks')

    if (storedTasks) {
      tasks.value = JSON.parse(storedTasks)
    }
  }

  return {
    tasks,
    addTask,
    removeTask,
    toggleTask,
    loadTasks
  }
}