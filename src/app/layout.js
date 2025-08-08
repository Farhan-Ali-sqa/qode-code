import "./globals.css";
import PageAnimations from "../components/PageAnimations";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="header">
          <nav className="nav">
            <a href="#" className="logo">QodeCore Solutions</a>
            <ul className="nav-menu">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#process" className="nav-link">Process</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        </header>
        <PageAnimations />
        {children}
        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-brand">
                <h3>QodeCore Solutions</h3>
                <p>
                  Leading provider of software quality assurance and web development services. We help businesses transform their digital presence with cutting-edge technology solutions.
                </p>
                <div style={{ marginTop: "1rem" }}>
                  <span style={{ color: "#2563eb", fontWeight: 600 }}>ISO 9001 Certified</span> |
                  <span style={{ color: "#2563eb", fontWeight: 600 }}>GDPR Compliant</span>
                </div>
              </div>
              <div className="footer-section">
                <h4>Services</h4>
                <ul className="footer-links">
                  <li><a href="#services">Quality Assurance</a></li>
                  <li><a href="#services">Web Development</a></li>
                  <li><a href="#services">Mobile Apps</a></li>
                  <li><a href="#services">Performance Testing</a></li>
                  <li><a href="#services">Security Audits</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Company</h4>
                <ul className="footer-links">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#process">Our Process</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Support</h4>
                <ul className="footer-links">
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2025 QodeCore Solutions. All rights reserved. | Professional SQA & Web Application Development Services
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}