import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.authToken) {
        localStorage.setItem('token', data.authToken);
        navigate('/home');  // Redirect to '/home' after login
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Failed to fetch: ', error);
      alert('Failed to connect to the server');
    }
  };

  const goToSignup = () => {
    navigate('/signup');  // Change this to your signup page URL
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0'
      // backgroundColor: 'rgb(252, 128, 25)'
    }}>
      <h1 style={{fontSize:"x-large", marginBottom:"100px"}}><b>Welcome to the amazing and totally not fake Swiggy website</b></h1>
      <div style={{
        maxWidth: '300px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px'
      }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={{
              margin: '10px 0',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={{
              margin: '10px 0',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <button type="submit" style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            marginTop: '10px'
          }}>
            Login
          </button>
          <button type="button" onClick={goToSignup} style={{
            marginTop: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
