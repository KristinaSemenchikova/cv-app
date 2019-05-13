import React from "react";
import ContactForm from "./Form.jsx";
import './Contact.css';

const Contact = () => {
  return (
    <main className="contact">
        <h2>Contact me</h2>
        <span>
          If you have any questions or requests, fill out this form and I will
          certainly contact you{" "}
        </span>
        <ContactForm/>
    </main>
  );
};

export default Contact;
