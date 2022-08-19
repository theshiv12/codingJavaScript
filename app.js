const express = require('express')
const app = express()



//it is middleware which is used to convert frontend data to json data 
app.use(express.json());
//app.set('port', 5000)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/about" , (req , res )=>{
       res.sendFile('absalute path will give ')//for send any html file 
})

app.get("/about-us",(req , res)=>
{
     res.redirect('/about')
})
app.listen(5000, () => {
  console.log(`Example app listening on port `)
})

//404 page 
// app.use((req , res)=>{
//     res.statusCode(404).sendFile('./views/404.hrml' , {root:__dirname})
// });

//now create a new file 

let users={}

app.get('/users' , (req , res)=>{
    
  res.send(users);

})

app.post('/users' , (req , res)=>{
    console.log(req.body);
    users=req.body;
    res.json({
        message:"data recieved seccesfuly",
        user:req.body
    });
})
