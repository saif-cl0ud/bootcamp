/**
 * Created by saif on 7/29/17.
 */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;
const app = express();

let mongodbURI ="mongodb://admin:admin@ds127163.mlab.com:27163/boot12"

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

app.use(cors());
require('./models/Todo');
const TodoController = require('./controllers/TodoController');

mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI, {
    useMongoClient : true,
});

app.route('/')
    .get(function (req,res) {
        return res.json({
            message:"Welcome to todomvc"
        })

    });

app.route('/todos')
    .get(function(req, res) {
        return TodoController.getAllTodos(req, res);
    })
    .post(function(req, res) {
        return TodoController.createTodo(req, res);
    });

app.listen(PORT);


console.log('Sever is getting started at :${PORT}');
