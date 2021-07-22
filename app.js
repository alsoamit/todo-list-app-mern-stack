const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connecting to the database
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to mongodb");
});

app.get("/todos", (req, res) => {
    Todo.find()
        .then((todos) => res.json(todos))
        .catch((err) => res.status(400).json("Error " + err));
});

// route to create a todo
app.post("/todos/create", (req, res) => {
    const todo = new Todo(req.body);
    todo
        .save()
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

// route to fetch an individual todo
app.get("/todos/:id", (req, res) => {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
        res.json(todo);
    });
});

// route to update an individual todo
app.post("/todos/:id", (req, res) => {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
        if (!todo) {
            res.status(404).send("Sorry: Todo Not Found!");
        } else {
            todo.text = req.body.text;
            todo
                .save()
                .then((todo) => {
                    res.json(todo);
                })
                .catch((err) => res.status(500).send(err.message));
        }
    });
});

// route to delete an individual todo
app.post("/todos/delete/:id", (req, res) => {
    const id = req.params.id;
    Todo.findOneAndDelete({_id: id }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Deleted User : ", docs);
    }
});
});

// heroku 

if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    // const path = require("path");
    // app.get("*", (req, res) => {
    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    // })
}

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});