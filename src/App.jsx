// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import Register from './Pages/Register.jsx';
import Servic from './Pages/Servic.jsx';
import DetailsService from './Pages/DetailsService.jsx';
import UserBookings from './Pages/UserBooking.jsx';
import UserProfile from './Pages/UserProfile.jsx';
import HeroLanding from './Pages/Home.jsx';
import Footer from './Components/footer.jsx';
import LoginForm from './Components/login.jsx';
import VServic from './Pages/VendoreService.jsx';
import VDetailsService from './Pages/VendorDetailsService.jsx';
import AddListingPage from './Pages/vendors1.jsx';
// import ChatBot from './Pages/ChatBot .jsx';
// import ChatBot from './Pages/ChatBot.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service" element={<Servic />} />
          <Route path="/Vservice" element={<VServic />} />
          <Route path="/dservice" element={<DetailsService />} />
          <Route path="/vdservice" element={<VDetailsService />} />
          <Route path="/UserBookings" element={<UserBookings />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/Home" element={<HeroLanding />} />
          <Route path="/AddListingPage" element={<AddListingPage />} />
          {/* <Route path="/bot" element={<ChatBot />} /> */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
      {/* // <OutgoingCall />
      // <AudioCallWithCamera /> */}
    </>
  );
}

export default App
