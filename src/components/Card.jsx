import React from 'react';

const Card = ({ gif }) => {
  return (
    <div className="card">
      <h2>{gif.title}</h2>
      <img src={gif.images.fixed_height.url} alt={gif.title} />
    </div>
  );
};

export default Card;