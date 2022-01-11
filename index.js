const express = require("express");
const app = express ();

const cors = require("cors");

// middleware 
app.use(cors());
app.use (express.json());
const port = process.env.PORT ||5000;

const users = [
    {id:'0',name:'Gazi ',email:'gazi@gmail.com'},
    {id:'1', name:'Sabbir',email:'sabbir@gmail.com'},
    {id:'2',name:'Jannat',email:'jannat@gmail.com'},
    {id:'3',name:'Gazisabbir',email:'gazisabbir@gmail.com'},
    {id:'4',name:'Likhon',email:'likhon@gmail.com'},
    {id:'5',name:'Noman',email:'noman@gmail.com'},

      ]
app.get('/users', (req,res)=>{
    res.send(users);
})
    // GET API 
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
// POST API 
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting to the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

app.listen (port,()=>{
    console.log('listeing the port', port)
})
//   userName: mongodb2
// password : SwsLTPiUOxefja11