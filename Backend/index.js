const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.js")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

main().then(() =>{
    console.log("Connect Successfully");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDB")
}

//Routers
app.get("/", (req,res) =>{
    res.send("My API");
})

app.post("/login", async(req,res) =>{
  console.log("Request body:", req.body); 
    const {email, password} = req.body;
    try{
        const user = await User.findOne({ email: email });
        if(user){
            if (password === user.password) {
               res.send({message : "Login Successfully", user : user})
            } else{
               res.send({message : "Password didn't match"})
            }
        } else {
            res.send({message : "User not registered"});
          }
    }catch (err) {
        console.error("Error:", err);
        res.status(500).send({ message: "Internal server error" });
      }
})

   
    
     


app.post("/register", async(req,res) =>{
  const {name, email, password} = req.body;
  try{
    const ExistingUser = await User.findOne({email : email});
    if (ExistingUser) {
        res.send({message : "User already registered"})   
    }
    const user = new User ({
        name,
        email,
        password
      })
      await user.save();
    console.log("User saved successfully");
    res.send({ message: "Registration successful, Please login now" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ message: "Internal server error" });
  }
});

        
  


app.listen(3000, () =>{
    console.log("Server is listing at port : 3000");
})