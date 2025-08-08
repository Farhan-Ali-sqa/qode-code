import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactForm from "../components/ContactForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QodeCore Solutions - SQA & Web Application Development Services",
  description: "Professional SQA & Web Application Development Services",
};

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo">
            Quality Code Core Solutions
          </a>
          <ul className="nav-menu">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="#process" className="nav-link">
                Process
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Professional <span className="hero-highlight">SQA</span> & Web
              Application Development Services
            </h1>
            <p>
              We deliver enterprise-grade software quality assurance and
              cutting-edge web applications that drive business growth. Our
              expert team ensures your digital solutions meet the highest
              industry standards.
            </p>
            <div className="cta-buttons">
              <a href="#services" className="cta-btn cta-primary">
                🚀 Explore Services
              </a>
              <a href="#contact" className="cta-btn cta-secondary">
                📞 Get Free Consultation
              </a>
            </div>
          </div>
          <div className="hero-infographic">
            <div className="infographic-container">
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "1.5rem",
                  color: "#1e293b",
                  fontWeight: 700,
                }}
              >
                Our Development Process
              </h3>
              <div className="process-flow">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Analysis & Planning</h4>
                    <p>Requirements gathering and project roadmap creation</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Design & Architecture</h4>
                    <p>UI/UX design and technical architecture planning</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Development</h4>
                    <p>Agile development with continuous integration</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Quality Assurance</h4>
                    <p>Comprehensive testing and quality validation</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h4>Deployment & Support</h4>
                    <p>Production deployment and ongoing maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="stats-container">
          <div className="section-header">
            <h2 className="section-title">Our Track Record</h2>
            <p className="section-subtitle">
              Numbers that speak for our expertise and commitment to
              excellence
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <span className="stat-number" data-target="200">0</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <span className="stat-number" data-target="98">0</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <span className="stat-number" data-target="99">0</span>
              <span className="stat-label">On-Time Delivery</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔧</div>
              <span className="stat-number" data-target="24">0</span>
              <span className="stat-label">Technical Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="process-section" id="process">
        <div className="process-container">
          <div className="section-header">
            <h2 className="section-title">Our Proven Methodology</h2>
            <p className="section-subtitle">
              A systematic approach that ensures project success from
              conception to delivery
            </p>
          </div>
          <div className="process-timeline">
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>📋 Discovery & Analysis</h4>
                <p>
                  We begin with thorough requirement analysis, stakeholder
                  interviews, and market research to understand your business
                  objectives and technical needs.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>🎨 Design & Prototyping</h4>
                <p>
                  Creating wireframes, mockups, and interactive prototypes to
                  visualize the final product and gather early feedback from
                  stakeholders.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>⚙️ Development & Integration</h4>
                <p>
                  Agile development process with regular sprint reviews,
                  continuous integration, and collaborative coding practices
                  using modern frameworks.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>🧪 Quality Assurance</h4>
                <p>
                  Comprehensive testing including unit tests, integration
                  tests, performance testing, security audits, and user
                  acceptance testing.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>🚀 Deployment & Launch</h4>
                <p>
                  Smooth production deployment with monitoring setup,
                  performance optimization, and immediate post-launch support
                  and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-content">
            <h2>Why Choose QodeCore?</h2>
            <h4 style={{ color: "#2563eb", marginBottom: "1rem" }}>
              Web-Based Solutions & Quality Assurance Services
            </h4>
            <p>
              QodeCore delivers robust web-based software solutions and end-to-end quality assurance services to help businesses scale with confidence. From development to deployment, we ensure clean code, tested features, and digital excellence.
            </p>
            <ul className="features-list">
              <li>Certified QA Engineers</li>
              <li>Full-Stack Development Team</li>
              <li>Agile Project Management</li>
              <li>24/5 Technical Support</li>
              <li>ISO 9001 Quality Standards</li>
              <li>Data Security Compliance</li>
              <li>Scalable Cloud Solutions</li>
              <li>Competitive Pricing</li>
            </ul>
          </div>
          <div className="skills-chart">
            <h3
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                color: "#1e293b",
                fontWeight: 700,
              }}
            >
              Our Technical Expertise
            </h3>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">
                  Quality Assurance & Testing
                </span>
                <span className="skill-percentage">95%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="95%"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">React/Next.js Development</span>
                <span className="skill-percentage">92%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="92%"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Node.js & Backend APIs</span>
                <span className="skill-percentage">88%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="88%"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Database Management</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="85%"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Cloud & DevOps</span>
                <span className="skill-percentage">82%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="82%"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">UI/UX Design</span>
                <span className="skill-percentage">78%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="78%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="services-container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Explore our core offerings designed to accelerate your business
              growth.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🧪</div>
              <h3>Software Quality Assurance</h3>
              <p>
                Comprehensive testing and validation for robust, error-free
                software.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Web Application Development</h3>
              <p>
                Modern, scalable web solutions tailored to your business needs.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Mobile App Development</h3>
              <p>Native and cross-platform mobile apps for iOS and Android.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Performance Optimization</h3>
              <p>Speed up your applications and improve user experience.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔒</div>
              <h3>Security & Compliance</h3>
              <p>Protect your data and ensure regulatory compliance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>DevOps & Deployment</h3>
              <p>
                Automated deployment and cloud infrastructure management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">Get Started Today</h2>
            <p className="section-subtitle">
              Ready to transform your business with professional software
              solutions? Lets discuss your project requirements.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3
                style={{
                  color: "#1e293b",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                }}
              >
                Contact Information
              </h3>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4 style={{ color: "#1e293b", fontWeight: 600 }}>
                    Email Us
                  </h4>
                  <p style={{ color: "#64748b" }}>
                    info@techprosolutions.com
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4 style={{ color: "#1e293b", fontWeight: 600 }}>
                    Call Us
                  </h4>
                  <p style={{ color: "#64748b" }}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4 style={{ color: "#1e293b", fontWeight: 600 }}>
                    Visit Us
                  </h4>
                  <p style={{ color: "#64748b" }}>
                    123 Tech Street, Digital City, TC 12345
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h4 style={{ color: "#1e293b", fontWeight: 600 }}>
                    Business Hours
                  </h4>
                  <p style={{ color: "#64748b" }}>
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3
                style={{
                  color: "#1e293b",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                }}
              >
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Quality Code Core Solutions</h3>
              <p>
                Leading provider of software quality assurance and web
                development services. We help businesses transform their
                digital presence with cutting-edge technology solutions.
              </p>
              <div style={{ marginTop: "1rem" }}>
                <span style={{ color: "#2563eb", fontWeight: 600 }}>
                  ISO 9001 Certified
                </span>{" "}
                |
                <span style={{ color: "#2563eb", fontWeight: 600 }}>
                  GDPR Compliant
                </span>
              </div>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li>
                  <a href="#services">Quality Assurance</a>
                </li>
                <li>
                  <a href="#services">Web Development</a>
                </li>
                <li>
                  <a href="#services">Mobile Apps</a>
                </li>
                <li>
                  <a href="#services">Performance Testing</a>
                </li>
                <li>
                  <a href="#services">Security Audits</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#process">Our Process</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul className="footer-links">
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 QodeCode Solutions. All rights reserved. |
            Professional SQA & Web Application Development Services
          </p>
        </div>
      </footer>
      {/* Automated Counter Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
    document.addEventListener('DOMContentLoaded', function() {
      // Stat counter
      document.querySelectorAll('.stat-number').forEach(function(el) {
        const target = parseInt(el.getAttribute('data-target'), 10);
        let count = 0;
        const duration = 1200;
        const frameRate = 60;
        const totalFrames = Math.round(duration / (1000 / frameRate));
        const increment = target / totalFrames;
        function update() {
          count += increment;
          if (count < target) {
            el.textContent = Math.floor(count);
            requestAnimationFrame(update);
          } else {
            el.textContent = target;
          }
        }
        el.textContent = "0";
        update();
      });

      // Skill bar animation
      function animateSkillBars() {
        document.querySelectorAll('.skill-progress').forEach(function(bar) {
          const rect = bar.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          if (inView && bar.style.width !== bar.getAttribute('data-width')) {
            bar.style.transition = 'width 1.5s cubic-bezier(.4,0,.2,1)';
            bar.style.background = 'linear-gradient(90deg, #2563eb 60%, #60a5fa 100%)';
            bar.style.width = bar.getAttribute('data-width');
          }
        });
      }
      window.addEventListener('scroll', animateSkillBars);
      document.addEventListener('DOMContentLoaded', animateSkillBars);

      // Timeline animation
      function animateTimeline() {
        document.querySelectorAll('.timeline-item').forEach(function(item, idx) {
          const rect = item.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          if (inView && item.style.opacity !== "1") {
            item.style.animation = 'cardSlideIn 0.8s cubic-bezier(.4,0,.2,1) forwards';
            item.style.animationDelay = (idx * 0.2) + 's';
          }
        });
        document.querySelectorAll('.timeline-marker').forEach(function(dot, idx) {
          const rect = dot.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          if (inView && dot.style.opacity !== "1") {
            dot.style.animation = 'dotPop 0.6s cubic-bezier(.4,0,.2,1) forwards';
            dot.style.animationDelay = (idx * 0.2) + 's';
          }
        });
      }
      window.addEventListener('scroll', animateTimeline);
      document.addEventListener('DOMContentLoaded', animateTimeline);
    });
  `,
        }}
      />
    </>
  );
}
