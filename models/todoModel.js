const mongoose = require("mongoose");

const TodoSechame = new mongoose.Schema({
        username:String,
        todo:String,
        isDone:Boolean,
        hasAttachment:Boolean
});

module.exports = mongoose.model('Todo',TodoSechame);