import Task from "./Task"

const Tasks = ({tasks, deleteTask, toggleChecked}) => {
  return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} deleteTask={deleteTask} toggleChecked={toggleChecked} />
        ))}
    </>
  )
}

export default Tasks