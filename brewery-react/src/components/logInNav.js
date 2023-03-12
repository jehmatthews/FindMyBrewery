import React from 'react';
import '../styles/navigation.scss';

function LoginNavigation() {
  return (
    <nav>
      <div className="nav-container">
        <a href="/" style={{ textDecoration: 'none !important', color: 'white' }}>
          <h1 className="logo">FindMyBrewery</h1>
        </a>
        
      </div>
    </nav>
  );
}

export default LoginNavigation;