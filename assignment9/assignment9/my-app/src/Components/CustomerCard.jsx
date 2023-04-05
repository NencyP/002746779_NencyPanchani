import React from 'react';
import './customerCard.css';

const CustomerCard = ({name}) => {
  return (
    <div className="customer-card">
      <div className="details">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default CustomerCard;
