import { useEffect, useState } from "react";
import "./NameComponent.css";

const NameComponent = ({ nameText = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === nameText.length - 1 ? 0 : prevIndex + 1
      );
    }, 800); // Adjust timing as desired

    return () => clearInterval(interval);
  }, [nameText.length]);

  return (
    <div className="flex flex-row">
      {[...nameText].map((nameChar, index) => (
        <span
          key={index}
          className={`transition-all duration-500 ease-in-out ${
            index === currentIndex
              ? "-translate-y-2.5 scale-110 text-indigo-500"
              : "dark:text-white"
          }`}
        >
          {nameChar}
        </span>
      ))}
    </div>
  );
};

export default NameComponent;
