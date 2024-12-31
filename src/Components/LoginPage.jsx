
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layout/navbar';
import '../css/setPasswordstyle.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState({
        email: "",
        password: "",

    });

    const validateEmail = (email) => {
        if (!email) return "Email is required.";
        const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regEx.test(email) ? "" : "Please enter a valid email address.";
    };
    const validatePassword = (password) => {
        if (!password) return "Password is required.";
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordPattern.test(password)
            ? ""
            : "Password must be at least 8 characters long and contain both letters and numbers(not include special characters).";
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
         setErrors(prevErrors => ({ ...prevErrors, email: "" }));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrors(prevErrors => ({ ...prevErrors, password: "" }));
    };






    const handleSubmit = (e) => {
        e.preventDefault();

        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);


        if (passwordError || emailError) {
            setErrors({
                password: passwordError,
                email: emailError,
            });
            return;
        }
        
        const storedEmail = localStorage.getItem('adminEmail');
        const storedPassword = localStorage.getItem('adminPassword');
        if (email !== storedEmail || password !== storedPassword) {
            const invalidErrors = {
                email: email !== storedEmail ? "Invalid email or password." : "",
                password: password !== storedPassword ? "Incorrect password." : "",
            };
            setErrors(invalidErrors);
        } else {
            console.log("Logged in");
            setMessage(" ✅ Login successfully");
            setTimeout(() => {
                navigate("/registered-users");
            }, 5000);


            setTimeout(() => {
                setMessage("");
            }, 5000);
           
         
        }
    }

    return (
        <div><Navbar />
            <div className="passwordStyle">
<div style={{ display: 'flex',
 alignItems: 'center', marginTop: '10vh', flexDirection: 'column',padding: '0 20px',
    minHeight: '100vh', }}>
                    <h2>  LOGIN</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label style={{ display: "block", marginBottom: "10px" }}>Admin Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={ handleEmailChange}
                                style={{ marginBottom: "20px", padding: "10px", width: "250px" }}
                            />
                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                        </div>

                        <div>
                            <label style={{ display: "block", marginBottom: "10px" }}>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                style={{ marginBottom: "20px", padding: "10px", width: "250px" }}
                            />
                            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

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
                                Login
                            </button>
                        </div>

                    </form>
                    <Link to='/reset-password'> <p>Forgot password</p></Link>
                </div>
            </div>
            {message && (
                <div style={{position: 'fixed',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    textAlign: 'center',
                    zIndex: 1000,
                }}>
                    {message}
                </div>
            )}
        </div>
    );
}

export default LoginPage