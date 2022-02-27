import { useState, useEffect } from "react"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasksFromServer = async() => {
      const tasks = await getTasks()
      setTasks(tasks)
    }

    getTasksFromServer()
  }, [])

  const getTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()

    return data
  }

  const getTask = async(id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()

    return data
  }

  const addTask = async(task) => {
    const response = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await response.json()
    setTasks([...tasks, data])
  }

  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <AddTask addTask={addTask}/>
      <Tasks tasks={tasks} deleteTask={deleteTask}/>
    </div>
  )
}

export default App
