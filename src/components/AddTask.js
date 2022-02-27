import { useState } from 'react'

const AddTask = () => {

    const [text, setText] = useState("")
    const [date, setDate] = useState(new Date())
    
    return (
        <div className="add-task-container">
            <form className="add-task-form">
                <div className='form-control'>
                    <label>Task</label>
                    <input type="text" placeholder="Task" value={text} />
                </div>
                <div className='form-control'>
                    <label>Due Date</label>
                    <input type="date" value={date} />
                </div>
                <input type="submit" value="Save" className="save-button"/>
            </form>
        </div>
    )
}

export default AddTask