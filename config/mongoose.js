//importing the mongoose
const mongoose = require('mongoose');
//creating the connection to db
mongoose.connect('mongodb://localhost/major_project_db',{ useNewUrlParser: true ,useUnifiedTopology: true});
//getting the connection
const db= mongoose.connection;
//if err in db connecting
db.on('error',()=>{
    console.error.bind(console,'error in connecting db');
    return;
});
//if connected to db
db.once('open',()=>{
    console.log("connected to db");
});