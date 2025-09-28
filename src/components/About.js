import React, { useState, useRef } from "react";
import "../styles/About.css";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function About() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const teachersRef = useRef(null);
  const reviewsRef = useRef(null);

  const handleMouseDown = (e, ref) => {
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e, ref) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="about-page">
      {/* About Us Section */}
      <section className="about-us">
        <h1>About Us</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Creating A Community Of Learners.</h2>
            <p>
              Moonlight is a community of learners including students, parents,
              and staff who are dedicated to creating an academically rigorous,
              culturally caring, and inclusive learning environment. We are
              reaching excellence in academics and changing history!
            </p>
            <div className="about-stats">
              <div className="stat-card">
                <img
                  src="/about/about-icon-1.png"
                  alt="Courses Icon"
                />
                <p>540+</p>
                <span>Courses</span>
              </div>
              <div className="stat-card">
                <img
                  src="/about/about-icon-2.png"
                  alt="Awards Icon"
                />
                <p>11+</p>
                <span>Awards</span>
              </div>
              <div className="stat-card">
                <img
                  src="/about/about-icon-3.png"
                  alt="Students Icon"
                />
                <p>1200+</p>
                <span>Students</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img
              src="/about/abroad.gif"
              alt="Community of Learners"
            />
          </div>
        </div>
      </section>

      {/* Our Teachers Section */}
      <section className="our-teachers">
        <h2>Our Teachers</h2>
        <div
          className="teachers-slider"
          ref={teachersRef}
          onMouseDown={(e) => handleMouseDown(e, teachersRef)}
          onMouseUp={handleMouseUp}
          onMouseMove={(e) => handleMouseMove(e, teachersRef)}
          onMouseLeave={handleMouseUp}
        >
          <div className="teacher-card-wrapper">
            <div className="teacher-card">
              <img
                src="/about/hadijah.jpg"
                alt="Hadijah Ismael"
              />
              <div className="social-icons">
                <a href="#facebook">
                  <Facebook />
                </a>
                <a href="#twitter">
                  <Twitter />
                </a>
                <a href="#instagram">
                  <Instagram />
                </a>
                <a href="#linkedin">
                  <Linkedin />
                </a>
              </div>
            </div>
            <div className="teacher-info">
              <h3>Hadijah Ismael</h3>
              <p>Development Tutor</p>
            </div>
          </div>

          <div className="teacher-card-wrapper">
            <div className="teacher-card">
              <img
                src="/about/michael.jpg"
                alt="Micheal Steve"
              />
              <div className="social-icons">
                <a href="#facebook">
                  <Facebook />
                </a>
                <a href="#twitter">
                  <Twitter />
                </a>
                <a href="#instagram">
                  <Instagram />
                </a>
                <a href="#linkedin">
                  <Linkedin />
                </a>
              </div>
            </div>
            <div className="teacher-info">
              <h3>Micheal Steve</h3>
              <p>Engineering Tutor</p>
            </div>
          </div>

          <div className="teacher-card-wrapper">
            <div className="teacher-card">
              <img
                src="/about/mary.jpg"
                alt="Mary Jameson"
              />
              <div className="social-icons">
                <a href="#facebook">
                  <Facebook />
                </a>
                <a href="#twitter">
                  <Twitter />
                </a>
                <a href="#instagram">
                  <Instagram />
                </a>
                <a href="#linkedin">
                  <Linkedin />
                </a>
              </div>
            </div>
            <div className="teacher-info">
              <h3>Mary Jameson</h3>
              <p>Mathematics Tutor</p>
            </div>
          </div>
          <div className="teacher-card-wrapper">
            <div className="teacher-card">
              <img
                src="/about/david.jpg"
                alt="David Wilson"
              />
              <div className="social-icons">
                <a href="#facebook">
                  <Facebook />
                </a>
                <a href="#twitter">
                  <Twitter />
                </a>
                <a href="#instagram">
                  <Instagram />
                </a>
                <a href="#linkedin">
                  <Linkedin />
                </a>
              </div>
            </div>
            <div className="teacher-info">
              <h3>David Wilson</h3>
              <p>Science Tutor</p>
            </div>
          </div>

         
        </div>
      </section>

      {/* Student Reviews Section */}
      <section className="student-reviews">
        <h2>Students' Reviews</h2>
        <div
          className="reviews-slider"
          ref={reviewsRef}
          onMouseDown={(e) => handleMouseDown(e, reviewsRef)}
          onMouseUp={handleMouseUp}
          onMouseMove={(e) => handleMouseMove(e, reviewsRef)}
          onMouseLeave={handleMouseUp}
        >
          <div className="review-card">
            <div className="dialogue-box">
              <p>
                "Moonlight has the best mentors that hold your hand and guide
                you through the curriculum and advise you every step of the
                way."
              </p>
            </div>
            <img
              src="/about/brenda.jpg"
              alt="Brenda Jones"
            />
            <div className="student-info">
              <h4>Brenda Jones</h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          <div className="review-card">
            <div className="dialogue-box">
              <p>
                "Being a culinary arts student at Moonlight was a great
                opportunity, I was able to work with the best mentors."
              </p>
            </div>
            <img
              src="/about/linda.webp"
              alt="Linda Peterson"
            />
            <div className="student-info">
              <h4>Linda Peterson</h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          <div className="review-card">
            <div className="dialogue-box">
              <p>
                "I graduated from Moonlight as a business student and was able
                to land an internship after a few weeks."
              </p>
            </div>
            <img
              src="/about/john.jpg"
              alt="John Doe"
            />
            <div className="student-info">
              <h4>John Doe</h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          {/* Additional reviews for better sliding demonstration */}
          <div className="review-card">
            <div className="dialogue-box">
              <p>
                "The practical approach to learning at Moonlight helped me
                understand complex concepts easily. Highly recommended!"
              </p>
            </div>
            <img
              src="/about/brown.jpg"
              alt="Michael Brown"
            />
            <div className="student-info">
              <h4>Michael Brown</h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          <div className="review-card">
            <div className="dialogue-box">
              <p>
                "Amazing learning environment with supportive teachers. I've
                grown both academically and personally at Moonlight."
              </p>
            </div>
            <img
              src="/about/emma.jpg"
              alt="Emma Davis"
            />
            <div className="student-info">
              <h4>Emma Davis</h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;