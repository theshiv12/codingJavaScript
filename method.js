const express = require("express");
const { all } = require("express/lib/application");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());

// let users = [{
//     id:1,
//     name:"shivam"
// },{
//     id:2,
//     name:"ajay"
// },
// {
//     id:3,
//     name:"shivani"
// }];
const userRouter = express.Router();
 const authRouter = express.Router();

app.use("/user", userRouter);
 app.use("/auth", authRouter);

userRouter.route("/")
    .get(middleware , getUsers)
    .post(postUser)
    .patch(updateUser)
    .delete(deletUser)
 
authRouter.route("/")
.get(getSignup)
.post(postSignup)

function middleware(req , res , next){
    console.log("middle ware called");
    next();
}
userRouter.route("/:id")
    .get(getUsersById)

 async function getUsers(req, res) {
     let alluser = await userModel.find({});
     console.log(alluser);
    res.json({
        message:"alluser",
        data:alluser
          
});
}

function postUser(req, res) {
    console.log(req.body);
    let dataobj = req.body;
    let user = userModel.create(dataobj)
    res.json({
        message: "data submitted",
        user: req.body
    });
}

function updateUser(req, res) {
    console.log(req.body);
    for (key in req.body) {
        users[key] = req.body;
    }

    res.json({
        message: "user updated succesfully"
    })
}


async function deletUser(req, res) {
    await userModel.deleteOne({name:"shivam"})
    res.json({
        message: "users has been deeted sucsesfully"
    });
}
async function login(req , res,  next){

}


function getUsersById(req, res) {
    console.log(req.params.id);
    let paramId = req.params.id;
    let obj = {};
    for (let i = 0; i < users.length; i++) {
        if (users[i]['id'] == paramId) {
            obj = users[i];
        }
    }

    res.json({
        message: "req recieved ",
        data: obj
    })
}



app.listen(5000, () => {
    console.log("lostingn on port");
});

function getSignup(req , res){
    res.sendFile("crud/crud/public/index.html" , {root :__dirname});
}

async function postSignup(req , res){
    let dataobj = req.body;
     let user = await userModel.create(dataobj);

    res.json({
        message:"data recieved",
        data:user
    })
}

//mando crud
const db_url= "mongodb+srv://shivam123:shivam12@cluster0.cpny6g2.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db_url)
.then(function(db){
  console.log("db is conected");
})
.catch(function(err){
  console.log(err);
});

//create an schem a
const userSchema = mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    //unique:true
  },
  password:{
    type:String,
    require:true,
    minLen:8

  }
})

//models
const userModel = mongoose.model("userModel" ,userSchema );

// function createUSer(){
//   let user={
//     name:"shivam",
//     email:"shivamfg@gmail.com",
//     password:"12345678"
//   };
//   let user1={
//     name:"shivam2",
//     email:"shivam12fxxg@gmail.com",
//     password:"12345678"
//   };

//  //userModel.create(user);
//  //userModel.create(user1);
 
// }
// //createUSer();