import React, { useState, useEffect } from 'react';
import BeerCard from './BeerCard';
import './App.css'; 

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Beer Explorer</h1>
      <input
        type="text"
        placeholder="Search for a beer..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="beer-container">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
