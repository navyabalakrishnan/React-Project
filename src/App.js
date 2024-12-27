
import Splash from './Components/splash.jsx';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import SetPassword from './Components/SetPassword.jsx';
import LoginPage from './Components/LoginPage.jsx';
import AdminDashboard from './Components/ADMIN/AdminDashboard.jsx';
import Resetpassword from './Components/Resetpassword.jsx';
import SetNewpassword from './Components/SetNewpassword.jsx';
import RegisteredUsers from './Components/ADMIN/RegisteredUsers.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />

        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/reset-password" element={<Resetpassword/>}/>
         <Route path="/new-passwordpage" element={<SetNewpassword/>}/>
         <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
         <Route path="/registered-users" element={<RegisteredUsers/>} />

      </Routes>
    </Router>
  );
}

export default App;
