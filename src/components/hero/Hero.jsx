import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: [1, 0.5, 1],
    y: [0, 10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};

const Hero = () => {
  const pages = [
    { id: "Services", label: "Our Services" },
    { id: "Contact", label: "Contact Us" },
  ];

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero" id="Hero" data-scroll-section>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>DANIELIAS D BHIDHI</motion.h1>
          <motion.h2 variants={textVariants}>Software Engineer</motion.h2>

          {/* Navigation Buttons */}
          <motion.div variants={textVariants} className="buttons">
            {pages.map((page) => (
              <motion.button
                key={page.id}
                onClick={() => scrollToSection(page.id)}
                variants={textVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {page.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Scroll-down image button */}
          <button 
          onClick={() => scrollToSection("Services")}
            className="transparent-bg"
          >
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll down"
            className="scroll-icon"
            style={{ cursor: "pointer", marginTop: "2rem" }}
            
          /></button>
        </motion.div>
      </div>
<div >
      {/* Sliding background text */}
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        style={{
    cursor: "default",
    pointerEvents: "none", // 👈 This makes it ignore mouse clicks
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }}
        
      >
        SOCIOTECH
      </motion.div>
</div>
      {/* Hero Image */}
      <div className="imageContainer">
        <img src="/logo-no-background.png" alt="logo" />
      </div>
    </div>
  );
};

export default Hero;
