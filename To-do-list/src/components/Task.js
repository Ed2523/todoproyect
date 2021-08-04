import React, { useState, useRef } from 'react';

const Task = ({ task, tasks, setTask, setTasks }) => {

    //States
    const [editing, setEditing] = useState(false);
    const [editingInput, setEditingInput] = useState('');
    const [stateText, setStateText] = useState('Pending');

    //Refs
    const taskState = useRef('pending');
    const taskItem = useRef();
    const buttonStatus = useRef();

    //Functions
    const editingHandler = (e) => {

        //Line 43
        if (editing === false) {
            setEditing(true);
        }
        else {
            setEditing(false);
        }

        setEditingInput('');
        console.log(task);
        console.log(editing);
    };

    const statusHandler = () => {

        if (taskState.current === 'pending') {
            taskItem.current.style = 'text-decoration: line-through;';
            buttonStatus.current.className = 'completed button';
            taskState.current = 'completed';
            setStateText('Completed');
        }
        else if (taskState.current === 'completed') {
            taskItem.current.style = 'text-decoration: none;';
            buttonStatus.current.className = 'pending button';
            taskState.current = 'pending';
            setStateText('Pending');
        }
    }
    const inputHandler = (e) => {
        setEditingInput(e.target.value);
    }
    const deleteTask = () => {
        setTasks(tasks.filter((taskIndex) => taskIndex.id !== task.id));
    }

    return (
        editing ?
            <div className='task'>
                <input value={editingInput} autoFocus={true} onChange={inputHandler} onKeyDown={e => { if (e.key === 'Enter') { editingHandler() } }} type="text" />
                <div className="buttons">
                    <button onClick={editingHandler} className='complete button'>Save</button>
                </div>
            </div>
            :
            <div className='task'>
                <h1 ref={taskItem} className='item-task' onDoubleClick={editingHandler}>{task.text}</h1>
                <div className="buttons">
                    <button ref={buttonStatus} className='pending button' onClick={statusHandler} >{stateText}</button>
                    <button className='delete button' onClick={deleteTask}>Delete</button>
                </div>
            </div>
    );
}

export default Task;