import { useEffect, useState } from "react";

const Loader = ({ onLoaded }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(onLoaded, 400); // remove after fade out
    }, 1000); // show for 1s
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#0f0f0f", // match your theme
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        transition: "opacity 0.4s ease",
        opacity: fade ? 0 : 1,
        zIndex: 9999,
      }}
    >
      Loading...
    </div>
  );
};

export default Loader;
