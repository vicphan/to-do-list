import { useState } from 'react'

const AddTask = ({addTask}) => {

    const [text, setText] = useState('')
    const [date, setDate] = useState(new Date())

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text){
            alert("Task should not be empty.")
            return
        }
        
        addTask({text, date})
        setText('')
        setDate(new Date())
    }
    
    return (
        <div className="add-task-container" onSubmit={onSubmit}>
            <form className="add-task-form">
                <div className='form-control'>
                    <label>Task</label>
                    <input type="text" placeholder="Task" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Due Date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value) }/>
                </div>
                <input type="submit" value="Save" className="save-button"/>
            </form>
        </div>
    )
}

export default AddTask