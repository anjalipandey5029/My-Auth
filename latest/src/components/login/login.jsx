import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';


const Login = ({setLoginUser}) =>{

    const navigate = useNavigate()
    
     const [user, setUser] = useState({
            email : "",
            password : "",
           
        })
    
        const handleInputChange = (event) =>{
           setUser((currData)=>{
            return{...currData, [event.target.name] : event.target.value}
           })
    
        };

        const login = () => {
            axios.post("http://localhost:3000/login",user)
            .then((res) => {
                alert(res.data.message); 
                setLoginUser(res.data.user); 
                navigate("/home")
              })
              .catch((error) => {
                console.error("Login error: ", error);
                alert("An error occurred. Please try again.");
              });
        }

    return(
        <div className="login">
       
         <h1>Login</h1>
         <input type="text"name = "email" value= {user.email}placeholder="Enter your Email" onChange={handleInputChange}/>
         <input type="password"name = "password" value={user.password} placeholder="Enter your password"onChange={handleInputChange}/>
         <div className="button" onClick={login}> Login</div>
         <div>or</div>
         <div className="button"onClick={() => navigate("/register")}>Register</div>
        </div>
    )
}

export default Login;