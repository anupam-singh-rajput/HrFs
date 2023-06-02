import React,{useState} from 'react';
import Main from './Components/HomPage/Main'
import Profile from './Components/HomPage//Profile'
import Help from './Components/HomPage//Help'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/HomPage/Navbar'
import Bottom from './Components/HomPage//Bottom' 
import RentMainPage from './Components/Rent/RentMainPage'
import RightSignup from './Components/Signup/RightSignup';
import LeftLoginPage from './Components/Login/LeftLoginPage';
import LeftHostPage from './Components/Host/LeftHostPage';

function App() {

  const [user, setuser] = useState('')

  const saveExpenseData = (reciever) =>{
    console.log(reciever);
    setuser(reciever);
    console.log(user)
  }



  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<RightSignup onSaveExpense={saveExpenseData} />}/>
        <Route path="/rent" element={<RentMainPage/>}/>
        <Route path="/host" element={<LeftHostPage/>}/>
        <Route path="/signup/login" element={<LeftLoginPage userData={user}/>} />
      </Routes>
      <Bottom/>
    </Router>
  );
}

export default App;
