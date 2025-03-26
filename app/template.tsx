"use client";
import { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {

  // Resize fonts on window resize
  useEffect(() => {
    // Function to resize fonts based on window width
    const resizeWindow = () => {
      const perc = window.innerWidth / 120;
      if (window.innerWidth > 1200) {
        document.body.style.fontSize = `${perc}px`;
      }
    };

    // Add resize event listener for font resizing
    resizeWindow();
    window.addEventListener("resize", resizeWindow);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return <>{children}</>;
};

export default Template;
