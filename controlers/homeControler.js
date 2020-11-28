//importing the schema
const todo=require('../models/Schema');
//home router funtionality and exporting
module.exports.home = (req,res)=>{
    
    todo.find({},(err,list)=>{
        if(err){
            console.log("err in finding todo");
            return;
        }
        res.render('home',{
            title:"TO_DO_APP",
            List:list.reverse()
        });
    });
}
//create router funtionality with req data and exporting
module.exports.create = (req,res)=>{
    todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date,
        time:req.body.time
    },(err,newTodo)=>{
        if(err){
            console.log("err in creating todo");
            return;
        }
        console.log("succesfully created contact",newTodo);
    });
    return res.redirect('back');
};

//finding router funtionality with req data and exporting
module.exports.find=(req,res)=>{
    console.log(req.body);
    if(req.body.find=="All"){
        todo.find({},(err,list)=>{
            if(err){
                console.log("err in finding todo");
                return;
            }
            res.render('home',{
                title:"ohhhh",
                List:list.reverse()
            });
        });
        return;
    }
    todo.find({category:req.body.find},(err,list)=>{
        if(err){
            console.log("err in finding todo");
            return;
        }
        res.render('home',{
            title:"ohhhh",
            List:list.reverse()
        });
    });
}
//deleting router funtionality with req data and redirecting back
module.exports.delete =(req,res)=>{
    console.log(req.body);
    var id=req.body.id;
    if(id==null){
        console.log('select an item to delete');
        return res.redirect('back');
    }else if(typeof(id)=="string"){
        todo.findByIdAndDelete(id,(err)=>{
            if(err){
                console.log('err in deleting');
                return;
            }
            return res.redirect('back');
        });
    }else{
        console.log(id.length);
        for(let i=0;i<id.length;i++){
            todo.findByIdAndDelete(id[i],(err)=>{
                if(err){
                    console.log('err in deleting');
                    return;
                }
            });
        }
        return res.redirect('back');
    }
};
