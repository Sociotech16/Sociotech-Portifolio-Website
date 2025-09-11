import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SOCIOTECH
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/share/15YPxCcE88/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/sociotech.co?igsh=MWF3ZWZ0eXFwbWhhbw==">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/danielias-danaishe-bhidhi-2a4621237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Sociotech16">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
