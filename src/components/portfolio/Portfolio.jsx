import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "💻 Software Development Services",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Web Development (Full-stack, Frontend, Backend) Mobile App Development (Android, iOS, Cross-platform with React Native) Desktop Application Development (Windows, Linux, macOS)   API Development & Integration (REST, GraphQL, third-party APIs)   Custom Software Solutions (tailored apps for businesses, e.g., inventory, POS, CRM)"
  },
    {
    id: 2,
    title: "🌐 Cloud & Systems",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: " Cloud Deployment & Management (AWS, Azure, GCP, DigitalOcean) DevOps & CI/CD (automation, Docker, Kubernetes, GitHub Actions, GitLab CI) Database Design & Optimization (SQL, NoSQL, Firebase, MongoDB, PostgreSQL) System Architecture Design (scalable, secure, and modular systems)",
  },
  {
    id: 3,
    title: "🎨 UI/UX & Frontend",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Responsive Website Design (HTML, CSS, JavaScript, Tailwind, Bootstrap)              UI/UX Prototyping (Figma, Adobe XD, wireframes & mockups)              Interactive Dashboards (data visualization with charts, graphs, maps)              Performance Optimization (fast-loading, SEO-friendly apps)" },
  {
    id: 4,
    title: "📊 Data & AI",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Data Analysis & Visualization (Python, Pandas, Power BI, Tableau)              Machine Learning & AI Solutions (recommendation systems, predictive models)              Automation Tools & Scripts (task automation with Python, bots, scrapers)",
  },

  {
    id: 4,
    title: "🛠️ Consulting & Support",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: " IT Support & Troubleshooting (remote and onsite)              Software Project Consulting (requirements gathering, system planning)              Code Review & Optimization              Technical Documentation & Training",
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
