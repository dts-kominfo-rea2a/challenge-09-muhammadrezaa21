// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  return (
    <div className="contact">
      <img src={data.photo} className="contact-image" />
      <div className="contact-info">
        <p className="contact-name">{data.name}</p>
        <p className="contact-phone">{data.phone}</p>
        <p className="contact-email">{data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
