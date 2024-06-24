import React, {useState, useEffect} from 'react';
import "./Card1.css"
function Card1({imageUrl, title}) {
  return (
    <div className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
  );
}

export default Card1;
