const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let mongodbURL = process.env.DBURL || "mongodb://localhost:27017/todoapp" ;
let todolist = require("./models/todoModel")
const app = express();

let apiRouter = require("./routers/api");

// MongoDB Config
mongoose.connect(mongodbURL,{ useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// App config
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',apiRouter);

app.get('/',(req,res)=>{
    res.send('app start');
});

app.get('/api/seeddata',(req,res)=>{
   let seed = [
            {
                username:"test",
                todo:"list",
                isDone:false,
                hasAttachment:false
            },
            {
                username:"test",
                todo:"list2",
                isDone:false,
                hasAttachment:false
            },
            {
                username:"test",
                todo:"list3",
                isDone:false,
                hasAttachment:false
            },
            {
                username:"test",
                todo:"list4",
                isDone:false,
                hasAttachment:false
            }
       ];
       
       todolist.create(seed,(err,result)=>{
           if(err)throw err;
           res.send(result);
       });
});

app.listen(process.env.PORT, process.env.IP, () =>{
    console.log('server start at https://simple-todoapp-mythk.c9users.io/');
})