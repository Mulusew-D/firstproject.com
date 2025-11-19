import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
    { id: 2, day: "Tuesday", time: "12:00 PM - 12:00 AM" },
    { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { id: 5, day: "Friday", time: "3:00 PM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 3:00 PM" },
  ];

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
          <h4>Hours</h4>
          <ul>
            {hours.map((h) => (
              <li key={h.id}>
                <span>{h.day}:</span> <span>{h.time}</span>
              </li>
            ))}
          </ul>
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
