import React, { useState } from "react";
import "../styles/Courses.css"

function CoursesPage() {
  const [courses] = useState([
    {
      title: "25 Modules",
      description: "Change the world one code at a time.",
      image:
        "/courses/webdev.jpg",
      modules: 25,
      hours: 100,
    },
    {
      title: "30 Modules",
      description: "If it is not broken, take it apart and fix it.",
      image:
        "/courses/engineering.jpeg",
      modules: 30,
      hours: 150,
    },
    {
      title: "22 Modules",
      description: "Everything around you is mathematics.",
      image:
        "/courses/mathematics.jpg",
      modules: 22,
      hours: 88,
    },
    {
      title: "35 Modules",
      description: "Study to save lives.",
      image:
        "/courses/med.jpg",
      modules: 35,
      hours: 175,
    },
    {
      title: "20 Modules",
      description: "Let's have a moment of science..",
      image:
        "/courses/chem.jpg",
      modules: 20,
      hours: 80,
    },
    {
      title: "17 Modules",
      description: "Business is a lifestyle, not just a degree.",
      image:
        "/courses/business.jpg",
      modules: 17,
      hours: 68,
    },
    {
      title: "30 Modules",
      description: "Teachers are the second parents we have",
      image:
        "/courses/teacher.jpg",
      modules: 30,
      hours: 8,
    },
    {
      title: "14 Modules",
      description: "Creativity is Our identity",
      image:
        "/courses/Art-and-design.jpg",
      modules: 14,
      hours: 75,
    },
    {
      title: "15 Modules",
      description: "Crafting our passion through dancing.",
      image:
        "/courses/dancing.jpg",
      modules: 15,
      hours: 85,
    },
  ]);

  const getCourseName = (index) => {
    const courseNames = [
      "Web Development",
      "Engineering",
      "Mathematics",
      "Medicine",
      "Sciences",
      "Business",
      "Teaching",
      "Art & Design",
      "Dancing",
    ];
    return courseNames[index]; // Get the corresponding course name based on index
  };


  const [showCourses, setShowCourses] = useState(4);

  const handleLoadMore = () => {
    setShowCourses(showCourses + 4);
  };

  return (
    <div className="courses-page">
      <section className="course">
        <h1>Courses</h1>
        <div className="courses-grid">
          {courses.slice(0, showCourses).map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-label">{getCourseName(index)}</div>
              <img src={course.image} alt={course.title} />
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <button className="read-more-btn">Read More</button>
              <div className="separator"></div>
              <p>
                {course.modules} Modules | {course.hours} Hours
              </p>
            </div>
          ))}
        </div>
        {showCourses < courses.length && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </section>
    </div>
  );
}

export default CoursesPage;
