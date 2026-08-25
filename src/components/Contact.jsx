const Contact = () => {
  return (
    <div className="page-container">
      {/* Hero */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Here's how you can reach us.</p>
      </section>

      {/* Contact Options */}
      <section className="contact-options">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p className="contact-detail">080-47181888</p>
            <p className="contact-meta">Monday to Friday, 9 AM – 6 PM</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email Us</h3>
            <p className="contact-detail">support@zerodha.com</p>
            <p className="contact-meta">We reply within 24 hours</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>Live Chat</h3>
            <p className="contact-detail">Chat with us on Kite</p>
            <p className="contact-meta">Available during market hours</p>
          </div>
        </div>
      </section>

      {/* Address section */}
      <section className="contact-address">
        <div className="address-grid">
          <div className="address-card">
            <h3>🏢 Head Office</h3>
            <p>
              Zerodha Broking Ltd.,<br />
              #153/154, 4th Cross, Dollars Colony,<br />
              Opp. Clarence Public School,<br />
              J.P Nagar 4th Phase, Bengaluru - 560078
            </p>
          </div>
          <div className="address-card">
            <h3>📍 Registered Office</h3>
            <p>
              Zerodha Broking Ltd.,<br />
              #153/154, 4th Cross, Dollars Colony,<br />
              Opp. Clarence Public School,<br />
              J.P Nagar 4th Phase, Bengaluru - 560078
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send us a message</h2>
        <p className="contact-form-subtitle">Have a question or need help? Fill out the form below.</p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="What is this regarding?" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Describe your issue or question..."></textarea>
          </div>
          <button type="submit" className="contact-submit-btn">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;