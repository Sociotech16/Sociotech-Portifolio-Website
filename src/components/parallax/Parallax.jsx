import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: [0, 10, 0],
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleScrollNext = () => {
    const sections = Array.from(document.querySelectorAll("section, div[id]"));
    const currentScroll = window.scrollY;
    const nextSection = sections.find(
      (section) => section.offsetTop > currentScroll + 50
    );

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "Projects"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "projects" ? "What We Did?" : "What We Do?"}
      </motion.h1>

      <motion.div className="mountains"></motion.div>

      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "projects" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>

      <motion.div style={{ x: yBg }} className="stars"></motion.div>

      {/* Scroll Down Button */}
      <motion.img
        variants={textVariants}
        animate="scrollButton"
        src="/scroll.png"
        alt="scroll indicator"
        onClick={handleScrollNext}
        className="scrollButton"
      />
    </div>
  );
};

export default Parallax;
