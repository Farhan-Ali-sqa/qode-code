"use client";

export default function ContactForm() {
  return (
    <form
      id="contactForm"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
          name: form.name.value,
          email: form.email.value,
          phone: form.phone.value,
          service: form.service.value,
          budget: form.budget.value,
          message: form.message.value,
        };
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          alert('Thank you! Your message has been sent.');
          form.reset();
        } else {
          alert('Sorry, there was a problem sending your message.');
        }
      }}
    >
      {/* ...form fields as in your layout.js... */}
      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input type="text" id="name" name="name" placeholder="Your full name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="+92 (302) 222-3000" />
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Required *</label>
        <select id="service" name="service" required>
          <option value="">Select a service</option>
          <option value="sqa">Software Quality Assurance</option>
          <option value="web-dev">Web Application Development</option>
          <option value="mobile">Mobile App Development</option>
          <option value="performance">Performance Optimization</option>
          <option value="security">Security & Compliance</option>
          <option value="devops">DevOps & Deployment</option>
          <option value="consultation">Free Consultation</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="budget">Project Budget</label>
        <select id="budget" name="budget">
          <option value="">Select budget range</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="100k+">$100,000+</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Project Details *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Please describe your project requirements, timeline, and any specific needs..."
          required
        ></textarea>
      </div>
      <button type="submit" className="cta-btn cta-primary" style={{ width: "100%", marginTop: "1rem" }}>
        🚀 Send Message & Get Free Quote
      </button>
    </form>
  );
}