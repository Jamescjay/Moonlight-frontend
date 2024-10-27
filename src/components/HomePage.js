import React from "react";
import "../styles/HomePage.css";
import { Carousel } from "react-bootstrap"; // Import Carousel from React Bootstrap

function HomePage() {
  return (
    <div className="container">
      <main className="main">
        <Carousel className="carousel-container" interval={3000} fade>
          <Carousel.Item className="carousel-item">
            <img
              className="hero-image"
              src="https://res.cloudinary.com/dzkwltgyd/image/upload/v1729717070/glif-run-outputs/xanrlroxsmoikxzrrbnr.jpg"
              alt="Slide 1"
            />
            <div className="hero-overlay">
              <div className="hero-text">
                <h1>
                  A Revolutionary Way <br /> To Educate.
                </h1>
                <p>
                  Here at Moonlight, we focus on creating a new way for our
                  students to learn. We support a community schools approach
                  that organizes and maximizes resources to ensure every student
                  thrives, aligning with school priorities for success.
                </p>
                <button className="button">Get Started</button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="hero-image"
              src="https://img.freepik.com/premium-photo/smiling-student-with-headphones-studying-online-laptop-home-setting-concept-home-office-setup-online-learning-studying-students-technology-education-remote-work_864588-123280.jpg"
              alt="Slide 2"
            />
            <div className="hero-overlay">
              <div className="hero-text">
                <h1>A New Era of Learning</h1>
                <p>
                  We empower students to learn at their own pace and explore
                  their passions.
                </p>
                <button className="button">Learn More</button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="hero-image"
              src="https://img.freepik.com/free-photo/strict-young-male-teacher-wearing-glasses-holding-looking-paper-sitting-desk-with-school-tools-classroom_141793-136773.jpg"
              alt="Slide 3"
            />
            <div className="hero-overlay">
              <div className="hero-text">
                <h1>Transforming Education</h1>
                <p>
                  Join us in making learning accessible and engaging for every
                  student.
                </p>
                <button className="button">Discover More</button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Our Popular Subjects Section */}
        <section className="popular-subjects">
          <h2>Our Popular Subjects</h2>
          <div className="subjects-container">
            {[
              {
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVqnFB6DaFbV-EWB0yzwUBWtttS7nWe5RBQ&s",
                title: "Maths",
                modules: 12,
              },
              {
                image:
                  "https://img.freepik.com/premium-photo/this-beautiful-design-is-created-occasion-world-art-day_790062-118763.jpg?semt=ais_hybrid",
                title: "Art & Design",
                modules: 10,
              },
              {
                image:
                  "https://img.freepik.com/premium-vector/hand-drawn-engineer-architect-with-house-construction-flat-style-isolated-background_1375-19090.jpg?semt=ais_hybrid",
                title: "Enginnering",
                modules: 8,
              },
              {
                image:
                  "https://thumbs.dreamstime.com/b/icons-science-chemistry-physics-biology-natural-sciences-everything-experimentation-learning-vector-illustration-322351549.jpg",
                title: "sciences",
                modules: 15,
              },
              {
                image:
                  "https://www.beechwood.org.uk/wp-content/uploads/2016/11/Computer-Science-Programming-Code.jpg",
                title: "Computer Science",
                modules: 14,
              },
              {
                image:
                  "https://i.pinimg.com/originals/b0/52/6d/b0526d8ca7d5b6202bc0b22481258421.jpg",
                title: "English Literature",
                modules: 11,
              },
            ].map((subject, index) => (
              <div key={index} className="subject-card">
                <img
                  src={subject.image}
                  alt={subject.title}
                  className="subject-image"
                />
                <h3>{subject.title}</h3>
                <p>{subject.modules} Modules</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Courses Section */}
        <section className="popular-courses">
          <h2>Popular Courses</h2>
          <div className="courses-container">
            {[
              {
                image:
                  "https://previews.123rf.com/images/vitusik/vitusik1905/vitusik190500002/126648648-medicine-and-health-tools-medical-hospital-human-service-operation-healthy-care-first-aid-kit-vector.jpg", // Replace with actual image URLs
                title: "Medicine",
                description:
                  "Learn the fundamentals of medicine and patient care.",
              },
              {
                image:
                  "https://www.beechwood.org.uk/wp-content/uploads/2016/11/Computer-Science-Programming-Code.jpg",
                title: "Computer Science",
                description:
                  "Dive into programming, algorithms, and software development.",
              },
              {
                image:
                  "https://ministryofinjustice.co.uk/wp-content/uploads/2023/04/what-is-law.jpg",
                title: "Law",
                description:
                  "Understand legal principles and their applications.",
              },
            ].map((course, index) => (
              <div key={index} className="course-card">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
                <h3>{course.title}</h3>
                <div className="course-description">
                  <p>{course.description}</p>
                  <span className="read-more">Read More</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
