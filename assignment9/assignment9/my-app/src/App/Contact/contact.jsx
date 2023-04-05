import React from 'react';
import './contact.css';
import NavBar from '../../Components/navbar';

const Contact = () => {
  return (
    <div className="contact">
        <NavBar />
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
