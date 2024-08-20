import React from 'react';

function Card({ title, text, imageUrl, buttonUrl, buttonText }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={buttonUrl} className="btn btn-primary">{buttonText}</a>
      </div>
    </div>
  );
}

export default Card;
