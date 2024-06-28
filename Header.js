import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <button className="login-button">Login</button>
        <span>
          <img src="search.png" alt="Search" className="icon-img" />
          Search
        </span>
        <span>
          <img src="toggle.png" alt="Toggle" className="icon-img" />
          Toggle
        </span>
        <span>
          <img src="like.png" alt="Like" className="icon-img" />
          Favourite
        </span>
        <ul>
          <li>
            <a href="#">Pilgrim Tours Packages</a>
          </li>
          <li>
            <a href="#">Special Discount Tours</a>
          </li>
          <li>
            <a href="#">Top Rated</a>
          </li>
          <li>
            <a href="#">International Places</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
        </ul>
      </nav>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          padding: '10px',
        }}
      >
        <img
          src="lot.jpg"
          alt="Company Logo"
          style={{ height: '100px', width: 'auto', marginLeft: '20px' }}
        />
        <marquee
          behavior="scroll"
          direction="left"
          style={{
            width: '95%',
            color: 'rgb(248, 241, 241)',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#a4ce42',
            height: '30px',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          Discover divine destinations at half the cost! Limited time offer: 50%
          off on global pilgrimages. Exciting news! We're thrilled to announce
          the launch of new flight and bus services, offering more convenience
          and flexibility for your travels.
        </marquee>
      </div>
      <h1>Religious Places for Pilgrims</h1>
    </header>
  );
};

export default Header;
