import { useRef } from "react";
import "./Projects.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="Projects"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          {/* <button>WHAT WE DID?</button> */}

        
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>💧 Smart Water Management Dashboard</h2>
          <p> A modular web-based system designed to monitor and control three interconnected water tanks and four solenoid valves. Features include valve controls, live tank level displays, water usage analytics, and activity trends. The system improves resource efficiency and decision-making through intuitive dashboards and data visualization.</p>
          {/* <button>Go</button> */}
        </motion.div>



      </motion.div>
    </motion.div>
  );
};

export default Projects;
