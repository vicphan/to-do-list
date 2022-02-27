
const Task = ({ task }) => {
    return (
        <div className="task-container">
            <input type="checkbox"></input>
            <div className="task-text-container">
                <h3>{task.text}</h3>
                <p>{task.due_date}</p>
            </div>
        </div>

    )
}

export default Task