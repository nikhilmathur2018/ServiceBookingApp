import React, { useEffect } from 'react';
import WOW from 'wow.js'; // Import WOW.js
import { Carousel } from 'react-responsive-carousel'; // Import Carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel CSS
import './HomePage.css'; // Import Custom Styles

const HomePage = () => {
  useEffect(() => {
    // Initialize WOW.js
    const wow = new WOW({
      boxClass: 'wow', // Default class for WOW.js
      animateClass: 'animated', // CSS class for animation
      offset: 0, // Distance to start animation
      mobile: true, // Enable animations on mobile
      live: true, // Keep WOW.js updating elements dynamically
    });

    wow.init(); // Initialize WOW.js

    // Cleanup function to destroy WOW.js on unmount
    return () => {
      wow.sync(); // Ensures WOW.js cleans up after itself when component unmounts
    };
  }, []); // Empty dependency array ensures this runs once after the component mounts

  const imageFiles = [
    "/Images/about-1.png",
    "/Images/about-2.jpg"

    
  ];

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My Website</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Testimonial Carousel */}
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false} 
        interval={3000}
      >
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Testimonial 1" />
          <p className="legend">Testimonial 1</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Testimonial 2" />
          <p className="legend">Testimonial 2</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Testimonial 3" />
          <p className="legend">Testimonial 3</p>
        </div>
      </Carousel>

      {/* WOW.js Animation */}
      <h1 className="wow animate__fadeIn">Welcome to the Home Page!</h1>

      {/* Image Gallery */}
      <div className="image-gallery">
        {imageFiles.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Gallery Image ${index + 1}`} 
            className="gallery-image" 
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
