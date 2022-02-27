import {FaTrash} from 'react-icons/fa'

const Task = ({ task, deleteTask }) => {
    return (
        <div className="task-container">
            <input type="checkbox"></input>
            <div className="task-text-container">
                <h3>{task.text}</h3>
                <p>{task.date}</p>
            </div>
            <div className="trash-icon">
                <FaTrash size={28} style={{color: 'black', cursor: 'pointer'}} onClick={() => deleteTask(task.id)}/>
            </div>
        </div>

    )
}

export default Task