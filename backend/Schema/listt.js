const mongoose = require("mongoose");

const CreateTodoSchema = new mongoose.Schema({
    title: String,
    body: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const List = mongoose.model("List", CreateTodoSchema);

module.exports = List;

