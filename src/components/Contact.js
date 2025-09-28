import React, { useState } from "react";
import "../styles/Contact.css";
import { Clock, Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";

function Contact() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackMessage("Thank you! Your message has been sent successfully.");

    // Clear the message after 4 seconds
    setTimeout(() => {
      setFeedbackMessage("");
    }, 4000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info-section">
        <h2>Get In Touch</h2>
        <div className="info-boxes">
          <div className="info-box">
            <div className="icon-wrapper">
              <Clock size={32} />
            </div>
            <h4>Opening Hours</h4>
            <p>Monday - Friday<br />8:00 AM - 6:00 PM</p>
          </div>
          <div className="info-box">
            <div className="icon-wrapper">
              <Phone size={32} />
            </div>
            <h4>Phone Numbers</h4>
            <p>+254 793 362 479<br />+254 793 098 674</p>
          </div>
          <div className="info-box">
            <div className="icon-wrapper">
              <Mail size={32} />
            </div>
            <h4>Email Address</h4>
            <p>Moonlight@education.com</p>
          </div>
          <div className="info-box">
            <div className="icon-wrapper">
              <MapPin size={32} />
            </div>
            <h4>Our Location</h4>
            <p>Ngong Road<br />Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className="contact-content">
            <div className="contact-image-section">
          <img
            src="/assets/Contact.gif"
            alt="Contact Us Illustration"
            className="contact-image"
          />
        </div>
        <div className="contact-form-section">
          <h3>Send Us A Message</h3>
          <form onSubmit={handleSubmit} className="modern-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          {feedbackMessage && (
            <div className="success-message">{feedbackMessage}</div>
          )}
        </div>
        
    
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${faqOpen === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span className="question-text">{item.question}</span>
                <div className="arrow-icon">
                  {faqOpen === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>
              <div
                className="faq-answer-container"
                style={{
                  maxHeight: faqOpen === index ? "300px" : "0",
                  opacity: faqOpen === index ? "1" : "0",
                }}
              >
                <div className="faq-answer">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "How to contact for help?",
    answer:
      "We have several numbers displayed on our website, and you can contact any for an immediate response from our staff. You can also find us through our email at Moonlight@education.com.",
  },
  {
    question: "What is the best career in 2024?",
    answer:
      "We cannot mention a particular career as the best. We encourage all our students to take a course that they love and enjoy doing. You can never go wrong with your instincts.",
  },
  {
    question: "How much are the fees for web development?",
    answer:
      "We have both online and in-person classes for all our courses. For web development, the fees for online classes is $275 per term and for in-person classes is $425 per term.",
  },
  {
    question: "Do you offer financial aid?",
    answer:
      "We offer financial aid to our students on a need and merit basis. The options that are currently available include partial scholarships. For more information on financial aid please visit our financial aid page.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "For our modules, you can pay in 3 monthly installments, this means monthly payment every term. Full payment of the term's fee is required to be complete by the last week of the term.",
  },
  {
    question: "Do you guarantee employment upon completion of course?",
    answer:
      "No. What we guarantee is career-ready skills. Our courses are practical and relevant to the market. That is why many of our graduates find jobs. Moonlight offers support through training and informing graduates of job opportunities.",
  },
];

export default Contact;