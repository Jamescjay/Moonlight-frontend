import React from "react";
import "../styles/About.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "./Icons";

function About() {
  return (
    <div className="about-page">
      {/* About Us Section */}
      <section className="about-us">
        <h1>About Us</h1>
        <p>Home / About</p>
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
                  src="https://thuotracy.github.io/school-website/images/about-icon-1.png"
                  alt="Courses Icon"
                />
                <p>540+</p>
                <span>Courses</span>
              </div>
              <div className="stat-card">
                <img
                  src="https://thuotracy.github.io/school-website/images/about-icon-2.png"
                  alt="Awards Icon"
                />
                <p>11+</p>
                <span>Awards</span>
              </div>
              <div className="stat-card">
                <img
                  src="https://thuotracy.github.io/school-website/images/about-icon-3.png"
                  alt="Students Icon"
                />
                <p>1200+</p>
                <span>Students</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img
              src="https://visapointint.com/wp-content/uploads/2024/05/abroad.gif"
              alt="Community of Learners"
            />
          </div>
        </div>
      </section>

      {/* Our Teachers Section */}
      <section class="our-teachers">
        <h2>Our Teachers</h2>
        <div class="teachers-container">
          <div class="teacher-card-wrapper">
            <div class="teacher-card">
              <img
                src="https://st3.depositphotos.com/1177973/16888/i/450/depositphotos_168883160-stock-photo-young-female-receptionist.jpg"
                alt="Hadijah Ismael"
              />
              <div class="social-icons">
                <a href="#facebook">
                  <Facebook />
                </a>
                <a href="#twitter"><Twitter/></a>
                <a href="#instagram"><Instagram/></a>
                <a href="#linkedin"><LinkedIn/></a>
              </div>
            </div>
            <div class="teacher-info">
              <h3>Hadijah Ismael</h3>
              <p>Development Tutor</p>
            </div>
          </div>

          <div class="teacher-card-wrapper">
            <div class="teacher-card">
              <img
                src="https://www.shutterstock.com/image-photo/confident-indian-teacher-on-white-600nw-566508529.jpg"
                alt="Micheal Steve"
              />
              <div class="social-icons">
                <a href="#facebook">
                  <Facebook />
                </a>
                <a href="#twitter"><Twitter/></a>
                <a href="#instagram"><Instagram/></a>
                <a href="#linkedin"><LinkedIn/></a>
              </div>
            </div>
            <div class="teacher-info">
              <h3>Micheal Steve</h3>
              <p>Engineering Tutor</p>
            </div>
          </div>

          <div class="teacher-card-wrapper">
            <div class="teacher-card">
              <img
                src="https://img.freepik.com/premium-photo/woman-with-books-portrait-teacher-education-with-teaching-learning-against-studio-background-academy-school-learn-with-reading-knowledge-study-with-glasses-vision-academic_590464-126729.jpg"
                alt="Mary Jameson"
              />
              <div class="social-icons">
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
                  <LinkedIn />
                </a>
              </div>
            </div>
            <div class="teacher-info">
              <h3>Mary Jameson</h3>
              <p>Mathematics Tutor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section className="student-reviews">
        <h2>Students' Reviews</h2>
        <div className="reviews-container">
          <div className="review-card">
            <div className="dialogue-box">
              <p>
                "Moonlight has the best mentors that hold your hand and guide
                you through the curriculum and advise you every step of the
                way."
              </p>
            </div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/515eba28e4b0ecbdd5ac1a2a/3086056c-90c7-46af-84c3-391de89ab9f7/tips_for_female_college_students_with_adhd.jpg"
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
              src="https://rosemont.edu/wp-content/uploads/2024/09/Rosemont-College-Student-Square-jpg.webp"
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
              src="https://media.istockphoto.com/id/1336063208/photo/single-portrait-of-smiling-confident-male-student-teenager-looking-at-camera-in-library.jpg?s=612x612&w=0&k=20&c=w9SCRRCFa-Li82fmZotJzHdGGWXBVN7FgfBCD5NK7ic="
              alt="John Doe"
            />
            <div className="student-info">
              <h4>John Doe</h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
