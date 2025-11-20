import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer container">
      <hr />
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/appointment">Appointment</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-hours">
          <h4>Working Hours</h4>
          <p>7 days in a week & 24 hrs in a day</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="contact-item">
            <FaPhone /> <span>0923849518</span>
          </div>
          <div className="contact-item">
            <FaPhone /> <span>0920020995</span>
          </div>
          <div className="contact-item">
            <MdEmail /> <span>ayenewgirmay21@gmail.com</span>
          </div>
          <div className="contact-item">
            <MdEmail /> <span>mulusewdesale@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaLocationArrow /> <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
      <p className="footer-copy">&copy; 2025 MediServe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
