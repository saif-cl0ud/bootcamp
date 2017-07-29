/**
 * Created by saif on 7/29/17.
 */


const TodoService = require('../services/TodoService');

module.exports = {
    
    createTodo: function(req, res) {
        TodoService.createTodo(req.body)
            .then(function(todo) {
                res.json(todo);
            });
    },

    getAllTodos: function(req, res) {
        TodoService.getAllTodos().then(function(todo) {
            res.json(todo);
        });
    }

};