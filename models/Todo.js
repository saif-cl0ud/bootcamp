/**
 * Created by saif on 7/29/17.
 */

const mongoose= require('mongoose');

const Schema = mongoose.Schema

const TodoSchema = new Schema ({
    title : {
        type: String,
        required: true
    }, 
    is_completed:{
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('Todo',TodoSchema);