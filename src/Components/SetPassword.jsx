import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layout/navbar';
import '../css/setPasswordstyle.css';

function SetPassword() {
  const navigate = useNavigate();
  const adminEmail = "admin.s12345@allright.com";
  const [message, setMessage] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({

    password: "",
    confirmPassword: "",
  });

  const validatePassword = (password) => {
    if (!password) return "Password is required.";
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password)
      ? ""
      : "Password must be at least 8 characters long and contain both letters and numbers.";
  };
const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword)
      return "Please confirm your password.";
    return password === confirmPassword
      ? ""
      : "Passwords does not match.";
  };


  const handleSubmit = (e) => {
    e.preventDefault();
const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);
 if (passwordError || confirmPasswordError) {
      setErrors({

        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
    } else {
      localStorage.setItem('adminEmail', adminEmail);
      localStorage.setItem('adminPassword', password);
      setMessage(" ✅ Password set successfully!!");

      setTimeout(() => {
        navigate('/login')
    }, 5000);


    setTimeout(() => {
        setMessage("");
    }, 5000);
      console.log("Password set successfully");
      

    }
  };

  return (
    <div><Navbar />
      <div className="passwordStyle">
<div style={{ display: 'flex',
   alignItems: 'center', 
   marginTop: '10vh',
    flexDirection: 'column' }}>

          <form onSubmit={handleSubmit}>
            <div>
              <label style={{ display: "block", marginBottom: "10px" }}>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: "10px", padding: "10px", width: "250px" }}
              />
              {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "10px" }}>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ marginBottom: "10px",
                   padding: "10px", 
                   width: "250px" }}
              />
              {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              style={{ padding: "10px 20px",
                backgroundColor: "#fbc477",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>
        
      </div>
      {message && (
                <div style={{
                    position: 'fixed',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    textAlign: 'center',
                    zIndex: 1000}}>
                    {message}
                </div>
            )}
    </div>
    
  )}

export default SetPassword;
