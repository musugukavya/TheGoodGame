
import React from 'react';

const BeerCard = ({ beer }) => {
  const { name, tagline, image_url } = beer;

  return (
    <div className="beer-card">
      <img src={image_url} alt={name} className="beer-image" />
      <h2>{name}</h2>
      <p>{tagline}</p>
    </div>
  );
};

export default BeerCard;
