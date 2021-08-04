import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Form from './components/Form';
import List from './components/List';
import axios from 'axios';


function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    function postData() {
      //.
      axios.post("http://localhost:3001/insert", tasks);

    };

    postData()
  }, [tasks]);



  return (
    <div className="App">
      <div className="main-container">
        <h1>To do list</h1>
        <Form task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} />
        <List task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
