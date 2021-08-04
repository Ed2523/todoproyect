import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = ({ task, setTask, tasks, setTasks }) => {
    //States
    const [input, setInput] = useState('');

    //Functions
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    const createTask = () => {

        setTasks([...tasks, {
            text: input,
            id: uuidv4(),
        }])
        setInput('');

    }

    return (
        <div className="form">
            <input value={input} onChange={inputHandler} onKeyDown={e => { if (e.key === 'Enter') { createTask() } }} type="text" placeholder='New task' />
            <button onClick={createTask}>Add</button>
        </div>
    )
}

export default Form;
