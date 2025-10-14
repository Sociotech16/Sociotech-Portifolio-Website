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
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
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
  // Section buttons at the top
  const pages = [
    { id: "Portfolio", label: "Our Services" },
    { id: "Contact", label: "Contact Us" },
  ];

  // Handle button click (scrolls smoothly to the section)
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Scroll button goes directly to Portfolio
  const handleScrollButtonClick = () => {
    const portfolioSection = document.getElementById("Portfolio");
    if (portfolioSection) {
      const top = portfolioSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
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

          {/* Navigation buttons */}
          <motion.div variants={textVariants} className="buttons">
            {pages.map((page) => (
              <motion.button
                key={page.id}
                onClick={() => handleClick(page.id)}
                variants={textVariants}
              >
                {page.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Scroll button */}
          <div>
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt="scroll indicator"
              style={{ cursor: "pointer" }}
              onClick={handleScrollButtonClick}
            />
          </div>
        </motion.div>
      </div>

      {/* Sliding text animation */}
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        SOCIOTECH
      </motion.div>

      {/* Hero image */}
      <div className="imageContainer">
        <img src="/logo-no-background.png" alt="logo" />
      </div>
    </div>
  );
};

export default Hero;
