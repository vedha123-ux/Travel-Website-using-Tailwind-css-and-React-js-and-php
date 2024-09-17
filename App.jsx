import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tours from "./components/TourSection";
import LuxuryTour from "./components/LuxuryTour";
import LuxuryPackage from "./components/LuxuryPackage";
import Adventure from "./components/Adventure";
import Beach from "./components/Beach";
import Solo from "./components/Solo";
import Culture from "./components/Culture";
import SignUpForm from "./components/SignUp";
import Asia from "./components/Asia";
import Europe from "./components/Europe";
import America from "./components/America";
import Africa from "./components/Africa";
import Australia from "./components/Australia";
import Login from "./components/Login";
import Ticket from "./components/Ticket";
import Dashboard from "./components/Dashboard";
import Booking from "./components/Booking";
import BookingList from "./components/BookingList";
import Add from "./components/Add";
import Profiles from "./components/Profiles";
import Forget from "./components/Forget";
import Reset from "./components/Reset";
import Payment from "./components/Payment";
import PaymentCard from "./components/PaymentCard";
import Upi from "./components/Upi";
import Confirmation from "./components/Confirmation";
import Success from "./components/Success";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/LuxuryTour" element={<LuxuryTour />} />
          <Route path="/LuxuryPackage" element={<LuxuryPackage />} />
          <Route path="/Adventure" element={<Adventure />} />
          <Route path="/Beach" element={<Beach />} />
          <Route path="/Solo" element={<Solo />} />
          <Route path="/Culture" element={<Culture />} />
          <Route path="/SignUp" element={<SignUpForm />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path= "/BookingList" element={<BookingList /> } />
          <Route path= "/add" element = { <Add /> } />
          <Route path="/Profiles" element={<Profiles />} />
          <Route path="/destinations/asia" element={<Asia />} />
          <Route path="/destinations/europe" element={<Europe />} />
          <Route path="/destinations/america" element={<America />} />
          <Route path="/destinations/africa" element={<Africa />} />
          <Route path="/destinations/australia" element={<Australia />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/PaymentCard" element={<PaymentCard />} />
          <Route path="/Upi" element={<Upi />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
