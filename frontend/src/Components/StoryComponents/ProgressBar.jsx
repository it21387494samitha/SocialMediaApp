import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ index, activeIndex, duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress < 100) {
          return oldProgress + 1;
        }
        clearInterval(interval);
        return oldProgress;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration, activeIndex]);

  useEffect(() => {
    setProgress(0);
  }, [activeIndex]);

  const isActive = index === activeIndex;

  console.log(isActive);

  return (
    <div className={`progress-bar-container ${isActive ? "active" : ""}`}>
      <div
        className={`${isActive ? "progress-bar" : ""}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
