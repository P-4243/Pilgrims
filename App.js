import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <div className="social-icons">
        <a href="#" target="_blank">
          <img src="instagram-icon.png" alt="Instagram" />
        </a>
        <a href="#" target="_blank">
          <img src="facebook-icon.png" alt="Facebook" />
        </a>
        <a href="#" target="_blank">
          <img src="twitter-icon.png" alt="Twitter" />
        </a>
        <a href="#" target="_blank">
          <img src="whatsapp-icon.png" alt="WhatsApp" />
        </a>
      </div>
      <img src="chatbot-icon.png" className="chatbot-icon" alt="Chatbot Icon" />
    </div>
  );
}

export default App;
