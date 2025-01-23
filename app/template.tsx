"use client";
import { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  // Function to resize fonts based on window width
  const resizeWindow = () => {
    if (window) {
      const perc = window.innerWidth / 120;
      if (window.innerWidth > 1200) {
        document.body.style.fontSize = `${perc}px`;
      }
    }
  };

  useEffect(() => {
    // Add resize event listener for font resizing
    resizeWindow();
    window.addEventListener("resize", resizeWindow);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return <>{children}</>;
};

export default Template;
