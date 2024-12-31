import React, { useState } from 'react'
import Navbar from '../Layout/navbar.jsx'
import { useNavigate } from 'react-router-dom'
function Resetpassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState({
        email: ""
    })

    const validateEmail = (email) => {
        if (!email) return "Email is required.";
        const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regEx.test(email) ? "" : "Please enter a valid email address.";
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
         setErrors(prevErrors => ({ ...prevErrors, email: "" }));
    };

 



    const handleSubmit = (e) => {
        e.preventDefault();

        const emailError = validateEmail(email);



        if (emailError) {
            setErrors({

                email: emailError,
            });
            return;
        }

        const storedEmail = localStorage.getItem('adminEmail')
        if (email === storedEmail) {
            setMessage(" ✅ Link sent through email");


            setTimeout(() => {
                navigate('/new-passwordpage');
            }, 5000);


            setTimeout(() => {
                setMessage("");
            }, 5000);
        } else {
            setErrors({
                email: 'Invalid email',
            });
        }
    };
    return (
        <>
            <Navbar />
            <div>

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10vh', flexDirection: 'column' }}>
                    <h2>  RESET YOUR PASSWORD</h2>
                    <div>
                        <p style={{ fontSize: '20px', fontFamily: 'monospace',
                              textAlign: 'center', 
                              maxWidth: '500px'
                               }}>Please enter your email address you are currently using,we will send you the URL for resetting the password</p>
                        <div style={{ display: 'flex',justifyContent: 'center',alignItems: 'center',
                               flexDirection: 'column' }}>
                            <form onSubmit={handleSubmit}>
                                <label style={{ marginBottom: '10px', alignContent: 'flex-start', display: 'block' }}> Email:</label>

                                <input type="email" value={email} onChange={handleEmailChange} style={{ padding: '10px', border: '1px solid #ccc' }} />

                                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                                <br />

                                <button
                                    type="submit"
                                    style={{padding: "10px 20px",
                                        backgroundColor: "#fbc477",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "10px",
                                        marginTop: '10px',
                                        cursor: "pointer",
                                    }}

                                >Send Password reset email</button>
                           </form>
                        </div> 
                    </div>
                </div>   </div>
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

        </>
    )
}

export default Resetpassword;