import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../css/sideBar.css'; 

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Registered User");
  const [isOpened, setIsOpened] = useState(false);

  const toggleSidebar = () => setIsOpened(!isOpened);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const listyle = (item) => ({
    padding: "10px 20px",
    backgroundColor: activeItem === item ? "#ffe4b5" : "transparent",
    color: activeItem === item ? "orange" : "black",
    borderRadius: "5px",
    marginBottom: "5px",
  });

  return (
    <>
      <div style={{ display: 'flex', height: '100vh' }}>
        <button className='openclass' onClick={toggleSidebar}>☰</button>
        <div className={`sidebar ${isOpened ? 'opened' : ''}`}
        style={{paddingTop:'20px'}}>
          <nav style={{ display: 'flex', alignItems: 'center', padding: "10px 20px" }}>
            <img src={logo} alt="Logo" width={50} height={50} />
            <h4 style={{
              color: 'orange',
              fontFamily: 'serif',
              marginLeft: "10px"
            }}>
              Lorem ipsum
            </h4>
          </nav>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <Link to='/admin-dashboard' style={{ textDecoration: 'none' }}>
              <li style={listyle("Product Dashboard")} onClick={() => handleItemClick("Product Dashboard")}>
                Product Dashboard
              </li>
            </Link>
            <Link to='/registered-users' style={{ textDecoration: 'none' }}>
              <li style={listyle("Registered User")} onClick={() => handleItemClick("Registered User")}>
                Registered User
              </li>
            </Link>
            <li style={listyle("Winner")} onClick={() => handleItemClick("Winner")}>Winner</li>
            <li style={listyle("Operational Manager")} onClick={() => handleItemClick("Operational Manager")}>
              Operational Manager
            </li>
          </ul>
        </div>
     
      </div>
    </>
  );
}

export default Sidebar;
