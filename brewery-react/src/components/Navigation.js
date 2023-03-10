import React from 'react';
import '../styles/navigation.scss';

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <a href="/home" style={{ textDecoration: 'none !important', color: 'white' }}>
          <h1 className="logo">FindMyBrewery</h1>
        </a>
        <div className="nav-menu">
          <h2 className="username">Hello, King</h2>
          <div className="dropdown">
            <button className="dropbtn">Menu ☰</button>
            <div className="dropdown-content">
              <a href="/home">Home</a>
              <a href="/breweries">List of Breweries</a>
              <a href='/brewery/filter'>Filter Breweries</a>
              <a href="/brewery/random">Random Brewery!</a>
              <a href='/'>Logout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
