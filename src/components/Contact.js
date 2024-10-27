import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Home / Contact</p>
      </div>

      <div className="contact-info">
        <h3>Get In Touch</h3>
        <div className="info-boxes">
          <div className="info-box">
            <i className="icon">🕒</i>
            <h4>Opening Hours:</h4>
            <p>8:00AM to 6:00PM</p>
          </div>
          <div className="info-box">
            <i className="icon">📞</i>
            <h4>Phone:</h4>
            <p>
              +254 793 362 479
              <br />
              +254 793 098 674
            </p>
          </div>
          <div className="info-box">
            <i className="icon">📧</i>
            <h4>Email:</h4>
            <p>Moonlight@daskcation.com</p>
          </div>
          <div className="info-box">
            <i className="icon">📍</i>
            <h4>Location:</h4>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h3>Send Us A Message</h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <img
          src="https://thuotracy.github.io/school-website/images/Contact%20us.gif"
          alt="Contact"
          className="contact-image"
        />
      </div>

      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-boxes">
          {faqData.map((item, index) => (
            <div
              className={`faq-box ${faqOpen === index ? "active" : ""}`}
              key={index}
            >
              <div
                className={`faq-question ${
                  faqOpen === index ? "active-question" : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                {item.question}
                <span className="arrow-icon">
                  {faqOpen === index ? "▲" : "▼"}
                </span>
              </div>
              <div
                className="faq-answer-container"
                style={{
                  maxHeight: faqOpen === index ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
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
    question: "What is the best career in 2022?",
    answer:
      "We can not mention a particular career as the best. We encourage all our students to take a course that they love and enjoy doing. You can never go wrong with your instincts.",
  },
  {
    question: "How much fees for web development?",
    answer:
      "We have both online and in-person classes for all our courses. For web development, the fees for online classes is $ 275 per term and for in-person classes is $ 425 per term.",
  },
  {
    question: "Do you offer financial aid?",
    answer:
      "We offer financial aid to our students on a need and merit basis. The options that are currently available include partial scholarships for For more information on financial aid please visit our financial aid page.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "For our modules, you can pay in 3 monthly installments, this means monthly payment every term. Full payment of the term's fee is required to be complete by the last week of the term.",
  },
  {
    question: "Do you guarantee employment upon completion of course?",
    answer:
      "NO. What we guarantee is career-ready skills. Our courses are practical and relevant to the market. That is why many of our graduates find jobs. Moringa School offers support through training and informing graduates of job opportunities.",
  },
];

export default Contact;
