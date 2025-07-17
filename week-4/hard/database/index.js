require("dotenv").config();
const mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

// Define schemas

const UserSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true },
    password: String
});

const TodoSchema = new mongoose.Schema({
    userId: ObjectId,
    title: String,
    done: Boolean

});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}