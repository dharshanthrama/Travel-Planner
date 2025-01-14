import React from 'react';


function Header() {
  return (
    <>
      <div
        className="p-3 shadow-sm flex justify-between items-center px-5"
        style={{
          backgroundColor: 'green', 
          color: '#fff', 
        }}
      >
        <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
         
          <div
            className="navbar-logo"
            style={{
              fontSize: '1.5em', 
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase', 
            }}
          >
            ExploreEase
          </div>

       
          <ul
            className="navbar-links"
            style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              alignItems: 'center',
            }}
          >
            <li style={{ marginRight: '20px' }}><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
            <li style={{ marginRight: '20px' }}><a href="/itinerary" style={{ color: '#fff', textDecoration: 'none' }}>Itinerary</a></li>
            <li style={{ marginRight: '20px' }}><a href="/bookings" style={{ color: '#fff', textDecoration: 'none' }}>Bookings</a></li>
            <li style={{ marginRight: '20px' }}><a href="/budget" style={{ color: '#fff', textDecoration: 'none' }}>Budget</a></li>
            <li style={{ marginRight: '20px' }}><a href="/help" style={{ color: '#fff', textDecoration: 'none' }}>Help</a></li>
            <li style={{ marginRight: '20px' }}><a href="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</a></li>

           
            <li>
              <a
                href="/register"
                className="register-btn"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#f57c00', 
                  color: '#fff',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
