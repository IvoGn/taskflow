export const useTasks = () => {
  const tasks = useState('tasks', () => [])

  const addTask = (title, dueDate = null) => {
    tasks.value.push({
      id: Date.now(),
      title,
      dueDate: dueDate || null,
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
  const updateTask = (id, title, dueDate = undefined) => {
    const task = tasks.value.find(
        task => task.id === id
    )

    if (task) {
        task.title = title
        if (dueDate !== undefined) {
          task.dueDate = dueDate
        }
    }

    saveTasks()
    }

  return {
    tasks,
    addTask,
    removeTask,
    toggleTask,
    updateTask,
    loadTasks
  }
}