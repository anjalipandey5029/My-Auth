import React from "react";
import { useNavigate } from "react-router-dom"; 
import './homepage.css';

const Homepage = ({ setLoginUser, user }) => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        setLoginUser({}); 
        navigate("/auth"); 
    };

    return (
        <div className="homepage">
            <h1>Welcome to My Home Page</h1>
           <div className="button" onClick={handleLogout}>
                Logout
            </div>
        </div>
    );
};

export default Homepage;
