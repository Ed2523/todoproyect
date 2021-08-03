const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema([
    {
        text: {
            type: String,
        },

        id: {
            type: String,
        }
    }
]);

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;

