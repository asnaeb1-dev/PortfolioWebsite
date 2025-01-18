import { useState, useEffect } from "react";

const LEFT_DIRECTION = "left";
const RIGHT_DIRECTION = "right";

const useSwipe = (containerRef) => {
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [startTime, setStartTime] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState("");

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handlePointerDown = (e) => {
      const touch = e.touches[0];
      setStartPos({ x: touch.clientX, y: touch.clientY });
      setStartTime(Date.now());
    };

    const handlePointerUp = (e) => {
      const touch = e.changedTouches[0];
      const endPos = { x: touch.clientX, y: touch.clientY };
      const elapsedTime = Date.now() - startTime;

      const deltaX = endPos.x - startPos.x;
      const deltaY = endPos.y - startPos.y;

      const threshold = 30; // Adjusted minimum distance for swipe
      const restraint = 150; // Adjusted maximum perpendicular distance
      const allowedTime = 500; // Maximum time for swipe

      if (elapsedTime <= allowedTime) {
        if (Math.abs(deltaX) >= threshold && Math.abs(deltaY) <= restraint) {
          const direction = deltaX > 0 ? RIGHT_DIRECTION : LEFT_DIRECTION;
          setSwipeDirection(direction);
        }
      }
    };

    element.addEventListener("touchstart", handlePointerDown, {
      passive: true,
    });
    element.addEventListener("touchend", handlePointerUp, { passive: true });

    return () => {
      element.removeEventListener("touchstart", handlePointerDown);
      element.removeEventListener("touchend", handlePointerUp);
    };
  }, [startPos, startTime, containerRef]);

  useEffect(() => {
    if (!swipeDirection) return;
    setTimeout(() => {
      setSwipeDirection("");
    }, 10);
  }, [swipeDirection]);

  return swipeDirection;
};

export { LEFT_DIRECTION, RIGHT_DIRECTION };
export default useSwipe;
