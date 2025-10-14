// Services.jsx
import React, { useRef } from "react";
import "./services.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "💻 Software Development Services",
    img: "/1714365712627.jpeg",
    desc:
      "Web Development (Full-stack, Frontend, Backend) Mobile App Development (Android, iOS, Cross-platform with React Native) Desktop Application Development (Windows, Linux, macOS) API Development & Integration (REST, GraphQL, third-party APIs) Custom Software Solutions (tailored apps for businesses, e.g., inventory, POS, CRM)",
  },
  {
    id: 2,
    title: "🎨 UI/UX & Frontend",
    img: "public/images (1).jpeg",
    desc:
      "Responsive Website Design (HTML, CSS, JavaScript, Tailwind, Bootstrap) UI/UX Prototyping (Figma, Adobe XD, wireframes & mockups) Interactive Dashboards (data visualization with charts, graphs, maps) Performance Optimization (fast-loading, SEO-friendly apps)",
  },
  {
    id: 3,
    title: "🌐 Cloud & Systems",
    img: "public/download.jpeg",
    desc:
      "Cloud Deployment & Management (AWS, Azure, GCP, DigitalOcean) DevOps & CI/CD (automation, Docker, Kubernetes, GitHub Actions, GitLab CI) Database Design & Optimization (SQL, NoSQL, Firebase, MongoDB, PostgreSQL) System Architecture Design (scalable, secure, and modular systems)",
  },
  {
    id: 4,
    title: "📊 Data & AI",
    img: "public/images (2).jpeg",
    desc:
      "Data Analysis & Visualization (Python, Pandas, Power BI, Tableau) Machine Learning & AI Solutions (recommendation systems, predictive models) Automation Tools & Scripts (task automation with Python, bots, scrapers)",
  },
  {
    id: 5,
    title: "🛠️ Consulting & Support",
    img: "public/download (1).jpeg",
    desc:
      "IT Support & Troubleshooting (remote and onsite) Software Project Consulting (requirements gathering, system planning) Code Review & Optimization Technical Documentation & Training",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    // each item is a real <section> (scroll targets)
    <section className="services-section" data-scroll-section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    // top-level Services container has id "Services" so Hero.handleClick("Services") works
    <div className="services" id="services" ref={ref} data-scroll-section>
    
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}

      {/* Optional: progress bar (uses scaleX) */}
      <motion.div className="scroll-progress" style={{ scaleX }} />
    </div>
  );
};

export default Services;
