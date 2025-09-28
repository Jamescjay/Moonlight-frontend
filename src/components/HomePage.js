import React, { useState, useRef, useEffect } from "react";
import "../styles/HomePage.css";

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [totalRotation, setTotalRotation] = useState(0);
  const bannerRef = useRef(null);
  const unitsRef = useRef(null);

  const slides = [
    {
      image: "/assets/lady.jpg",
      title: "A Revolutionary Way To Educate.",
      description: "Here at Moonlight, we focus on creating a new way for our students to learn. We support a community schools approach that organizes and maximizes resources to ensure every student thrives.",
      buttonText: "Get Started"
    },
    {
      image: "/assets/girl.jpg",
      title: "A New Era of Learning",
      description: "We empower students to learn at their own pace and explore their passions through innovative learning methods.",
      buttonText: "Learn More"
    },
    {
      image: "/assets/guy.jpg",
      title: "Transforming Education",
      description: "Join us in making learning accessible and engaging for every student worldwide.",
      buttonText: "Discover More"
    },
    // Duplicate slides for seamless loop
    {
      image: "/assets/lady.jpg",
      title: "A Revolutionary Way To Educate.",
      description: "Here at Moonlight, we focus on creating a new way for our students to learn. We support a community schools approach that organizes and maximizes resources to ensure every student thrives.",
      buttonText: "Get Started"
    },
    {
      image: "/assets/girl.jpg",
      title: "A New Era of Learning",
      description: "We empower students to learn at their own pace and explore their passions through innovative learning methods.",
      buttonText: "Learn More"
    },
    {
      image: "/assets/guy.jpg",
      title: "Transforming Education",
      description: "Join us in making learning accessible and engaging for every student worldwide.",
      buttonText: "Discover More"
    }
  ];

  const units = [
    {
      image: "/assets/medicine.jpg",
      title: "Medicine",
      description: "Learn the fundamentals of medicine and patient care.",
    },
    {
      image: "/assets/ComputerScience.jpg",
      title: "Computer Science",
      description: "Dive into programming, algorithms, and software development.",
    },
    {
      image: "/assets/law.jpg",
      title: "Law",
      description: "Understand legal principles and their applications.",
    },
    {
      image: "/assets/maths.jpg",
      title: "Mathematics",
      description: "Master mathematical concepts and problem-solving techniques.",
    },
    {
      image: "/assets/art.jpg",
      title: "Art & Design",
      description: "Explore creativity through various art forms and design principles.",
    },
    {
      image: "/assets/science.jpg",
      title: "Sciences",
      description: "Explore physics, chemistry, and biology fundamentals.",
    }
  ];

  useEffect(() => {
    setRotationY(totalRotation);
  }, [totalRotation]);

  const handleBannerStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleBannerEnd = (clientX) => {
    if (!isDragging) return;
    
    const diffX = startX - clientX;
    
    if (Math.abs(diffX) > 80) {
      if (diffX > 0) {
        // Swipe left - rotate forward
        setTotalRotation(prev => prev - 120);
        setCurrentSlide((prev) => (prev + 1) % 3);
      } else {
        // Swipe right - rotate backward
        setTotalRotation(prev => prev + 120);
        setCurrentSlide((prev) => (prev - 1 + 3) % 3);
      }
    }
    
    setIsDragging(false);
  };

  // Mouse drag handlers for units slider
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
    <div className="homepage-body">
      <div className="homepage-container">
        {/* 3D Banner Section */}
        <div 
          className="banner-container"
          ref={bannerRef}
          onMouseDown={(e) => handleBannerStart(e.clientX)}
          onMouseUp={(e) => handleBannerEnd(e.clientX)}
          onTouchStart={(e) => handleBannerStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleBannerEnd(e.changedTouches[0].clientX)}
        >
          <div 
            className="banner-cube" 
            style={{transform: `rotateY(${rotationY}deg)`}}
          >
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className={`banner-face banner-face-${index}`}
              >
                <div className="image-container">
                  <img
                    className="hero-image"
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    draggable={false}
                  />
                  <div className="hero-overlay">
                    <div className="hero-text">
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                      <button className="cta-button">{slide.buttonText}</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slide indicators */}
          <div className="slide-indicators">
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  const rotationDiff = index - currentSlide;
                  setTotalRotation(prev => prev - (rotationDiff * 120));
                  setCurrentSlide(index);
                }}
              />
            ))}
          </div>
        </div>

        {/* Our Popular Subjects Section */}
        <section className="popular-subjects-section">
          <h2>Our Popular Subjects</h2>
          <div className="subjects-grid">
            {[
              {
                image: "/assets/maths.jpg",
                title: "Maths",
                modules: 12,
              },
              {
                image: "/assets/art.jpg",
                title: "Art & Design",
                modules: 10,
              },
              {
                image: "/assets/engineer.jpg",
                title: "Engineering",
                modules: 8,
              },
              {
                image: "/assets/science.jpg",
                title: "Sciences",
                modules: 15,
              },
              {
                image: "/assets/ComputerScience.jpg",
                title: "Computer Science",
                modules: 14,
              },
              {
                image: "/assets/literature.jpg",
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

        {/* Popular Units Section */}
        <section className="units-section">
          <h2>Popular Units</h2>
          <div className="units-wrapper">
            <div 
              className="units-slider"
              ref={unitsRef}
              onMouseDown={(e) => handleMouseDown(e, unitsRef)}
              onMouseUp={handleMouseUp}
              onMouseMove={(e) => handleMouseMove(e, unitsRef)}
              onMouseLeave={handleMouseUp}
            >
              {units.map((unit, index) => (
                <div key={index} className="unit-card">
                  <img
                    src={unit.image}
                    alt={unit.title}
                    className="unit-image"
                    draggable={false}
                  />
                  <div className="unit-content">
                    <h3>{unit.title}</h3>
                    <div className="unit-description">
                      <p>{unit.description}</p>
                      <span className="read-more">Read More</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;