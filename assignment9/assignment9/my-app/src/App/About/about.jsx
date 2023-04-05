import React, { useState, useEffect } from 'react';
import './about.css';
import NavBar from '../../Components/navbar';
import CustomerCard from '../../Components/CustomerCard';
import axios from 'axios';

const About = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/user/getAll')
      .then(response => setCustomers(response.data))
      .catch(error => console.log(error));
  }, []);
console.log(customers)
  return (
    <div className="about">
      <NavBar />
      <h1>About Us</h1>
      <p>We are a company that has been doing awesome things for over 10 years.</p>
      <p>Our mission is to make the world a better place by doing awesome things.</p>

      <div className="customer-section">
        <h2>Our Happy Customers</h2>
        <div className="customer-cards">
          {customers.map(customer => (
            <CustomerCard
              name={customer.fullName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
