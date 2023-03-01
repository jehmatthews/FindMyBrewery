import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="breweries">List of Breweries</a></li>
        <li><a href="brewery/random">Random Brewery!</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;