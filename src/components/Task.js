import { useState } from 'react'
import {FaTrash} from 'react-icons/fa'

const Task = ({ task, deleteTask, toggleChecked }) => {

    const [checked, setChecked] = useState(task.checked)

    const onChange = (e) => {
        setChecked(!checked)
        toggleChecked(task.id)
    }

    return (
        <div className="task-container">
            <input type="checkbox" checked={checked} onChange={onChange}></input>
            <div className={`task-text-container ${checked ? 'checked':''}`}>
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