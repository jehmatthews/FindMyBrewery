import React from 'react';

function Navigation() {
  return (
    <nav>
      <h1>FindMyBrewery!</h1>
      <h2>Logged in as: insert user here</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/breweries">List of Breweries</a></li>
        <li><a href='/brewery/filter'>Filter Breweries</a></li>
        <li><a href="/brewery/random">Random Brewery!</a></li>
        <li><a href='/'>Logout</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;