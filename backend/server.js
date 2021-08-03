const express = require('express');
const mongoose = require('mongoose');
const todosModel = require('./models/Todos');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://user:mongopass1@tododb.dfuu6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('The conection to the db was successful');
    }).catch((err) => console.log(err));




app.post('/insert', async (req, res) => {
    const tasks = req.body;
    console.log(tasks);
    const todos = todosModel(tasks);

    try {
        await todos.save().then(() => console.log('the data was pushed')).catch((err) => console.log(err));
    }
    catch (err) {
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log('The server is running...');
});