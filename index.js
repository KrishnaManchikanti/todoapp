const express =  require('express');
const app=express();
const port=8000;
app.listen(port,(err)=>{
    if(err){
        console.log(`err in server:${err}`);
        return;
    }

    console.log(`server is up at ${port}`);
});