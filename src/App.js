import { useState } from "react"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"

const App = () => {
  const [tasks, setTasks] = useState([])
  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App
