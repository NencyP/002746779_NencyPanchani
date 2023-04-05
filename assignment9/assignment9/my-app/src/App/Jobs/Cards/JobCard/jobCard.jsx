import React from 'react';
import './jobCard.css';

const JobCard = ({ title, description }) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default JobCard;
