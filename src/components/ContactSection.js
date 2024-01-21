import React from 'react';

function ContactSection() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="message" placeholder="Your Message"/>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactSection;
