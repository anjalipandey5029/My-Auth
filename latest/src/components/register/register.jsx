import React from "react";
import { useState } from "react";
import './register.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () =>{
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name : "",
        email : "",
        password : " ",
        reEnterPassword : ""
    })

    const handleInputChange = (event) =>{
       setUser((currData)=>{
        return{...currData, [event.target.name] : event.target.value}
       })

    };

    const register = () =>{
        const {name, email, password, reEnterPassword} = user
        if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:3000/register", user)
          .then(res =>{
            alert(res.data.message)
            navigate("/login")
          } )
        } else {
            alert("invalid input")
        }
      
    }

    
    return(
        
        <div className="register">
          
        <h1>Register</h1>
        <input type="text"name = "name" value = {user.name} placeholder="Your Name" onChange={handleInputChange}/>
        <input type="text"name = "email" value={user.email} placeholder="Your Email" onChange = {handleInputChange}/>
        <input type="password" name = "password" value = {user.password} placeholder="Your password" onChange={handleInputChange}/>
        <input type="password" name = "reEnterPassword" value= {user.reEnterPassword}placeholder="Re-enter password" onChange={handleInputChange}/>
        <div className="button"onClick={register}>Register</div>
        <div>or</div>
        <div className="button">Login</div>
       </div>
    )
}

export default Register;