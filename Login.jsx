import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [action, setAction] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setMessage("Login Successful!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  const handleSignUp = () => {
    // You can add your sign-up logic here
    setMessage("Sign-Up functionality not implemented");
  };

  const handleAction = () => {
    if (action === "Login") {
      handleLogin();
    } else if (action === "Sign Up") {
      handleSignUp();
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className='text'>MedLedger</div>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <input type='text' placeholder='Full-Name' />
          </div>
        )}
        <div className="input">
          <input type='text' placeholder='Username' value={username} onChange={handleUsernameChange} />
        </div>
        <div className="input">
          <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
        </div>
      </div>
      {action === "Login" && (
        <div className="fp">Lost Password? <span>Click here!</span> </div>
      )}
      <div className="submit-container">
        <div className="submit" onClick={() => { setAction("Sign Up"); setMessage(""); }}>Sign Up</div>
        <div className="submit" onClick={() => { setAction("Login"); setMessage(""); }}>Login</div>
      </div>



      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Login;
