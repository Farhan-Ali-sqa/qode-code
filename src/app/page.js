import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

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
        </div>
      </section>
      {/* CEO About Me Section */}
      <section className="ceo-about" id="ceo-about">
        <div
          className="about-container"
          style={{
            maxWidth: "1920px",
            margin: "0 auto",
            padding: "3rem 1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="ceo-grid"
            style={{
              width: "1480px",
              background: "#fff",
              borderRadius: "1.5rem",
              boxShadow: "0 4px 24px rgba(30,41,59,0.08)",
              padding: "2.5rem 2rem",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/Syed-Farhan-Ali.jpg"
                alt="CEO"
                className="ceo-image"
                width={500}
                height={500}
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0 4px 24px rgba(30,41,59,0.12)",
                  objectFit: "cover",
                  marginBottom: "0",
                  width: "220px",
                  height: "220px",
                }}
                priority
              />
            </div>
            <div className="ceo-content" style={{ minWidth: "260px" }}>
              <h2
                style={{
                  marginBottom: "0.5rem",
                  color: "#1e293b",
                  fontWeight: 700,
                }}
              >
                Syed Farhan Ali
              </h2>
              <h4
                style={{
                  color: "#2563eb",
                  marginBottom: "1rem",
                  fontWeight: 600,
                }}
              >
                CEO @ QodeCore Solutions
              </h4>
              <p style={{ marginBottom: "1rem", color: "#334155" }}>
                As the CEO of <strong>QodeCore Solutions</strong>, I am
                committed to delivering high-quality software and digital
                solutions that empower businesses to grow and succeed. My
                leadership is focused on innovation, technical excellence, and
                building a culture of continuous improvement.
              </p>
              <ul
                style={{
                  marginBottom: "1.5rem",
                  color: "#475569",
                  paddingLeft: "1.2rem",
                }}
              >
                <li>
                  Guiding the strategic vision and direction of QodeCore
                  Solutions to deliver impactful software products and services.
                </li>
                <li>
                  Overseeing project delivery, ensuring robust quality
                  assurance, and maintaining high standards across all client
                  engagements.
                </li>
                <li>
                  Fostering a collaborative environment where teams can
                  innovate, solve complex challenges, and exceed client
                  expectations.
                </li>
                <li>
                  Building strong client relationships through transparency,
                  reliability, and a commitment to long-term success.
                </li>
              </ul>
              <p style={{ marginBottom: "1.5rem", color: "#334155" }}>
                My passion lies in driving digital transformation, nurturing
                talent, and ensuring every project reflects our core values of
                quality, trust, and excellence.
              </p>
              <div
                className="ceo-mission-vision"
                style={{ marginTop: "1.5rem" }}
              >
                <h3
                  style={{
                    color: "#2563eb",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  Mission
                </h3>
                <p style={{ color: "#475569", marginBottom: "1rem" }}>
                  To deliver innovative, reliable, and scalable software
                  solutions that help our clients achieve their business goals
                  and stay ahead in a rapidly evolving digital world.
                </p>
                <h3
                  style={{
                    color: "#2563eb",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  Vision
                </h3>
                <p style={{ color: "#475569" }}>
                  To be recognized as a trusted leader in software development
                  and quality assurance, known for our commitment to excellence,
                  client satisfaction, and positive impact on the tech industry.
                </p>
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
              Numbers that speak for our expertise and commitment to excellence
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <span className="stat-number" data-target="15">
                15
              </span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <span className="stat-number" data-target="98%">
                100%
              </span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <span className="stat-number" data-target="100%">
                100%
              </span>
              <span className="stat-label">On-Time Delivery</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔧</div>
              <span className="stat-number" data-target="24 hours">
                24/5
              </span>
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
              A systematic approach that ensures project success from conception
              to delivery
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
                  Comprehensive testing including unit tests, integration tests,
                  performance testing, security audits, and user acceptance
                  testing.
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
              QodeCore delivers robust web-based software solutions and
              end-to-end quality assurance services to help businesses scale
              with confidence. From development to deployment, we ensure clean
              code, tested features, and digital excellence.
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
                <span className="skill-name">Quality Assurance & Testing</span>
                <span className="skill-percentage">100%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="100%"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">React/Next.js Development</span>
                <span className="skill-percentage">99%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="99%"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Node.js & Backend APIs</span>
                <span className="skill-percentage">99%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="99%"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Database Management</span>
                <span className="skill-percentage">99%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="99%"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Cloud & DevOps</span>
                <span className="skill-percentage">99%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="99%"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">UI/UX Design</span>
                <span className="skill-percentage">99%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "0%" }}
                  data-width="99%"
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
              <p>Automated deployment and cloud infrastructure management.</p>
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
                  <p style={{ color: "#64748b" }}>info@qodecore.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4 style={{ color: "#1e293b", fontWeight: 600 }}>Call Us</h4>
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
    </>
  );
}
