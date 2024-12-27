import React, { useEffect } from 'react';
import '../css/splashstyle.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Splash() {
   const navigate = useNavigate();
   
   useEffect(() => {
      const splashtime = setTimeout(() => {
         navigate("/set-password");
      }, 10000);

      return () => clearTimeout(splashtime); 
   }, [navigate]);

   return (
      <div className="scontainer">
         <div className='splash-content'>
            <img src={logo} alt="Logo" className="splash-logo" />
         </div>
      </div>
   );
}

export default Splash;
