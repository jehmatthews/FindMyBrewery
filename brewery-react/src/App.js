import './App.css';


import React from 'react';

import Home from './components/Home';
import BreweryInfo from './hooks/apiCalling';


function App() {
  return (
    <div>
      <div>
        <Home 
        />
      </div>
      <div>
       <BreweryInfo/>
      </div>
    </div>
  );
}

export default App;
