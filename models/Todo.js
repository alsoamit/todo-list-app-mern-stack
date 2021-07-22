const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model("Todo", Todo);