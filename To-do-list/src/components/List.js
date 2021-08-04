import React from 'react';
import Task from './Task';

const List = ({ task, setTask, tasks, setTasks }) => {

    return (
        <div className='list'>

            {tasks.map(
                (task) => (

                    <Task task={task} tasks={tasks} key={task.id} setTask={setTask} setTasks={setTasks} />
                )
            )}



        </div>
    );
}

export default List;
