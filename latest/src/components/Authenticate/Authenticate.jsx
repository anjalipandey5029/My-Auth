import React from "react";
import './Authenticate.css';
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const navigate = useNavigate();

    return (
        <div className="authPage">
            <h2>Welcome! Please Login or Register</h2>
            <div className="button" onClick={() => navigate("/login")}>
                Login
            </div>
            <div className="button" onClick={() => navigate("/register")}>
                Register
            </div>
        </div>
    );
};

export default AuthPage;
