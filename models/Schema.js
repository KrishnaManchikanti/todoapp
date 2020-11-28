//importing the mongoose to  interact with db
const mongoose = require('mongoose');
//creating the schema(fields needed)
const TodoSchema = new mongoose.Schema({
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        required:true
    }
});
//converting schema to model
const Todo = mongoose.model('Todo',TodoSchema);
//exporting Schema
module.exports=Todo;