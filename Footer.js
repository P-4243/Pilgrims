import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="column">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="#">Phone</a>
            </li>
            <li>
              <a href="#">Address</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Mission</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Pilgrimage Tours. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
