const express = require("express");
const router = express.Router();
let Todo = require("../models/todoModel");

router.get('/',(req,res)=>{
   Todo.find({},(err,value)=>{
     if(err)throw err;
     res.send(value);
   });
});

router.get('/user/:username',(req,res)=>{
   Todo.find({username:req.params.username},(err,value)=>{
     if(err)throw err;
     res.send(value);
   });
});

router.get('/id/:id',(req,res)=>{
   Todo.findById(req.params.id,(err,value)=>{
      if(err)throw err;
      res.send(value);
   }); 
});

router.post('/',(req,res)=>{
   if(req.body.id){
       Todo.findByIdAndUpdate(req.body.id,{
           todo:req.body.todo,
           isDone:req.body.isdone,
           hasAttachment:req.body.hasattachment
       },(err,value)=>{
           if(err)throw err;
           res.send('Update!!');
       });
   }else{
       Todo.create({
           username:"test",
           todo:req.body.todo,
           isDone:req.body.isdone,
           hasAttachment:req.body.hasattachment
       },(err,value)=>{
           if(err) throw err;
           res.send('Create new data' + value);
       });
   }
});

router.delete('/',(req,res)=>{
   Todo.findByIdAndRemove(req.body.id,(err,value)=>{
       if(err) throw err;
       res.send('Todo is delete!!');
   }) ;
});

module.exports = router;