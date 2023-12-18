import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Menu from './components/pages/Menu';
import CookieConsent from "react-cookie-consent";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <CookieConsent expires={999}>
        Our website employs cookies to improve your browsing experience. By continuing to use our website,
        you consent to the utilization of cookies as described in our{" "}
        <a
          href="https://commission.europa.eu/cookies-policy_en"
          className="cookie">Cookie Policy
        </a>
      </CookieConsent>
    </>
  );
}

export default App;
