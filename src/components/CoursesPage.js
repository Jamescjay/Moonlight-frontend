import React, { useState } from "react";
import "../styles/Courses.css"

function CoursesPage() {
  const [courses, setCourses] = useState([
    {
      title: "25 Modules",
      description: "Change the world one code at a time.",
      image:
        "https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/4XolI59CsK1wMCiAfwathv/2130a24167699d727f450eafa2941388/OnlineLearning_SouthAsia_Learning_Indoor_GettyImages-1071652068.jpg?fit=thumb",
      modules: 25,
      hours: 100,
    },
    {
      title: "30 Modules",
      description: "If it is not broken, take it apart and fix it.",
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5VQnRNELq1177o5tuvcoBM/e032e3e6169232f30af2a63741c9fc20/Teamwork-in-construction-industry---two-engineers-working-together-on-construction-site-with-blueprints-and-plans-645373486.jpeg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
      modules: 30,
      hours: 150,
    },
    {
      title: "22 Modules",
      description: "Everything around you is mathematics.",
      image:
        "https://www.tccd.edu/images/academics/courses-and-programs/programs-a-z/mathematics-480x320.jpg",
      modules: 22,
      hours: 88,
    },
    {
      title: "35 Modules",
      description: "Study to save lives.",
      image:
        "https://www.facs.org/media/fh5lrpb0/487506418.jpg?rnd=132960668908970000",
      modules: 35,
      hours: 175,
    },
    {
      title: "20 Modules",
      description: "Let's have a moment of science..",
      image:
        "https://www.shutterstock.com/image-photo/cheerful-african-american-teacher-group-600nw-2468028435.jpg",
      modules: 20,
      hours: 80,
    },
    {
      title: "17 Modules",
      description: "Business is a lifestyle, not just a degree.",
      image:
        "https://images.ctfassets.net/2htm8llflwdx/40dIeMelHT5fQDfll1OGNS/ce3dda7371d9841e3939cd0ee11795c1/Classroom_StudentGroup_Studying_Indoor_GettyImages-1044232206.jpg",
      modules: 17,
      hours: 68,
    },
    {
      title: "30 Modules",
      description: "Teachers are the second parents we have",
      image:
        "https://www.teacheracademy.eu/wp-content/uploads/2021/10/successful-teacher-1-608x405.jpg",
      modules: 30,
      hours: 8,
    },
    {
      title: "14 Modules",
      description: "Creativity is Our identity",
      image:
        "https://www.bishopburton.ac.uk/uploads/images/Art-and-design-student-learning-to-lino-print-with-tutor.jpg",
      modules: 14,
      hours: 75,
    },
    {
      title: "15 Modules",
      description: "Crafting our passion through dancing.",
      image:
        "https://www.top10onlinecolleges.org/wp-content/uploads/2020/06/Scholarships-for-Dance-Students-678x381.jpg",
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
        <p>Home / Courses</p>
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
