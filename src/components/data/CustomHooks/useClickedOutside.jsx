import { useEffect, useState } from "react";

const useClickedOutside = (containerRef, startCheck) => {
  const [isClickedOutside, setClickedOutside] = useState(false);
  useEffect(() => {
    if (!containerRef.current || !startCheck) return;
    setClickedOutside(false);
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setClickedOutside(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [startCheck, containerRef]);

  return isClickedOutside;
};

export default useClickedOutside;
