const mongoose = require("mongoose");
const con = mongoose.connect("mongodb+srv://udit12456:6ayu1AmMCCBFHwC2@todo.wtwef9p.mongodb.net/");

// Import the User model
const { User } = require("./UserModel"); // Update the path as per your file structure

const CreateTodoSchema = new con.Schema({
    title: String,
    body: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User' // Referencing the User model
    }
}, { timestamps: true });

const List = con.model('List', CreateTodoSchema);

module.exports = {
    List
};

