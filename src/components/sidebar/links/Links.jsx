import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 },
};

const Links = ({ setOpen }) => {
  const pages = ["Homepage", "Services", "Projects", "Contact"];

  const handleClick = (id) => {
    // Smooth scroll to section
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Close sidebar after clicking
  };

  return (
    <motion.div className="links" variants={variants}>
      {pages.map((page) => (
        <motion.a
          key={page}
          onClick={() => handleClick(page)}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "block",
            textDecoration: "none",
            color: "black",
            padding: "0.75rem 1rem",
            fontSize: "1.1rem",
            cursor: "pointer",
          }}
        >
          {page}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
