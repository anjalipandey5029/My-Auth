import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  // Import Navigate
import AuthPage from "./components/Authenticate/Authenticate";
// import './App.css';
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({});
  
  return (
    <div className='App'>
      <Router>
        <Routes>
          
          <Route path='/' element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path='/home' element={user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>} />         
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
