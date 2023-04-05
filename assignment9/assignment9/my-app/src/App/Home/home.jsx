import React from 'react';
import './home.css';
import NavBar from '../../Components/navbar';

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="header">
        <h1>Welcome to our website!</h1>
        <p>Welcome to the awesome company, we dont do boring stuff here</p>
        <p>Check out our job openings or get in touch with us using the links above. we could work great togeather</p>
      </div>
      <div className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>Project Management</li>
          <li>Data Engineer</li>
          <li>Data Scientist</li>
          <li>Software Architect</li>
        </ul>
      </div>
      <div className="testimonial">
        <h2>Testimonials</h2>
        <div className="testimonial-card">
          <p>"I'm so glad I chose this company to work with. They delivered exactly what I was looking for and exceeded my expectations."</p>
          <p>- Tim Cook, CEO, Apple</p>
        </div>
      </div>
      <div className="contact">
        <h2>Get in Touch</h2>
        <p>If you're interested in working with us or have any questions, please don't hesitate to get in touch using the contact form above or the information below:</p>
        <ul>
          <li>Email: panchani.n@@ourcompany.com</li>
          <li>Phone: 555-123-8376</li>
          <li>Address: 123 Any St, Somewhere USA</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
