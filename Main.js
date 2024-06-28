import React from 'react';
import './App.css';

const Main = () => {
  return (
    <main className="main-content">
      <div className="card-container">
        <div className="card">
          <img
            src="https://clubmahindra.gumlet.io/blog/media/section_images/desktopban-975a034f6295fb4.jpg?w=376&dpr=2.6"
            alt="Card 1 Image"
          />
          <div className="card-details">
            <h2 style={{ textAlign: 'center' }}>Temples</h2>
            <ul
              style={{ listStyleType: 'none', padding: 0, textAlign: 'left' }}
            >
              <li className="list-item">Shri Ram Mandir, Ayodhya</li>
              <li className="list-item">Venkateswara Temple, Tirumala</li>
              <li className="list-item">Kashi Vishwanath Temple, Varanasi</li>
              <li className="list-item">Somnath Temple, Gir Somnath</li>
              <li className="list-item">Meenakshi Temple, Madurai</li>
              <li className="list-item more">More....</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.bestdesertsafariindubai.com/blog/wp-content/uploads/2017/08/sheikh-zayed-grand-mosque-abu-dhabi.jpg"
            alt="Card 2 Image"
          />
          <div className="card-details">
            <h2 style={{ textAlign: 'center' }}>Mosques</h2>
            <ul>
              <li>Jama Masjid, Delhi</li>
              <li>Taj-ul-Masajid, Madhya Pradesh</li>
              <li>Jama Masjid, Gujarat</li>
              <li>Fatehpuri Masjid, Delhi</li>
              <li>Haji Ali Dargah, Maharashtra</li>
              <li>More....</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.fabhotels.com/blog/wp-content/uploads/2018/10/St.-Andrew%E2%80%99s-Church.jpg"
            alt="Card 3 Image"
          />
          <div className="card-details">
            <h2 style={{ textAlign: 'center' }}>Churches</h2>
            <ul>
              <li>St. Mary's Basilica, Bangalore</li>
              <li>Santa Cruz Cathedral Basilica, Kochi</li>
              <li>Velankanni Church, Tamil Nadu</li>
              <li>St. Andrew's Basilica, Arthunkal</li>
              <li>Se Cathedral, Old Goa</li>
              <li>More....</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
